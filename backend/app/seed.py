import asyncio
from sqlalchemy.future import select
from app.database import SessionLocal
from app.models import User, UserRole
from app.auth import get_password_hash

import os

async def seed_users():
    print("Seeding default user credentials...")
    async with SessionLocal() as db:
        # Default credentials to insert
        users_to_seed = [
            {
                "email": os.getenv("DEMO_STUDENT_EMAIL", "student@pathfinder.edu"),
                "password": os.getenv("DEMO_STUDENT_PASSWORD", "StudentSecurePass123!"),
                "full_name": "John Doe",
                "role": UserRole.STUDENT
            },
            {
                "email": os.getenv("DEMO_TEACHER_EMAIL", "turing.prof@pathfinder.edu"),
                "password": os.getenv("DEMO_TEACHER_PASSWORD", "TeacherSecurePass123!"),
                "full_name": "Prof. Alan Turing",
                "role": UserRole.TEACHER
            },
            {
                "email": os.getenv("DEMO_ADMIN_EMAIL", "lovelace.admin@pathfinder.edu"),
                "password": os.getenv("DEMO_ADMIN_PASSWORD", "AdminSecurePass123!"),
                "full_name": "Ada Lovelace",
                "role": UserRole.SCHOOL_ADMIN
            }
        ]

        for user_data in users_to_seed:
            # Check if user already exists
            result = await db.execute(select(User).where(User.email == user_data["email"]))
            existing_user = result.scalars().first()
            
            if not existing_user:
                print(f"Creating user: {user_data['email']} with role {user_data['role']}")
                hashed_pw = get_password_hash(user_data["password"])
                new_user = User(
                    email=user_data["email"],
                    hashed_password=hashed_pw,
                    full_name=user_data["full_name"],
                    role=user_data["role"],
                    is_active=True
                )
                db.add(new_user)
            else:
                print(f"Updating existing user: {user_data['email']}")
                hashed_pw = get_password_hash(user_data["password"])
                existing_user.hashed_password = hashed_pw
                existing_user.full_name = user_data["full_name"]
                existing_user.role = user_data["role"]
                existing_user.is_active = True
                
        await db.commit()
    print("Database seeding completed.")

if __name__ == "__main__":
    asyncio.run(seed_users())
