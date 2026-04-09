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
    (m) =>
      m.name.toLowerCase().includes(q) ||
      m.email.toLowerCase().includes(q)
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
          <p>Your next destination awaits! Enter your name or email to continue.</p>

          <div class="search-wrapper">
            <label class="search-label">Name or Company Email Address</label>
            <div class="search-input-wrapper">
              <span class="icon">📧</span>
              <input
                type="text"
                class="search-input"
                id="searchInput"
                placeholder="name@nagase.com.my"
                autocomplete="off"
              />
            </div>
            <div class="search-dropdown" id="searchDropdown"></div>
          </div>

          <button class="btn-view" id="btnView">
            View Passport <span>→</span>
          </button>

          <div class="error-message" id="errorMsg">
            Member not found. Please check your name or email and try again.
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
        <div class="item-email">${highlightMatch(m.email, query)}</div>
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

    // Try exact email match first
    const byEmail = MEMBERS.find((m) => m.email.toLowerCase() === query);
    if (byEmail) {
      navigate("/passport/" + encodeURIComponent(byEmail.email));
      return;
    }

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
                  <div class="stamp-lock">?</div>
                  <div class="stamp-country">???</div>
                  <div class="stamp-activity">Coming Soon</div>
                </div>
              `;
            }

            const state = completed ? "completed" : "released";
            const stampImg = c.stamp
              ? `<img class="stamp-image" src="stamps/${c.stamp}" alt="${c.name}" />`
              : `<div class="stamp-placeholder"></div>`;

            return `
              <div class="stamp-card ${state}">
                ${completed ? '<span class="stamp-badge">Done</span>' : ""}
                ${stampImg}
                <div class="stamp-country">${c.name}</div>
                <div class="stamp-activity">${c.activity}</div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    </div>
  `;

  app.innerHTML = html;
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
