# backend/server.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

from db import init_db, close_db   # <--- NEW
# NON importare più motor qui


app = FastAPI()

origins = os.getenv("CORS_ORIGINS", "http://localhost:3000").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=[o.strip() for o in origins if o.strip()],
    allow_methods=["*"],
    allow_headers=["*"],
)

# monta le route /api
from routes import router as api_router   # <--- OK, ora non c’è più loop
app.include_router(api_router, prefix="/api")

@app.on_event("startup")
async def startup():
    await init_db(os.getenv("MONGO_URL"), os.getenv("DB_NAME"))

@app.on_event("shutdown")
async def shutdown():
    close_db()

@app.get("/api")
async def root():
    return {"message": "Eva Tazzari portfolio API"}
