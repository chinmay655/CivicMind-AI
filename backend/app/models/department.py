from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base_model import BaseModel


class Department(BaseModel):
    __tablename__ = "departments"

    name: Mapped[str] = mapped_column(
        String(100),
        unique=True,
    )

    description: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True,
    )

    users = relationship(
        "User",
        back_populates="department",
    )