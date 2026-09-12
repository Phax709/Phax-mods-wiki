// ===== Sidebar toggle (mobile) =====
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('visible');
});

overlay.addEventListener('click', () => {
  menuBtn.classList.remove('active');
  sidebar.classList.remove('open');
  overlay.classList.remove('visible');
});

// ===== Sidebar sub-menu toggles =====
document.querySelectorAll('.sidebar-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    const sub = btn.nextElementSibling;
    sub.classList.toggle('open');
  });
});

// ===== Dynamic sidebar mod list =====
(function buildSidebarMods() {
  const sectionTitle = document.querySelector('.sidebar-section-title[data-i18n="nav.mods"]');
  if (!sectionTitle) return;
  const depth = parseInt(document.querySelector('meta[name="page-depth"]')?.content || '0');
  const rootPrefix = '../'.repeat(depth);
  const modPrefix = rootPrefix + 'pages/mods/';
  const currentPage = window.location.pathname.split('/').pop();
  const ul = sectionTitle.closest('ul');
  modsRegistry.forEach(mod => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = modPrefix + mod.page;
    a.textContent = mod.emoji + ' ' + mod.name;
    if (currentPage === mod.page) a.classList.add('active');
    li.appendChild(a);
    ul.appendChild(li);
  });

  // Also handle 404 page sidebar (mods in sub-menu)
  const sidebarModsSub = document.getElementById('sidebarModsSub');
  if (sidebarModsSub) {
    modsRegistry.forEach(mod => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = modPrefix + mod.page;
      a.textContent = mod.emoji + ' ' + mod.name;
      li.appendChild(a);
      sidebarModsSub.appendChild(li);
    });
  }
})();

// ===== Dynamic homepage cards =====
(function buildHomepageCards() {
  const cardGrid = document.getElementById('modCardsGrid');
  if (!cardGrid) return;
  modsRegistry.forEach(mod => {
    const a = document.createElement('a');
    a.href = 'pages/mods/' + mod.page;
    a.className = 'card';
    a.setAttribute('data-mod-id', mod.id);
    const iconDiv = document.createElement('div');
    iconDiv.className = 'card-icon';
    iconDiv.textContent = mod.emoji;
    const h3 = document.createElement('h3');
    h3.textContent = mod.name;
    const p = document.createElement('p');
    p.setAttribute('data-i18n', mod.cardDescKey);
    // Default text (will be replaced by i18n)
    p.textContent = mod.name;
    a.appendChild(iconDiv);
    a.appendChild(h3);
    a.appendChild(p);
    cardGrid.appendChild(a);
  });
  // Re-apply i18n to new elements
  if (typeof i18n !== 'undefined' && i18n.applyAll) i18n.applyAll();
})();

// ===== Search =====
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

function clearDesktopSearch() {
  if (!searchInput || !searchResults) return;
  searchInput.value = '';
  searchResults.classList.remove('visible');
  searchResults.innerHTML = '';
}

