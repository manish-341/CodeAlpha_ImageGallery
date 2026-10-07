/**
 * ====================================================================
 * LUMINA GALLERY — JAVASCRIPT ENGINE
 * CodeAlpha Frontend Internship Task 1: Image Gallery
 * Features:
 *   - Curated high-resolution photo dataset across multiple categories
 *   - Category filtering with count badges (Bonus Feature)
 *   - Real-time instant search (title, tags, location, photographer)
 *   - Masonry vs. Uniform Grid layout switcher
 *   - Comprehensive Lightbox modal viewer:
 *       • Next / Previous navigation with smooth transitions
 *       • Keyboard shortcuts (Arrows, Esc, F for fullscreen, Z for zoom)
 *       • Bottom interactive thumbnail filmstrip
 *       • Image zoom & pan toggle
 *       • HTML5 Fullscreen API integration
 *       • Touch swipe support for mobile/tablets
 *       • Like / Favorite system with LocalStorage persistence
 *       • High-res download trigger & toast notifications
 * ====================================================================
 */

// --- Curated Image Dataset ---
const GALLERY_DATA = [
  {
    id: 1,
    title: "Misty Alpine Ridge",
    category: "Nature",
    author: "Luca Bravo",
    location: "Dolomites, Italy",
    tags: ["mountain", "alps", "fog", "morning", "hiking"],
    aspectRatio: "3/4",
    imgUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Cyberpunk Alley",
    category: "Neon & City",
    author: "Aleksandar Pasaric",
    location: "Shinjuku, Tokyo",
    tags: ["tokyo", "japan", "neon", "cyberpunk", "night", "rain"],
    aspectRatio: "4/5",
    imgUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Parametric Architecture",
    category: "Architecture",
    author: "Victor Garcia",
    location: "Valencia, Spain",
    tags: ["architecture", "curves", "modern", "minimal", "white"],
    aspectRatio: "16/9",
    imgUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Emerald Forest Canopy",
    category: "Nature",
    author: "Casey Horner",
    location: "Redwoods, California",
    tags: ["forest", "trees", "redwoods", "green", "sunlight"],
    aspectRatio: "4/5",
    imgUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Geometric Spiral Staircase",
    category: "Architecture",
    author: "Ludwig Wallendorff",
    location: "Berlin, Germany",
    tags: ["stairs", "spiral", "monochrome", "geometry", "interior"],
    aspectRatio: "3/4",
    imgUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Crimson Horizon Dunes",
    category: "Nature",
    author: "Jeremy Bishop",
    location: "Sahara Desert, Morocco",
    tags: ["desert", "sand", "dunes", "sunset", "warm"],
    aspectRatio: "16/9",
    imgUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    title: "Neon Rain Reflections",
    category: "Neon & City",
    author: "Sean Foley",
    location: "Hong Kong",
    tags: ["hong kong", "neon", "rain", "puddle", "glow", "night"],
    aspectRatio: "3/4",
    imgUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    title: "Arctic Fox in Blizzard",
    category: "Wildlife",
    author: "Jonatan Pie",
    location: "Svalbard, Norway",
    tags: ["fox", "arctic", "winter", "snow", "animal", "wildlife"],
    aspectRatio: "4/5",
    imgUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    title: "Futuristic Glass Facade",
    category: "Architecture",
    author: "Simone Hutsch",
    location: "London, UK",
    tags: ["facade", "skyscrapers", "glass", "modern", "blue"],
    aspectRatio: "1/1",
    imgUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    title: "Solitary Dune Tree",
    category: "Minimalist",
    author: "Federico Respini",
    location: "Namib-Naukluft, Namibia",
    tags: ["minimal", "solitude", "tree", "desert", "clean", "calm"],
    aspectRatio: "16/9",
    imgUrl: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    title: "Bengal Tiger in Solitude",
    category: "Wildlife",
    author: "Frida Bredesen",
    location: "Ranthambore, India",
    tags: ["tiger", "wildlife", "animal", "stripes", "fierce"],
    aspectRatio: "3/4",
    imgUrl: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    title: "Prismatic Concrete Forms",
    category: "Minimalist",
    author: "Ricardo Gomez",
    location: "Brasília, Brazil",
    tags: ["minimal", "brutalism", "shadow", "sun", "monochrome"],
    aspectRatio: "4/5",
    imgUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 13,
    title: "Midnight Milky Way",
    category: "Nature",
    author: "Bailey Zindel",
    location: "Banff, Canada",
    tags: ["stars", "night", "astronomy", "lake", "mountains", "galaxy"],
    aspectRatio: "16/9",
    imgUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    title: "Vibrant Shibuya Crossing",
    category: "Neon & City",
    author: "Jezael Melgoza",
    location: "Shibuya, Tokyo",
    tags: ["crossing", "city", "lights", "crowd", "tokyo", "street"],
    aspectRatio: "3/4",
    imgUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15,
    title: "Majestic Humpback Whale",
    category: "Wildlife",
    author: "Todd Cravens",
    location: "Maui, Hawaii",
    tags: ["whale", "ocean", "sea", "underwater", "wildlife", "blue"],
    aspectRatio: "16/9",
    imgUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85",
    thumbUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"
  }
];

