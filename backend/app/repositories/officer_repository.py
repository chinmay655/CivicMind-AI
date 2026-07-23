from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.user import User


class OfficerRepository:

    def __init__(self, db: AsyncSession):
        self.db = db

    async def get_all(self):
        result = await self.db.execute(select(User))
        return result.scalars().all()

    async def get_by_id(self, officer_id: int):
        result = await self.db.execute(
            select(User).where(User.id == officer_id)
        )
        return result.scalar_one_or_none()

    async def get_by_email(self, email: str):
        result = await self.db.execute(
            select(User).where(User.email == email)
        )
        return result.scalar_one_or_none()

    async def create(self, officer: User):
        self.db.add(officer)
        await self.db.commit()
        await self.db.refresh(officer)
        return officer