// Mobile search: add loupe button + overlay
(function initMobileSearch() {
  // Create mobile search button (loupe)
  const searchBtn = document.createElement('button');
  searchBtn.className = 'mobile-search-btn';
  searchBtn.innerHTML = '🔍';
  searchBtn.setAttribute('aria-label', 'Rechercher');
  const header = document.querySelector('.header');
  const langBtn = document.getElementById('langToggle');
  if (header && langBtn) header.insertBefore(searchBtn, langBtn);

  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'search-overlay';
  overlay.innerHTML =
    '<div class="search-overlay-header">' +
      '<input type="text" id="mobileSearchInput" placeholder="Rechercher un mod..." autocomplete="off">' +
      '<button class="search-overlay-close">&times;</button>' +
    '</div>' +
    '<div class="search-overlay-results" id="mobileSearchResults"></div>';
  document.body.appendChild(overlay);

  const mobileInput = document.getElementById('mobileSearchInput');
  const mobileResults = document.getElementById('mobileSearchResults');
  const closeBtn = overlay.querySelector('.search-overlay-close');

  searchBtn.addEventListener('click', () => {
    overlay.classList.add('active');
    mobileInput.value = '';
    mobileResults.innerHTML = '';
    setTimeout(() => mobileInput.focus(), 50);
  });

  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
    mobileInput.value = '';
    mobileResults.innerHTML = '';
  });

  mobileResults.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link) {
      mobileInput.value = '';
      mobileResults.innerHTML = '';
    }
  });

  mobileInput.addEventListener('input', async () => {
    const query = mobileInput.value.trim().toLowerCase();
    if (query.length < 2) { mobileResults.innerHTML = ''; return; }

    // Lazy load wiki index on first search
    if (!wikiIndexLoaded) await loadWikiSearchIndex();

    const lang = (typeof i18n !== 'undefined') ? i18n.currentLang : 'fr';
    const depth = parseInt(document.querySelector('meta[name="page-depth"]')?.content || '0');
    const prefix = depth === 0 ? '' : '../'.repeat(depth);

    // Mod results
    const modHits = modsSearchData.filter(mod =>
      mod.name.toLowerCase().includes(query)
      || mod.category.toLowerCase().includes(query)
      || mod.tags.some(tag => tag.includes(query))
    );

    // Wiki item results
    const wikiHits = wikiSearchIndex.filter(item => {
      const name = (lang === 'fr' ? item.name_fr : item.name_en).toLowerCase();
      const desc = (lang === 'fr' ? item.desc_fr : item.desc_en).toLowerCase();
      return name.includes(query) || desc.includes(query);
    }).slice(0, 8);

    if (modHits.length === 0 && wikiHits.length === 0) {
      const noResultText = (typeof i18n !== 'undefined') ? i18n.get('search.no_result') : 'Aucun résultat';
      mobileResults.innerHTML = '<div class="no-result">' + noResultText + '</div>';
    } else {
      let html = '';
      html += modHits.map(mod =>
        '<a href="' + prefix + encodeURI(mod.url) + '">' + mod.name + ' <small style="color:var(--text-muted)">— ' + mod.category + '</small></a>'
      ).join('');
      if (wikiHits.length > 0 && modHits.length > 0) {
        html += '<div class="search-divider"></div>';
      }
      html += wikiHits.map(item => {
        const name = lang === 'fr' ? item.name_fr : item.name_en;
        return '<a href="' + prefix + encodeURI(item.page) + '#wiki=' + encodeURIComponent(item.id) + '">' + name + ' <small style="color:var(--text-muted)">— ' + item.modName + '</small></a>';
      }).join('');
      mobileResults.innerHTML = html;
    }
  });
})();

// Registry search data — built from modsRegistry (mods-registry.js)
const modsSearchData = modsRegistry.map(mod => ({
  name: mod.name,
  category: mod.category,
  tags: mod.tags,
  url: 'pages/mods/' + mod.page
}));

// ===== Wiki Search Index =====
// Lazy-loaded: only fetches wiki JSON when user first types in search
const wikiSearchIndex = [];
let wikiIndexLoaded = false;
let wikiIndexLoading = false;
// Wiki search index — mod mapping built from modsRegistry
const wikiModMapping = modsRegistry.map(mod => ({
  modId: mod.wikiId,
  modName: mod.name,
  page: 'pages/mods/' + mod.page
}));

async function loadWikiSearchIndex() {
  if (wikiIndexLoaded || wikiIndexLoading) return;
  wikiIndexLoading = true;
  const depth = parseInt(document.querySelector('meta[name="page-depth"]')?.content || '0');
  const base = '../'.repeat(depth) + 'pages/wiki/';

  for (const mod of wikiModMapping) {
    try {
      const catRes = await fetch(base + mod.modId + '/categories.json');
      const categories = await catRes.json();
      for (const cat of categories) {
        if (cat.id === 'all' || !cat.file) continue;
        try {
          const itemsRes = await fetch(base + mod.modId + '/' + cat.file);
          const items = await itemsRes.json();
          items.forEach(item => {
            wikiSearchIndex.push({
              id: item.id,
              name_fr: item.name_fr,
              name_en: item.name_en,
              desc_fr: item.desc_fr || '',
              desc_en: item.desc_en || '',
              modName: mod.modName,
              modId: mod.modId,
              page: mod.page,
              category: cat.id
            });
          });
        } catch (e) { /* skip */ }
      }
    } catch (e) { /* skip */ }
  }
  wikiIndexLoaded = true;
  wikiIndexLoading = false;
}

