import os
import httpx
from typing import Optional
from contextlib import asynccontextmanager
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

# Background job redis queue pool
arq_pool = None

@asynccontextmanager
async def lifespan(app: FastAPI):
    global arq_pool
    # Parse redis_url to arq RedisSettings
    redis_url = os.getenv("REDIS_URL", "redis://localhost:6379/0")
    url = urllib.parse.urlparse(redis_url)
    redis_settings = RedisSettings(
        host=url.hostname or "localhost",
        port=url.port or 6379,
        password=url.password,
        database=int(url.path.lstrip("/")) if url.path else 0,
        ssl=True if url.scheme == "rediss" else False
    )
    try:
        arq_pool = await create_pool(redis_settings)
    except Exception as e:
        print(f"Failed to connect to Redis for ARQ tasks: {e}")
    yield
    if arq_pool:
        await arq_pool.close()

app = FastAPI(title="Student Portal API", version="1.0.0", lifespan=lifespan)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Base route
@app.get("/")
def read_root():
    return {"message": "Welcome to Student Portal API"}

@app.get("/config")
def get_config():
    return {
        "google_client_id": os.getenv("NEXT_PUBLIC_GOOGLE_CLIENT_ID") or os.getenv("GOOGLE_CLIENT_ID")
    }

from pydantic import BaseModel, EmailStr

class SendOTPRequest(BaseModel):
    email: EmailStr
    phone_number: str

OTP_STORE = {}

@app.post("/auth/send-otp")
async def send_otp(req: SendOTPRequest):
    import random
    # Generate 6-digit OTP code
    otp = f"{random.randint(100000, 999999)}"
    OTP_STORE[req.email] = otp
    
    # Print clearly to terminal logs so developer/user can see it instantly
    print(f"\n==========================================")
    print(f" OTP VERIFICATION FOR {req.email}: {otp} ")
    print(f"==========================================\n")
    
    # Queue simulated background worker email/SMS task
    if arq_pool:
        await arq_pool.enqueue_job(
            "send_email_task",
            req.email,
            "Pathfinder Portal Verification Code",
            f"Your verification code is: {otp}"
        )
    return {"message": "Verification code sent successfully to your email and phone"}

class UserRegister(BaseModel):
    email: EmailStr
    full_name: str
    phone_number: str
    otp_code: str

# Auth Endpoint: Register
@app.post("/auth/register")
async def register(
    user_in: UserRegister,
    db: AsyncSession = Depends(get_db)
):
    # Verify OTP code (accept developer bypass 123456 or correct OTP)
    saved_otp = OTP_STORE.get(user_in.email)
    if user_in.otp_code != "123456" and user_in.otp_code != saved_otp:
        raise HTTPException(status_code=400, detail="Invalid verification code")
        
    # Check if user already exists
    result = await db.execute(select(User).where(User.email == user_in.email))
    if result.scalars().first():
        raise HTTPException(status_code=400, detail="Email already registered")
        
    # Generate random password (e.g. StudentD82A!)
    import secrets
    generated_pass = f"Student{secrets.token_hex(3).upper()}!"
    hashed_password = get_password_hash(generated_pass)
    
    new_user = User(
        email=user_in.email,
        hashed_password=hashed_password,
        full_name=user_in.full_name,
        phone_number=user_in.phone_number,
        role=UserRole.STUDENT
    )
    db.add(new_user)
    await db.commit()
    await db.refresh(new_user)
    
    # Send credentials to student's email
    if arq_pool:
        await arq_pool.enqueue_job(
            "send_email_task",
            new_user.email,
            "Your Pathfinder Student Portal Credentials",
            f"Welcome to Pathfinder, {new_user.full_name}!\n\nYour registration has been successfully verified.\n\nHere are your login credentials:\nUsername: {new_user.email}\nPassword: {generated_pass}\n\nPlease keep these credentials safe."
        )
        
    # Clean up OTP store
    if user_in.email in OTP_STORE:
        del OTP_STORE[user_in.email]
        
    return {
        "id": new_user.id, 
        "email": new_user.email, 
        "role": new_user.role, 
        "phone_number": new_user.phone_number,
        "generated_password": generated_pass
    }

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
    # Determine if it's an ID token (JWT format starting with eyJ) or standard access token
    token_param = "id_token" if req.id_token.startswith("eyJ") else "access_token"
    
    # Verify token with Google API
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"https://oauth2.googleapis.com/tokeninfo?{token_param}={req.id_token}"
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
        "phone_number": current_user.phone_number,
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
