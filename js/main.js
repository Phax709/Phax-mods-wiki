i18n.ready.then(() => {
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
  searchBtn.setAttribute('data-i18n-label', 'search.mobile_label');
  const header = document.querySelector('.header');
  const langSelector = document.querySelector('.lang-selector');
  if (header && langSelector) header.insertBefore(searchBtn, langSelector);

  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'search-overlay';
  overlay.innerHTML =
    '<div class="search-overlay-header">' +
      '<input type="text" id="mobileSearchInput" data-i18n-placeholder="search.placeholder" autocomplete="off">' +
      '<button class="search-overlay-close">&times;</button>' +
    '</div>' +
    '<div class="search-overlay-results" id="mobileSearchResults"></div>';
  document.body.appendChild(overlay);
  if (typeof i18n !== 'undefined') i18n.applyAll();

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

    const lang = (typeof i18n !== 'undefined') ? i18n.contentLang : 'fr';
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

  mobileInput.addEventListener('keydown', event => {
    if (event.key === 'Enter' && mobileInput.value.trim()) {
      event.preventDefault();
      navigateToSearchResults(mobileInput.value);
    }
  });
})();

// Registry search data — built from modsRegistry (mods-registry.js)
const modsSearchData = modsRegistry.map(mod => ({
  name: mod.name,
  emoji: mod.emoji,
  category: mod.category,
  tags: mod.tags,
  cardDescKey: mod.cardDescKey,
  url: 'pages/mods/' + mod.page
}));

// ===== Wiki Search Index =====
// Lazy-loaded: only fetches wiki JSON when user first types in search
const wikiSearchIndex = [];
let wikiIndexLoaded = false;
let wikiIndexLoading = null;
// Wiki search index — mod mapping built from modsRegistry
const wikiModMapping = modsRegistry.map(mod => ({
  modId: mod.wikiId,
  modName: mod.name,
  page: 'pages/mods/' + mod.page
}));

async function loadWikiSearchIndex() {
  if (wikiIndexLoaded) return;
  if (wikiIndexLoading) return wikiIndexLoading;
  const depth = parseInt(document.querySelector('meta[name="page-depth"]')?.content || '0');
  const base = '../'.repeat(depth) + 'pages/wiki/';

  wikiIndexLoading = (async () => {
    const modCategories = await Promise.all(wikiModMapping.map(async mod => {
      try {
        const catRes = await fetch(base + mod.modId + '/categories.json');
        return { mod, categories: await catRes.json() };
      } catch (e) {
        return { mod, categories: [] };
      }
    }));

    const modItems = await Promise.all(modCategories.flatMap(({ mod, categories }) =>
      categories
        .filter(cat => cat.id !== 'all' && cat.file)
        .map(async cat => {
          try {
            const itemsRes = await fetch(base + mod.modId + '/' + cat.file);
            const items = await itemsRes.json();
            return items.map(item => ({
              id: item.id,
              name_fr: item.name_fr,
              name_en: item.name_en,
              desc_fr: item.desc_fr || '',
              desc_en: item.desc_en || '',
              images: Array.isArray(item.images) ? item.images : [],
              modName: mod.modName,
              modId: mod.modId,
              page: mod.page,
              category: cat.id,
              category_fr: cat.label_fr || cat.id,
              category_en: cat.label_en || cat.id
            }));
          } catch (e) {
            return [];
          }
        })
    ));

    wikiSearchIndex.push(...modItems.flat());
    wikiIndexLoaded = true;
  })();

  try {
    await wikiIndexLoading;
  } finally {
    wikiIndexLoading = null;
  }
}

function getSearchMatches(query, lang) {
  const normalizedQuery = query.trim().toLowerCase();
  const modResults = modsSearchData.filter(mod =>
    mod.name.toLowerCase().includes(normalizedQuery)
    || mod.category.toLowerCase().includes(normalizedQuery)
    || mod.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))
  );
  const wikiResults = wikiSearchIndex.filter(item => {
    const name = (lang === 'fr' ? item.name_fr : item.name_en).toLowerCase();
    const desc = (lang === 'fr' ? item.desc_fr : item.desc_en).toLowerCase();
    return name.includes(normalizedQuery) || desc.includes(normalizedQuery);
  });
  return { modResults, wikiResults };
}

function navigateToSearchResults(query) {
  const depth = parseInt(document.querySelector('meta[name="page-depth"]')?.content || '0', 10);
  const prefix = '../'.repeat(depth);
  window.location.href = prefix + 'pages/search.html?q=' + encodeURIComponent(query.trim());
}

