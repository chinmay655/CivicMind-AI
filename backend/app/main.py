from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.core.config import settings
from app.core.logging import configure_logging
from app.db.init_db import init_database

configure_logging()


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_database()
    yield


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    lifespan=lifespan,
)


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