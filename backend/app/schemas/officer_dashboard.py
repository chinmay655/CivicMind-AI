from pydantic import BaseModel

class OfficerDashboardResponse(BaseModel):
    total_assigned: int
    accepted: int
    in_progress: int
    resolved: int
    pending_today: int