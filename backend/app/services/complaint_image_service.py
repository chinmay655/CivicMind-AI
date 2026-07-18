from app.repositories.complaint_image_repository import ComplaintImageRepository


class ComplaintImageService:
    def __init__(self, repository: ComplaintImageRepository):
        self.repository = repository

    async def upload_image(self, complaint_id: int, image_url: str):
        return await self.repository.create_image(
            complaint_id,
            image_url,
        )

    async def get_images(self, complaint_id: int):
        return await self.repository.get_images(
            complaint_id
        )