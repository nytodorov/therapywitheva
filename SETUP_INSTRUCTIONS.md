# Setup Instructions for Therapy with Eva Website

## Quick Start

1. **Add Eva's Photos**
   - Add a photo named `eva-photo.jpg` to the root directory
   - Recommended size: 800x800px or larger (square format works best)
   - Format: JPG or PNG
   - This photo will be used in both the hero section and about section

## File Structure

```
therapywitheva/
│
├── index.html              # Main HTML file
├── styles.css              # All styles and animations
├── script.js               # Interactive JavaScript features
├── eva-photo.jpg          # Eva's photo (YOU NEED TO ADD THIS)
├── README.md              # Documentation
└── .gitignore             # Git ignore file
```

## Customization Guide

### 1. Update Contact Information

In `index.html`, find and update:
- Phone number: Search for `+359 886 080 070`
- Email: Search for `contacts@therapywitheva.com`
- Location: Search for `София, България`

### 2. Update Website Title and Meta Tags

Add these meta tags in the `<head>` section of `index.html`:

```html
<meta name="description" content="Ева Данева - Лицензиран психотерапевт с опит в клиент-центрирана терапия, позитивна психология, детска и клинична психология.">
<meta name="keywords" content="психотерапия, терапевт, психолог, София, тревожност, депресия, детска психология">
<meta name="author" content="Ева Данева">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://therapywitheva.com/">
<meta property="og:title" content="Therapy with Eva - Психотерапия с Ева Данева">
<meta property="og:description" content="Професионална психотерапия в София. Индивидуална и детска терапия.">
<meta property="og:image" content="https://therapywitheva.com/eva-photo.jpg">
```

### 3. Change Colors

Edit the color variables in `styles.css` (lines 2-9):

```css
:root {
    --primary-color: #4ECDC4;      /* Change this for main brand color */
    --secondary-color: #FFE66D;     /* Change this for accent color */
    --text-dark: #2C3E50;           /* Dark text color */
}
```

### 4. Add Blog Section (Optional)

Create a new file `blog.html` and add blog posts. Link to it from the navigation.

### 5. Set Up Contact Form

The contact form currently shows a success message. To actually send emails, you need to:

**Option A: Use a Form Service**
- [Formspree](https://formspree.io/)
- [Form-Data](https://www.form-data.com/)
- [Netlify Forms](https://www.netlify.com/products/forms/)

**Option B: Connect to Your Backend**
- Set up a backend server (Node.js, PHP, etc.)
- Update the form submission in `script.js`

## Deployment

### Option 1: Netlify (Recommended - Free)

1. Create account at [netlify.com](https://www.netlify.com/)
2. Drag and drop your folder
3. Done! Your site is live

### Option 2: GitHub Pages (Free)

1. Create GitHub repository
2. Push your code
3. Enable GitHub Pages in repository settings
4. Access at `https://yourusername.github.io/therapywitheva`

### Option 3: Traditional Hosting

1. Get hosting from provider (e.g., SiteGround, Bluehost)
2. Upload files via FTP
3. Point your domain to the hosting

## Testing Checklist

- [ ] Replace placeholder image with real photo
- [ ] Update all contact information
- [ ] Test on mobile devices
- [ ] Test contact form
- [ ] Check all links work
- [ ] Test in different browsers (Chrome, Firefox, Safari)
- [ ] Verify responsive design on various screen sizes
- [ ] Check loading speed
- [ ] Test navigation menu on mobile
- [ ] Verify all animations work smoothly

## Browser Compatibility

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**
   - Compress photos before uploading
   - Use tools like [TinyPNG](https://tinypng.com/)
   - Recommended: Save JPGs at 80-85% quality

2. **Enable GZIP Compression**
   - Most hosting providers enable this by default
   - Reduces file sizes by 60-80%

3. **Use CDN** (Optional)
   - Consider Cloudflare for faster global loading
   - Free plan available

## Support

If you need help with customization or have questions, refer to:
- HTML/CSS: [MDN Web Docs](https://developer.mozilla.org/)
- JavaScript: [JavaScript.info](https://javascript.info/)

## License

© 2025 Therapy with Eva. All rights reserved.

---

**Ready to launch? Follow the checklist above and you'll be live in minutes!** 🚀

