/**
 * ====================================================================
 * LUMINA GALLERY — JAVASCRIPT ENGINE
 * Curated Visual Arts & Contemporary Photography
 * ====================================================================
 */

// --- Curated Image Dataset with Camera EXIF Specs ---
const GALLERY_DATA = [
  {
    id: 1,
    title: "Misty Alpine Ridge",
    category: "Nature",
    author: "Luca Bravo",
    location: "Dolomites, Italy",
    specs: "Sony α7R V • 24mm f/1.4 • 1/500s • ISO 100",
    tags: ["mountain", "alps", "fog", "morning", "hiking"],
    imgUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Cyberpunk Alley",
    category: "Neon & City",
    author: "Aleksandar Pasaric",
    location: "Shinjuku, Tokyo",
    specs: "Fujifilm X-T4 • 35mm f/1.2 • 1/125s • ISO 800",
    tags: ["tokyo", "japan", "neon", "cyberpunk", "night", "rain"],
    imgUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Parametric Architecture",
    category: "Architecture",
    author: "Victor Garcia",
    location: "Valencia, Spain",
    specs: "Leica SL2 • 16-35mm f/2.8 • 1/1000s • ISO 50",
    tags: ["architecture", "curves", "modern", "minimal", "white"],
    imgUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Emerald Forest Canopy",
    category: "Nature",
    author: "Casey Horner",
    location: "Redwoods, California",
    specs: "Nikon Z7 II • 28mm f/2.0 • 1/250s • ISO 200",
    tags: ["forest", "trees", "redwoods", "green", "sunlight"],
    imgUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Geometric Spiral Staircase",
    category: "Architecture",
    author: "Ludwig Wallendorff",
    location: "Berlin, Germany",
    specs: "Canon EOS R5 • 14mm f/4.0 • 1/60s • ISO 400",
    tags: ["stairs", "spiral", "monochrome", "geometry", "interior"],
    imgUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Crimson Horizon Dunes",
    category: "Nature",
    author: "Jeremy Bishop",
    location: "Sahara Desert, Morocco",
    specs: "Hasselblad X2D • 45mm f/4.0 • 1/800s • ISO 64",
    tags: ["desert", "sand", "dunes", "sunset", "warm"],
    imgUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    title: "Neon Rain Reflections",
    category: "Neon & City",
    author: "Sean Foley",
    location: "Hong Kong",
    specs: "Sony α7S III • 50mm f/1.2 • 1/200s • ISO 1600",
    tags: ["hong kong", "neon", "rain", "puddle", "glow", "night"],
    imgUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    title: "Arctic Fox in Blizzard",
    category: "Wildlife",
    author: "Jonatan Pie",
    location: "Svalbard, Norway",
    specs: "Sony α1 • 400mm f/2.8 • 1/2000s • ISO 400",
    tags: ["fox", "arctic", "winter", "snow", "animal", "wildlife"],
    imgUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    title: "Futuristic Glass Facade",
    category: "Architecture",
    author: "Simone Hutsch",
    location: "London, UK",
    specs: "Canon 5D Mark IV • 24-70mm f/2.8 • 1/1250s • ISO 100",
    tags: ["facade", "skyscrapers", "glass", "modern", "blue"],
    imgUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    title: "Solitary Dune Tree",
    category: "Minimalist",
    author: "Federico Respini",
    location: "Namib-Naukluft, Namibia",
    specs: "Leica M11 • 50mm f/1.4 • 1/1600s • ISO 64",
    tags: ["minimal", "solitude", "tree", "desert", "clean", "calm"],
    imgUrl: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    title: "Bengal Tiger in Solitude",
    category: "Wildlife",
    author: "Frida Bredesen",
    location: "Ranthambore, India",
    specs: "Nikon D850 • 600mm f/4.0 • 1/1600s • ISO 320",
    tags: ["tiger", "wildlife", "animal", "stripes", "fierce"],
    imgUrl: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    title: "Prismatic Concrete Forms",
    category: "Minimalist",
    author: "Ricardo Gomez",
    location: "Brasília, Brazil",
    specs: "Fujifilm GFX 100S • 32-64mm f/4.0 • 1/800s • ISO 100",
    tags: ["minimal", "brutalism", "shadow", "sun", "monochrome"],
    imgUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 13,
    title: "Midnight Milky Way",
    category: "Nature",
    author: "Bailey Zindel",
    location: "Banff, Canada",
    specs: "Sony α7 IV • 14mm f/1.8 • 25s • ISO 3200",
    tags: ["stars", "night", "astronomy", "lake", "mountains", "galaxy"],
    imgUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    title: "Vibrant Shibuya Crossing",
    category: "Neon & City",
    author: "Jezael Melgoza",
    location: "Shibuya, Tokyo",
    specs: "Leica Q2 • 28mm f/1.7 • 1/160s • ISO 800",
    tags: ["crossing", "city", "lights", "crowd", "tokyo", "street"],
    imgUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15,
    title: "Majestic Humpback Whale",
    category: "Wildlife",
    author: "Todd Cravens",
    location: "Maui, Hawaii",
    specs: "Sony α1 • 16-35mm f/2.8 • 1/1000s • ISO 160",
    tags: ["whale", "ocean", "sea", "underwater", "wildlife", "blue"],
    imgUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"
  }
];

