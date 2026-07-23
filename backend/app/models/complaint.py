from enum import Enum

from sqlalchemy import DateTime, Float, ForeignKey, String, Text
from sqlalchemy import Enum as SqlEnum
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base_model import BaseModel


class ComplaintStatus(str, Enum):
    PENDING = "Pending"
    ASSIGNED = "Assigned"
    ACCEPTED = "Accepted"
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

    title: Mapped[str] = mapped_column(
        String(200),
        nullable=False,
    )

    description: Mapped[str] = mapped_column(
        Text,
        nullable=False,
    )

    status: Mapped[ComplaintStatus] = mapped_column(
        SqlEnum(ComplaintStatus),
        default=ComplaintStatus.PENDING,
        nullable=False,
    )

    priority: Mapped[ComplaintPriority] = mapped_column(
        SqlEnum(ComplaintPriority),
        default=ComplaintPriority.MEDIUM,
        nullable=False,
    )

    latitude: Mapped[float] = mapped_column(
        Float,
        nullable=False,
    )

    longitude: Mapped[float] = mapped_column(
        Float,
        nullable=False,
    )

    address: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
    )

    citizen_id: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        nullable=False,
    )

    assigned_department_id: Mapped[int | None] = mapped_column(
        ForeignKey("departments.id"),
        nullable=True,
    )

    assigned_officer_id: Mapped[int | None] = mapped_column(
        ForeignKey("users.id"),
        nullable=True,
    )

    assigned_at: Mapped[DateTime | None] = mapped_column(
        DateTime,
        nullable=True,
    )

    started_at: Mapped[DateTime | None] = mapped_column(
        DateTime,
        nullable=True,
    )

    resolved_at: Mapped[DateTime | None] = mapped_column(
        DateTime,
        nullable=True,
    )

    ai_detected_issue: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    ai_confidence: Mapped[float | None] = mapped_column(
        Float,
        nullable=True,
    )

    ai_recommended_department: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    ai_estimated_cost: Mapped[int | None] = mapped_column(
        nullable=True,
    )

    ai_analysis_status: Mapped[str | None] = mapped_column(
        String(30),
        default="Pending",
)

    citizen = relationship(
        "User",
        foreign_keys=[citizen_id],
        back_populates="complaints",
    )

    department = relationship(
        "Department",
        foreign_keys=[assigned_department_id],
    )

    assigned_officer = relationship(
        "User",
        foreign_keys=[assigned_officer_id],
    )

    images = relationship(
        "ComplaintImage",
        back_populates="complaint",
        cascade="all, delete-orphan",
    )

    history = relationship(
        "ComplaintHistory",
        back_populates="complaint",
        cascade="all, delete-orphan",
    )