from pydantic import BaseModel
from datetime import datetime
from pydantic import BaseModel

class DashboardStatsResponse(BaseModel):
    total_complaints: int
    pending: int
    in_progress: int
    resolved: int
    rejected: int

    low: int
    medium: int
    high: int
    critical: int

class RecentComplaintResponse(BaseModel):
    id: int
    title: str
    status: str
    priority: str
    address: str
    created_at: datetime

    model_config = {
        "from_attributes": True
    }

class MonthlyComplaintResponse(BaseModel):
    month: str
    count: int

class HotspotResponse(BaseModel):
    address: str
    complaints: int

class PriorityDistributionResponse(BaseModel):
    priority: str
    count: int

class StatusDistributionResponse(BaseModel):
    status: str
    count: int

class ComplaintMapResponse(BaseModel):
    id: int
    title: str
    latitude: float
    longitude: float
    address: str
    status: str
    priority: str

class DashboardPerformanceResponse(BaseModel):
    total_complaints: int
    resolved_complaints: int
    pending_complaints: int
    resolution_rate: float