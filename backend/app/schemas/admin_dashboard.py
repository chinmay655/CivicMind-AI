from pydantic import BaseModel


class AdminDashboardResponse(BaseModel):
    total_complaints: int
    pending: int
    assigned: int
    accepted: int
    in_progress: int
    resolved: int
    rejected: int

    low: int
    medium: int
    high: int
    critical: int