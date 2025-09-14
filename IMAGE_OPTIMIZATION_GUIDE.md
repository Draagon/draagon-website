# Image Optimization Guide for MetaObjects Website

## Current Logo Files
- `images/logo.jpg` (11.8KB, 250x96px) - Full logo
- `images/logo_head.jpg` (8.9KB, 140x106px) - Logo head only

## Recommended Optimizations

### 1. Create Favicon Versions
Generate these additional favicon formats from `logo_head.jpg`:
- `favicon.ico` (16x16, 32x32, 48x48 multi-size)
- `favicon-16x16.png` (16x16px)
- `favicon-32x32.png` (32x32px)
- `apple-touch-icon.png` (180x180px)
- `android-chrome-192x192.png` (192x192px)
- `android-chrome-512x512.png` (512x512px)

### 2. Web-Optimized Logo Versions
Create optimized versions for different use cases:
- `logo-nav.webp` (140x53px) - Navigation bar version
- `logo-hero.webp` (300x115px) - Hero section version
- `logo-footer.webp` (120x46px) - Footer version

### 3. Social Media Images
For better Open Graph/Twitter card display:
- `og-image.jpg` (1200x630px) - Open Graph image
- `twitter-card.jpg` (1200x675px) - Twitter card image

## Tools for Optimization

### Online Tools
- [TinyPNG](https://tinypng.com/) - PNG/JPEG compression
- [Squoosh](https://squoosh.app/) - Google's image optimization tool
- [Favicon.io](https://favicon.io/) - Favicon generator

### Command Line Tools (if available)
```bash
# ImageMagick examples
convert logo_head.jpg -resize 180x180 apple-touch-icon.png
convert logo_head.jpg -resize 32x32 favicon-32x32.png
convert logo.jpg -quality 85 -format webp logo-hero.webp

# Create favicon.ico with multiple sizes
convert logo_head.jpg -resize 48x48 -resize 32x32 -resize 16x16 favicon.ico
```

## HTML Updates After Optimization

Once you have the optimized images, update the HTML `<head>` sections:

```html
<!-- Replace current favicon links with: -->
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
<link rel="manifest" href="site.webmanifest">

<!-- Update Open Graph images to: -->
<meta property="og:image" content="https://draagon.github.io/og-image.jpg">
<meta property="twitter:image" content="https://draagon.github.io/twitter-card.jpg">
```

## Site Manifest (site.webmanifest)
Create a web app manifest for better mobile experience:

```json
{
    "name": "Draagon MetaObjects",
    "short_name": "MetaObjects",
    "icons": [
        {
            "src": "android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "theme_color": "#2563eb",
    "background_color": "#ffffff",
    "display": "standalone"
}
```

## Performance Benefits
- Reduced page load times
- Better Core Web Vitals scores
- Improved SEO rankings
- Professional favicon display in browser tabs
- Better social media sharing appearance

## Priority Order
1. Create favicon.ico and basic favicon PNGs (highest impact)
2. Generate Open Graph social images (better sharing)
3. Create WebP versions for modern browsers (performance)
4. Add web manifest (PWA features)