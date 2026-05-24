// =============================================
// NAGASE KL SPORTS PASSPORT — APP LOGIC
// =============================================

const app = document.getElementById("app");

// ---- ROUTER ----
function getRoute() {
  const hash = window.location.hash.slice(1) || "/";
  if (hash.startsWith("/passport/")) {
    const email = decodeURIComponent(hash.replace("/passport/", ""));
    return { page: "passport", email };
  }
  return { page: "home" };
}

function navigate(path) {
  window.location.hash = path;
}

function render() {
  const route = getRoute();
  app.innerHTML = "";

  if (route.page === "passport") {
    const member = findMemberByEmail(route.email);
    if (member) {
      renderPassport(member);
    } else {
      renderNotFound(route.email);
    }
  } else {
    renderHome();
  }
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);

// ---- HELPERS ----
function findMemberByEmail(email) {
  return MEMBERS.find(
    (m) => m.email.toLowerCase() === email.toLowerCase()
  );
}

function searchMembers(query) {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  return MEMBERS.filter(
    (m) => m.name.toLowerCase().includes(q)
  ).slice(0, 6);
}

function getStampCount(member) {
  return member.stamps.length;
}

function getClass(stampCount) {
  if (stampCount >= 18) return "Global Ambassador";
  if (stampCount >= 15) return "World Explorer";
  if (stampCount >= 10) return "Active Explorer";
  return "Traveller";
}

// ---- HOME PAGE ----
function renderHome() {
  const html = `
    <div class="home">
      <div class="home-container">
        <h1 class="home-title">Nagase KL<br>Global Passport</h1>
        <p class="home-subtitle">18 Countries. 18 Adventures. 1 Extraordinary Year.</p>

        <div class="home-icons">
          <span>✈️</span>
          <span>🌏</span>
          <span>🏅</span>
          <span>🎯</span>
        </div>

        <div class="login-card">
          <h2>Welcome Back</h2>
          <p>Your next destination awaits! Enter your name to continue.</p>

          <div class="search-wrapper">
            <label class="search-label">Your Name</label>
            <div class="search-input-wrapper">
              <span class="icon">👤</span>
              <input
                type="text"
                class="search-input"
                id="searchInput"
                placeholder="Search by name..."
                autocomplete="off"
              />
            </div>
            <div class="search-dropdown" id="searchDropdown"></div>
          </div>

          <button class="btn-view" id="btnView">
            View Passport <span>→</span>
          </button>

          <div class="error-message" id="errorMsg">
            Member not found. Please check your name and try again.
          </div>
        </div>

        <div class="home-footer">
          <span>Nagase KL</span>
          <span>Sports Club</span>
        </div>
      </div>
    </div>
  `;

  app.innerHTML = html;
  initSearch();
}

function initSearch() {
  const input = document.getElementById("searchInput");
  const dropdown = document.getElementById("searchDropdown");
  const btn = document.getElementById("btnView");
  const errorMsg = document.getElementById("errorMsg");
  let selectedMember = null;
  let highlightIndex = -1;

  function updateDropdown() {
    const query = input.value.trim();
    const results = searchMembers(query);
    errorMsg.classList.remove("active");

    if (results.length === 0) {
      dropdown.classList.remove("active");
      dropdown.innerHTML = "";
      highlightIndex = -1;
      selectedMember = null;
      return;
    }

    selectedMember = null;
    highlightIndex = -1;

    dropdown.innerHTML = results
      .map(
        (m, i) => `
      <div class="search-dropdown-item" data-index="${i}" data-email="${m.email}">
        <div class="item-name">${highlightMatch(m.name, query)}</div>
      </div>
    `
      )
      .join("");

    dropdown.classList.add("active");

    dropdown.querySelectorAll(".search-dropdown-item").forEach((item) => {
      item.addEventListener("click", () => {
        const email = item.dataset.email;
        navigate("/passport/" + encodeURIComponent(email));
      });
    });
  }

  function highlightMatch(text, query) {
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return escapeHtml(text);
    const before = text.slice(0, idx);
    const match = text.slice(idx, idx + query.length);
    const after = text.slice(idx + query.length);
    return escapeHtml(before) + "<strong>" + escapeHtml(match) + "</strong>" + escapeHtml(after);
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  input.addEventListener("input", updateDropdown);

  input.addEventListener("keydown", (e) => {
    const items = dropdown.querySelectorAll(".search-dropdown-item");

    if (e.key === "ArrowDown") {
      e.preventDefault();
      highlightIndex = Math.min(highlightIndex + 1, items.length - 1);
      updateHighlight(items);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      highlightIndex = Math.max(highlightIndex - 1, 0);
      updateHighlight(items);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightIndex >= 0 && items[highlightIndex]) {
        const email = items[highlightIndex].dataset.email;
        navigate("/passport/" + encodeURIComponent(email));
      } else {
        handleViewClick();
      }
    }
  });

  function updateHighlight(items) {
    items.forEach((item, i) => {
      item.classList.toggle("highlighted", i === highlightIndex);
    });
    if (highlightIndex >= 0 && items[highlightIndex]) {
      selectedMember = MEMBERS.find(
        (m) => m.email === items[highlightIndex].dataset.email
      );
    }
  }

  function handleViewClick() {
    const query = input.value.trim().toLowerCase();
    if (!query) return;

    // Try exact name match
    const byName = MEMBERS.find((m) => m.name.toLowerCase() === query);
    if (byName) {
      navigate("/passport/" + encodeURIComponent(byName.email));
      return;
    }

    // Try single search result
    const results = searchMembers(query);
    if (results.length === 1) {
      navigate("/passport/" + encodeURIComponent(results[0].email));
      return;
    }

    // No match
    errorMsg.classList.add("active");
  }

  btn.addEventListener("click", handleViewClick);

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrapper")) {
      dropdown.classList.remove("active");
    }
  });
}

