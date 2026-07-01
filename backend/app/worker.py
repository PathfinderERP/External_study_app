import os
import asyncio
from arq.connections import RedisSettings

# Example tasks
async def send_email_task(ctx, email_to: str, subject: str, body: str):
    # Simulated email sending
    print(f"Sending email to {email_to} with subject '{subject}'")
    await asyncio.sleep(2)
    print(f"Email sent successfully to {email_to}")
    return True

async def generate_report_card_task(ctx, student_id: int):
    # Simulated PDF report card generation
    print(f"Starting report card generation for student {student_id}")
    await asyncio.sleep(5)
    print(f"Report card generated for student {student_id}")
    return {"status": "success", "file_path": f"/reports/student_{student_id}.pdf"}

async def process_ocr_task(ctx, file_path: str):
    # Simulated OCR and AI processing
    print(f"Running OCR process on {file_path}")
    await asyncio.sleep(3)
    print(f"OCR processing completed for {file_path}")
    return {"detected_text": "Sample text extracted from image"}

async def startup(ctx):
    print("Worker starting up...")

async def shutdown(ctx):
    print("Worker shutting down...")

class WorkerSettings:
    functions = [send_email_task, generate_report_card_task, process_ocr_task]
    on_startup = startup
    on_shutdown = shutdown
    
    # Parse redis_url to arq RedisSettings
    # E.g. redis://localhost:6379/0 -> host='localhost', port=6379, database=0
    import urllib.parse
    redis_url = os.getenv("REDIS_URL", "redis://localhost:6379/0")
    url = urllib.parse.urlparse(redis_url)
    redis_settings = RedisSettings(
        host=url.hostname or "localhost",
        port=url.port or 6379,
        password=url.password,
        database=int(url.path.lstrip("/")) if url.path else 0,
        ssl=True if url.scheme == "rediss" else False
    )
