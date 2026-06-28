from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql+asyncpg://postgres:password@localhost:5432/student_portal"
    REDIS_URL: str = "redis://localhost:6379/0"
    
    # JWT Config
    JWT_SECRET: str = "super_secret_key_change_me_in_production"
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7
    
    # Cloudflare R2 Config
    R2_ACCOUNT_ID: str = ""
    R2_ACCESS_KEY_ID: str = ""
    R2_SECRET_ACCESS_KEY: str = ""
    R2_BUCKET_NAME: str = "student-portal-assets"
    
    # SMTP BigRock Email Config
    SMTP_HOST: str = "mail.bigrock.com"
    SMTP_PORT: int = 465
    SMTP_USERNAME: str = "info@yourdomain.com"
    SMTP_PASSWORD: str = "your_smtp_password"
    SMTP_FROM: str = "info@yourdomain.com"

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

settings = Settings()
