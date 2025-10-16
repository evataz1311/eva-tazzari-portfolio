from fastapi import APIRouter, HTTPException
from typing import List, Optional
from models import (
    Artwork, ArtworkCreate, ArtworkUpdate,
    Article, ArticleCreate, ArticleUpdate,
    Bio, BioUpdate,
    ContactMessage, ContactMessageCreate
)
from datetime import datetime
from motor.motor_asyncio import AsyncIOMotorClient
import os
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

router = APIRouter()


# Artworks Routes
@router.get("/artworks")
async def get_artworks(category: Optional[str] = None):
    """Get all artworks, optionally filtered by category"""
    query = {}
    if category:
        query["category"] = category
    
    artworks = await db.artworks.find(query, {"_id": 0}).to_list(1000)
    return {"artworks": artworks}


@router.get("/artworks/{artwork_id}")
async def get_artwork(artwork_id: str):
    """Get single artwork by ID"""
    artwork = await db.artworks.find_one({"id": artwork_id}, {"_id": 0})
    if not artwork:
        raise HTTPException(status_code=404, detail="Artwork not found")
    return {"artwork": artwork}


@router.post("/artworks", response_model=Artwork)
async def create_artwork(artwork: ArtworkCreate):
    """Create new artwork"""
    artwork_dict = artwork.dict()
    artwork_obj = Artwork(**artwork_dict)
    await db.artworks.insert_one(artwork_obj.dict())
    return artwork_obj


@router.put("/artworks/{artwork_id}", response_model=Artwork)
async def update_artwork(artwork_id: str, artwork_update: ArtworkUpdate):
    """Update artwork"""
    existing = await db.artworks.find_one({"id": artwork_id})
    if not existing:
        raise HTTPException(status_code=404, detail="Artwork not found")
    
    update_data = {k: v for k, v in artwork_update.dict().items() if v is not None}
    update_data["updated_at"] = datetime.utcnow()
    
    await db.artworks.update_one(
        {"id": artwork_id},
        {"$set": update_data}
    )
    
    updated = await db.artworks.find_one({"id": artwork_id})
    return Artwork(**updated)


@router.delete("/artworks/{artwork_id}")
async def delete_artwork(artwork_id: str):
    """Delete artwork"""
    result = await db.artworks.delete_one({"id": artwork_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Artwork not found")
    return {"success": True, "message": "Artwork deleted successfully"}


# Articles Routes
@router.get("/articles")
async def get_articles():
    """Get all articles"""
    articles = await db.articles.find({}, {"_id": 0}).to_list(1000)
    return {"articles": articles}


@router.get("/articles/{article_id}")
async def get_article(article_id: str):
    """Get single article by ID"""
    article = await db.articles.find_one({"id": article_id}, {"_id": 0})
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    return {"article": article}


@router.post("/articles", response_model=Article)
async def create_article(article: ArticleCreate):
    """Create new article"""
    article_dict = article.dict()
    article_obj = Article(**article_dict)
    await db.articles.insert_one(article_obj.dict())
    return article_obj


@router.put("/articles/{article_id}", response_model=Article)
async def update_article(article_id: str, article_update: ArticleUpdate):
    """Update article"""
    existing = await db.articles.find_one({"id": article_id})
    if not existing:
        raise HTTPException(status_code=404, detail="Article not found")
    
    update_data = {k: v for k, v in article_update.dict().items() if v is not None}
    update_data["updated_at"] = datetime.utcnow()
    
    await db.articles.update_one(
        {"id": article_id},
        {"$set": update_data}
    )
    
    updated = await db.articles.find_one({"id": article_id})
    return Article(**updated)


@router.delete("/articles/{article_id}")
async def delete_article(article_id: str):
    """Delete article"""
    result = await db.articles.delete_one({"id": article_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Article not found")
    return {"success": True, "message": "Article deleted successfully"}


# Bio Routes
@router.get("/bio")
async def get_bio():
    """Get bio data"""
    bio = await db.bio.find_one({"id": "bio_main"})
    if not bio:
        raise HTTPException(status_code=404, detail="Bio not found")
    return {"bio": bio}


@router.put("/bio", response_model=Bio)
async def update_bio(bio_update: BioUpdate):
    """Update bio data"""
    existing = await db.bio.find_one({"id": "bio_main"})
    if not existing:
        raise HTTPException(status_code=404, detail="Bio not found")
    
    update_data = {k: v for k, v in bio_update.dict().items() if v is not None}
    update_data["updated_at"] = datetime.utcnow()
    
    await db.bio.update_one(
        {"id": "bio_main"},
        {"$set": update_data}
    )
    
    updated = await db.bio.find_one({"id": "bio_main"})
    return Bio(**updated)


# Contact Routes
@router.post("/contact")
async def submit_contact(contact: ContactMessageCreate):
    """Submit contact form"""
    contact_dict = contact.dict()
    contact_obj = ContactMessage(**contact_dict)
    await db.contact_messages.insert_one(contact_obj.dict())
    return {"success": True, "message": "Message sent successfully"}


@router.get("/contact-messages")
async def get_contact_messages():
    """Get all contact messages (for admin use)"""
    messages = await db.contact_messages.find().sort("created_at", -1).to_list(1000)
    return {"messages": messages}
