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

    async def get_images(self, complaint_id: int):
        result = await self.db.execute(
            select(ComplaintImage).where(
                ComplaintImage.complaint_id == complaint_id
            )
        )

        return result.scalars().all()