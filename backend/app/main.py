from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.api.v1.endpoints.auth import router as auth_router
from app.core.config import settings
from app.core.logging import configure_logging

configure_logging()


@asynccontextmanager
async def lifespan(app: FastAPI):
    yield


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    lifespan=lifespan,
)

app.include_router(auth_router)


@app.get("/")
async def root():
    return {
        "message": "Welcome to CivicMind AI 🚀"
    }


@app.get("/health")
async def health():
    return {
        "status": "healthy"
    }