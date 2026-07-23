from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from app.api.v1.endpoints.dashboard import router as dashboard_router
from app.api.v1.endpoints.auth import router as auth_router
from app.api.v1.endpoints.complaints import router as complaint_router
from app.api.v1.endpoints.complaint_images import router as complaint_image_router
from app.api.v1.endpoints.assignment import router as assignment_router
from app.api.v1.endpoints.departments import router as department_router
from app.api.v1.endpoints.officers import router as officer_router
from app.api.v1.endpoints.complaint_history import router as complaint_history_router
from app.api.v1.endpoints.officer_workflow import (
    router as officer_workflow_router,
)
from app.api.v1.endpoints.notifications import (
    router as notification_router,
)
from app.api.v1.endpoints.analytics import (
    router as analytics_router,
)
app = FastAPI(
    title="CivicMind AI",
    version="1.0.0",
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

app.include_router(auth_router)
app.include_router(complaint_router)
app.include_router(complaint_image_router)
app.include_router(dashboard_router)
app.include_router(assignment_router)
app.include_router(department_router)
app.include_router(officer_router)
app.include_router(officer_workflow_router)
app.include_router(complaint_history_router)
app.include_router(notification_router)
app.include_router(analytics_router)
'''def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema

    openapi_schema = get_openapi(
        title=app.title,
        version=app.version,
        description="AI-powered Civic Issue Reporting System",
        routes=app.routes,
    )

    openapi_schema["components"]["securitySchemes"] = {
        "BearerAuth": {
            "type": "http",
            "scheme": "bearer",
            "bearerFormat": "JWT",
        }
    }

    for path in openapi_schema["paths"].values():
        for operation in path.values():
            operation["security"] = [
                {
                    "BearerAuth": []
                }
            ]
    
    app.openapi_schema = openapi_schema
    return app.openapi_schema


app.openapi = custom_openapi'''