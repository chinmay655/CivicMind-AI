from datetime import datetime
from enum import Enum
from pydantic import BaseModel, ConfigDict


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


class ComplaintCreate(BaseModel):
    title: str
    description: str
    priority: ComplaintPriority = ComplaintPriority.MEDIUM
    latitude: float
    longitude: float
    address: str


class ComplaintResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    title: str
    description: str
    status: ComplaintStatus
    priority: ComplaintPriority
    latitude: float
    longitude: float
    address: str
    citizen_id: int
    created_at: datetime
    updated_at: datetime


class ComplaintUpdate(BaseModel):
    title: str | None = None
    description: str | None = None
    status: ComplaintStatus | None = None
    priority: ComplaintPriority | None = None
    address: str | None = None