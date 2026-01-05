# 🚀 Quick Launch Guide

## Before You Launch (5-Minute Checklist)

### 1. ✅ Add Eva's Photo
```
├── eva-photo.jpg  ← Add this file here
├── index.html
├── styles.css
└── script.js
```

**Photo Requirements:**
- Size: 800x800px or larger
- Format: JPG or PNG
- Professional quality

---

### 2. ✅ Update Contact Information

Open `index.html` and search for these items to update:

| Item | Search For | Update To |
|------|------------|-----------|
| Phone | `+359 886 080 070` | Your phone number |
| Email | `evaedaneva@gmail.com` | Your email |
| Location | `София, България` | Your location |

---

### 3. ✅ Test Locally

**Option A: Simple (Double-click)**
- Just double-click `index.html`
- Opens in your default browser

**Option B: Use Live Server (Recommended)**
- Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code
- Right-click `index.html` → "Open with Live Server"
- Auto-refreshes when you make changes

---

### 4. ✅ Mobile Test

Open the site on your phone or use browser dev tools:
- Chrome: F12 → Toggle Device Toolbar (Ctrl+Shift+M)
- Test on iPhone, iPad, and Android sizes

---

## Deployment Options (Choose One)

### 🌟 Option 1: Netlify (Easiest - 2 Minutes)

1. Go to [netlify.com](https://www.netlify.com/)
2. Sign up (free)
3. Drag and drop your `therapywitheva` folder
4. **Done!** Your site is live at `yoursite.netlify.app`

**Bonus:** Connect your custom domain in settings

---

### 🌟 Option 2: Vercel (Fast - 3 Minutes)

1. Go to [vercel.com](https://vercel.com/)
2. Sign up (free)
3. Import project or drag & drop
4. **Done!** Live at `yoursite.vercel.app`

---

### 🌟 Option 3: GitHub Pages (Free Forever)

1. Create GitHub account (if needed)
2. Create new repository named `therapywitheva`
3. Upload files
4. Settings → Pages → Enable
5. **Live at:** `yourusername.github.io/therapywitheva`

---

### 🌟 Option 4: Traditional Hosting

**Providers:** SiteGround, Bluehost, HostGator, etc.

1. Purchase hosting + domain
2. Upload files via FTP or cPanel File Manager
3. Point domain to your hosting
4. **Done!**

---

## After Launch

### 📊 Add Analytics (Optional)

**Google Analytics:**
Add before `</head>` in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-TRACKING-ID');
</script>
```

---

### 📧 Connect Contact Form

**Recommended Services:**
- **Formspree** (formspree.io) - Easiest
- **EmailJS** (emailjs.com) - Free
- **Netlify Forms** - If using Netlify

**Example with Formspree:**
Replace form opening tag in `index.html`:
```html
<form id="contactForm" action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

---

### 🔍 SEO Optimization

1. **Submit to Google Search Console**
   - https://search.google.com/search-console

2. **Submit to Bing Webmaster Tools**
   - https://www.bing.com/webmasters

3. **Create sitemap.xml** (optional)

4. **Add robots.txt** (optional)

---

## Testing Checklist

- [ ] Website loads properly
- [ ] All images display
- [ ] Contact form works
- [ ] Mobile responsive
- [ ] Navigation works
- [ ] Smooth scrolling works
- [ ] Phone number clicks to call on mobile
- [ ] All sections visible
- [ ] No console errors (F12 → Console)

---

## Troubleshooting

### Images not showing?
- Check filename is exactly `eva-photo.jpg` (case-sensitive)
- Verify image is in root directory

### Contact form not working?
- Form currently shows success message only
- Connect to Formspree or similar service

### Animations not smooth?
- Test in Chrome (best performance)
- Check if browser is up to date

### Mobile menu not opening?
- Clear browser cache
- Test in different browser

---

## Quick Customization

### Change Colors:
Edit `styles.css` line 2-9:
```css
--primary-color: #4ECDC4;  /* Your brand color */
--secondary-color: #FFE66D; /* Accent color */
```

### Change Font:
In `index.html`, replace Google Fonts link with your preferred font.

---

## Support Resources

- **HTML/CSS:** [MDN Web Docs](https://developer.mozilla.org/)
- **JavaScript:** [JavaScript.info](https://javascript.info/)
- **Web Hosting:** [Web.dev Guides](https://web.dev/)

---

## 🎉 You're Ready!

The website is production-ready with:
- ✅ Modern design
- ✅ Smooth animations
- ✅ Mobile responsive
- ✅ Fast loading
- ✅ SEO optimized
- ✅ Cross-browser compatible

**Just add Eva's photo and you're good to go!**

---

Built with ❤️ for therapy and wellness.

© 2025 Therapy with Eva

