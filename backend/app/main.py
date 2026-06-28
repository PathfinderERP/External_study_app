import os
import httpx
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from arq import create_pool
from arq.connections import RedisSettings
from datetime import timedelta
import urllib.parse

from app.database import get_db, Base, engine
from app.models import User, UserRole
from app.auth import (
    get_password_hash,
    verify_password,
    create_access_token,
    create_refresh_token,
    get_current_user,
    RoleChecker
)

app = FastAPI(title="Student Portal API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Background job redis queue pool
arq_pool = None

@app.on_event("startup")
async def startup_event():
    global arq_pool
    # Parse redis_url to arq RedisSettings
    redis_url = os.getenv("REDIS_URL", "redis://localhost:6379/0")
    url = urllib.parse.urlparse(redis_url)
    redis_settings = RedisSettings(
        host=url.hostname or "localhost",
        port=url.port or 6379,
        database=int(url.path.lstrip("/")) if url.path else 0
    )
    try:
        arq_pool = await create_pool(redis_settings)
    except Exception as e:
        print(f"Failed to connect to Redis for ARQ tasks: {e}")

@app.on_event("shutdown")
async def shutdown_event():
    if arq_pool:
        await arq_pool.close()

# Base route
@app.get("/")
def read_root():
    return {"message": "Welcome to Student Portal API"}

from pydantic import BaseModel, EmailStr

class UserRegister(BaseModel):
    email: EmailStr
    password: str
    full_name: str
    role: UserRole = UserRole.STUDENT

# Auth Endpoint: Register
@app.post("/auth/register")
async def register(
    user_in: UserRegister,
    db: AsyncSession = Depends(get_db)
):
    # Check if user already exists
    result = await db.execute(select(User).where(User.email == user_in.email))
    if result.scalars().first():
        raise HTTPException(status_code=400, detail="Email already registered")
        
    hashed_password = get_password_hash(user_in.password)
    new_user = User(
        email=user_in.email,
        hashed_password=hashed_password,
        full_name=user_in.full_name,
        role=user_in.role
    )
    db.add(new_user)
    await db.commit()
    await db.refresh(new_user)
    return {"id": new_user.id, "email": new_user.email, "role": new_user.role}

# Auth Endpoint: Login
@app.post("/auth/token")
async def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: AsyncSession = Depends(get_db)
):
    result = await db.execute(select(User).where(User.email == form_data.username))
    user = result.scalars().first()
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
        
    access_token = create_access_token(data={"sub": user.email, "role": user.role})
    refresh_token = create_refresh_token(data={"sub": user.email, "role": user.role})
    return {
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer",
        "role": user.role
    }

class GoogleLoginRequest(BaseModel):
    id_token: str

@app.post("/auth/google")
async def google_login(
    req: GoogleLoginRequest,
    db: AsyncSession = Depends(get_db)
):
    # Verify token with Google API
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"https://oauth2.googleapis.com/tokeninfo?id_token={req.id_token}"
        )
        if response.status_code != 200:
            raise HTTPException(status_code=400, detail="Invalid Google token")
        
        google_data = response.json()
        
    email = google_data.get("email")
    full_name = google_data.get("name", "Google User")
    
    if not email:
        raise HTTPException(status_code=400, detail="Google token does not contain email")
        
    # Check if user exists, else create them with STUDENT role
    result = await db.execute(select(User).where(User.email == email))
    user = result.scalars().first()
    
    if not user:
        # Generate a secure dummy password for database constraint since they use Google SSO
        random_pass = get_password_hash(os.urandom(24).hex())
        user = User(
            email=email,
            hashed_password=random_pass,
            full_name=full_name,
            role=UserRole.STUDENT,
            is_active=True
        )
        db.add(user)
        await db.commit()
        await db.refresh(user)
        
    # Generate JWT token
    access_token = create_access_token(data={"sub": user.email, "role": user.role})
    return {"access_token": access_token, "token_type": "bearer", "role": user.role}

# Profile Endpoint (Requires authentication)
@app.get("/users/me")
async def read_users_me(current_user: User = Depends(get_current_user)):
    return {
        "id": current_user.id,
        "email": current_user.email,
        "full_name": current_user.full_name,
        "role": current_user.role
    }

# Admin-Only Endpoint
@app.get("/admin/dashboard")
async def get_admin_dashboard(
    current_user: User = Depends(RoleChecker([UserRole.SUPER_ADMIN, UserRole.SCHOOL_ADMIN]))
):
    return {"message": f"Welcome Admin {current_user.full_name}. Here is your dashboard."}

# Teacher-Only Endpoint
@app.get("/teacher/dashboard")
async def get_teacher_dashboard(
    current_user: User = Depends(RoleChecker([UserRole.TEACHER, UserRole.SUPER_ADMIN, UserRole.SCHOOL_ADMIN]))
):
    return {"message": f"Welcome Teacher {current_user.full_name}. Here is your dashboard."}

# Student-Only Endpoint
@app.get("/student/dashboard")
async def get_student_dashboard(
    current_user: User = Depends(RoleChecker([UserRole.STUDENT, UserRole.TEACHER, UserRole.SUPER_ADMIN, UserRole.SCHOOL_ADMIN]))
):
    return {"message": f"Welcome Student {current_user.full_name}. Here is your dashboard."}


# Task dispatch endpoint
@app.post("/tasks/send-email")
async def queue_email(email_to: str, subject: str, body: str):
    if not arq_pool:
        raise HTTPException(status_code=500, detail="Background worker pool not connected")
    job = await arq_pool.enqueue_job("send_email_task", email_to, subject, body)
    return {"job_id": job.job_id, "status": "queued"}

@app.post("/tasks/generate-report")
async def queue_report_card(student_id: int):
    if not arq_pool:
        raise HTTPException(status_code=500, detail="Background worker pool not connected")
    job = await arq_pool.enqueue_job("generate_report_card_task", student_id)
    return {"job_id": job.job_id, "status": "queued"}