// --- State Management ---
const state = {
  activeCategory: "All",
  activePreset: "normal",
  searchQuery: "",
  layoutMode: "masonry",
  showFavoritesOnly: false,
  currentLightboxIndex: 0,
  isLightboxOpen: false,
  isZoomed: false,
  isSlideshowRunning: false,
  slideshowTimer: null,
  favorites: new Set(JSON.parse(localStorage.getItem("lumina_favorites") || "[]")),
  filteredData: [...GALLERY_DATA]
};

// --- DOM Element Selectors ---
const dom = {
  galleryGrid: document.getElementById("gallery-grid"),
  categoryFilters: document.getElementById("category-filters"),
  presetFilters: document.getElementById("preset-filters"),
  searchInput: document.getElementById("search-input"),
  clearSearchBtn: document.getElementById("clear-search-btn"),
  resultsCount: document.getElementById("results-count"),
  totalCountBadge: document.getElementById("total-count-badge"),
  favoritesCountBadge: document.getElementById("favorites-count-badge"),
  viewFavoritesPill: document.getElementById("view-favorites-pill"),
  emptyState: document.getElementById("empty-state"),
  resetFiltersBtn: document.getElementById("reset-filters-btn"),
  shuffleBtn: document.getElementById("shuffle-btn"),
  viewMasonry: document.getElementById("view-masonry"),
  viewGrid: document.getElementById("view-grid"),

  // Lightbox elements
  lightboxOverlay: document.getElementById("lightbox-overlay"),
  lightboxBackdrop: document.getElementById("lightbox-backdrop"),
  lbImg: document.getElementById("lb-img"),
  lbMediaWrapper: document.getElementById("lb-media-wrapper"),
  lbSpinner: document.getElementById("lb-spinner"),
  lbPrevBtn: document.getElementById("lb-prev-btn"),
  lbNextBtn: document.getElementById("lb-next-btn"),
  lbCloseBtn: document.getElementById("lb-close-btn"),
  lbFavBtn: document.getElementById("lb-fav-btn"),
  lbZoomBtn: document.getElementById("lb-zoom-btn"),
  lbSlideshowBtn: document.getElementById("lb-slideshow-btn"),
  lbFullscreenBtn: document.getElementById("lb-fullscreen-btn"),
  lbDownloadBtn: document.getElementById("lb-download-btn"),
  lbCurrentIndex: document.getElementById("lb-current-index"),
  lbTotalCount: document.getElementById("lb-total-count"),
  lbCategory: document.getElementById("lb-category"),
  lbTitle: document.getElementById("lb-title"),
  lbSpecs: document.getElementById("lb-specs"),
  lbAuthorName: document.getElementById("lb-author-name"),
  lbLocationName: document.getElementById("lb-location-name"),
  lbThumbsContainer: document.getElementById("lb-thumbs-container"),

  // Toast
  toast: document.getElementById("toast")
};

