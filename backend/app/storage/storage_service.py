import os
import uuid

from fastapi import UploadFile


class StorageService:

    UPLOAD_DIR = "uploads"

    def __init__(self):
        os.makedirs(self.UPLOAD_DIR, exist_ok=True)

    async def save_image(self, file: UploadFile) -> str:
        extension = file.filename.split(".")[-1]

        filename = f"{uuid.uuid4()}.{extension}"

        file_path = os.path.join(self.UPLOAD_DIR, filename)

        with open(file_path, "wb") as buffer:
            buffer.write(await file.read())

        return file_path