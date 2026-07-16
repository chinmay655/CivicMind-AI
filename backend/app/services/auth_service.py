from app.core.security import (
    create_access_token,
    hash_password,
    verify_password,
)
from app.models.user import User
from app.repositories.user_repository import UserRepository
from app.schemas.auth import UserRegister


class AuthService:

    def __init__(self, repository: UserRepository):
        self.repository = repository

    async def register(self, user_data: UserRegister):

        existing_user = await self.repository.get_by_email(
            user_data.email
        )

        if existing_user:
            raise ValueError("Email already exists")

        user = User(
            full_name=user_data.full_name,
            email=user_data.email,
            phone=user_data.phone,
            password_hash=hash_password(user_data.password),
            role_id=1,
            department_id=None,
        )

        return await self.repository.create(user)

    async def login(self, email: str, password: str):

        user = await self.repository.get_by_email(email)

        if user is None:
            raise ValueError("Invalid email or password")

        if not verify_password(
            password,
            user.password_hash,
        ):
            raise ValueError("Invalid email or password")

        token = create_access_token(
            {
                "sub": user.email,
                "user_id": user.id,
            }
        )

        return {
            "access_token": token,
            "token_type": "bearer",
            "user": user,
        }