// --- Toast Notification Helper ---
let toastTimeout;
function showToast(message, icon = "ri-check-line") {
  clearTimeout(toastTimeout);
  const msgEl = dom.toast.querySelector(".toast-msg");
  const iconEl = dom.toast.querySelector(".toast-icon");
  
  if (msgEl) msgEl.textContent = message;
  if (iconEl) iconEl.className = `toast-icon ${icon}`;

  dom.toast.classList.add("show");
  toastTimeout = setTimeout(() => {
    dom.toast.classList.remove("show");
  }, 2600);
}

// --- Category Extraction & Rendering ---
function renderCategoryFilters() {
  const categories = ["All", ...new Set(GALLERY_DATA.map(item => item.category))];
  
  dom.categoryFilters.innerHTML = categories.map(cat => {
    const count = cat === "All" 
      ? GALLERY_DATA.length 
      : GALLERY_DATA.filter(i => i.category === cat).length;
    
    const icon = getCategoryIcon(cat);
    const isActive = cat === state.activeCategory && !state.showFavoritesOnly ? "active" : "";

    return `
      <button class="category-tab ${isActive}" data-category="${cat}">
        <i class="${icon}"></i>
        <span>${cat}</span>
        <span class="count-badge">${count}</span>
      </button>
    `;
  }).join("");

  dom.categoryFilters.querySelectorAll(".category-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      state.showFavoritesOnly = false;
      const selectedCategory = tab.dataset.category;
      if (state.activeCategory === selectedCategory) return;
      
      state.activeCategory = selectedCategory;
      dom.categoryFilters.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      filterAndRender();
    });
  });
}

function getCategoryIcon(category) {
  switch(category) {
    case "All": return "ri-apps-2-line";
    case "Nature": return "ri-leaf-line";
    case "Architecture": return "ri-building-line";
    case "Neon & City": return "ri-flashlight-line";
    case "Wildlife": return "ri-bear-smile-line";
    case "Minimalist": return "ri-contrast-drop-2-line";
    default: return "ri-image-line";
  }
}

// --- Real-Time CSS Color Grading Presets ---
function initPresetFilters() {
  const presetTabs = dom.presetFilters.querySelectorAll(".preset-tab");
  presetTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      presetTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const preset = tab.dataset.preset;
      state.activePreset = preset;

      // Swap class on galleryGrid
      dom.galleryGrid.className = `gallery-grid ${state.layoutMode}-mode preset-${preset}`;
      showToast(`Applied preset: ${tab.textContent.trim()}`, "ri-magic-line");
    });
  });
}

// --- Filter and Search Logic ---
function filterAndRender() {
  const query = state.searchQuery.toLowerCase().trim();

  state.filteredData = GALLERY_DATA.filter(item => {
    const matchesFavorites = !state.showFavoritesOnly || state.favorites.has(item.id);
    const matchesCategory = state.activeCategory === "All" || item.category === state.activeCategory;
    const matchesSearch = !query || (
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.author.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query))
    );
    return matchesFavorites && matchesCategory && matchesSearch;
  });

  renderGalleryGrid();
  updateStatusBar();
}

