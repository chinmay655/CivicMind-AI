from app.repositories.complaint_image_repository import ComplaintImageRepository
import os
from fastapi import HTTPException

class ComplaintImageService:
    def __init__(self, repository: ComplaintImageRepository):
        self.repository = repository

    async def upload_image(self, complaint_id: int, image_url: str):
        return await self.repository.create_image(
            complaint_id,
            image_url,
        )

    async def get_images(self, complaint_id: int):
        return await self.repository.get_images_by_complaint(
            complaint_id
        )
    
    async def delete_image(self, image_id: int):
        image = await self.repository.get_by_id(image_id)

        if not image:
            raise HTTPException(status_code=404, detail="Image not found")

        if os.path.exists(image.image_url):
            os.remove(image.image_url)

        await self.repository.delete(image)

        return {"message": "Image deleted successfully"}