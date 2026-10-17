# HQX | Happiness Samurai - Manny Anchan

Executive well-being and peak performance corporate transformation platform.

---

## 🚀 Hostinger Deployment Guide

This project is pre-configured and ready to be deployed to **Hostinger** via Git or File Manager.

### Option 1: Automatic Deployment via Hostinger Git (Recommended)

1. Log in to your **Hostinger hPanel**.
2. Go to **Advanced** → **Git**.
3. Fill in the deployment details:
   - **Repository URL**: `https://github.com/excitenext21-bit/HQX.git`
   - **Branch**: `main`
   - **Install Path**: `/public_html` (or your subdomain directory)
4. Click **Create** / **Deploy**.
5. The repository includes:
   - Root `.htaccess` that automatically rewrites traffic to the compiled `dist/` bundle.
   - `dist/.htaccess` for SPA client-side routing (prevents 404 on page reload).
   - Relative asset paths (`./assets/`) compatible with any domain or subfolder.

---

### Option 2: Direct Upload via Hostinger File Manager

1. In Hostinger hPanel, open **Files** → **File Manager**.
2. Navigate to your domain's `public_html` directory.
3. Upload all files from the `dist/` folder directly into `public_html`.
4. Ensure the `.htaccess` file inside `dist/` is uploaded so routes resolve properly.

---

## 🛠 Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start local Vite development server (port 3000)
npm run dev

# Build production bundle
npm run build
```

---

## 📦 Tech Stack
- **Framework**: React 18 + Vite 5
- **Styling**: Tailwind CSS
- **Icons**: Lucide Icons
- **Routing**: React Router DOM (Single Page Application with Smooth Anchors)
- **Web Server Configuration**: Apache / LiteSpeed (`.htaccess` URL rewrite)
