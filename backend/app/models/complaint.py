from enum import Enum

from sqlalchemy import Enum as SqlEnum
from sqlalchemy import Float, ForeignKey, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base_model import BaseModel


class ComplaintStatus(str, Enum):
    PENDING = "Pending"
    IN_PROGRESS = "In Progress"
    RESOLVED = "Resolved"
    REJECTED = "Rejected"


class ComplaintPriority(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"


class Complaint(BaseModel):
    __tablename__ = "complaints"

    title: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)

    status: Mapped[ComplaintStatus] = mapped_column(
        SqlEnum(ComplaintStatus),
        default=ComplaintStatus.PENDING,
    )

    priority: Mapped[ComplaintPriority] = mapped_column(
        SqlEnum(ComplaintPriority),
        default=ComplaintPriority.MEDIUM,
    )

    latitude: Mapped[float] = mapped_column(Float, nullable=False)
    longitude: Mapped[float] = mapped_column(Float, nullable=False)

    address: Mapped[str] = mapped_column(String(255), nullable=False)

    citizen_id: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        nullable=False,
    )

    citizen = relationship(
        "User",
        back_populates="complaints",
    )

    images = relationship(
        "ComplaintImage",
        back_populates="complaint",
        cascade="all, delete-orphan",
    )