function getSearchImageSource(image, modId, prefix) {
  const source = typeof image === 'string'
    ? image
    : image && (image.src || image.image || image.url);
  if (!source) return '';
  return /^(https?:)?\/\//i.test(source) || source.startsWith('data:')
    ? source
    : prefix + 'pages/images/wiki/' + encodeURIComponent(modId) + '/' + encodeURI(source);
}

function createSearchResultImage(item, alt, prefix) {
  const images = item.images || [];
  const imageConfig = images[0];
  if (!imageConfig) {
    const placeholder = document.createElement('span');
    placeholder.className = 'search-result-image search-result-image-placeholder';
    placeholder.setAttribute('aria-hidden', 'true');
    return placeholder;
  }

  const container = document.createElement('span');
  container.className = 'search-result-image search-result-image-frame';
  const stage = document.createElement('span');
  stage.className = 'search-result-image-stage';
  container.appendChild(stage);

  const frameList = imageConfig && (imageConfig.frames || imageConfig.images);
  const spriteCount = Number(imageConfig && (imageConfig.frameCount || imageConfig.framesCount || imageConfig.count || imageConfig.frameTotal) || 0);
  const frameWidth = Number(imageConfig && (imageConfig.frameWidth || imageConfig.width) || 0);
  const frameHeight = Number(imageConfig && (imageConfig.frameHeight || imageConfig.height) || 0);
  const interval = Math.max(100, Number(imageConfig && (imageConfig.interval || imageConfig.delay) || 1500));
  const autoplay = !imageConfig || imageConfig.autoplay !== false;
  let updateFrame = null;

  if (Array.isArray(frameList) && frameList.length > 1) {
    const image = document.createElement('img');
    image.alt = alt;
    image.decoding = 'async';
    image.className = 'search-result-frame';
    image.addEventListener('load', () => {
      if (image.naturalWidth <= 32 && image.naturalHeight <= 32) {
        image.classList.add('search-result-pixel-art');
      }
    }, { once: true });
    stage.appendChild(image);
    let currentIndex = 0;
    updateFrame = () => {
      currentIndex = (currentIndex + 1) % frameList.length;
      image.src = getSearchImageSource(frameList[currentIndex], item.modId, prefix);
    };
    image.src = getSearchImageSource(frameList[0], item.modId, prefix);
  } else if (spriteCount > 1 && frameWidth > 0 && frameHeight > 0) {
    const columns = Math.max(1, Number(imageConfig.frameColumns || imageConfig.columns || imageConfig.framesPerRow || imageConfig.framePerRow || 1));
    const rows = Math.max(1, Number(imageConfig.frameRows || imageConfig.rows || Math.ceil(spriteCount / columns)));
    const canvas = document.createElement('canvas');
    canvas.width = frameWidth;
    canvas.height = frameHeight;
    canvas.className = 'search-result-frame search-result-sprite';
    canvas.setAttribute('role', 'img');
    canvas.setAttribute('aria-label', alt);
    stage.appendChild(canvas);

    const context = canvas.getContext('2d');
    if (context) {
      context.imageSmoothingEnabled = false;
      const spriteImage = new Image();
      spriteImage.decoding = 'async';
      spriteImage.src = getSearchImageSource(imageConfig, item.modId, prefix);
      let currentIndex = 0;
      const drawFrame = () => {
        if (!spriteImage.complete || !spriteImage.naturalWidth) return;
        const col = currentIndex % columns;
        const row = Math.floor(currentIndex / columns);
        if (row >= rows) return;
        context.clearRect(0, 0, frameWidth, frameHeight);
        context.drawImage(spriteImage, col * frameWidth, row * frameHeight, frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);
      };
      spriteImage.addEventListener('load', drawFrame);
      updateFrame = () => {
        currentIndex = (currentIndex + 1) % spriteCount;
        drawFrame();
      };
      drawFrame();
    }
  } else {
    const image = document.createElement('img');
    image.alt = alt;
    image.loading = 'lazy';
    image.decoding = 'async';
    image.className = 'search-result-frame';
    image.addEventListener('load', () => {
      if (image.naturalWidth <= 32 && image.naturalHeight <= 32) {
        image.classList.add('search-result-pixel-art');
      }
    }, { once: true });
    image.src = getSearchImageSource(imageConfig, item.modId, prefix);
    stage.appendChild(image);
  }

  if (updateFrame && autoplay) {
    let timer = null;
    const startAnimation = () => {
      if (timer === null) timer = window.setInterval(updateFrame, interval);
    };
    const stopAnimation = () => {
      if (timer !== null) {
        window.clearInterval(timer);
        timer = null;
      }
    };
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => entry.isIntersecting ? startAnimation() : stopAnimation());
      });
      observer.observe(container);
    } else {
      startAnimation();
    }
  }

  return container;
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

  const lang = (typeof i18n !== 'undefined') ? i18n.contentLang : 'fr';
  const depth = parseInt(document.querySelector('meta[name="page-depth"]')?.content || '0');
  const prefix = depth === 0 ? '' : '../'.repeat(depth);

  const { modResults, wikiResults: allWikiResults } = getSearchMatches(query, lang);
  const wikiResults = allWikiResults.slice(0, 8);

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

