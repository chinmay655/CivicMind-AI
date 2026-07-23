from fastapi import Depends, HTTPException, status

from app.api.dependencies import get_current_user
from app.core.constants import Roles
from app.models.user import User


async def get_current_admin(
    current_user: User = Depends(get_current_user),
) -> User:

    if current_user.role.name != Roles.ADMIN:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Access denied. Admin privileges required.",
        )

    return current_user


async def get_current_officer(
    current_user: User = Depends(get_current_user),
) -> User:

    if current_user.role.name != Roles.OFFICER:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Access denied. Officer privileges required.",
        )

    return current_user


async def get_current_citizen(
    current_user: User = Depends(get_current_user),
) -> User:

    if current_user.role.name != Roles.CITIZEN:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Access denied. Citizen privileges required.",
        )

    return current_user