(function () {
  "use strict";

  var CATEGORY_LABEL = {
    volcanico: "Volcánico",
    tectonico: "Tectónico",
    fluvial: "Fluvial",
    karstico: "Kárstico",
    glaciar: "Glaciar / periglacial",
    "sin-clasificar": "Sin clasificar"
  };

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- menú móvil ---------- */
  var navToggle = document.getElementById("navToggle");
  var siteNav = document.getElementById("siteNav");
  navToggle.addEventListener("click", function () {
    var open = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  siteNav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- formato de coordenadas ---------- */
  function formatCoord(lat, lng) {
    var latDir = lat >= 0 ? "N" : "S";
    var lngDir = lng >= 0 ? "E" : "O";
    return Math.abs(lat).toFixed(4) + "° " + latDir + " · " + Math.abs(lng).toFixed(4) + "° " + lngDir;
  }

  function fieldTag(site) {
    var parts = [formatCoord(site.lat, site.lng)];
    if (site.elevation_m) parts.push(site.elevation_m + " msnm");
    return parts.join(" · ");
  }

  // Rango Unicode de marcas diacríticas combinantes (U+0300–U+036F) que deja
  // el paso NFD de normalize() al separar una letra acentuada de su tilde.
  var DIACRITICS_RE = new RegExp("[̀-ͯ]", "g");
  function normalizeText(str) {
    return String(str == null ? "" : str)
      .toLowerCase()
      .normalize("NFD")
      .replace(DIACRITICS_RE, "");
  }

  function escapeHtml(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- render de tarjetas ---------- */
  function renderGalleries() {
    var byCategory = {};
    SITES.forEach(function (s) {
      (byCategory[s.category] = byCategory[s.category] || []).push(s);
    });

    Object.keys(byCategory).forEach(function (cat) {
      var container = document.getElementById("gallery-" + cat);
      if (!container) return;
      container.removeAttribute("data-state");
      container.innerHTML = "";

      byCategory[cat].forEach(function (site) {
        var card = document.createElement("article");
        card.className = "card";
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-haspopup", "dialog");
        card.setAttribute("aria-label", "Ver ficha de " + site.name);
        card.dataset.id = site.id;
        card.dataset.search = normalizeText(
          [site.name, site.region, site.areaProtegida, site.proceso].filter(Boolean).join(" ")
        );

        var initials = cat.slice(0, 2).toUpperCase();

        card.innerHTML =
          '<div class="card__media card__media--placeholder" style="--media-color:var(--c-' + cat + ')">' +
            '<span class="card__monogram" aria-hidden="true">' + initials + "</span>" +
            '<i class="chip chip--' + cat + ' card__ribbon">' + initials + "</i>" +
          "</div>" +
          '<div class="card__body">' +
            '<h3 class="card__title">' + escapeHtml(site.name) + "</h3>" +
            '<p class="card__region">' + escapeHtml(site.region) + "</p>" +
            '<p class="card__teaser">' + escapeHtml(site.summary) + "</p>" +
            '<span class="tag-field">' + fieldTag(site) + "</span>" +
          "</div>";

        card.addEventListener("click", function () { openModal(site, card); });
        card.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openModal(site, card);
          }
        });

        container.appendChild(card);
      });
    });

    observeCards();
  }

  /* ---------- scroll reveal ---------- */
  function observeCards() {
    var cards = document.querySelectorAll(".card:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      cards.forEach(function (c) { c.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    cards.forEach(function (c) { io.observe(c); });
  }

  /* ---------- buscador ---------- */
  var searchInput = document.getElementById("siteSearch");
  var searchCount = document.getElementById("siteSearchCount");

  function applySearch() {
    var term = normalizeText(searchInput.value || "").trim();
    var visible = 0;
    var total = 0;
    document.querySelectorAll(".gallery").forEach(function (gallery) {
      var anyVisible = false;
      gallery.querySelectorAll(".card").forEach(function (card) {
        total++;
        var match = !term || card.dataset.search.indexOf(term) !== -1;
        card.hidden = !match;
        if (match) { visible++; anyVisible = true; }
      });
      var section = gallery.closest(".category");
      if (section) section.hidden = term.length > 0 && !anyVisible;
    });
    if (searchCount) {
      searchCount.textContent = term
        ? "Mostrando " + visible + " de " + total + " sitios"
        : total + " sitios en el catálogo";
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", applySearch);
  }

  /* ---------- modal ---------- */
  var overlay = document.getElementById("modalOverlay");
  var dialog = document.getElementById("modalDialog");
  var closeBtn = document.getElementById("modalClose");
  var lastFocused = null;
  var leafletMap = null;

  function factRow(label, value) {
    if (value === null || value === undefined || value === "") return "";
    return (
      '<div class="fact">' +
        '<span class="fact__label">' + escapeHtml(label) + "</span>" +
        '<span class="fact__value">' + escapeHtml(value) + "</span>" +
      "</div>"
    );
  }

  function openModal(site, triggerEl) {
    lastFocused = triggerEl || document.activeElement;

    document.getElementById("modalRibbon").textContent = CATEGORY_LABEL[site.category] || site.category;
    document.getElementById("modalRibbon").className = "chip chip--" + site.category + " modal__ribbon";
    document.getElementById("modalTitle").textContent = site.name;
    document.getElementById("modalRegion").textContent = site.region;

    var tags = document.getElementById("modalTags");
    tags.innerHTML =
      '<span class="tag-field">' + formatCoord(site.lat, site.lng) + "</span>" +
      (site.elevation_m ? '<span class="tag-field">' + site.elevation_m + " msnm</span>" : "") +
      (site.clasificacion ? '<span class="tag-field">Valor: ' + escapeHtml(site.clasificacion) + "</span>" : "");

    document.getElementById("modalDesc").textContent = site.summary;

    var facts = document.getElementById("modalFacts");
    facts.innerHTML =
      factRow("Área protegida", site.areaProtegida) +
      factRow("Provincia", site.provincia) +
      factRow("Cantón", site.canton) +
      factRow("Distrito", site.distrito) +
      factRow("Proceso geomorfológico", site.proceso) +
      factRow("Carácter", site.caracteristica) +
      factRow("Clasificación de valor", site.clasificacion) +
      factRow("Valor científico", site.valorCientifico != null ? site.valorCientifico.toFixed(2) : "") +
      factRow("Valor añadido", site.valorAnadido != null ? site.valorAnadido.toFixed(2) : "");

    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();

    // Leaflet necesita el contenedor visible antes de inicializar/mover el mapa.
    requestAnimationFrame(function () {
      if (!leafletMap) {
        leafletMap = L.map("modalMap", { scrollWheelZoom: false });
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(leafletMap);
        leafletMap._marker = L.marker([0, 0]).addTo(leafletMap);
      }
      leafletMap.setView([site.lat, site.lng], 13);
      leafletMap._marker.setLatLng([site.lat, site.lng]).bindPopup(site.name);
      leafletMap.invalidateSize();
    });
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  function getFocusable() {
    return Array.prototype.slice.call(
      dialog.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    ).filter(function (el) { return el.offsetParent !== null; });
  }

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (overlay.hidden) return;
    if (e.key === "Escape") { closeModal(); return; }
    if (e.key !== "Tab") return;
    var focusable = getFocusable();
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  renderGalleries();
  applySearch();
})();