// --- State Management ---
const state = {
  activeCategory: "All",
  searchQuery: "",
  layoutMode: "masonry", // 'masonry' or 'grid'
  currentLightboxIndex: 0,
  isLightboxOpen: false,
  isZoomed: false,
  favorites: new Set(JSON.parse(localStorage.getItem("lumina_favorites") || "[]")),
  filteredData: [...GALLERY_DATA]
};

// --- DOM Element Selectors ---
const dom = {
  galleryGrid: document.getElementById("gallery-grid"),
  categoryFilters: document.getElementById("category-filters"),
  searchInput: document.getElementById("search-input"),
  clearSearchBtn: document.getElementById("clear-search-btn"),
  resultsCount: document.getElementById("results-count"),
  totalCountBadge: document.getElementById("total-count-badge"),
  favoritesCountBadge: document.getElementById("favorites-count-badge"),
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
  lbFullscreenBtn: document.getElementById("lb-fullscreen-btn"),
  lbDownloadBtn: document.getElementById("lb-download-btn"),
  lbCurrentIndex: document.getElementById("lb-current-index"),
  lbTotalCount: document.getElementById("lb-total-count"),
  lbCategory: document.getElementById("lb-category"),
  lbTitle: document.getElementById("lb-title"),
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
  }, 2800);
}

