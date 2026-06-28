import os
import boto3
from botocore.config import Config

class R2Storage:
    def __init__(self):
        # R2 endpoint format: https://<accountid>.r2.cloudflarestorage.com
        r2_account_id = os.getenv("R2_ACCOUNT_ID", "")
        endpoint_url = f"https://{r2_account_id}.r2.cloudflarestorage.com"
        
        self.client = boto3.client(
            service_name="s3",
            endpoint_url=endpoint_url,
            aws_access_key_id=os.getenv("R2_ACCESS_KEY_ID", ""),
            aws_secret_access_key=os.getenv("R2_SECRET_ACCESS_KEY", ""),
            config=Config(signature_version="s3v4")
        )
        self.bucket = os.getenv("R2_BUCKET_NAME", "student-portal-assets")

    def upload_file(self, file_body, object_name: str, content_type: str = "application/octet-stream"):
        try:
            self.client.put_object(
                Bucket=self.bucket,
                Key=object_name,
                Body=file_body,
                ContentType=content_type
            )
            return f"https://pub-domain.r2.dev/{object_name}" # Replace with actual custom domain/R2 pub domain
        except Exception as e:
            print(f"R2 Upload Error: {e}")
            return None

    def get_download_url(self, object_name: str, expires_in: int = 3600) -> str:
        try:
            url = self.client.generate_presigned_url(
                "get_object",
                Params={"Bucket": self.bucket, "Key": object_name},
                ExpiresIn=expires_in
            )
            return url
        except Exception as e:
            print(f"R2 Presign Error: {e}")
            return ""
