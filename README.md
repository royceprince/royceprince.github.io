# 🚀 Prince Learning Hub — Deployment Guide

## 📁 Project Structure

```
prince-learning-hub/
├── index.html          ← Main website
├── style.css           ← All styles
├── script.js           ← All logic + AI
├── flashcards/         ← Put your HTML flashcard files here
│   ├── tax/
│   ├── law/
│   ├── accounts/
│   └── gst/
└── README.md           ← This file
```

---

## 🖥️ Step 1: Test Locally

1. Download all 3 files: `index.html`, `style.css`, `script.js`
2. Put them in one folder (e.g., `prince-learning-hub/`)
3. Double-click `index.html` to open in your browser
4. Everything works offline — no server needed for basic use!

---

## 🐙 Step 2: Deploy on GitHub Pages (FREE)

### 2a. Create a GitHub Account
- Go to https://github.com
- Click **Sign up** and create a free account

### 2b. Create a New Repository
1. Click the **+** icon → **New repository**
2. Repository name: `prince-learning-hub` (or any name)
3. Set to **Public** ✅
4. Click **Create repository**

### 2c. Upload Your Files
**Option A — Using GitHub Website (Easiest for beginners):**
1. Inside your new repo, click **Add file** → **Upload files**
2. Drag and drop `index.html`, `style.css`, `script.js`
3. Scroll down, click **Commit changes**

**Option B — Using Git (Command Line):**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/prince-learning-hub.git
git push -u origin main
```

### 2d. Enable GitHub Pages
1. Go to your repository → **Settings** tab
2. Click **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Branch: `main`, Folder: `/ (root)`
5. Click **Save**
6. Wait 1–2 minutes

### 2e. Your Website is Live! 🎉
Your site will be at:
```
https://YOUR_USERNAME.github.io/prince-learning-hub/
```

---

## 🤖 AI Assistant Setup

The AI Assistant uses Claude API. By default it will show a connection error (no API key is bundled for security).

### To enable AI in your hosted version:
1. Get a free API key at: https://console.anthropic.com
2. Open `script.js`
3. Find line: `const AI_ENDPOINT = 'https://api.anthropic.com/v1/messages';`
4. Add just above it:
   ```js
   const AI_API_KEY = 'sk-ant-YOUR_KEY_HERE';
   ```
5. Then in the `fetch()` call, add the header:
   ```js
   'x-api-key': AI_API_KEY,
   'anthropic-version': '2023-06-01',
   'anthropic-dangerous-direct-browser-access': 'true',
   ```

> ⚠️ For production: use a backend proxy (e.g., Netlify Functions, Cloudflare Workers) instead of exposing API keys client-side.

---

## 📄 Creating Flashcard HTML Files

Use this template to create your own flashcard files:

```html
<!DOCTYPE html>
<html>
<head><title>My Flashcards</title></head>
<body>
  <div class="flashcard">
    <h2 class="question">What is GST?</h2>
    <p class="answer">Goods and Services Tax — a unified indirect tax in India.</p>
  </div>
  <div class="flashcard">
    <h2 class="question">When was GST introduced in India?</h2>
    <p class="answer">1st July 2017, replacing multiple indirect taxes.</p>
  </div>
</body>
</html>
```

The site will automatically detect `.question` and `.answer` classes and import them as interactive flashcards!

---

## ✨ Tips

- Press `/` to focus the search bar quickly
- Press `Escape` to close the file viewer
- Click any flashcard to flip it
- Use categories to filter content
- Files are stored in your browser — re-upload if you clear browser data

---

## 🆓 Free Hosting Alternatives

| Platform        | URL                        | Free Tier |
|----------------|----------------------------|-----------|
| GitHub Pages   | github.com                 | ✅ Forever |
| Netlify        | netlify.com                | ✅ 100 GB/mo |
| Vercel         | vercel.com                 | ✅ Generous |
| Cloudflare Pages | pages.cloudflare.com     | ✅ Unlimited |

All of these support drag-and-drop deployment of static HTML/CSS/JS files!

---

Built with ❤️ for Indian CA/Law students.
