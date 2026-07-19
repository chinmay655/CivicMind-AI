from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.complaint_image import ComplaintImage


class ComplaintImageRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def create_image(self, complaint_id: int, image_url: str):
        image = ComplaintImage(
            complaint_id=complaint_id,
            image_url=image_url,
        )

        self.db.add(image)
        await self.db.commit()
        await self.db.refresh(image)

        return image

    async def get_images_by_complaint(self, complaint_id: int):
        result = await self.db.execute(
            select(ComplaintImage).where(
                ComplaintImage.complaint_id == complaint_id
            )
        )
        return result.scalars().all()
    
    async def get_by_id(self, image_id: int):
        return await self.db.get(ComplaintImage, image_id)


    async def delete(self, image: ComplaintImage):
        await self.db.delete(image)
        await self.db.commit()