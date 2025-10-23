from fastapi import FastAPI
from app.routers import router

app = FastAPI(
    title="New Frontiers API",
    description="API for the New Frontiers project",
    version="0.1.0"
)

app.include_router(router, prefix="/api/v1")

@app.get("/")
async def root():
    return {"message": "Welcome to the New Frontiers API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}