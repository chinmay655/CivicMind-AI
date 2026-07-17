from fastapi import FastAPI
from fastapi.openapi.utils import get_openapi

from app.api.v1.endpoints.auth import router as auth_router
from app.api.v1.endpoints.complaints import router as complaint_router

app = FastAPI(
    title="CivicMind AI",
    version="1.0.0",
)


@app.get("/")
async def root():
    return {
        "message": "Welcome to CivicMind AI"
    }


app.include_router(auth_router)
app.include_router(complaint_router)


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