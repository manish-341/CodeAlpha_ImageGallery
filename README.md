# CodeAlpha Internship — Task 1: Responsive Image Gallery

![Project Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blue?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Design-Fully%20Responsive-purple?style=for-the-badge)

A modern, high-performance, and visually immersive **Interactive Image Gallery** built with semantic HTML5, modern CSS3 layout and animations, and vanilla JavaScript for CodeAlpha's Frontend Development Internship.

---

## 📸 Overview & Features

### Core Task Requirements:
- ✅ **HTML5 & CSS3 Layout:** Clean, semantic structure with both Masonry and Uniform Grid modes.
- ✅ **JavaScript Navigation:** Full-featured Lightbox viewer with Next & Previous buttons, smooth transitions, and keyboard controls.
- ✅ **Hover Effects & Transitions:** Subtle 3D card lift, scale zoom, smooth gradient overlay reveal, and glowing accent borders.
- ✅ **Responsive Design:** Fluid multi-column layout adapting seamlessly from 4K down to mobile phone viewports.
- ✅ **Bonus Features:**
  - 🏷️ **Dynamic Category Filtering:** Filter through Nature, Architecture, Neon & City, Wildlife, and Minimalist with live item counters.
  - 🔍 **Real-Time Instant Search:** Filter photographs dynamically by title, photographer, location, or descriptive tags.
  - 🎞️ **Interactive Thumbnail Filmstrip:** Jump directly to any photo inside the lightbox with active auto-centering.
  - ⌨️ **Keyboard Controls:** Full support for `ArrowLeft`, `ArrowRight`, `Escape`, `F` (Fullscreen), `Z` (Zoom), and `L` (Like).
  - 📱 **Mobile Touch Gestures:** Swipe left/right support for tablets and mobile devices.
  - ❤️ **Favorites / Likes System:** Persisted locally using browser `localStorage` with live counter badge.
  - 🔍 **Zoom & Fullscreen Mode:** Seamless inspection with 1.6x zoom toggle and HTML5 Fullscreen API.

---

## 📂 Project Directory Structure

```text
CodeAlpha_ImageGallery/
├── index.html       # Semantic HTML5 markup, accessibility, and modal structure
├── styles.css       # Design system tokens, glassmorphism, responsive grid, animations
├── script.js        # Data model, category filter, instant search, lightbox engine
└── README.md        # Project documentation and submission guide
```

---

## 🚀 How to Run Locally

You don't need any complex build tools or npm dependencies! It is built with zero-dependency native web standards.

1. **Option 1: Direct Browser Launch**
   - Double-click `index.html` or right-click and choose **Open with Google Chrome / Microsoft Edge / Firefox**.

2. **Option 2: Live Server (VS Code / Antigravity IDE)**
   - Open this folder in your code editor.
   - Right-click `index.html` and click **"Open with Live Server"** or run:
     ```bash
     npx serve .
     ```

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|---|---|
| <kbd>→</kbd> (Right Arrow) | Next image in lightbox |
| <kbd>←</kbd> (Left Arrow) | Previous image in lightbox |
| <kbd>Esc</kbd> | Close lightbox viewer |
| <kbd>F</kbd> | Toggle Fullscreen mode |
| <kbd>Z</kbd> | Toggle 1.6x Zoom on active image |
| <kbd>L</kbd> | Toggle Favorite / Like |
| <kbd>/</kbd> | Focus Search Bar (from main gallery) |

---

## 📤 Step-by-Step GitHub Submission Guide

As specified by CodeAlpha instructions, upload this repository to GitHub with the name `CodeAlpha_ImageGallery`:

1. Open a terminal or PowerShell inside the project directory:
   ```bash
   cd C:\Users\MANISH\Downloads\CodeAlpha_ImageGallery
   ```

2. Initialize a Git repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Task 1 Image Gallery for CodeAlpha Internship"
   ```

3. Create a new public repository on [GitHub](https://github.com/new) named:
   ```
   CodeAlpha_ImageGallery
   ```

4. Link and push your local branch:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/CodeAlpha_ImageGallery.git
   git push -u origin main
   ```

---

## 👨‍💻 Author
- **Developer:** Manish
- **Internship:** CodeAlpha Frontend Development Internship
- **Task:** Task 1 — Image Gallery