searchInput.addEventListener('keydown', event => {
  if (event.key === 'Enter' && searchInput.value.trim()) {
    event.preventDefault();
    navigateToSearchResults(searchInput.value);
  }
});

async function initSearchResultsPage() {
  const resultsContainer = document.getElementById('searchPageResults');
  if (!resultsContainer) return;

  const query = new URLSearchParams(window.location.search).get('q')?.trim() || '';
  const querySummary = document.getElementById('searchQuerySummary');
  const queryInput = document.getElementById('searchInput');
  const depth = parseInt(document.querySelector('meta[name="page-depth"]')?.content || '0', 10);
  const prefix = '../'.repeat(depth);
  const lang = (typeof i18n !== 'undefined') ? i18n.contentLang : 'fr';
  const homeLink = document.getElementById('searchHomeLink');

  if (homeLink) homeLink.href = prefix + 'index.html';
  if (queryInput) queryInput.value = query;

  if (!query) {
    querySummary.textContent = i18n.get('search.no_query');
    resultsContainer.textContent = '';
    return;
  }

  querySummary.textContent = i18n.get('search.query_for') + ' ' + query;
  resultsContainer.setAttribute('aria-busy', 'true');
  try {
    await loadWikiSearchIndex();
    const { modResults, wikiResults } = getSearchMatches(query, lang);
    resultsContainer.replaceChildren();

    modResults.forEach(mod => {
      const link = document.createElement('a');
      link.className = 'search-result-row';
      link.href = prefix + encodeURI(mod.url);

      const icon = document.createElement('span');
      icon.className = 'search-result-image search-result-mod-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = mod.emoji;

      const content = document.createElement('span');
      content.className = 'search-result-content';
      const heading = document.createElement('span');
      heading.className = 'search-result-heading';
      const title = document.createElement('strong');
      title.textContent = mod.name;
      const modLabel = document.createElement('small');
      modLabel.className = 'search-result-mod-badge';
      modLabel.textContent = mod.category;
      heading.append(title, modLabel);

      const description = document.createElement('span');
      description.className = 'search-result-description';
      description.textContent = i18n.get(mod.cardDescKey);
      content.append(heading, description);
      link.append(icon, content);
      resultsContainer.appendChild(link);
    });

    wikiResults.forEach(item => {
      const link = document.createElement('a');
      link.className = 'search-result-row';
      link.href = prefix + encodeURI(item.page) + '#wiki=' + encodeURIComponent(item.id);

      const itemName = lang === 'fr' ? item.name_fr || item.name_en || '' : item.name_en || item.name_fr || '';
      const image = createSearchResultImage(item, itemName, prefix);

      const content = document.createElement('span');
      content.className = 'search-result-content';
      const heading = document.createElement('span');
      heading.className = 'search-result-heading';
      const title = document.createElement('strong');
      title.textContent = itemName;
      const modLabel = document.createElement('small');
      modLabel.className = 'search-result-mod-badge';
      modLabel.textContent = item.modName + ' — ' + (lang === 'fr' ? item.category_fr : item.category_en);
      heading.append(title, modLabel);

      const description = document.createElement('span');
      description.className = 'search-result-description';
      description.textContent = lang === 'fr' ? item.desc_fr : item.desc_en;
      content.append(heading, description);
      link.append(image, content);
      resultsContainer.appendChild(link);
    });

    if (modResults.length === 0 && wikiResults.length === 0) {
      const noResults = document.createElement('p');
      noResults.className = 'search-page-empty';
      noResults.textContent = i18n.get('search.no_result');
      resultsContainer.appendChild(noResults);
    }
  } catch (error) {
    console.error('Unable to load search results.', error);
    resultsContainer.textContent = i18n.get('search.load_error');
  } finally {
    resultsContainer.removeAttribute('aria-busy');
  }
}

