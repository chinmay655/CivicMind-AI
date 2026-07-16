from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.exc import SQLAlchemyError
from app.models.user import User


class UserRepository:

    def __init__(self, db: AsyncSession):
        self.db = db

    async def get_by_email(self, email: str) -> User | None:
        result = await self.db.execute(
            select(User).where(User.email == email)
        )
        return result.scalar_one_or_none()

    async def create(self, user: User) -> User:
        try:
            self.db.add(user)
            await self.db.commit()
            await self.db.refresh(user)
            return user

        except SQLAlchemyError as e:
            await self.db.rollback()
            print("=" * 60)
            print("DATABASE ERROR")
            print(type(e))
            print(e)
            print("=" * 60)
            raise
    '''async def create(self, user: User) -> User:
        self.db.add(user)
        await self.db.commit()
        await self.db.refresh(user)
        return user'''