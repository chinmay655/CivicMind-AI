from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.exc import SQLAlchemyError
from app.models.user import User
from sqlalchemy.orm import selectinload

class UserRepository:

    def __init__(self, db: AsyncSession):
        self.db = db

    async def get_by_email(self, email: str) -> User | None:
        result = await self.db.execute(
            select(User)
            .options(selectinload(User.role))
            .where(User.email == email)
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

    async def get_by_id(self, user_id: int) -> User | None:
        result = await self.db.execute(
            select(User)
                .options(selectinload(User.role))
                .where(User.id == user_id)
        )
        return result.scalar_one_or_none()

    async def is_officer(self, user_id: int) -> bool:
        user = await self.get_by_id(user_id)

        if user is None:
            return False

        return user.role.name == "Officer"
    '''async def create(self, user: User) -> User:
        self.db.add(user)
        await self.db.commit()
        await self.db.refresh(user)
        return user'''