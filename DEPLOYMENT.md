# Deployment Guide for Dolph Search

## Prerequisites
- GitHub account
- Render account (free tier available)
- Git installed on your local machine

## Step 1: Push to GitHub

1. Initialize git repository (if not already done):
```bash
cd "/Users/macbook/Downloads/Create responsive webpage (1)"
git init
git add .
git commit -m "Initial commit"
```

2. Create a new repository on GitHub (e.g., `dolph-search`)

3. Add remote and push:
```bash
git remote add origin https://github.com/YOUR_USERNAME/dolph-search.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy Backend on Render

1. Go to [render.com](https://render.com) and sign up/login
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the backend service:
   - **Name**: `dolph-search-backend`
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Environment Variables**:
     - `NODE_ENV`: `production`
     - `PORT`: `10000`
     - `JWT_SECRET`: (generate a random string)
5. Click "Create Web Service"
6. Wait for deployment to complete (2-3 minutes)
7. Copy the backend URL (e.g., `https://dolph-search-backend.onrender.com`)

## Step 3: Deploy Frontend on Render

1. Click "New +" → "Web Service" again
2. Connect the same GitHub repository
3. Configure the frontend service:
   - **Name**: `dolph-search-frontend`
   - **Root Directory**: `.` (root)
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Environment Variables**:
     - `NODE_ENV`: `production`
     - `API_URL`: `https://dolph-search-backend.onrender.com` (use your actual backend URL)
4. Click "Create Web Service"
5. Wait for deployment to complete

## Step 4: Update Backend CORS (if needed)

After both services are deployed, you may need to update the backend CORS settings in `server/server.js` to include the actual frontend URL:

```javascript
app.use(cors({
    origin: ['https://dolph-search-frontend.onrender.com', 'https://dolph-search.onrender.com'],
    credentials: true
}));
```

Push this change and the backend will redeploy automatically.

## Step 5: Test the Application

1. Visit your frontend URL (e.g., `https://dolph-search-frontend.onrender.com`)
2. Test login/signup functionality
3. Test search functionality
4. Verify all pages load correctly

## Important Notes

- The SQLite database will be stored in Render's ephemeral storage. Data will persist but may be lost if the service is redeployed or scaled.
- For production use, consider migrating to PostgreSQL (Render offers free PostgreSQL databases).
- The free tier has limits on build time and resources. If you encounter issues, you may need to upgrade to a paid plan.
- Make sure to update the `API_URL` in `config.js` to match your actual backend URL after deployment.

## Troubleshooting

**Backend fails to start:**
- Check the Render logs for error messages
- Ensure all dependencies are in `server/package.json`

**Frontend can't connect to backend:**
- Verify CORS settings in `server/server.js`
- Check that `API_URL` environment variable is set correctly
- Ensure both services are running

**Database errors:**
- The SQLite database is created on first run. If it fails, check file permissions in the Render dashboard.