searchInput.addEventListener('input', async () => {
  const query = searchInput.value.trim().toLowerCase();

  if (query.length < 2) {
    searchResults.classList.remove('visible');
    searchResults.innerHTML = '';
    return;
  }

  // Lazy load wiki index on first search
  if (!wikiIndexLoaded) await loadWikiSearchIndex();

  const lang = (typeof i18n !== 'undefined') ? i18n.currentLang : 'fr';
  const depth = parseInt(document.querySelector('meta[name="page-depth"]')?.content || '0');
  const prefix = depth === 0 ? '' : '../'.repeat(depth);

  // Mod results
  const modResults = modsSearchData.filter(mod => {
    return mod.name.toLowerCase().includes(query)
      || mod.category.toLowerCase().includes(query)
      || mod.tags.some(tag => tag.includes(query));
  });

  // Wiki item results
  const wikiResults = wikiSearchIndex.filter(item => {
    const name = (lang === 'fr' ? item.name_fr : item.name_en).toLowerCase();
    const desc = (lang === 'fr' ? item.desc_fr : item.desc_en).toLowerCase();
    return name.includes(query) || desc.includes(query);
  }).slice(0, 8);

  if (modResults.length === 0 && wikiResults.length === 0) {
    const noResultText = (typeof i18n !== 'undefined') ? i18n.get('search.no_result') : 'Aucun résultat';
    searchResults.innerHTML = '<div class="no-result">' + noResultText + '</div>';
  } else {
    let html = '';
    html += modResults.map(mod =>
      '<a href="' + prefix + encodeURI(mod.url) + '">' + mod.name + ' <small style="color:var(--text-muted)">— ' + mod.category + '</small></a>'
    ).join('');
    if (wikiResults.length > 0 && modResults.length > 0) {
      html += '<div class="search-divider"></div>';
    }
    html += wikiResults.map(item => {
      const name = lang === 'fr' ? item.name_fr : item.name_en;
      return '<a href="' + prefix + encodeURI(item.page) + '#wiki=' + encodeURIComponent(item.id) + '">' + name + ' <small style="color:var(--text-muted)">— ' + item.modName + '</small></a>';
    }).join('');
    searchResults.innerHTML = html;
  }

  searchResults.classList.add('visible');
});

// Close search on click outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.header-search')) {
    clearDesktopSearch();
  }
});

searchInput.addEventListener('blur', () => {
  setTimeout(() => {
    if (!document.activeElement || !document.activeElement.closest('.header-search')) {
      clearDesktopSearch();
    }
  }, 100);
});

searchResults.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (link) {
    clearDesktopSearch();
  }
});

