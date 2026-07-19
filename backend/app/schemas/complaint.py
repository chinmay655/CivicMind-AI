from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict

from app.models.complaint import ComplaintPriority, ComplaintStatus


class ComplaintCreate(BaseModel):
    title: str
    description: str
    latitude: float
    longitude: float
    address: str
    priority: ComplaintPriority = ComplaintPriority.MEDIUM


class ComplaintUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    address: Optional[str] = None
    status: Optional[ComplaintStatus] = None
    priority: Optional[ComplaintPriority] = None


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