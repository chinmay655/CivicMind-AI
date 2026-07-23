from pydantic import BaseModel


class DashboardSummaryResponse(BaseModel):
    total_complaints: int
    pending: int
    assigned: int
    accepted: int
    in_progress: int
    resolved: int
    rejected: int


class StatusAnalyticsResponse(BaseModel):
    status: str
    count: int


class PriorityAnalyticsResponse(BaseModel):
    priority: str
    count: int


class IssueAnalyticsResponse(BaseModel):
    issue: str
    count: int


class RepairCostResponse(BaseModel):
    total_estimated_cost: int