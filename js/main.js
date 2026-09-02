(function () {
  "use strict";

  var CATEGORY_LABEL = {
    volcanico: "Volcánico",
    tectonico: "Tectónico",
    fluvial: "Fluvial",
    karstico: "Kárstico",
    glaciar: "Glaciar",
    marino: "Marino"
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

        var img = site.images && site.images[0] ? site.images[0].url : "";

        card.innerHTML =
          '<div class="card__media">' +
            (img ? '<img src="' + img + '" alt="' + site.name + '" loading="lazy">' : "") +
            '<i class="chip chip--' + cat + ' card__ribbon">' + cat.slice(0, 2).toUpperCase() + "</i>" +
          "</div>" +
          '<div class="card__body">' +
            '<h3 class="card__title">' + site.name + "</h3>" +
            '<p class="card__region">' + site.region + "</p>" +
            '<p class="card__teaser">' + site.summary + "</p>" +
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

  /* ---------- modal ---------- */
  var overlay = document.getElementById("modalOverlay");
  var dialog = document.getElementById("modalDialog");
  var closeBtn = document.getElementById("modalClose");
  var lastFocused = null;
  var leafletMap = null;

  function openModal(site, triggerEl) {
    lastFocused = triggerEl || document.activeElement;

    document.getElementById("modalRibbon").textContent = CATEGORY_LABEL[site.category] || site.category;
    document.getElementById("modalRibbon").className = "chip chip--" + site.category + " modal__ribbon";
    document.getElementById("modalTitle").textContent = site.name;
    document.getElementById("modalRegion").textContent = site.region;

    var tags = document.getElementById("modalTags");
    tags.innerHTML =
      '<span class="tag-field">' + formatCoord(site.lat, site.lng) + "</span>" +
      (site.elevation_m ? '<span class="tag-field">' + site.elevation_m + " msnm</span>" : "");

    document.getElementById("modalDesc").textContent = site.summary;

    var gallery = document.getElementById("modalGallery");
    gallery.innerHTML = "";
    var credits = [];
    (site.images || []).forEach(function (im) {
      var im_el = document.createElement("img");
      im_el.src = im.url;
      im_el.alt = site.name;
      im_el.loading = "lazy";
      gallery.appendChild(im_el);
      if (im.credit) credits.push(im.credit);
    });
    document.getElementById("modalCredit").textContent = credits.length
      ? "Fotografías: " + credits.join(" · ")
      : "";

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
      leafletMap.setView([site.lat, site.lng], 12);
      leafletMap._marker.setLatLng([site.lat, site.lng]).bindPopup(site.name);
      leafletMap.invalidateSize();
    });
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !overlay.hidden) closeModal();
  });

  renderGalleries();
})();
