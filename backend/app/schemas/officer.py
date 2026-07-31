from pydantic import BaseModel, EmailStr


class OfficerCreate(BaseModel):
    full_name: str
    email: EmailStr
    password: str
    department_id: int


class OfficerResponse(BaseModel):
    id: int
    full_name: str
    email: EmailStr
    department_id: int

    class Config:
        from_attributes = True

class OfficerDashboardResponse(BaseModel):
    total: int
    assigned: int
    accepted: int
    in_progress: int
    resolved_today: int

class OfficerDashboardResponse(BaseModel):
    total_assigned: int
    pending: int
    accepted: int
    in_progress: int
    resolved: int

    class Config:
        from_attributes = True