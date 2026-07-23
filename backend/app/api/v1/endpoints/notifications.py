from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.api.dependencies import get_current_user
from app.models.user import User
from app.repositories.notification_repository import NotificationRepository
from app.schemas.notification import NotificationResponse
from app.services.notification_service import NotificationService

router = APIRouter(
    prefix="/notifications",
    tags=["Notifications"],
)


@router.get(
    "/",
    response_model=List[NotificationResponse],
)
async def get_notifications(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    repository = NotificationRepository(db)
    service = NotificationService(repository)

    return await service.get_notifications(current_user.id)


@router.get(
    "/unread",
    response_model=List[NotificationResponse],
)
async def get_unread_notifications(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    repository = NotificationRepository(db)
    service = NotificationService(repository)

    return await service.get_unread_notifications(current_user.id)


@router.patch("/{notification_id}/read")
async def mark_notification_read(
    notification_id: int,
    db: AsyncSession = Depends(get_db),
):
    repository = NotificationRepository(db)
    service = NotificationService(repository)

    return await service.mark_as_read(notification_id)


@router.delete("/{notification_id}")
async def delete_notification(
    notification_id: int,
    db: AsyncSession = Depends(get_db),
):
    repository = NotificationRepository(db)
    service = NotificationService(repository)

    return await service.delete_notification(notification_id)