// ===== Mod status badges =====
(function applyModStatuses() {
  if (typeof modsConfig === 'undefined') return;

  const statusLabels = {
    available: 'status.available',
    beta: 'status.beta',
    development: 'status.development'
  };

  function getStatusLabel(status) {
    const key = statusLabels[status];
    return (typeof i18n !== 'undefined' && key) ? i18n.get(key) : status;
  }

  function createBadge(status) {
    const span = document.createElement('span');
    span.className = 'mod-status status-' + status;
    span.setAttribute('data-i18n', statusLabels[status] || '');
    span.textContent = getStatusLabel(status);
    return span;
  }

  // Inject badge into mod page table status cell
  document.querySelectorAll('.mod-info-table[data-mod-id]').forEach(table => {
    const modId = table.getAttribute('data-mod-id');
    const config = modsConfig[modId];
    const cell = table.querySelector('.mod-status-cell');
    if (config && config.status && cell) {
      const badge = createBadge(config.status);
      if (config.status !== 'available') {
        badge.classList.add('clickable');
        badge.style.cursor = 'pointer';
        badge.addEventListener('click', () => openStatusModal(modId, config));
      }
      cell.appendChild(badge);
    }

    // Inject link badges into mod page table link cell
    const linkCell = table.querySelector('.mod-link-cell');
    if (linkCell) {
      const links = (typeof modsLinks !== 'undefined') ? modsLinks[modId] : {};
      const cfUrl = links && links.curseforge ? links.curseforge : '';
      const mrUrl = links && links.modrinth ? links.modrinth : '';
      let badgesHTML = '<div class="mod-link-badges">';
      if (cfUrl) {
        badgesHTML += '<a href="' + cfUrl + '" target="_blank" rel="noopener" class="mod-link-badge curseforge-badge">CurseForge</a>';
      } else {
        badgesHTML += '<span class="mod-link-badge curseforge-badge badge-disabled">CurseForge</span>';
      }
      if (mrUrl) {
        badgesHTML += '<a href="' + mrUrl + '" target="_blank" rel="noopener" class="mod-link-badge modrinth-badge">Modrinth</a>';
      } else {
        badgesHTML += '<span class="mod-link-badge modrinth-badge badge-disabled">Modrinth</span>';
      }
      badgesHTML += '</div>';
      linkCell.innerHTML = badgesHTML;
    }
  });

  // Build homepage status bar
  const statusBar = document.getElementById('modsStatusBar');
  if (statusBar) {
    statusBar.innerHTML = '';
    for (const [modId, config] of Object.entries(modsConfig)) {
      const item = document.createElement('div');
      item.className = 'status-item';
      const name = document.createElement('strong');
      const mod = getModById(modId);
      name.textContent = mod ? mod.name : modId;
      item.appendChild(name);
      const badge = createBadge(config.status);
      if (config.status !== 'available') {
        badge.classList.add('clickable');
        item.classList.add('clickable');
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => openStatusModal(modId, config));
      }
      item.appendChild(badge);
      statusBar.appendChild(item);
    }
  }

  // Inject link badges into homepage mod cards
  document.querySelectorAll('.card[data-mod-id]').forEach(card => {
    const modId = card.getAttribute('data-mod-id');
    const links = (typeof modsLinks !== 'undefined') ? modsLinks[modId] : {};
    const cfUrl = links && links.curseforge ? links.curseforge : '';
    const mrUrl = links && links.modrinth ? links.modrinth : '';
    let badgesHTML = '';
    // CurseForge
    if (cfUrl) {
      badgesHTML += '<a href="' + cfUrl + '" target="_blank" rel="noopener" class="mod-link-badge curseforge-badge" onclick="event.stopPropagation();event.preventDefault();window.open(this.href,\'_blank\')">CurseForge</a>';
    } else {
      badgesHTML += '<span class="mod-link-badge curseforge-badge badge-disabled">CurseForge</span>';
    }
    // Modrinth
    if (mrUrl) {
      badgesHTML += '<a href="' + mrUrl + '" target="_blank" rel="noopener" class="mod-link-badge modrinth-badge" onclick="event.stopPropagation();event.preventDefault();window.open(this.href,\'_blank\')">Modrinth</a>';
    } else {
      badgesHTML += '<span class="mod-link-badge modrinth-badge badge-disabled">Modrinth</span>';
    }
    // Wiki
    const wikiLabel = (typeof i18n !== 'undefined') ? i18n.get('card.wiki_btn') : 'Wiki';
    badgesHTML += '<a href="' + card.getAttribute('href') + '" class="mod-link-badge wiki-badge" onclick="event.stopPropagation()">' + wikiLabel + '</a>';
    const linksDiv = document.createElement('div');
    linksDiv.className = 'card-link-badges';
    linksDiv.innerHTML = badgesHTML;
    card.appendChild(linksDiv);
  });

  // Open status modal with progress bar + features
  function openStatusModal(modId, config) {
    const lang = (typeof i18n !== 'undefined') ? i18n.currentLang : 'fr';
    const title = getModDisplayName(modId);
    const statusLabel = getStatusLabel(config.status);
    const progress = config.progress || 0;

    const progressLabel = (typeof i18n !== 'undefined') ? i18n.get('status.progress') : 'Progression';
    const featuresLabel = (typeof i18n !== 'undefined') ? i18n.get('status.features') : 'Fonctionnalités prévues';

    let html = '';
    // Progress bar
    html += '<div class="progress-section">';
    html += '<p class="progress-label">' + progressLabel + '</p>';
    html += '<div class="progress-bar-container">';
    html += '<div class="progress-bar" style="width:' + progress + '%">';
    html += '<span class="progress-text">' + progress + '%</span>';
    html += '</div></div></div>';

    // Features list
    if (config.features && config.features.length > 0) {
      html += '<div class="features-section">';
      html += '<p class="features-label">' + featuresLabel + '</p>';
      html += '<ul class="features-list">';
      config.features.forEach(f => {
        const text = f.text[lang] || f.text.fr;
        const icon = f.done ? '✅' : '⬜';
        html += '<li class="' + (f.done ? 'feature-done' : 'feature-pending') + '">' + icon + ' ' + text + '</li>';
      });
      html += '</ul></div>';
    }

    openModal(title + ' <span class="mod-status status-' + config.status + '">' + statusLabel + '</span>', '', html);
  }
})();

// ===== Image credits mapping =====
const imageCredits = {
  'pages/images/ui/breaking_news.jpg': 'https://fr.freepik.com/vecteurs-libre/conception-du-logo-dernieres-nouvelles-gradient_133737728.htm',
  'pages/images/ui/maintenance_warning.jpg': 'https://fr.freepik.com/vecteurs-libre/minuscules-personnes-examinant-avertissement-erreur-du-systeme-exploitation-page-web-isolee-illustration-plate_11235921.htm',
  'pages/images/ui/22776454_Urgent.jpg': 'https://fr.freepik.com/vecteurs-libre/texte-grunge-urgent_22776454.htm',
  'pages/images/ui/comming_soon 400.jpg': 'https://fr.freepik.com/vecteurs-libre/resume-venir-bientot-conception-fond-style-demi-teinte_10016647.htm'
};