if (document.getElementById('searchPageResults')) {
  Promise.resolve(typeof i18n !== 'undefined' ? i18n.ready : null).then(() => {
    initSearchResultsPage();
    document.addEventListener('langChanged', initSearchResultsPage);
  });
}

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
    const lang = (typeof i18n !== 'undefined') ? i18n.contentLang : 'fr';
    const title = getModDisplayName(modId);
    const statusLabel = getStatusLabel(config.status);
    const progress = config.progress || 0;

    const progressLabel = (typeof i18n !== 'undefined') ? i18n.get('status.progress') : 'Progression';
    const progressInfoButtonLabel = (typeof i18n !== 'undefined') ? i18n.get('status.progress_info_button') : 'Détails';
    const progressInfoLabel = (typeof i18n !== 'undefined') ? i18n.get('status.progress_info_label') : 'À propos de ce pourcentage';
    const progressInfo = (typeof i18n !== 'undefined') ? i18n.get('status.progress_info') : 'Le pourcentage de progression est défini manuellement et donné à titre indicatif. Il reflète mon estimation globale de l’avancement, en tenant compte de l’importance relative des objectifs prévus pour cette mise à jour.';
    const featuresLabel = (typeof i18n !== 'undefined') ? i18n.get('status.features') : 'Fonctionnalités prévues';
    const featureStatusLabels = {
      complete: 'status.feature.complete',
      in_progress: 'status.feature.in_progress',
      not_started: 'status.feature.not_started'
    };

    let html = '';
    // Progress bar
    html += '<div class="progress-section">';
    html += '<div class="progress-heading">';
    html += '<p class="progress-label">' + progressLabel + '</p>';
    html += '<button class="progress-info-toggle" type="button" aria-expanded="false" aria-controls="statusProgressInfo" aria-label="' + progressInfoLabel + '">' + progressInfoButtonLabel + '</button>';
    html += '</div>';
    html += '<p class="progress-info" id="statusProgressInfo" hidden>' + progressInfo + '</p>';
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
        const status = f.status;
        const statusKey = featureStatusLabels[status];
        if (!statusKey) {
          console.error('Unknown feature status "' + status + '" for mod "' + modId + '".');
          return;
        }
        const statusText = (typeof i18n !== 'undefined') ? i18n.get(statusKey) : status;
        html += '<li class="feature-item">';
        html += '<span class="feature-item-text">' + text + '</span>';
        html += '<span class="feature-status-badge feature-status-' + status + '">' + statusText + '</span>';
        html += '</li>';
      });
      html += '</ul></div>';
    }

    openModal(title + ' <span class="mod-status status-' + config.status + '">' + statusLabel + '</span>', '', html);
    const progressInfoToggle = modalBody.querySelector('.progress-info-toggle');
    const progressInfoElement = modalBody.querySelector('.progress-info');
    if (progressInfoToggle && progressInfoElement) {
      progressInfoToggle.addEventListener('click', () => {
        const isExpanded = progressInfoToggle.getAttribute('aria-expanded') === 'true';
        progressInfoToggle.setAttribute('aria-expanded', String(!isExpanded));
        progressInfoElement.hidden = isExpanded;
      });
    }
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
  if (bodyHTML instanceof Node) {
    modalBody.replaceChildren(bodyHTML);
  } else {
    modalBody.innerHTML = bodyHTML;
  }
  modalOverlay.classList.add('visible');

  const secretLabel = modalBody.querySelector('.news-secret');
  if (secretLabel) {
    requestAnimationFrame(() => {
      const rect = secretLabel.getBoundingClientRect();
      const offsetX = window.innerWidth / 2 - (rect.left + rect.width / 2);
      const offsetY = window.innerHeight / 2 - (rect.top + rect.height / 2);
      secretLabel.style.setProperty('--news-secret-start-x', offsetX + 'px');
      secretLabel.style.setProperty('--news-secret-start-y', offsetY + 'px');
      requestAnimationFrame(() => secretLabel.classList.add('is-arriving'));
    });
  }
}

