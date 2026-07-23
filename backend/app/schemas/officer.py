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