from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime
import uuid


class Artwork(BaseModel):
    id: Optional[str] = Field(default_factory=lambda: str(uuid.uuid4()))
    title_it: str
    title_en: str
    year: int
    category: str  # sculpture, wearable, installation
    technique_it: str
    technique_en: str
    dimensions: str
    description_it: str
    description_en: str
    series_it: Optional[str] = None
    series_en: Optional[str] = None
    exhibition: Optional[str] = None
    available: bool = True
    image: str
    featured: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }


class ArtworkCreate(BaseModel):
    title_it: str
    title_en: str
    year: int
    category: str
    technique_it: str
    technique_en: str
    dimensions: str
    description_it: str
    description_en: str
    series_it: Optional[str] = None
    series_en: Optional[str] = None
    exhibition: Optional[str] = None
    available: bool = True
    image: str
    featured: bool = False


class ArtworkUpdate(BaseModel):
    title_it: Optional[str] = None
    title_en: Optional[str] = None
    year: Optional[int] = None
    category: Optional[str] = None
    technique_it: Optional[str] = None
    technique_en: Optional[str] = None
    dimensions: Optional[str] = None
    description_it: Optional[str] = None
    description_en: Optional[str] = None
    series_it: Optional[str] = None
    series_en: Optional[str] = None
    exhibition: Optional[str] = None
    available: Optional[bool] = None
    image: Optional[str] = None
    featured: Optional[bool] = None


class Article(BaseModel):
    id: Optional[str] = Field(default_factory=lambda: str(uuid.uuid4()))
    title_it: str
    title_en: str
    date: str
    excerpt_it: str
    excerpt_en: str
    content_it: str
    content_en: str
    image: str
    featured: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }


class ArticleCreate(BaseModel):
    title_it: str
    title_en: str
    date: str
    excerpt_it: str
    excerpt_en: str
    content_it: str
    content_en: str
    image: str
    featured: bool = False


class ArticleUpdate(BaseModel):
    title_it: Optional[str] = None
    title_en: Optional[str] = None
    date: Optional[str] = None
    excerpt_it: Optional[str] = None
    excerpt_en: Optional[str] = None
    content_it: Optional[str] = None
    content_en: Optional[str] = None
    image: Optional[str] = None
    featured: Optional[bool] = None


class Exhibition(BaseModel):
    year: int
    event_it: str
    event_en: str


class Bio(BaseModel):
    id: str = "bio_main"
    short_it: str
    short_en: str
    extended_it: str
    extended_en: str
    image: str
    exhibitions: List[Exhibition]
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }


class BioUpdate(BaseModel):
    short_it: Optional[str] = None
    short_en: Optional[str] = None
    extended_it: Optional[str] = None
    extended_en: Optional[str] = None
    image: Optional[str] = None
    exhibitions: Optional[List[Exhibition]] = None


class ContactMessage(BaseModel):
    id: Optional[str] = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    read: bool = False

    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }


class ContactMessageCreate(BaseModel):
    name: str
    email: str
    message: str
