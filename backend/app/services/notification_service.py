from fastapi import HTTPException, status

from app.models.notification import Notification
from app.repositories.notification_repository import (
    NotificationRepository,
)


class NotificationService:

    def __init__(self, repository: NotificationRepository):
        self.repository = repository

    async def create_notification(
        self,
        user_id: int,
        title: str,
        message: str,
    ):
        notification = Notification(
            user_id=user_id,
            title=title,
            message=message,
        )

        return await self.repository.create(notification)

    async def get_notifications(self, user_id: int):
        return await self.repository.get_user_notifications(user_id)

    async def get_unread_notifications(self, user_id: int):
        return await self.repository.get_unread_notifications(user_id)

    async def mark_as_read(self, notification_id: int):
        notification = await self.repository.get_by_id(notification_id)

        if notification is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Notification not found",
            )

        notification.is_read = True

        await self.repository.save()

        return {
            "message": "Notification marked as read."
        }

    async def delete_notification(self, notification_id: int):
        notification = await self.repository.get_by_id(notification_id)

        if notification is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Notification not found",
            )

        await self.repository.delete(notification)

        return {
            "message": "Notification deleted successfully."
        }