window.openModal = openModal;

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

  function getNewsImage(image, lang) {
    if (image && typeof image === 'object') {
      return image[lang] || image.fr || image.en;
    }
    return image;
  }

  // Homepage: slider
  const homeContainer = document.getElementById('homeNewsContainer');
  let homeSliderInterval = null;

  function renderHomeNews() {
    if (!homeContainer) return;
    if (homeSliderInterval) { clearInterval(homeSliderInterval); homeSliderInterval = null; }
    const lang = (typeof i18n !== 'undefined') ? i18n.contentLang : 'fr';
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
      const image = getNewsImage(n.image, lang);
      const newsImg = resolveImgPath(image, n.badge);
      const imageHTML = '<img class="news-slide-img" src="' + newsImg + '" alt="">';
      const creditUrl = imageCredits[image] || imageCredits[newsImg];
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
        const currentLang = (typeof i18n !== 'undefined') ? i18n.contentLang : 'fr';
        const idx = parseInt(slide.dataset.newsIndex);
        const n = active[idx];
        const title = n.title[currentLang] || n.title.fr;
        const content = n.content[currentLang] || n.content.fr;
        const bLabel = n.badge ? ((typeof i18n !== 'undefined') ? i18n.get('news.badge_' + n.badge) : n.badge) : '';
        const bHTML = n.badge ? ' <span class="news-badge news-badge-' + n.badge + '">' + bLabel + '</span>' : '';
        openModal(n.icon + ' ' + title + bHTML, n.date, content, resolveImgPath(getNewsImage(n.image, currentLang), n.badge));
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
    const currentLang = (typeof i18n !== 'undefined') ? i18n.contentLang : 'fr';
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
      
      const image = getNewsImage(n.image, currentLang);
      const newsImg = resolveImgPath(image, n.badge);
      
      // Recherche de l'URL du crédit : vérifie n.image, puis l'image résolue (par défaut), puis sans le préfixe
      let creditUrl = imageCredits[image] || imageCredits[newsImg];
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

  function getPatchChanges(patch, language) {
    const translations = patch.changes || {};
    return translations[language] || (language === 'gb' ? translations.en : null) || translations.en || translations.fr || [];
  }

  function getPatchChangeText(changes) {
    if (!Array.isArray(changes)) return '';
    return changes.map(section => {
      const readItems = items => (items || []).map(item => {
        if (typeof item === 'string') return item;
        return [item.text || '', readItems(item.children)].join(' ');
      }).join(' ');
      return [section.heading || '', readItems(section.items)].join(' ');
    }).join(' ');
  }

  function appendPatchItems(list, items) {
    (items || []).forEach(item => {
      const entry = document.createElement('li');
      if (typeof item === 'string') {
        entry.textContent = item;
      } else {
        entry.appendChild(document.createTextNode(item.text || ''));
        if (Array.isArray(item.children) && item.children.length > 0) {
          const nestedList = document.createElement(item.childrenListType === 'ordered' ? 'ol' : 'ul');
          appendPatchItems(nestedList, item.children);
          entry.appendChild(nestedList);
        }
      }
      list.appendChild(entry);
    });
  }

  function buildPatchChangesContent(changes) {
    const list = document.createElement('ul');
    const sectionClasses = {
      add: 'patch-add',
      fix: 'patch-fix',
      info: 'patch-info',
      warn: 'patch-warn'
    };

    changes.forEach(section => {
      const entry = document.createElement('li');
      const heading = document.createElement('b');
      heading.className = sectionClasses[section.type] || 'patch-info';
      heading.textContent = section.heading || '';
      entry.appendChild(heading);

      const sectionItems = document.createElement('ul');
      appendPatchItems(sectionItems, section.items);
      entry.appendChild(sectionItems);
      list.appendChild(entry);
    });

    return list;
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
        const changes = getPatchChangeText(getPatchChanges(p, currentLang)).toLowerCase();
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
        const changes = getPatchChanges(patch, currentLang);
        const title = modName + ' — v' + patch.version;
        var mBadgeType = patch.type || 'release';
        const body = document.createElement('div');
        const tags = document.createElement('div');
        tags.style.marginBottom = '0.8rem';
        const typeTag = document.createElement('span');
        typeTag.className = 'patch-type-badge patch-type-' + mBadgeType;
        typeTag.textContent = mBadgeType.toUpperCase();
        const mcTag = document.createElement('span');
        mcTag.className = 'patch-tag';
        mcTag.style.marginRight = '6px';
        mcTag.textContent = 'MC ' + patch.mcVersion;
        const loaderTag = document.createElement('span');
        loaderTag.className = 'patch-tag';
        loaderTag.textContent = patch.loader;
        tags.append(typeTag, mcTag, loaderTag);
        body.appendChild(tags);

        if (changes.length === 0) {
          var noChanges = currentLang === 'en' ? 'No details available for this version.' : 'Aucun détail disponible pour cette version.';
          const noChangesText = document.createElement('p');
          noChangesText.style.color = 'var(--text-muted)';
          noChangesText.style.fontStyle = 'italic';
          noChangesText.textContent = noChanges;
          body.appendChild(noChangesText);
        } else {
          body.appendChild(buildPatchChangesContent(changes));
        }
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
});
