from sqlalchemy import String, Boolean, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base_model import BaseModel


class Notification(BaseModel):
    __tablename__ = "notifications"

    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        nullable=False,
    )

    title: Mapped[str] = mapped_column(
        String(150),
        nullable=False,
    )

    message: Mapped[str] = mapped_column(
        String(500),
        nullable=False,
    )

    is_read: Mapped[bool] = mapped_column(
        Boolean,
        default=False,
        nullable=False,
    )

    user = relationship(
        "User",
        back_populates="notifications",
    )