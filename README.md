# CodeAlpha Internship — Task 1: Responsive Image Gallery

![Project Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blue?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Design-Fully%20Responsive-purple?style=for-the-badge)

A modern, high-performance, and visually immersive **Interactive Image Gallery** built with semantic HTML5, modern CSS3 layout and animations, and vanilla JavaScript for the **CodeAlpha Frontend Development Internship**.

---

## 📸 Key Features

- **Semantic HTML5 & Modern CSS3:** Engineered with clean semantic markup, CSS custom properties (variables), and flexible CSS Grid / Masonry column layouts.
- **Dynamic Lightbox Modal Viewer:**
  - Full-screen modal overlay with glassmorphism backdrop blur.
  - Previous (<kbd>←</kbd>) and Next (<kbd>→</kbd>) navigation buttons with seamless wrap-around.
  - High-resolution image preloading with loading spinners.
  - Interactive thumbnail filmstrip for instant jumping between photos.
- **Smooth Animations & Micro-Interactions:**
  - 3D card lift and smooth image scale (1.07x) on hover.
  - Dark gradient overlay reveal showing photographer credits, location, and tags.
  - Glowing accent border transitions.
- **Fully Responsive:** Adapts fluidly across mobile phones, tablets, laptops, and ultra-wide displays.
- **Touch Gesture Support:** Mobile swipe detection (swipe left/right) for intuitive mobile navigation.
- **Bonus Features:**
  - 🏷️ **Dynamic Category Filtering:** Filter across Nature, Architecture, Neon & City, Wildlife, and Minimalist with live item counters.
  - 🔍 **Real-Time Instant Search:** Instantly search photographs by title, photographer, location, or tag.
  - ❤️ **Favorites / Likes System:** Persisted locally using browser `localStorage` with live counter badge.
  - 🔬 **Zoom & Fullscreen:** 1.6x zoom toggle with panning support and native HTML5 Fullscreen API integration.

---

## 📂 Project Directory Structure

```text
CodeAlpha_ImageGallery/
├── index.html       # Semantic HTML5 markup, accessibility, and modal structure
├── styles.css       # Design tokens, glassmorphism, responsive grid, animations
├── script.js        # Photo data, category filtering, search, lightbox engine
└── README.md        # Project overview and documentation
```

---

## 🚀 How to Run Locally

This project is built using zero-dependency vanilla web standards.

1. Clone the repository:
   ```bash
   git clone https://github.com/manish-341/CodeAlpha_ImageGallery.git
   ```
2. Navigate into the folder:
   ```bash
   cd CodeAlpha_ImageGallery
   ```
3. Open `index.html` directly in any web browser (Chrome, Edge, Firefox, Safari).

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Description |
|---|---|
| <kbd>→</kbd> (Right Arrow) | Next image in lightbox |
| <kbd>←</kbd> (Left Arrow) | Previous image in lightbox |
| <kbd>Esc</kbd> | Close lightbox viewer |
| <kbd>F</kbd> | Toggle Fullscreen mode |
| <kbd>Z</kbd> | Toggle 1.6x Zoom on active image |
| <kbd>L</kbd> | Toggle Favorite / Like |
| <kbd>/</kbd> | Focus Search Bar (from main gallery) |

---

## 🛠️ Built With

- **HTML5:** Semantic elements, accessible ARIA attributes.
- **CSS3:** Custom properties, Flexbox, CSS Columns (Masonry), transitions, keyframe animations, glassmorphism.
- **JavaScript (ES6+):** DOM manipulation, event handling, LocalStorage API, Fullscreen API, touch gestures.

---

## 👨‍💻 Author
- **Developer:** Manish Kumar
- **Internship:** CodeAlpha Frontend Development Internship
- **Task:** Task 1 — Image Gallery