// ===== Modal system =====
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalDate = document.getElementById('modalDate');
const modalBody = document.getElementById('modalBody');

function openModal(title, date, bodyHTML, image) {
  if (!modalOverlay) return;

  // Nettoyage des anciennes images/crédits
  var oldImg = modalOverlay.querySelector('.modal-news-img');
  if (oldImg) oldImg.remove();
  var oldCredit = modalOverlay.querySelector('.modal-img-credit');
  if (oldCredit) oldCredit.remove();

  if (image) {
    var img = document.createElement('img');
    img.className = 'modal-news-img';
    img.src = image;
    img.alt = '';
    modalTitle.parentNode.insertBefore(img, modalTitle);

    // Recherche de l'URL du crédit (vérifie le chemin brut ET le chemin relatif)
    var creditUrl = imageCredits[image];
    if (!creditUrl) {
      // Si le chemin commence par '../', on essaie de trouver la clé correspondante
      var cleanKey = image.replace(/^(\.\.\/)+/, '');
      creditUrl = imageCredits[cleanKey] || imageCredits['pages/' + cleanKey];
    }

    if (creditUrl) {
      var credit = document.createElement('a');
      credit.className = 'modal-img-credit';
      credit.href = creditUrl;
      credit.target = '_blank';
      credit.rel = 'noopener';
      credit.textContent = 'Image by Freepik';
      modalTitle.parentNode.insertBefore(credit, modalTitle);
    }
  }

  modalTitle.innerHTML = title;
  modalDate.textContent = date;
  modalBody.innerHTML = bodyHTML;
  modalOverlay.classList.add('visible');
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('visible');
  if (window.location.hash.startsWith('#wiki=')) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalOverlay) modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===== News rendering =====
