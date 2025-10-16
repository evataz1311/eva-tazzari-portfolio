# Eva Tazzari Portfolio - API Contracts & Integration Protocol

## Overview
This document defines the API contracts and integration protocol for seamlessly transitioning from mock data to a full-stack MongoDB + FastAPI backend.

## Current Mock Data Structure

### 1. Artworks (`mock.js`)
```javascript
{
  id: Number,
  title: { it: String, en: String },
  year: Number,
  category: 'sculpture' | 'wearable' | 'installation',
  technique: { it: String, en: String },
  dimensions: String,
  description: { it: String, en: String },
  series: { it: String, en: String },
  exhibition: String,
  available: Boolean,
  image: String (URL),
  featured: Boolean
}
```

### 2. Articles (`mock.js`)
```javascript
{
  id: Number,
  title: { it: String, en: String },
  date: String (ISO format),
  excerpt: { it: String, en: String },
  content: { it: String, en: String },
  image: String (URL),
  featured: Boolean
}
```

### 3. Bio Data (`mock.js`)
```javascript
{
  short: { it: String, en: String },
  extended: { it: String, en: String },
  image: String (URL),
  exhibitions: [
    { year: Number, event: { it: String, en: String } }
  ]
}
```

## Backend API Endpoints

### Base URL: `/api`

### Artworks
- **GET /api/artworks** - Get all artworks (with optional category filter)
  - Query params: `category` (optional): sculpture | wearable | installation
  - Response: `{ artworks: Artwork[] }`

- **GET /api/artworks/:id** - Get single artwork by ID
  - Response: `{ artwork: Artwork }`

- **POST /api/artworks** - Create new artwork
  - Body: Artwork object (without id)
  - Response: `{ artwork: Artwork }`

- **PUT /api/artworks/:id** - Update artwork
  - Body: Partial Artwork object
  - Response: `{ artwork: Artwork }`

- **DELETE /api/artworks/:id** - Delete artwork
  - Response: `{ success: Boolean, message: String }`

### Articles
- **GET /api/articles** - Get all articles
  - Response: `{ articles: Article[] }`

- **GET /api/articles/:id** - Get single article by ID
  - Response: `{ article: Article }`

- **POST /api/articles** - Create new article
  - Body: Article object (without id)
  - Response: `{ article: Article }`

- **PUT /api/articles/:id** - Update article
  - Body: Partial Article object
  - Response: `{ article: Article }`

- **DELETE /api/articles/:id** - Delete article
  - Response: `{ success: Boolean, message: String }`

### Bio
- **GET /api/bio** - Get bio data
  - Response: `{ bio: BioData }`

- **PUT /api/bio** - Update bio data
  - Body: Partial BioData object
  - Response: `{ bio: BioData }`

### Contact
- **POST /api/contact** - Submit contact form
  - Body: `{ name: String, email: String, message: String }`
  - Response: `{ success: Boolean, message: String }`

## MongoDB Models

### Artwork Model
```python
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
```

### Article Model
```python
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
```

### Bio Model
```python
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
```

### Contact Message Model
```python
class ContactMessage(BaseModel):
    id: Optional[str] = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    read: bool = False
```

## Frontend Integration Changes

### Files to Update:
1. **src/pages/Home.js**
   - Replace `artworks, articles` import from mock
   - Add API calls to fetch featured artworks and latest article
   - Add loading states

2. **src/pages/Works.js**
   - Replace `artworks` import from mock
   - Add API call to fetch all artworks
   - Add loading states

3. **src/pages/WorkDetail.js**
   - Replace `artworks.find()` with API call
   - Fetch single artwork by ID

4. **src/pages/Bio.js**
   - Replace `bioData` import from mock
   - Add API call to fetch bio data
   - Add loading states

5. **src/pages/Articles.js**
   - Replace `articles` import from mock
   - Add API call to fetch all articles
   - Add loading states

6. **src/pages/ArticleDetail.js**
   - Replace `articles.find()` with API call
   - Fetch single article by ID

7. **src/pages/Contact.js**
   - Update form submission to POST to `/api/contact`
   - Remove mock timeout, use actual API call

### API Service Helper (to create)
Create `src/services/api.js`:
```javascript
import axios from 'axios';

const API_BASE = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const artworksAPI = {
  getAll: (category) => axios.get(`${API_BASE}/artworks`, { params: { category } }),
  getById: (id) => axios.get(`${API_BASE}/artworks/${id}`),
  create: (data) => axios.post(`${API_BASE}/artworks`, data),
  update: (id, data) => axios.put(`${API_BASE}/artworks/${id}`, data),
  delete: (id) => axios.delete(`${API_BASE}/artworks/${id}`)
};

export const articlesAPI = {
  getAll: () => axios.get(`${API_BASE}/articles`),
  getById: (id) => axios.get(`${API_BASE}/articles/${id}`),
  create: (data) => axios.post(`${API_BASE}/articles`, data),
  update: (id, data) => axios.put(`${API_BASE}/articles/${id}`, data),
  delete: (id) => axios.delete(`${API_BASE}/articles/${id}`)
};

export const bioAPI = {
  get: () => axios.get(`${API_BASE}/bio`),
  update: (data) => axios.put(`${API_BASE}/bio`, data)
};

export const contactAPI = {
  submit: (data) => axios.post(`${API_BASE}/contact`, data)
};
```

## Data Transformation

### Frontend → Backend (bilingual object to flat fields)
```javascript
// Frontend format
{ title: { it: "Titolo", en: "Title" } }

// Backend format
{ title_it: "Titolo", title_en: "Title" }
```

### Backend → Frontend (flat fields to bilingual object)
```javascript
// Backend response
{ title_it: "Titolo", title_en: "Title" }

// Transform to frontend format
{ title: { it: response.title_it, en: response.title_en } }
```

## Implementation Steps

### Phase 1: Backend Setup
1. Create MongoDB models in `backend/models.py`
2. Create CRUD operations in `backend/routes/`
3. Seed database with mock data
4. Test all endpoints with curl

### Phase 2: API Service Layer
1. Create `frontend/src/services/api.js`
2. Create data transformation utilities

### Phase 3: Frontend Integration
1. Update each page component one by one
2. Add loading states and error handling
3. Test each page after integration

### Phase 4: Testing
1. Test all CRUD operations
2. Test bilingual data display
3. Test contact form submission
4. Verify no mock data references remain

## Notes
- Keep mock.js intact during development for reference
- Remove mock.js only after full integration is complete
- All dates should use ISO 8601 format
- Images remain as URLs (no file upload in MVP)
- No authentication required for MVP (add later if needed)