// --- Category Extraction & Rendering ---
function renderCategoryFilters() {
  const categories = ["All", ...new Set(GALLERY_DATA.map(item => item.category))];
  
  dom.categoryFilters.innerHTML = categories.map(cat => {
    const count = cat === "All" 
      ? GALLERY_DATA.length 
      : GALLERY_DATA.filter(i => i.category === cat).length;
    
    const icon = getCategoryIcon(cat);
    const isActive = cat === state.activeCategory ? "active" : "";

    return `
      <button class="category-tab ${isActive}" data-category="${cat}">
        <i class="${icon}"></i>
        <span>${cat}</span>
        <span class="count-badge">${count}</span>
      </button>
    `;
  }).join("");

  // Attach event listeners to tabs
  dom.categoryFilters.querySelectorAll(".category-tab").forEach(tab => {
    tab.addEventListener("click", () => {
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

// --- Filter and Search Logic ---
function filterAndRender() {
  const query = state.searchQuery.toLowerCase().trim();

  state.filteredData = GALLERY_DATA.filter(item => {
    const matchesCategory = state.activeCategory === "All" || item.category === state.activeCategory;
    const matchesSearch = !query || (
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.author.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query))
    );
    return matchesCategory && matchesSearch;
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

  // Create cards
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
          <div class="card-overlay">
            <div class="card-top">
              <span class="card-category-tag">${item.category}</span>
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
                  <i class="ri-camera-lens-line"></i> ${item.author}
                </span>
                <span class="card-zoom-hint">
                  <i class="ri-zoom-in-line"></i> View
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

// --- Card Interactions (Click & Keyboard Enter) ---
function attachCardEvents() {
  const cards = dom.galleryGrid.querySelectorAll(".gallery-card");
  
  cards.forEach(card => {
    // Open lightbox on card click
    card.addEventListener("click", (e) => {
      // Avoid opening lightbox if clicking the favorite button inside card
      if (e.target.closest(".card-fav-btn")) {
        const btn = e.target.closest(".card-fav-btn");
        const id = parseInt(btn.dataset.id, 10);
        toggleFavorite(id);
        return;
      }

      const index = parseInt(card.dataset.index, 10);
      openLightbox(index);
    });

    // Support Enter or Space key for accessibility
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

  // Persist to localStorage
  localStorage.setItem("lumina_favorites", JSON.stringify([...state.favorites]));
  updateHeaderStats();
  
  // Re-sync active cards
  const favBtns = document.querySelectorAll(`.card-fav-btn[data-id="${id}"]`);
  favBtns.forEach(btn => {
    const isFav = state.favorites.has(id);
    btn.classList.toggle("favorited", isFav);
    btn.innerHTML = `<i class="${isFav ? 'ri-heart-fill' : 'ri-heart-line'}"></i>`;
  });

  // Re-sync lightbox fav button if currently viewing this item
  if (state.isLightboxOpen) {
    const currentItem = state.filteredData[state.currentLightboxIndex];
    if (currentItem && currentItem.id === id) {
      updateLightboxFavBtn();
    }
  }
}

function updateHeaderStats() {
  dom.totalCountBadge.textContent = `${GALLERY_DATA.length} Photos`;
  dom.favoritesCountBadge.textContent = `${state.favorites.size} Favorites`;
}

function updateStatusBar() {
  const count = state.filteredData.length;
  if (state.searchQuery) {
    dom.resultsCount.textContent = `Showing ${count} result${count === 1 ? '' : 's'} for "${state.searchQuery}"`;
  } else if (state.activeCategory !== "All") {
    dom.resultsCount.textContent = `Showing ${count} photo${count === 1 ? '' : 's'} in ${state.activeCategory}`;
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
  document.body.style.overflow = "hidden"; // Prevent background scroll

  renderLightboxImage();
  renderLightboxThumbnails();
}

function closeLightbox() {
  state.isLightboxOpen = false;
  state.isZoomed = false;
  dom.lbMediaWrapper.classList.remove("zoomed");
  dom.lbZoomBtn.classList.remove("active");
  dom.lightboxOverlay.classList.add("hidden");
  document.body.style.overflow = "";

  // Exit fullscreen if active
  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  }
}

function renderLightboxImage() {
  const item = state.filteredData[state.currentLightboxIndex];
  if (!item) return;

  // Reset zoom state
  state.isZoomed = false;
  dom.lbMediaWrapper.classList.remove("zoomed");
  dom.lbZoomBtn.classList.remove("active");

  // Show loading spinner & fade out previous image
  dom.lbSpinner.classList.add("active");
  dom.lbImg.style.opacity = "0";

  // Preload high-res image
  const highRes = new Image();
  highRes.src = item.imgUrl;
  highRes.onload = () => {
    dom.lbImg.src = item.imgUrl;
    dom.lbImg.alt = item.title;
    dom.lbSpinner.classList.remove("active");
    dom.lbImg.style.opacity = "1";
  };
  highRes.onerror = () => {
    // Graceful fallback to thumbUrl if high-res fails
    dom.lbImg.src = item.thumbUrl;
    dom.lbSpinner.classList.remove("active");
    dom.lbImg.style.opacity = "1";
  };

  // Update counters & details
  dom.lbCurrentIndex.textContent = state.currentLightboxIndex + 1;
  dom.lbTotalCount.textContent = state.filteredData.length;
  dom.lbCategory.textContent = item.category;
  dom.lbTitle.textContent = item.title;
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

// Lightbox Thumbnail Filmstrip
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

// Toggle Image Zoom
function toggleZoom() {
  state.isZoomed = !state.isZoomed;
  dom.lbMediaWrapper.classList.toggle("zoomed", state.isZoomed);
  dom.lbZoomBtn.classList.toggle("active", state.isZoomed);
  dom.lbZoomBtn.innerHTML = `<i class="${state.isZoomed ? 'ri-zoom-out-line' : 'ri-zoom-in-line'}"></i>`;
  showToast(state.isZoomed ? "Zoomed In (1.6x)" : "Zoom Reset", "ri-zoom-in-line");
}

// Toggle Fullscreen API
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().then(() => {
      dom.lbFullscreenBtn.innerHTML = `<i class="ri-fullscreen-exit-line"></i>`;
      showToast("Entered Fullscreen mode", "ri-fullscreen-line");
    }).catch(err => {
      console.warn("Fullscreen request error:", err);
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

// Download High-Res Image
function downloadCurrentImage() {
  const item = state.filteredData[state.currentLightboxIndex];
  if (!item) return;

  // Open high-res in new tab or trigger download
  const link = document.createElement("a");
  link.href = item.imgUrl;
  link.target = "_blank";
  link.download = `lumina-${item.title.toLowerCase().replace(/\s+/g, "-")}.jpg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast(`Opening high-res image: "${item.title}"`, "ri-download-2-line");
}

// ====================================================================
// EVENT LISTENERS & INITIALIZATION
// ====================================================================

function initEventListeners() {
  // Search Input with debounce/immediate feedback
  dom.searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    dom.clearSearchBtn.classList.toggle("visible", state.searchQuery.length > 0);
    filterAndRender();
  });

  // Clear Search Button
  dom.clearSearchBtn.addEventListener("click", () => {
    dom.searchInput.value = "";
    state.searchQuery = "";
    dom.clearSearchBtn.classList.remove("visible");
    filterAndRender();
    dom.searchInput.focus();
  });

  // Reset Filters from Empty State
  dom.resetFiltersBtn.addEventListener("click", () => {
    state.activeCategory = "All";
    state.searchQuery = "";
    dom.searchInput.value = "";
    dom.clearSearchBtn.classList.remove("visible");
    dom.categoryFilters.querySelectorAll(".category-tab").forEach(tab => {
      tab.classList.toggle("active", tab.dataset.category === "All");
    });
    filterAndRender();
    showToast("Filters reset to default", "ri-restart-line");
  });

  // Shuffle / Randomize
  dom.shuffleBtn.addEventListener("click", () => {
    state.filteredData.sort(() => Math.random() - 0.5);
    renderGalleryGrid();
    showToast("Gallery shuffled randomly!", "ri-shuffle-line");
  });

  // Layout View Switchers (Masonry vs Grid)
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

  // Lightbox Navigation Controls
  dom.lbPrevBtn.addEventListener("click", prevLightboxImage);
  dom.lbNextBtn.addEventListener("click", nextLightboxImage);
  dom.lbCloseBtn.addEventListener("click", closeLightbox);
  dom.lightboxBackdrop.addEventListener("click", closeLightbox);
  dom.lbZoomBtn.addEventListener("click", toggleZoom);
  dom.lbFullscreenBtn.addEventListener("click", toggleFullscreen);
  dom.lbDownloadBtn.addEventListener("click", downloadCurrentImage);

  dom.lbFavBtn.addEventListener("click", () => {
    const item = state.filteredData[state.currentLightboxIndex];
    if (item) toggleFavorite(item.id);
  });

  // Double click image to zoom
  dom.lbImg.addEventListener("dblclick", toggleZoom);

  // Global Keyboard Shortcuts
  window.addEventListener("keydown", (e) => {
    if (!state.isLightboxOpen) {
      // Focus search if user presses "/"
      if (e.key === "/" && document.activeElement !== dom.searchInput) {
        e.preventDefault();
        dom.searchInput.focus();
      }
      return;
    }

    switch (e.key) {
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

  // Touch Swipe Support for Mobile/Tablets
  let touchStartX = 0;
  let touchEndX = 0;

  dom.lightboxOverlay.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  dom.lightboxOverlay.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
  }, { passive: true });

  function handleSwipeGesture() {
    const diff = touchEndX - touchStartX;
    const threshold = 50; // min swipe distance in px
    if (Math.abs(diff) < threshold) return;

    if (diff > 0) {
      // Swiped right -> previous image
      prevLightboxImage();
    } else {
      // Swiped left -> next image
      nextLightboxImage();
    }
  }
}

// --- Application Entry Point ---
function init() {
  updateHeaderStats();
  renderCategoryFilters();
  filterAndRender();
  initEventListeners();
}

// Boot up once DOM is loaded
document.addEventListener("DOMContentLoaded", init);
