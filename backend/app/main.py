from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.api.v1.endpoints.dashboard import router as dashboard_router
from app.api.v1.endpoints.auth import router as auth_router
from app.api.v1.endpoints.complaints import router as complaint_router
from app.api.v1.endpoints.complaint_images import router as complaint_image_router
from app.api.v1.endpoints.assignment import router as assignment_router
from app.api.v1.endpoints.departments import router as department_router
from app.api.v1.endpoints.officers import router as officer_router
from app.api.v1.endpoints.complaint_history import router as complaint_history_router
from app.api.v1.endpoints.citizens import router as citizen_router
from app.api.v1.endpoints.officer_workflow import (
    router as officer_workflow_router,
)
from app.api.v1.endpoints.notifications import (
    router as notification_router,
)
from app.api.v1.endpoints.analytics import (
    router as analytics_router,
)
from app.api.v1.endpoints.complaint_reports import (
    router as complaint_report_router,
)
app = FastAPI(
    title="CivicMind AI",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Serve uploaded images
app.mount(
    "/uploads",
    StaticFiles(directory="uploads"),
    name="uploads",
)

@app.get("/")
async def root():
    return {"message": "Welcome to CivicMind AI"}

API_PREFIX = "/api/v1"

app.include_router(auth_router, prefix=API_PREFIX)
app.include_router(complaint_router, prefix=API_PREFIX)
app.include_router(complaint_image_router, prefix=API_PREFIX)
app.include_router(dashboard_router, prefix=API_PREFIX)
app.include_router(assignment_router, prefix=API_PREFIX)
app.include_router(department_router, prefix=API_PREFIX)
app.include_router(officer_router, prefix=API_PREFIX)
app.include_router(officer_workflow_router, prefix=API_PREFIX)
app.include_router(complaint_history_router, prefix=API_PREFIX)
app.include_router(notification_router, prefix=API_PREFIX)
app.include_router(analytics_router, prefix=API_PREFIX)
app.include_router(complaint_report_router, prefix=API_PREFIX)
app.include_router(citizen_router, prefix=API_PREFIX)
'''app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)'''