// ---- PASSPORT PAGE ----
function renderPassport(member) {
  const stampCount = getStampCount(member);
  const memberClass = getClass(stampCount);

  const html = `
    <div class="passport">
      <div class="passport-topbar">
        <button class="btn-back" onclick="navigate('/')" title="Back to Home">← </button>
        <span class="topbar-icon">📘</span>
        <span class="topbar-title">Nagase KL</span>
      </div>

      <div class="passport-content">
        <div class="passport-info">
          <!-- Progress Banner -->
          <div class="progress-banner">
            <div class="progress-label">Official Journey Tracking</div>
            <div class="progress-count">${stampCount}<span> of ${COUNTRIES.length}</span></div>
            <div class="progress-title">Destinations Unlocked</div>

            <div class="progress-dots">
              ${COUNTRIES.map(
                (c) =>
                  `<div class="progress-dot ${member.stamps.includes(c.id) ? "completed" : ""}" title="${c.released ? c.name : "???"}"></div>`
              ).join("")}
            </div>
          </div>

          <!-- Passenger Card -->
          <div class="passenger-card">
            <div class="passenger-label">Passenger</div>
            <div class="passenger-name">${escapeHtmlSafe(member.name)}</div>
            <div class="passenger-row">
              <div class="passenger-field">
                <div class="passenger-label">Class</div>
                <div class="passenger-value">${memberClass}</div>
              </div>
              <div class="passenger-field">
                <div class="passenger-label">Passport No.</div>
                <div class="passenger-value">NKL-${String(MEMBERS.indexOf(member) + 1).padStart(3, "0")}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stamps Grid -->
        <div class="stamps-grid">
          ${COUNTRIES.map((c) => {
            const completed = member.stamps.includes(c.id);
            const isReleased = c.released;

            if (!isReleased) {
              return `
                <div class="stamp-card locked">
                  <div class="stamp-lock">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </div>
                </div>
              `;
            }

            const photoCount = PHOTOS[c.id] ? PHOTOS[c.id].length : 0;
            const state = completed ? "completed" : "released";
            const stampImg = completed && c.stamp
              ? `<img class="stamp-image" src="stamps/${c.stamp}" alt="${c.name}" />`
              : `<img class="stamp-image stamp-missed" src="stamps/flight-missed.svg" alt="Flight Missed" />`;

            return `
              <div class="stamp-card ${state}${photoCount ? " has-gallery" : ""}" ${photoCount ? `onclick="openGallery(${c.id})"` : ""}>
                ${stampImg}
                <div class="stamp-country">${c.name}</div>
                ${c.month ? `<div class="stamp-month">${c.month}</div>` : ""}
                ${photoCount ? `
                  <div class="gallery-badge">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M20 5h-2.83L15 3H9L6.83 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                    ${photoCount}
                  </div>
                ` : ""}
              </div>
            `;
          }).join("")}
        </div>
      </div>
    </div>
  `;

  app.innerHTML = html;
  animateCompletedStamps();
}

function animateCompletedStamps() {
  const allCards = app.querySelectorAll(".stamp-card");
  allCards.forEach((card, index) => {
    if (!card.classList.contains("completed")) return;
    const img = card.querySelector(".stamp-image");
    if (!img) return;
    img.style.opacity = "0";
    // Card fadeInUp delay: (index+1)*50ms + 400ms duration
    const delay = (index + 1) * 50 + 400;
    setTimeout(() => {
      img.style.opacity = "";
      img.style.animation = "stampIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both";
      playStampSound();
    }, delay);
  });
}

function playStampSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const sampleRate = ctx.sampleRate;
    const duration = 0.18;
    const buffer = ctx.createBuffer(1, sampleRate * duration, sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      const t = i / sampleRate;
      // Low thud + noise burst
      data[i] =
        Math.sin(2 * Math.PI * 75 * t) * Math.exp(-t * 35) * 0.7 +
        (Math.random() * 2 - 1) * Math.exp(-t * 50) * 0.4;
    }
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.8, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    source.connect(gain);
    gain.connect(ctx.destination);
    source.start();
    source.onended = () => ctx.close();
  } catch (e) {
    // Audio not available, skip silently
  }
}

// ---- NOT FOUND PAGE ----
function renderNotFound(email) {
  const html = `
    <div class="not-found">
      <div class="not-found-icon">🔍</div>
      <h2>Passport Not Found</h2>
      <p>We couldn't find a passport for "${escapeHtmlSafe(email)}". Please check and try again.</p>
      <button class="btn-home" onclick="navigate('/')">Back to Home</button>
    </div>
  `;

  app.innerHTML = html;
}

function escapeHtmlSafe(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ---- GALLERY ----
function openGallery(countryId) {
  const photos = PHOTOS[countryId] || [];
  if (!photos.length) return;
  const country = COUNTRIES.find((c) => c.id === countryId);

  const modal = document.createElement("div");
  modal.className = "gallery-modal";
  modal.innerHTML = `
    <div class="gallery-inner">
      <div class="gallery-header">
        <div>
          <div class="gallery-title">${country.name}</div>
          <div class="gallery-subtitle">${country.month} · ${photos.length} photos</div>
        </div>
        <button class="gallery-close" onclick="closeGallery()">✕</button>
      </div>
      <div class="gallery-grid">
        ${photos.map((src, i) => `
          <div class="gallery-thumb" onclick="openLightbox(${countryId}, ${i})">
            <img src="${src}" alt="Photo ${i + 1}" loading="lazy" />
          </div>
        `).join("")}
      </div>
    </div>
  `;

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeGallery();
  });

  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.classList.add("active"));
  document.addEventListener("keydown", handleGalleryKey);
}

function closeGallery() {
  const modal = document.querySelector(".gallery-modal");
  if (!modal) return;
  modal.classList.remove("active");
  setTimeout(() => modal.remove(), 280);
  document.removeEventListener("keydown", handleGalleryKey);
}

function openLightbox(countryId, index) {
  const photos = PHOTOS[countryId];
  const existing = document.querySelector(".gallery-lightbox");
  if (existing) existing.remove();

  const lb = document.createElement("div");
  lb.className = "gallery-lightbox";
  lb.dataset.countryId = countryId;
  lb.dataset.index = index;
  lb.innerHTML = `
    <button class="lb-close" onclick="closeLightbox()">✕</button>
    <button class="lb-prev" onclick="lightboxNav(-1)">&#8249;</button>
    <div class="lb-img-wrap">
      <img class="lb-img" src="${photos[index]}" alt="Photo ${index + 1}" />
    </div>
    <button class="lb-next" onclick="lightboxNav(1)">&#8250;</button>
    <div class="lb-counter">${index + 1} / ${photos.length}</div>
  `;

  lb.addEventListener("click", (e) => {
    if (e.target === lb || e.target.classList.contains("lb-img-wrap")) closeLightbox();
  });

  document.querySelector(".gallery-modal").appendChild(lb);
  requestAnimationFrame(() => lb.classList.add("active"));
}

function closeLightbox() {
  const lb = document.querySelector(".gallery-lightbox");
  if (lb) lb.remove();
}

function lightboxNav(dir) {
  const lb = document.querySelector(".gallery-lightbox");
  if (!lb) return;
  const countryId = parseInt(lb.dataset.countryId);
  const photos = PHOTOS[countryId];
  const index = (parseInt(lb.dataset.index) + dir + photos.length) % photos.length;
  lb.dataset.index = index;
  lb.querySelector(".lb-img").src = photos[index];
  lb.querySelector(".lb-counter").textContent = `${index + 1} / ${photos.length}`;
}

function handleGalleryKey(e) {
  if (e.key === "Escape") {
    if (document.querySelector(".gallery-lightbox")) { closeLightbox(); return; }
    closeGallery();
  }
  if (e.key === "ArrowLeft")  lightboxNav(-1);
  if (e.key === "ArrowRight") lightboxNav(1);
}