(function renderNews() {
  if (typeof newsConfig === 'undefined') return;
  const today = new Date().toISOString().slice(0, 10);
  
  // Gestion de la profondeur pour cibler toujours le dossier root/pages/images/ui/
  const depth = parseInt(document.querySelector('meta[name="page-depth"]')?.content || '0');
  const prefix = depth === 0 ? 'pages/' : '../pages/';
  // Dictionnaire des images par défaut selon le badge
  const defaultImagesByBadge = {
    announcement: 'pages/images/ui/breaking_news.jpg',
    urgent: 'pages/images/ui/22776454_Urgent.jpg',
    maintenance: 'pages/images/ui/maintenance_warning.jpg',
    update: 'pages/images/ui/comming_soon 400.jpg', // ou l'image de ton choix pour les majs
    info: 'pages/images/ui/breaking_news.jpg'
  };

  // Fonction pour garantir que l'image pointe toujours sur pages/images/...
  // Fonction pour garantir que l'image pointe toujours sur le bon chemin
  function resolveImgPath(imgPath, badge) {
    // Si aucune image n'est spécifiée, on prend celle associée au badge (ou breaking_news par défaut)
    if (!imgPath) {
      const fallbackImg = defaultImagesByBadge[badge] || defaultImagesByBadge.announcement;
      return prefix + fallbackImg.replace(/^pages\//, '');
    }
    
    if (imgPath.startsWith('http://') || imgPath.startsWith('https://')) return imgPath;
    
    let cleanPath = imgPath.replace(/^(\.\/|pages\/)+/, '');
    return prefix + cleanPath;
  }

  // Homepage: slider
  const homeContainer = document.getElementById('homeNewsContainer');
  let homeSliderInterval = null;

  function renderHomeNews() {
    if (!homeContainer) return;
    if (homeSliderInterval) { clearInterval(homeSliderInterval); homeSliderInterval = null; }
    const lang = (typeof i18n !== 'undefined') ? i18n.currentLang : 'fr';
    const active = newsConfig.filter(n => n.showUntil >= today);
    if (active.length === 0) {
      const noNews = (typeof i18n !== 'undefined') ? i18n.get('news.no_news') : 'Aucune news pour le moment.';
      homeContainer.innerHTML = '<p style="color:var(--text-muted)">' + noNews + '</p>';
      return;
    }
    let currentSlide = 0;

    let sliderHTML = '<div class="news-slider-wrapper"><div class="news-slider" id="newsSlider">';
    active.forEach((n, i) => {
      const title = n.title[lang] || n.title.fr;
      const badgeLabel = n.badge ? ((typeof i18n !== 'undefined') ? i18n.get('news.badge_' + n.badge) : n.badge) : '';
      const badgeHTML = n.badge ? '<span class="news-badge news-badge-' + n.badge + '">' + badgeLabel + '</span>' : '';
      const newsImg = resolveImgPath(n.image, n.badge);
      const imageHTML = '<img class="news-slide-img" src="' + newsImg + '" alt="">';
      const creditUrl = imageCredits[n.image] || imageCredits[newsImg];
      const creditHTML = creditUrl ? '<a class="slide-img-credit" href="' + creditUrl + '" target="_blank" rel="noopener" onclick="event.stopPropagation()">Image by Freepik</a>' : '';
      sliderHTML += '<div class="news-slide has-image" data-news-index="' + i + '">' +
        '<div class="news-slide-img-wrap">' + imageHTML + creditHTML + '</div>' +
        '<div class="news-slide-header">' +
          '<span class="news-icon">' + n.icon + '</span>' +
          '<h3>' + title + '</h3>' +
          badgeHTML +
          '<span class="news-slide-date">' + n.date + '</span>' +
        '</div>' +
      '</div>';
    });
    sliderHTML += '</div></div>';

    sliderHTML += '<div class="news-slider-nav">';
    sliderHTML += '<button class="news-slider-btn" id="sliderPrev">&#8249;</button>';
    sliderHTML += '<div class="news-slider-dots" id="sliderDots">';
    active.forEach((_, i) => {
      sliderHTML += '<button class="news-slider-dot' + (i === 0 ? ' active' : '') + '" data-slide="' + i + '"></button>';
    });
    sliderHTML += '</div>';
    sliderHTML += '<button class="news-slider-btn" id="sliderNext">&#8250;</button>';
    sliderHTML += '</div>';

    homeContainer.innerHTML = sliderHTML;

    const slider = document.getElementById('newsSlider');
    const dots = homeContainer.querySelectorAll('.news-slider-dot');

    function goToSlide(index) {
      if (index < 0) index = active.length - 1;
      if (index >= active.length) index = 0;
      currentSlide = index;
      slider.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
      dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
    }

    document.getElementById('sliderPrev').addEventListener('click', () => goToSlide(currentSlide - 1));
    document.getElementById('sliderNext').addEventListener('click', () => goToSlide(currentSlide + 1));
    dots.forEach(d => d.addEventListener('click', () => goToSlide(parseInt(d.dataset.slide))));

    homeContainer.querySelectorAll('.news-slide').forEach(slide => {
      slide.addEventListener('click', () => {
        const currentLang = (typeof i18n !== 'undefined') ? i18n.currentLang : 'fr';
        const idx = parseInt(slide.dataset.newsIndex);
        const n = active[idx];
        const title = n.title[currentLang] || n.title.fr;
        const content = n.content[currentLang] || n.content.fr;
        const bLabel = n.badge ? ((typeof i18n !== 'undefined') ? i18n.get('news.badge_' + n.badge) : n.badge) : '';
        const bHTML = n.badge ? ' <span class="news-badge news-badge-' + n.badge + '">' + bLabel + '</span>' : '';
        openModal(n.icon + ' ' + title + bHTML, n.date, content, resolveImgPath(n.image, n.badge));
      });
    });

    homeSliderInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
  }

  renderHomeNews();
  document.addEventListener('langChanged', renderHomeNews);

  // Full news page
  const newsContainer = document.getElementById('newsContainer');
  const newsSortOrder = document.getElementById('newsSortOrder');
  const newsFilterBadge = document.getElementById('newsFilterBadge');

  function renderNewsPage() {
    if (!newsContainer) return;
    const currentLang = (typeof i18n !== 'undefined') ? i18n.currentLang : 'fr';
    const sortOrder = newsSortOrder ? newsSortOrder.value : 'desc';
    const badgeFilter = newsFilterBadge ? newsFilterBadge.value : 'all';

    let filtered = [...newsConfig];
    if (badgeFilter !== 'all') {
      filtered = filtered.filter(n => n.badge === badgeFilter);
    }

    if (filtered.length === 0) {
      const noNews = (typeof i18n !== 'undefined') ? i18n.get('news.no_news') : 'Aucune news pour le moment.';
      newsContainer.innerHTML = '<p style="color:var(--text-muted)">' + noNews + '</p>';
      return;
    }

    const sorted = filtered.sort((a, b) => {
      return sortOrder === 'asc' ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date);
    });

    newsContainer.innerHTML = '';
    sorted.forEach(n => {
      const title = n.title[currentLang] || n.title.fr;
      const content = n.content[currentLang] || n.content.fr;
      const card = document.createElement('div');
      card.className = 'news-card';
      const badgeLabel = n.badge ? ((typeof i18n !== 'undefined') ? i18n.get('news.badge_' + n.badge) : n.badge) : '';
      const badgeHTML = n.badge ? '<span class="news-badge news-badge-' + n.badge + '">' + badgeLabel + '</span>' : '';
      
      const newsImg = resolveImgPath(n.image, n.badge);
      
      // Recherche de l'URL du crédit : vérifie n.image, puis l'image résolue (par défaut), puis sans le préfixe
      let creditUrl = imageCredits[n.image] || imageCredits[newsImg];
      if (!creditUrl) {
        const cleanKey = newsImg.replace(/^(\.\.\/)+/, '');
        creditUrl = imageCredits[cleanKey] || imageCredits['pages/' + cleanKey];
      }
      
      // Image + Lien Crédit Freepik sur la carte
      var imageHTML = '<div class="news-slide-img-wrap">' +
        '<img class="news-slide-img" src="' + newsImg + '" alt="">';
      if (creditUrl) {
        imageHTML += '<a class="slide-img-credit" href="' + creditUrl + '" target="_blank" rel="noopener" onclick="event.stopPropagation()">Image by Freepik</a>';
      }
      imageHTML += '</div>';

      card.innerHTML =
        imageHTML +
        '<div class="news-card-header">' +
          '<span class="news-icon">' + n.icon + '</span>' +
          '<h3>' + title + '</h3>' +
          badgeHTML +
          '<span class="news-card-date">' + n.date + '</span>' +
        '</div>';
      
      card.addEventListener('click', (e) => {
        // Ne pas ouvrir le modal si on clique directement sur le lien Freepik
        if (e.target.tagName === 'A') return;
        
        openModal(
          n.icon + ' ' + title + (badgeHTML ? ' ' + badgeHTML : ''), 
          n.date, 
          content, 
          newsImg
        );
      });
      newsContainer.appendChild(card);
    });
  }

  renderNewsPage();
  if (newsSortOrder) newsSortOrder.addEventListener('change', renderNewsPage);
  document.addEventListener('langChanged', renderNewsPage);
  if (newsFilterBadge) newsFilterBadge.addEventListener('change', renderNewsPage);
})();

