from pydantic import BaseModel


class AIAnalysisResponse(BaseModel):
    issue_type: str
    confidence: float
    severity: str
    estimated_cost: float
    recommended_department: str