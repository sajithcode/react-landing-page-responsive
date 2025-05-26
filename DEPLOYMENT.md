# UI/UX Arts - Netlify Deployment Guide

## Project Overview

This is a React + TypeScript + Vite project for UI/UX Arts showcasing WordPress development, Figma design, and custom coding solutions.

## Deployment Configuration

### Netlify Settings

The project includes a `netlify.toml` file with the following configuration:

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node.js Version**: 18
- **SPA Redirect**: All routes redirect to `index.html` for client-side routing

### Build Requirements

- Node.js >= 18.0.0
- npm >= 8.0.0

## Troubleshooting Deployment Issues

### 1. Check Build Status

First, verify that your build passes locally:

```bash
npm install
npm run build
```

### 2. Common Netlify Issues

#### Build Fails

- **Check Node.js version**: Ensure Netlify uses Node 18+
- **Dependencies**: Make sure all dependencies are in `package.json`, not just `devDependencies`
- **Build command**: Verify build command in Netlify settings matches `npm run build`

#### Site Doesn't Load

- **Publish directory**: Should be set to `dist` in Netlify settings
- **Base directory**: Should be empty (root) unless in a monorepo

#### 404 Errors on Page Refresh

- **SPA redirects**: The `netlify.toml` file includes SPA redirects
- **Alternative**: Add `_redirects` file in `public/` folder with: `/* /index.html 200`

### 3. Environment Variables

If you add environment variables later, prefix them with `VITE_` in Netlify:

```
VITE_API_URL=your_value
```

### 4. Manual Deployment Steps

1. **Connect Repository**:

   - Go to Netlify Dashboard
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Configure Build Settings**:

   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 (should be auto-detected from netlify.toml)

3. **Deploy**:
   - Click "Deploy site"
   - Monitor build logs for any errors

### 5. Build Logs Debugging

Check the Netlify build logs for:

- Node.js version being used
- npm install success
- TypeScript compilation errors
- Vite build errors
- File copying to dist folder

### 6. Performance Optimization

The site is optimized with:

- Vite bundling and code splitting
- Image optimization (using Unsplash URLs)
- CSS purging via Tailwind
- Gzip compression enabled

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

---

## Support

If deployment issues persist:

1. Check Netlify build logs
2. Verify all files are committed to Git
3. Ensure the latest commit is pushed to the main branch
4. Try manual deployment by dragging the `dist` folder to Netlify
