from datetime import datetime
from pydantic import BaseModel


class RecentCitizenComplaintResponse(BaseModel):
    id: int
    title: str
    status: str
    priority: str
    created_at: datetime

    class Config:
        from_attributes = True


class CitizenDashboardResponse(BaseModel):
    total_complaints: int
    pending_complaints: int
    assigned_complaints: int
    accepted_complaints: int
    in_progress_complaints: int
    resolved_complaints: int
    rejected_complaints: int
    recent_complaints: list[RecentCitizenComplaintResponse]

    class Config:
        from_attributes = True