# Eva Tazzari Portfolio - Deployment Guide

## 🚀 Deployment Options

### Option 1: Vercel (Frontend) + Render (Backend)

#### **A. Deploy Backend to Render**

1. **Create Render Account**
   - Go to [render.com](https://render.com)
   - Sign up or log in

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository: `eva-tazzari-portfolio`

3. **Configure Backend Service**
   ```
   Name: eva-tazzari-backend
   Environment: Python 3
   Region: Choose closest to your users
   Branch: main
   Root Directory: backend
   Build Command: pip install -r requirements.txt
   Start Command: uvicorn server:app --host 0.0.0.0 --port $PORT
   ```

4. **Add Environment Variables**
   - Go to "Environment" tab
   - Add variables:
     ```
     MONGO_URL=your_mongodb_atlas_connection_string
     DB_NAME=eva_tazzari_portfolio
     ```

5. **Set up MongoDB Atlas**
   - Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Create free cluster
   - Get connection string and add to Render environment variables
   - Whitelist Render's IP or allow from anywhere (0.0.0.0/0)

6. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Note your backend URL: `https://eva-tazzari-backend.onrender.com`

7. **Seed Database** (First time only)
   - Go to Render dashboard → "Shell" tab
   - Run: `python seed_db.py`

#### **B. Deploy Frontend to Vercel**

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import `eva-tazzari-portfolio` repository
   - Configure:
     ```
     Framework Preset: Create React App
     Root Directory: frontend
     Build Command: yarn build
     Output Directory: build
     Install Command: yarn install
     ```

3. **Add Environment Variables**
   - In Vercel project settings → "Environment Variables"
   - Add:
     ```
     REACT_APP_BACKEND_URL=https://eva-tazzari-backend.onrender.com
     ```

4. **Deploy**
   - Click "Deploy"
   - Your site will be live at: `https://eva-tazzari-portfolio.vercel.app`

5. **Custom Domain** (Optional)
   - Go to Vercel project → "Settings" → "Domains"
   - Add `www.evatazzari.com`
   - Follow DNS configuration instructions

---

### Option 2: Full Stack on Render

You can deploy both frontend and backend on Render:

#### **Backend (same as above)**

#### **Frontend as Static Site**
1. Create "Static Site" on Render
2. Configure:
   ```
   Build Command: cd frontend && yarn install && yarn build
   Publish Directory: frontend/build
   ```
3. Add environment variable:
   ```
   REACT_APP_BACKEND_URL=https://eva-tazzari-backend.onrender.com
   ```

---

### Option 3: Local Development

#### **Prerequisites**
- Node.js 18+ and Yarn
- Python 3.9+
- MongoDB (local or cloud)

#### **Setup**

1. **Clone Repository**
   ```bash
   git clone https://github.com/evataz1311/eva-tazzari-portfolio.git
   cd eva-tazzari-portfolio
   ```

2. **Backend Setup**
   ```bash
   cd backend
   
   # Create virtual environment
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   
   # Install dependencies
   pip install -r requirements.txt
   
   # Create .env file
   cp .env.example .env
   # Edit .env with your MongoDB connection string
   
   # Seed database (first time only)
   python seed_db.py
   
   # Start backend
   uvicorn server:app --reload --host 0.0.0.0 --port 8001
   ```

3. **Frontend Setup** (in new terminal)
   ```bash
   cd frontend
   
   # Install dependencies
   yarn install
   
   # Create .env file
   cp .env.example .env
   # Make sure REACT_APP_BACKEND_URL=http://localhost:8001
   
   # Start frontend
   yarn start
   ```

4. **Access Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8001/api
   - API Docs: http://localhost:8001/docs

---

## 🔧 Post-Deployment Tasks

### 1. Update Content
- Replace placeholder images with real artwork photos
- Update bio text and portrait image
- Add real article content
- Update contact information

### 2. Configure CORS (if needed)
In `backend/server.py`, update allowed origins:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://www.evatazzari.com", "https://eva-tazzari-portfolio.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### 3. Set Up Custom Domain
- Purchase domain (e.g., evatazzari.com)
- Configure DNS records:
  - Vercel provides instructions for custom domains
  - Add CNAME record pointing to Vercel

### 4. Add Analytics (Optional)
- Google Analytics
- Vercel Analytics
- Plausible Analytics

### 5. Enable HTTPS
- Both Vercel and Render provide automatic SSL certificates
- Ensure all API calls use HTTPS in production

---

## 📊 Monitoring

### Vercel
- Check deployment logs in Vercel dashboard
- Monitor performance and analytics

### Render
- View backend logs in Render dashboard
- Set up health checks
- Monitor database connections

### Database
- Monitor MongoDB Atlas metrics
- Set up backup schedules
- Review query performance

---

## 🐛 Troubleshooting

### Frontend Issues
- **404 on refresh**: Configure Vercel to serve index.html for all routes
- **API errors**: Check REACT_APP_BACKEND_URL is correct
- **Build fails**: Ensure all dependencies in package.json

### Backend Issues
- **Database connection**: Verify MONGO_URL and whitelist IPs
- **CORS errors**: Update allowed origins in server.py
- **Module not found**: Ensure requirements.txt is complete

### Common Fixes
```bash
# Clear build cache (Vercel)
vercel --force

# Restart backend (Render)
# Use "Manual Deploy" in Render dashboard

# Re-seed database
python seed_db.py
```

---

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Render Docs**: https://render.com/docs
- **MongoDB Atlas**: https://docs.atlas.mongodb.com/

---

## ✅ Deployment Checklist

- [ ] Backend deployed to Render
- [ ] MongoDB Atlas set up and connected
- [ ] Database seeded with initial data
- [ ] Frontend deployed to Vercel
- [ ] Environment variables configured
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active
- [ ] CORS configured correctly
- [ ] Content updated with real data
- [ ] Contact form tested
- [ ] All pages tested in production
- [ ] Analytics set up (optional)
- [ ] Backup strategy in place

---

**Your portfolio is now live! 🎉**
