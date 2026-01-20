# Vercel Deployment Guide

## Prerequisites
1. MongoDB Atlas account (free tier available)
2. Vercel account
3. Git repository

## Steps to Deploy

### 1. Set up MongoDB Atlas
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist IP addresses (0.0.0.0/0 for all IPs)
5. Get your connection string

### 2. Deploy to Vercel
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `NEXT_PUBLIC_HOST`: Your Vercel domain (e.g., https://your-app.vercel.app)

### 3. Environment Variables
Set these in Vercel dashboard:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bitlinks?retryWrites=true&w=majority
NEXT_PUBLIC_HOST=https://your-vercel-domain.vercel.app
```

### 4. Custom Domain (Optional)
1. Go to your Vercel project settings
2. Add your custom domain
3. Update `NEXT_PUBLIC_HOST` to your custom domain

## Features Optimized for Production
- ✅ MongoDB connection pooling
- ✅ Error handling and validation
- ✅ Proper HTTP status codes
- ✅ URL validation
- ✅ Production-ready font loading
- ✅ Optimized Next.js configuration
- ✅ Vercel-specific optimizations

## Testing
After deployment, test:
1. Homepage loads correctly
2. URL shortening works
3. Short URLs redirect properly
4. Error handling works (try invalid URLs)