// --- Render Gallery Cards ---
function renderGalleryGrid() {
  const { filteredData } = state;

  if (filteredData.length === 0) {
    dom.galleryGrid.innerHTML = "";
    dom.emptyState.classList.remove("hidden");
    return;
  }

  dom.emptyState.classList.add("hidden");

  const cardsHtml = filteredData.map((item, index) => {
    const isFav = state.favorites.has(item.id);
    return `
      <article 
        class="gallery-card" 
        data-id="${item.id}" 
        data-index="${index}"
        tabindex="0"
        aria-label="View ${item.title} by ${item.author}"
      >
        <div class="card-img-wrapper skeleton">
          <img 
            src="${item.thumbUrl}" 
            alt="${item.title}" 
            loading="lazy"
            onload="this.parentElement.classList.remove('skeleton')"
          >
          <div class="card-quick-view">
            <i class="ri-fullscreen-line"></i> Quick View
          </div>
          <div class="card-overlay">
            <div class="card-top">
              <div class="card-tags-group">
                <span class="card-category-tag">${item.category}</span>
                <span class="card-raw-tag">4K RAW</span>
              </div>
              <button 
                class="card-fav-btn ${isFav ? 'favorited' : ''}" 
                data-id="${item.id}"
                aria-label="${isFav ? 'Remove from favorites' : 'Add to favorites'}"
                title="${isFav ? 'Favorited' : 'Add to favorites'}"
              >
                <i class="${isFav ? 'ri-heart-fill' : 'ri-heart-line'}"></i>
              </button>
            </div>
            
            <div class="card-bottom">
              <h3 class="card-title">${item.title}</h3>
              <div class="card-meta">
                <span class="card-author">
                  <i class="ri-user-smile-line"></i> ${item.author}
                </span>
                <span class="card-location">
                  <i class="ri-map-pin-2-line"></i> ${item.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  dom.galleryGrid.innerHTML = cardsHtml;
  attachCardEvents();
}

// --- Card Interactions ---
function attachCardEvents() {
  const cards = dom.galleryGrid.querySelectorAll(".gallery-card");
  
  cards.forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".card-fav-btn")) {
        const btn = e.target.closest(".card-fav-btn");
        const id = parseInt(btn.dataset.id, 10);
        toggleFavorite(id);
        return;
      }

      const index = parseInt(card.dataset.index, 10);
      openLightbox(index);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const index = parseInt(card.dataset.index, 10);
        openLightbox(index);
      }
    });
  });
}

// --- Favorite Toggling System ---
function toggleFavorite(id) {
  const item = GALLERY_DATA.find(i => i.id === id);
  if (!item) return;

  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    showToast(`Removed "${item.title}" from favorites`, "ri-heart-dislike-line");
  } else {
    state.favorites.add(id);
    showToast(`Saved "${item.title}" to favorites!`, "ri-heart-fill");
  }

  localStorage.setItem("lumina_favorites", JSON.stringify([...state.favorites]));
  updateHeaderStats();
  
  const favBtns = document.querySelectorAll(`.card-fav-btn[data-id="${id}"]`);
  favBtns.forEach(btn => {
    const isFav = state.favorites.has(id);
    btn.classList.toggle("favorited", isFav);
    btn.innerHTML = `<i class="${isFav ? 'ri-heart-fill' : 'ri-heart-line'}"></i>`;
  });

  if (state.isLightboxOpen) {
    const currentItem = state.filteredData[state.currentLightboxIndex];
    if (currentItem && currentItem.id === id) {
      updateLightboxFavBtn();
    }
  }

  if (state.showFavoritesOnly) {
    filterAndRender();
  }
}

function updateHeaderStats() {
  dom.totalCountBadge.textContent = `${GALLERY_DATA.length} Artworks`;
  dom.favoritesCountBadge.textContent = `${state.favorites.size} Favorites`;
}

function updateStatusBar() {
  const count = state.filteredData.length;
  if (state.showFavoritesOnly) {
    dom.resultsCount.textContent = `Showing ${count} favorited photograph${count === 1 ? '' : 's'}`;
  } else if (state.searchQuery) {
    dom.resultsCount.textContent = `Showing ${count} result${count === 1 ? '' : 's'} for "${state.searchQuery}"`;
  } else if (state.activeCategory !== "All") {
    dom.resultsCount.textContent = `Showing ${count} photograph${count === 1 ? '' : 's'} in ${state.activeCategory}`;
  } else {
    dom.resultsCount.textContent = `Showing all ${count} curated photographs`;
  }
}

// ====================================================================
// LIGHTBOX ENGINE
// ====================================================================

function openLightbox(index) {
  if (state.filteredData.length === 0) return;
  state.currentLightboxIndex = index;
  state.isLightboxOpen = true;
  state.isZoomed = false;

  dom.lightboxOverlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  renderLightboxImage();
  renderLightboxThumbnails();
}

function closeLightbox() {
  stopSlideshow();
  state.isLightboxOpen = false;
  state.isZoomed = false;
  dom.lbMediaWrapper.classList.remove("zoomed");
  dom.lbZoomBtn.classList.remove("active");
  dom.lightboxOverlay.classList.add("hidden");
  document.body.style.overflow = "";

  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  }
}

function renderLightboxImage() {
  const item = state.filteredData[state.currentLightboxIndex];
  if (!item) return;

  state.isZoomed = false;
  dom.lbMediaWrapper.classList.remove("zoomed");
  dom.lbZoomBtn.classList.remove("active");

  dom.lbSpinner.classList.add("active");
  dom.lbImg.style.opacity = "0";

  const highRes = new Image();
  highRes.src = item.imgUrl;
  highRes.onload = () => {
    dom.lbImg.src = item.imgUrl;
    dom.lbImg.alt = item.title;
    dom.lbSpinner.classList.remove("active");
    dom.lbImg.style.opacity = "1";
  };
  highRes.onerror = () => {
    dom.lbImg.src = item.thumbUrl;
    dom.lbSpinner.classList.remove("active");
    dom.lbImg.style.opacity = "1";
  };

  dom.lbCurrentIndex.textContent = state.currentLightboxIndex + 1;
  dom.lbTotalCount.textContent = state.filteredData.length;
  dom.lbCategory.textContent = item.category;
  dom.lbTitle.textContent = item.title;
  if (dom.lbSpecs) {
    dom.lbSpecs.innerHTML = `<i class="ri-camera-3-line"></i> ${item.specs || "High-Resolution 4K Capture"}`;
  }
  dom.lbAuthorName.textContent = item.author;
  dom.lbLocationName.textContent = item.location;

  updateLightboxFavBtn();
  highlightActiveThumbnail();
}

function updateLightboxFavBtn() {
  const item = state.filteredData[state.currentLightboxIndex];
  if (!item) return;

  const isFav = state.favorites.has(item.id);
  dom.lbFavBtn.classList.toggle("active", isFav);
  dom.lbFavBtn.innerHTML = `<i class="${isFav ? 'ri-heart-fill' : 'ri-heart-line'}"></i>`;
  dom.lbFavBtn.title = isFav ? "Remove Favorite" : "Add to Favorites";
}

function nextLightboxImage() {
  if (!state.isLightboxOpen || state.filteredData.length <= 1) return;
  state.currentLightboxIndex = (state.currentLightboxIndex + 1) % state.filteredData.length;
  renderLightboxImage();
}

function prevLightboxImage() {
  if (!state.isLightboxOpen || state.filteredData.length <= 1) return;
  state.currentLightboxIndex = (state.currentLightboxIndex - 1 + state.filteredData.length) % state.filteredData.length;
  renderLightboxImage();
}

function toggleSlideshow() {
  if (state.isSlideshowRunning) {
    stopSlideshow();
    showToast("Slideshow Paused", "ri-pause-line");
  } else {
    startSlideshow();
    showToast("Slideshow Started (3.5s interval)", "ri-play-line");
  }
}

function startSlideshow() {
  state.isSlideshowRunning = true;
  dom.lbSlideshowBtn.classList.add("playing");
  dom.lbSlideshowBtn.innerHTML = `<i class="ri-pause-line"></i>`;
  dom.lbSlideshowBtn.title = "Pause Slideshow (Space)";
  
  state.slideshowTimer = setInterval(() => {
    nextLightboxImage();
  }, 3500);
}

function stopSlideshow() {
  state.isSlideshowRunning = false;
  if (state.slideshowTimer) {
    clearInterval(state.slideshowTimer);
    state.slideshowTimer = null;
  }
  dom.lbSlideshowBtn.classList.remove("playing");
  dom.lbSlideshowBtn.innerHTML = `<i class="ri-play-line"></i>`;
  dom.lbSlideshowBtn.title = "Start Slideshow (Space)";
}

function renderLightboxThumbnails() {
  dom.lbThumbsContainer.innerHTML = state.filteredData.map((item, index) => `
    <div 
      class="thumb-item ${index === state.currentLightboxIndex ? 'active' : ''}" 
      data-index="${index}"
      title="${item.title}"
    >
      <img src="${item.thumbUrl}" alt="Thumbnail of ${item.title}">
    </div>
  `).join("");

  dom.lbThumbsContainer.querySelectorAll(".thumb-item").forEach(thumb => {
    thumb.addEventListener("click", () => {
      const index = parseInt(thumb.dataset.index, 10);
      if (index !== state.currentLightboxIndex) {
        state.currentLightboxIndex = index;
        renderLightboxImage();
      }
    });
  });

  highlightActiveThumbnail();
}

function highlightActiveThumbnail() {
  const thumbs = dom.lbThumbsContainer.querySelectorAll(".thumb-item");
  thumbs.forEach((thumb, i) => {
    const isActive = i === state.currentLightboxIndex;
    thumb.classList.toggle("active", isActive);
    if (isActive) {
      thumb.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  });
}

function toggleZoom() {
  state.isZoomed = !state.isZoomed;
  dom.lbMediaWrapper.classList.toggle("zoomed", state.isZoomed);
  dom.lbZoomBtn.classList.toggle("active", state.isZoomed);
  dom.lbZoomBtn.innerHTML = `<i class="${state.isZoomed ? 'ri-zoom-out-line' : 'ri-zoom-in-line'}"></i>`;
  showToast(state.isZoomed ? "Zoomed In (1.6x)" : "Zoom Reset", "ri-zoom-in-line");
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().then(() => {
      dom.lbFullscreenBtn.innerHTML = `<i class="ri-fullscreen-exit-line"></i>`;
      showToast("Entered Fullscreen mode", "ri-fullscreen-line");
    }).catch(err => {
      console.warn("Fullscreen error:", err);
    });
  } else {
    document.exitFullscreen().then(() => {
      dom.lbFullscreenBtn.innerHTML = `<i class="ri-fullscreen-line"></i>`;
      showToast("Exited Fullscreen mode", "ri-fullscreen-exit-line");
    }).catch(err => {
      console.warn("Exit fullscreen error:", err);
    });
  }
}

function downloadCurrentImage() {
  const item = state.filteredData[state.currentLightboxIndex];
  if (!item) return;

  const link = document.createElement("a");
  link.href = item.imgUrl;
  link.target = "_blank";
  link.download = `lumina-${item.title.toLowerCase().replace(/\s+/g, "-")}.jpg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast(`Opening high-res photograph: "${item.title}"`, "ri-download-2-line");
}

function initEventListeners() {
  dom.searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    dom.clearSearchBtn.classList.toggle("visible", state.searchQuery.length > 0);
    filterAndRender();
  });

  dom.clearSearchBtn.addEventListener("click", () => {
    dom.searchInput.value = "";
    state.searchQuery = "";
    dom.clearSearchBtn.classList.remove("visible");
    filterAndRender();
    dom.searchInput.focus();
  });

  dom.viewFavoritesPill.addEventListener("click", () => {
    state.showFavoritesOnly = !state.showFavoritesOnly;
    dom.viewFavoritesPill.classList.toggle("active", state.showFavoritesOnly);
    if (state.showFavoritesOnly) {
      showToast(`Filtering ${state.favorites.size} favorited artworks`, "ri-heart-fill");
    } else {
      showToast("Showing all artworks", "ri-gallery-line");
    }
    filterAndRender();
  });

  dom.resetFiltersBtn.addEventListener("click", () => {
    state.activeCategory = "All";
    state.showFavoritesOnly = false;
    state.searchQuery = "";
    dom.searchInput.value = "";
    dom.clearSearchBtn.classList.remove("visible");
    dom.categoryFilters.querySelectorAll(".category-tab").forEach(tab => {
      tab.classList.toggle("active", tab.dataset.category === "All");
    });
    filterAndRender();
    showToast("Filters reset to default", "ri-restart-line");
  });

  dom.shuffleBtn.addEventListener("click", () => {
    state.filteredData.sort(() => Math.random() - 0.5);
    renderGalleryGrid();
    showToast("Gallery shuffled randomly!", "ri-shuffle-line");
  });

  dom.viewMasonry.addEventListener("click", () => {
    if (state.layoutMode === "masonry") return;
    state.layoutMode = "masonry";
    dom.viewMasonry.classList.add("active");
    dom.viewGrid.classList.remove("active");
    dom.galleryGrid.classList.remove("grid-mode");
    dom.galleryGrid.classList.add("masonry-mode");
  });

  dom.viewGrid.addEventListener("click", () => {
    if (state.layoutMode === "grid") return;
    state.layoutMode = "grid";
    dom.viewGrid.classList.add("active");
    dom.viewMasonry.classList.remove("active");
    dom.galleryGrid.classList.remove("masonry-mode");
    dom.galleryGrid.classList.add("grid-mode");
  });

  dom.lbPrevBtn.addEventListener("click", prevLightboxImage);
  dom.lbNextBtn.addEventListener("click", nextLightboxImage);
  dom.lbCloseBtn.addEventListener("click", closeLightbox);
  dom.lightboxBackdrop.addEventListener("click", closeLightbox);
  dom.lbZoomBtn.addEventListener("click", toggleZoom);
  dom.lbSlideshowBtn.addEventListener("click", toggleSlideshow);
  dom.lbFullscreenBtn.addEventListener("click", toggleFullscreen);
  dom.lbDownloadBtn.addEventListener("click", downloadCurrentImage);

  dom.lbFavBtn.addEventListener("click", () => {
    const item = state.filteredData[state.currentLightboxIndex];
    if (item) toggleFavorite(item.id);
  });

  dom.lbImg.addEventListener("dblclick", toggleZoom);

  window.addEventListener("keydown", (e) => {
    if (!state.isLightboxOpen) {
      if (e.key === "/" && document.activeElement !== dom.searchInput) {
        e.preventDefault();
        dom.searchInput.focus();
      }
      return;
    }

    switch (e.key) {
      case " ":
        e.preventDefault();
        toggleSlideshow();
        break;
      case "ArrowRight":
        nextLightboxImage();
        break;
      case "ArrowLeft":
        prevLightboxImage();
        break;
      case "Escape":
        closeLightbox();
        break;
      case "f":
      case "F":
        toggleFullscreen();
        break;
      case "z":
      case "Z":
        toggleZoom();
        break;
      case "l":
      case "L":
        const currentItem = state.filteredData[state.currentLightboxIndex];
        if (currentItem) toggleFavorite(currentItem.id);
        break;
    }
  });

  let touchStartX = 0;
  let touchEndX = 0;

  dom.lightboxOverlay.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  dom.lightboxOverlay.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) prevLightboxImage();
      else nextLightboxImage();
    }
  }, { passive: true });
}

function init() {
  updateHeaderStats();
  renderCategoryFilters();
  initPresetFilters();
  filterAndRender();
  initEventListeners();
}

document.addEventListener("DOMContentLoaded", init);
