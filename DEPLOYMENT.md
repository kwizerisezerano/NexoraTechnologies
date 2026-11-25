# Vercel Deployment Guide

## Quick Start

### 1. Deploy to Vercel

#### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign up or login
3. Click **"Add New Project"**
4. Import your GitHub repository: `kwizerisezerano/NexoraTechnologies`
5. Vercel will auto-detect Nuxt framework
6. Configure settings (see below)
7. Click **"Deploy"**

#### Option B: Via Vercel CLI

```bash
npm install -g vercel
cd /home/kwizera/nexora-website
vercel
```

### 2. Configure Environment Variables (CRITICAL!)

Before or after deployment, you MUST add the OpenRouter API key:

**Get your API key:**
1. Go to [openrouter.ai/keys](https://openrouter.ai/keys)
2. Sign up or login
3. Create a new API key
4. Copy the key (starts with `sk-or-v1-`)

**In Vercel Dashboard:**
1. Go to your project → **Settings** → **Environment Variables**
2. Click **"Add New"**
3. Add the following variable:
   - **Name:** `OPENROUTER_API_KEY`
   - **Value:** `your-api-key-here` (paste your key from OpenRouter)
4. **Important:** Select ALL environments:
   - ✅ Production
   - ✅ Preview
   - ✅ Development
5. Click **"Save"**
6. **Redeploy** your project (click "Redeploy" in deployments tab)

### 3. Verify Deployment

After deployment:
1. Visit your Vercel URL
2. Test the chatbot (click green button in bottom-right)
3. Send a test message
4. Check if AI responds

### Troubleshooting

**Chatbot not working?**
1. Check Vercel Function Logs for errors
2. Verify `OPENROUTER_API_KEY` is set in environment variables
3. Make sure you redeployed after adding the variable
4. Check the API key is valid (get a new one at openrouter.ai/keys)

**Build errors?**
1. Check the build logs in Vercel
2. Ensure Node.js version is compatible (22.22.1+)
3. Verify all dependencies are installed

**Environment variable not working?**
1. Make sure the variable name is exactly: `OPENROUTER_API_KEY`
2. Check it's selected for all environments
3. Redeploy after adding the variable

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENROUTER_API_KEY` | OpenRouter API key for AI chatbot | Yes |

## Build Configuration

- **Framework:** Nuxt 4
- **Build Command:** `npm run build`
- **Output Directory:** `.output`
- **Node.js Version:** 22.22.1+

## Support

For issues:
- Check Vercel logs: Project → Functions → Logs
- Verify environment variables: Project → Settings → Environment Variables
- Redeploy: Project → Deployments → Click "..." → Redeploy