// ===== Patchnotes rendering =====
(function renderPatchnotes() {
  if (typeof patchnotesConfig === 'undefined') return;
  const container = document.getElementById('patchnotesContainer');
  if (!container) return;

  const filterMod = document.getElementById('filterMod');
  const filterMcVersion = document.getElementById('filterMcVersion');
  const filterLoader = document.getElementById('filterLoader');
  const patchSearch = document.getElementById('patchSearch');
  const patchSortOrder = document.getElementById('patchSortOrder');

  // Build modNames from registry
  const modNames = {};
  modsRegistry.forEach(mod => { modNames[mod.id] = mod.emoji + ' ' + mod.name; });

  // Populate MC version filter dynamically
  if (filterMcVersion) {
    const versions = new Set();
    for (const patches of Object.values(patchnotesConfig)) {
      patches.forEach(p => versions.add(p.mcVersion));
    }
    Array.from(versions).sort().reverse().forEach(v => {
      const opt = document.createElement('option');
      opt.value = v;
      opt.textContent = v;
      filterMcVersion.appendChild(opt);
    });
  }

  // Populate loader filter dynamically
  if (filterLoader) {
    const loaders = new Set();
    for (const patches of Object.values(patchnotesConfig)) {
      patches.forEach(p => loaders.add(p.loader));
    }
    // Only add loaders not already in the select
    const existing = new Set(Array.from(filterLoader.options).map(o => o.value));
    Array.from(loaders).sort().forEach(l => {
      if (!existing.has(l)) {
        const opt = document.createElement('option');
        opt.value = l;
        opt.textContent = l;
        filterLoader.appendChild(opt);
      }
    });
  }

  // Flatten all patches into a single list with modId
  function getAllPatches() {
    const all = [];
    for (const [modId, patches] of Object.entries(patchnotesConfig)) {
      patches.forEach(p => all.push({ modId, ...p }));
    }
    // Sort by date descending by default, or ascending
    const sortOrder = patchSortOrder ? patchSortOrder.value : 'desc';
    if (sortOrder === 'asc') {
      all.sort((a, b) => a.date.localeCompare(b.date));
    } else {
      all.sort((a, b) => b.date.localeCompare(a.date));
    }
    return all;
  }

  function render() {
    const currentLang = (typeof i18n !== 'undefined') ? i18n.currentLang : 'fr';
    const modFilter = filterMod ? filterMod.value : 'all';
    const mcFilter = filterMcVersion ? filterMcVersion.value : 'all';
    const loaderFilter = filterLoader ? filterLoader.value : 'all';
    const query = patchSearch ? patchSearch.value.trim().toLowerCase() : '';

    const allPatches = getAllPatches();

    const filtered = allPatches.filter(p => {
      if (modFilter !== 'all' && modFilter !== p.modId) return false;
      if (mcFilter !== 'all' && p.mcVersion !== mcFilter) return false;
      if (loaderFilter !== 'all' && p.loader !== loaderFilter) return false;
      if (query) {
        const changes = (p.changes[currentLang] || p.changes.fr).join(' ').toLowerCase();
        const modName = (modNames[p.modId] || p.modId).toLowerCase();
        const searchable = (modName + ' ' + p.version + ' ' + p.mcVersion + ' ' + p.loader + ' ' + changes).toLowerCase();
        if (!searchable.includes(query)) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      const noResult = (typeof i18n !== 'undefined') ? i18n.get('patchnotes.no_result') : 'Aucun patchnote trouvé.';
      container.innerHTML = '<p class="patch-no-result">' + noResult + '</p>';
      return;
    }

    let html = '';
    filtered.forEach(p => {
      const changes = p.changes[currentLang] || p.changes.fr;
      const modName = modNames[p.modId] || p.modId;
      html += '<div class="patch-entry" data-patch-mod="' + p.modId + '" data-patch-version="' + p.version + '" data-patch-type="' + (p.type || 'release') + '" data-patch-mc="' + p.mcVersion + '">';
      html += '<div class="patch-entry-header">';
      html += '<span class="patch-mod-name">' + modName + '</span>';
      html += '<span class="patch-version">v' + p.version + '</span>';
      var badgeType = p.type || 'release';
      html += '<span class="patch-type-badge patch-type-' + badgeType + '">' + badgeType.toUpperCase() + '</span>';
      html += '<span class="patch-tag">MC ' + p.mcVersion + '</span>';
      html += '<span class="patch-tag">' + p.loader + '</span>';
      html += '<span class="patch-date">' + p.date + '</span>';
      html += '</div>';
      html += '</div>';
    });

    container.innerHTML = html;

    // Attach click to open modal
    container.querySelectorAll('.patch-entry').forEach(el => {
      el.addEventListener('click', () => {
        const modId = el.dataset.patchMod;
        const version = el.dataset.patchVersion;
        const type = el.dataset.patchType;
        const mc = el.dataset.patchMc;
        const patches = patchnotesConfig[modId] || [];
        const patch = patches.find(p => p.version === version && (p.type || 'release') === type && p.mcVersion === mc);
        if (!patch) return;
        const modName = modNames[modId] || modId;
        const changes = patch.changes[currentLang] || patch.changes.fr;
        const title = modName + ' — v' + patch.version;
        var mBadgeType = patch.type || 'release';
        const tags = '<span class="patch-type-badge patch-type-' + mBadgeType + '">' + mBadgeType.toUpperCase() + '</span>' +
                     '<span class="patch-tag" style="margin-right:6px">MC ' + patch.mcVersion + '</span>' +
                     '<span class="patch-tag">' + patch.loader + '</span>';
        var changesHtml;
        if (changes.length === 0) {
          var noChanges = currentLang === 'en' ? 'No details available for this version.' : 'Aucun détail disponible pour cette version.';
          changesHtml = '<p style="color:var(--text-muted);font-style:italic">' + noChanges + '</p>';
        } else {
          changesHtml = '<ul>' + changes.map(c => '<li>' + c + '</li>').join('') + '</ul>';
        }
        const body = '<div style="margin-bottom:0.8rem">' + tags + '</div>' + changesHtml;
        openModal(title, patch.date, body);
      });
    });
  }

  render();

  if (filterMod) filterMod.addEventListener('change', render);
  if (filterMcVersion) filterMcVersion.addEventListener('change', render);
  if (filterLoader) filterLoader.addEventListener('change', render);
  if (patchSortOrder) patchSortOrder.addEventListener('change', render);
  if (patchSearch) patchSearch.addEventListener('input', render);
  document.addEventListener('langChanged', render);
})();
