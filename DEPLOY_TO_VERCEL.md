# 🚀 Deploy to Vercel Guide

## Why Vercel for This Site?

✅ **Perfect for static sites**  
✅ **Free forever** (for personal projects)  
✅ **Fast global CDN**  
✅ **Automatic HTTPS**  
✅ **Custom domains** (free)  
✅ **Zero configuration needed**  

---

## Method 1: Drag & Drop (Fastest - 2 Minutes)

### Step 1: Sign Up
1. Go to [vercel.com](https://vercel.com/)
2. Click "Sign Up"
3. Use GitHub, GitLab, or Email

### Step 2: Deploy
1. Click "Add New..." button
2. Select "Project"
3. **Drag your entire `therapywitheva` folder** into the upload area
4. Wait a few seconds
5. Click "Deploy"

### Step 3: Done! 🎉
Your site is live at: `https://your-project-name.vercel.app`

---

## Method 2: GitHub Integration (Best for Updates)

### Step 1: Push to GitHub
```bash
cd /Users/nikolaytodorov/therapywitheva

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Therapy with Eva website"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR-USERNAME/therapywitheva.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com/)
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. Select your `therapywitheva` repository
5. Click "Deploy"

### Benefits:
- 🔄 **Auto-deploy** on every git push
- 👀 **Preview deployments** for pull requests
- ⏮️ **Instant rollbacks** to previous versions
- 🔗 **Unique URLs** for each commit

---

## Method 3: Vercel CLI (Advanced)

### Install Vercel CLI
```bash
npm install -g vercel
```

### Deploy
```bash
cd /Users/nikolaytodorov/therapywitheva

# Login to Vercel
vercel login

# Deploy
vercel

# Or deploy to production directly
vercel --prod
```

### Commands:
- `vercel` - Deploy preview
- `vercel --prod` - Deploy to production
- `vercel ls` - List deployments
- `vercel inspect URL` - Inspect deployment
- `vercel domains` - Manage domains

---

## Configuration

The site includes a `vercel.json` file for optimal configuration:

```json
{
  "buildCommand": null,
  "outputDirectory": ".",
  "devCommand": null,
  "installCommand": null,
  "framework": null
}
```

**No build needed!** Vercel serves your static files directly.

---

## Custom Domain Setup

### Step 1: Add Domain in Vercel
1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `therapywitheva.com`)

### Step 2: Update DNS
Add these records at your domain registrar:

**For root domain (therapywitheva.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: Wait
- DNS propagation: 5 minutes - 48 hours
- Vercel auto-generates SSL certificate

---

## Vercel Features for This Site

### ⚡ Performance
- **Global CDN**: 100+ edge locations worldwide
- **Edge Caching**: Static assets cached at the edge
- **HTTP/2 & HTTP/3**: Fast, modern protocols
- **Brotli Compression**: Smaller file sizes

### 🔒 Security
- **Automatic HTTPS**: Free SSL certificate
- **DDoS Protection**: Built-in protection
- **Web Application Firewall**: Security by default

### 📊 Analytics (Optional)
Add to your plan:
- Page views and visitors
- Performance metrics
- Top pages and referrers

### 🌍 Environment Variables
Not needed for this static site, but available if you add backend features.

---

## Deployment Best Practices

### Before First Deploy:
- [ ] Add `eva-photo.jpg` to the folder
- [ ] Update contact information in `index.html`
- [ ] Test locally in browser
- [ ] Check mobile responsiveness

### After Deploy:
- [ ] Test the live site
- [ ] Check on mobile device
- [ ] Verify all links work
- [ ] Test contact buttons (phone, email)
- [ ] Check browser console for errors

---

## Updating Your Site

### If Using Git Integration:
```bash
# Make changes to files
# Then commit and push
git add .
git commit -m "Update contact information"
git push

# Vercel auto-deploys in ~20 seconds!
```

### If Using Drag & Drop:
1. Make changes locally
2. Go to Vercel dashboard
3. Drag updated folder
4. New deployment created

### If Using CLI:
```bash
vercel --prod
```

---

## Cost

**FREE FOREVER** for this use case!

Free Plan Includes:
- ✅ Unlimited deployments
- ✅ Automatic HTTPS
- ✅ 100GB bandwidth/month
- ✅ Custom domains
- ✅ Preview deployments
- ✅ Edge Network

**More than enough for a therapy website!**

---

## Troubleshooting

### Images not showing?
- Ensure `eva-photo.jpg` is in the root folder
- Check file name is exactly correct (case-sensitive)

### 404 errors?
- All files should be in root directory
- Check `vercel.json` is present

### Slow loading?
- Optimize images (TinyPNG)
- Files should be under 500KB each

### Need help?
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: support@vercel.com

---

## Alternative: Netlify

If you prefer Netlify instead:

1. Go to [netlify.com](https://www.netlify.com/)
2. Drag & drop your folder
3. Done!

Both Vercel and Netlify are excellent for static sites. Vercel has slightly better performance, Netlify has more plugins.

---

## 🎉 Ready to Deploy!

Your static site is **perfect** for Vercel:
- No build process required
- No dependencies
- Pure HTML/CSS/JS
- Fast loading
- Mobile optimized

**Choose your method above and deploy in minutes!**

---

© 2025 Therapy with Eva

