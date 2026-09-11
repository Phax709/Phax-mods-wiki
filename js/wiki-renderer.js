// ===== Wiki Renderer =====
// Charge les catégories et items depuis les JSON, affiche la grille filtrée.
// Chaque page mod appelle : initWiki('acatar')

(function () {
  'use strict';

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escapeAttribute(value) {
    return escapeHtml(value);
  }

  function renderWikiLinks(content) {
    return String(content || '').replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '<a class="wiki-link" data-wiki-id="$1">$2</a>');
  }

  function normalizeImageEntry(image, fallbackAlt) {
    if (typeof image === 'string') {
      return { src: image, alt: fallbackAlt };
    }
    if (image && typeof image === 'object') {
      return image;
    }
    return null;
  }

  function getImageFrames(image, fallbackAlt) {
    const entry = normalizeImageEntry(image, fallbackAlt);
    if (!entry) return null;
    const frameList = entry.frames || entry.images;
    if (Array.isArray(frameList) && frameList.length > 1) {
      return frameList.map(frame => normalizeImageEntry(frame, fallbackAlt));
    }
    return null;
  }

  function getSpriteConfig(image) {
    const entry = normalizeImageEntry(image, '');
    if (!entry) return null;
    const frameCount = parseInt(entry.frameCount || entry.framesCount || entry.count || entry.frameTotal || 0, 10);
    const frameWidth = parseInt(entry.frameWidth || entry.width || 0, 10);
    const frameHeight = parseInt(entry.frameHeight || entry.height || 0, 10);
    const frameColumns = parseInt(entry.frameColumns || entry.columns || entry.framesPerRow || entry.framePerRow || 0, 10);
    const frameRows = parseInt(entry.frameRows || entry.rows || 0, 10);
    if (frameCount > 1 && frameWidth > 0 && frameHeight > 0) {
      const resolvedColumns = frameColumns > 0 ? frameColumns : 1;
      const resolvedRows = frameRows > 0 ? frameRows : Math.ceil(frameCount / resolvedColumns);
      return {
        frameCount: frameCount,
        frameWidth: frameWidth,
        frameHeight: frameHeight,
        frameColumns: resolvedColumns,
        frameRows: resolvedRows,
        interval: parseInt(entry.interval || entry.delay || 1200, 10),
        autoplay: entry.autoplay !== false
      };
    }
    return null;
  }

  function getImageSource(image, imgBase) {
    const entry = normalizeImageEntry(image, '');
    if (!entry) return null;
    const src = entry.src || entry.image || entry.url;
    if (!src) return null;
    if (/^(https?:)?\/\//i.test(src) || src.startsWith('data:')) return src;
    return imgBase + src;
  }

  function getImageAlt(image, fallbackAlt) {
    const entry = normalizeImageEntry(image, fallbackAlt);
    if (!entry) return fallbackAlt;
    return entry.alt || entry.title || fallbackAlt;
  }

  function getImageCaption(image, lang) {
    const entry = normalizeImageEntry(image, '');
    if (!entry || typeof entry !== 'object') return '';
    if (lang === 'fr') return entry.caption_fr || entry.caption || '';
    return entry.caption_en || entry.caption || '';
  }

  function createImageNode(image, imgBase, fallbackAlt, lang) {
    const entry = normalizeImageEntry(image, fallbackAlt);
    if (!entry) return null;

    const frames = getImageFrames(entry, fallbackAlt);
    if (frames) {
      const wrapper = document.createElement('div');
      wrapper.className = 'wiki-image-switcher';
      const stage = document.createElement('div');
      stage.className = 'wiki-image-switcher-stage';
      const img = document.createElement('img');
      img.className = 'wiki-image-switcher-image';
      img.loading = 'lazy';
      img.decoding = 'async';
      stage.appendChild(img);
      wrapper.appendChild(stage);

      let currentIndex = 0;
      function update(index) {
        currentIndex = (index + frames.length) % frames.length;
        const frame = frames[currentIndex];
        const src = getImageSource(frame, imgBase);
        if (src) img.src = src;
        img.alt = getImageAlt(frame, fallbackAlt);
      }

      const interval = Number(entry.interval || entry.delay || 2000);
      const autoPlay = entry.autoplay !== false;
      if (autoPlay && Number.isFinite(interval) && interval > 0) {
        window.setInterval(function () {
          update(currentIndex + 1);
        }, interval);
      }

      update(0);
      return wrapper;
    }

    const sprite = getSpriteConfig(entry);
    if (sprite) {
      const wrapper = document.createElement('div');
      wrapper.className = 'wiki-image-switcher wiki-sprite-wrapper';
      const stage = document.createElement('div');
      stage.className = 'wiki-image-switcher-stage wiki-sprite-stage';
      const canvas = document.createElement('canvas');
      canvas.className = 'wiki-sprite-canvas';
      canvas.width = sprite.frameWidth;
      canvas.height = sprite.frameHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.imageSmoothingEnabled = false;
      stage.appendChild(canvas);
      wrapper.appendChild(stage);

      const src = getImageSource(entry, imgBase);
      const spriteImage = new Image();
      spriteImage.onload = function () {
        update(0);
      };
      if (src) spriteImage.src = src;

      let currentIndex = 0;
      function update(index) {
        currentIndex = (index + sprite.frameCount) % sprite.frameCount;
        const col = currentIndex % sprite.frameColumns;
        const row = Math.floor(currentIndex / sprite.frameColumns);
        if (!ctx || !spriteImage.complete) return;
        ctx.clearRect(0, 0, sprite.frameWidth, sprite.frameHeight);
        ctx.drawImage(spriteImage, col * sprite.frameWidth, row * sprite.frameHeight, sprite.frameWidth, sprite.frameHeight, 0, 0, sprite.frameWidth, sprite.frameHeight);
      }

      if (sprite.autoplay && Number.isFinite(sprite.interval) && sprite.interval > 0) {
        window.setInterval(function () {
          update(currentIndex + 1);
        }, sprite.interval);
      }

      return wrapper;
    }

    const img = document.createElement('img');
    const src = getImageSource(entry, imgBase);
    if (src) img.src = src;
    img.alt = getImageAlt(entry, fallbackAlt);
    img.loading = 'lazy';
    img.decoding = 'async';
    return img;
  }

  function buildModalImageHtml(image, imgBase, fallbackAlt, lang) {
    const entry = normalizeImageEntry(image, fallbackAlt);
    if (!entry) return '';

    const frames = getImageFrames(entry, fallbackAlt);
    if (frames) {
      const frameData = frames.map(frame => ({
        src: getImageSource(frame, imgBase) || '',
        alt: getImageAlt(frame, fallbackAlt),
        caption: getImageCaption(frame, lang)
      }));
      const caption = getImageCaption(entry, lang);
      const interval = Number(entry.interval || entry.delay || 2000);
      let html = '<div class="wiki-image-switcher" data-image-switcher data-image-mode="frames" data-image-frames="' + escapeAttribute(JSON.stringify(frameData)) + '" data-image-interval="' + escapeAttribute(String(interval)) + '" data-image-autoplay="' + (entry.autoplay !== false ? 'true' : 'false') + '">';
      html += '<div class="wiki-image-switcher-stage">';
      html += '<img class="wiki-image-switcher-image" src="' + escapeAttribute(frameData[0].src) + '" alt="' + escapeAttribute(frameData[0].alt) + '">';
      html += '</div>';
      if (caption) html += '<div class="wiki-image-switcher-caption">' + escapeHtml(caption) + '</div>';
      html += '</div>';
      return html;
    }

    const sprite = getSpriteConfig(entry);
    if (sprite) {
      const src = getImageSource(entry, imgBase);
      const caption = getImageCaption(entry, lang);
      let html = '<div class="wiki-image-switcher wiki-sprite-wrapper" data-image-switcher data-image-mode="sprite" data-image-src="' + escapeAttribute(src || '') + '" data-image-frame-width="' + escapeAttribute(String(sprite.frameWidth)) + '" data-image-frame-height="' + escapeAttribute(String(sprite.frameHeight)) + '" data-image-frame-count="' + escapeAttribute(String(sprite.frameCount)) + '" data-image-frame-columns="' + escapeAttribute(String(sprite.frameColumns)) + '" data-image-frame-rows="' + escapeAttribute(String(sprite.frameRows)) + '" data-image-interval="' + escapeAttribute(String(sprite.interval)) + '" data-image-autoplay="' + (sprite.autoplay ? 'true' : 'false') + '">';
      html += '<div class="wiki-image-switcher-stage wiki-sprite-stage">';
      html += '<canvas class="wiki-sprite-canvas"></canvas>';
      html += '</div>';
      if (caption) html += '<div class="wiki-image-switcher-caption">' + escapeHtml(caption) + '</div>';
      html += '</div>';
      return html;
    }

    const src = getImageSource(entry, imgBase);
    if (!src) return '';

    const caption = getImageCaption(entry, lang);
    let html = '<figure class="wiki-modal-img-figure">';
    html += '<img src="' + escapeAttribute(src) + '" alt="' + escapeAttribute(getImageAlt(entry, fallbackAlt)) + '">';
    if (caption) html += '<figcaption>' + escapeHtml(caption) + '</figcaption>';
    html += '</figure>';
    return html;
  }

  function bindImageSwitchers(container) {
    const root = container || document;
    root.querySelectorAll('.wiki-image-switcher[data-image-switcher]').forEach(function (switcher) {
      if (switcher.getAttribute('data-bound') === 'true') return;
      switcher.setAttribute('data-bound', 'true');
      const mode = switcher.getAttribute('data-image-mode') || 'frames';
      if (mode === 'sprite') {
        const canvas = switcher.querySelector('.wiki-sprite-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const frameWidth = parseInt(switcher.getAttribute('data-image-frame-width') || '0', 10);
        const frameHeight = parseInt(switcher.getAttribute('data-image-frame-height') || '0', 10);
        const frameCount = parseInt(switcher.getAttribute('data-image-frame-count') || '0', 10);
        const frameColumns = parseInt(switcher.getAttribute('data-image-frame-columns') || '0', 10);
        const frameRows = parseInt(switcher.getAttribute('data-image-frame-rows') || '0', 10);
        const interval = parseInt(switcher.getAttribute('data-image-interval') || '1200', 10);
        const autoPlay = switcher.getAttribute('data-image-autoplay') !== 'false';
        const src = switcher.getAttribute('data-image-src') || '';
        if (frameCount <= 1 || frameWidth <= 0 || frameHeight <= 0) return;
        canvas.width = frameWidth;
        canvas.height = frameHeight;
        ctx.imageSmoothingEnabled = false;
        let currentIndex = 0;
        const spriteImage = new Image();
        spriteImage.onload = function () {
          update(0);
        };
        if (src) spriteImage.src = src;
        function update(index) {
          currentIndex = (index + frameCount) % frameCount;
          const columns = frameColumns > 0 ? frameColumns : 1;
          const rows = frameRows > 0 ? frameRows : Math.ceil(frameCount / columns);
          const col = currentIndex % columns;
          const row = Math.floor(currentIndex / columns);
          if (!spriteImage.complete || row >= rows) return;
          ctx.clearRect(0, 0, frameWidth, frameHeight);
          ctx.drawImage(spriteImage, col * frameWidth, row * frameHeight, frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);
        }
        if (autoPlay && Number.isFinite(interval) && interval > 0) {
          window.setInterval(function () {
            update(currentIndex + 1);
          }, interval);
        }
        return;
      }

      const framesData = [];
      try {
        const rawData = switcher.getAttribute('data-image-frames') || '[]';
        const parsed = JSON.parse(rawData);
        if (Array.isArray(parsed)) framesData.push(...parsed);
      } catch (e) {
        // ignore malformed image data
      }

      if (framesData.length <= 1) return;

      const img = switcher.querySelector('.wiki-image-switcher-image');
      if (!img) return;

      let currentIndex = 0;
      function update(index) {
        currentIndex = (index + framesData.length) % framesData.length;
        const frame = framesData[currentIndex] || {};
        if (frame.src) img.src = frame.src;
        img.alt = frame.alt || '';
      }

      const interval = parseInt(switcher.getAttribute('data-image-interval') || '2000', 10);
      const autoPlay = switcher.getAttribute('data-image-autoplay') !== 'false';
      if (autoPlay && Number.isFinite(interval) && interval > 0) {
        window.setInterval(function () {
          update(currentIndex + 1);
        }, interval);
      }

      update(0);
    });
  }

  async function initWiki(modId) {
    const container = document.getElementById('wikiContainer');
    if (!container) return;

    const lang = (typeof i18n !== 'undefined') ? i18n.currentLang : 'fr';
    const depth = parseInt(document.querySelector('meta[name="page-depth"]')?.content || '0');
    const basePath = '../'.repeat(depth) + 'pages/wiki/' + modId + '/';
    const imgBasePath = '../'.repeat(depth) + 'pages/images/wiki/' + modId + '/';

    // 1. Load categories
    let categories;
    try {
      const res = await fetch(basePath + 'categories.json');
      categories = await res.json();
    } catch (e) {
      window.location.href = '../'.repeat(depth) + '404.html';
      return;
    }

    // 2. Load all items from all category files
    const allItems = [];
    const categoryMap = {};

    for (const cat of categories) {
      if (cat.id === 'all' || !cat.file) continue;
      try {
        const res = await fetch(basePath + cat.file);
        const items = await res.json();
        items.forEach(item => {
          item._category = cat.id;
          allItems.push(item);
        });
        categoryMap[cat.id] = items;
      } catch (e) {
        categoryMap[cat.id] = [];
      }
    }

    // 3. Build UI
    let activeCategory = 'all';
    let searchQuery = '';

    // Build HTML structure
    container.innerHTML = '';

    // Sidebar (PC) / horizontal bar (mobile)
    const sidebar = document.createElement('div');
    sidebar.className = 'wiki-sidebar';

    // Search
    const searchBox = document.createElement('input');
    searchBox.type = 'text';
    searchBox.className = 'wiki-search';
    searchBox.placeholder = lang === 'fr' ? 'Rechercher...' : 'Search...';
    searchBox.autocomplete = 'off';
    sidebar.appendChild(searchBox);

    // Category buttons (PC)
    const catList = document.createElement('div');
    catList.className = 'wiki-categories';
    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'wiki-cat-btn' + (cat.id === 'all' ? ' active' : '');
      btn.dataset.catId = cat.id;
      const label = lang === 'fr' ? cat.label_fr : cat.label_en;
      btn.innerHTML = cat.icon + ' ' + label;

      // Show count
      if (cat.id === 'all') {
        btn.innerHTML += ' <span class="wiki-cat-count">' + allItems.length + '</span>';
      } else if (categoryMap[cat.id]) {
        btn.innerHTML += ' <span class="wiki-cat-count">' + categoryMap[cat.id].length + '</span>';
      }

      btn.addEventListener('click', () => {
        activeCategory = cat.id;
        catList.querySelectorAll('.wiki-cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGrid();
      });
      catList.appendChild(btn);
    });
    sidebar.appendChild(catList);

    // Category select (mobile)
    const catSelect = document.createElement('select');
    catSelect.className = 'wiki-cat-select';
    categories.forEach(cat => {
      const option = document.createElement('option');
      option.value = cat.id;
      const label = lang === 'fr' ? cat.label_fr : cat.label_en;
      const count = cat.id === 'all' ? allItems.length : (categoryMap[cat.id] ? categoryMap[cat.id].length : 0);
      option.textContent = cat.icon + ' ' + label + ' (' + count + ')';
      catSelect.appendChild(option);
    });
    catSelect.addEventListener('change', () => {
      activeCategory = catSelect.value;
      renderGrid();
    });
    sidebar.appendChild(catSelect);
    container.appendChild(sidebar);

    // Main content area
    const mainArea = document.createElement('div');
    mainArea.className = 'wiki-main';

    // Grid
    const grid = document.createElement('div');
    grid.className = 'wiki-grid';
    mainArea.appendChild(grid);

    // Empty state
    const emptyState = document.createElement('p');
    emptyState.className = 'wiki-empty';
    emptyState.style.display = 'none';
    emptyState.textContent = lang === 'fr' ? 'Aucun élément trouvé.' : 'No items found.';
    mainArea.appendChild(emptyState);

    container.appendChild(mainArea);

    // 4. Search handler
    searchBox.addEventListener('input', () => {
      searchQuery = searchBox.value.trim().toLowerCase();
      renderGrid();
    });

    // 5. Render grid
    function renderGrid() {
      grid.innerHTML = '';
      let filtered = activeCategory === 'all' ? allItems : allItems.filter(item => item._category === activeCategory);

      if (searchQuery.length >= 2) {
        filtered = filtered.filter(item => {
          const name = (lang === 'fr' ? item.name_fr : item.name_en).toLowerCase();
          const desc = (lang === 'fr' ? item.desc_fr : item.desc_en).toLowerCase();
          return name.includes(searchQuery) || desc.includes(searchQuery);
        });
      }

      if (filtered.length === 0) {
        emptyState.style.display = 'block';
        return;
      }
      emptyState.style.display = 'none';

      filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'wiki-card';
        card.addEventListener('click', () => openWikiModal(item, lang, imgBasePath));

        // Images container
        const imgContainer = document.createElement('div');
        imgContainer.className = 'wiki-card-images';
        if (item.images && item.images.length > 0) {
          item.images.forEach(src => {
            const imageNode = createImageNode(src, imgBasePath, lang === 'fr' ? item.name_fr : item.name_en, lang);
            if (imageNode) {
              imgContainer.appendChild(imageNode);
            }
          });
        }
        card.appendChild(imgContainer);

        // Info
        const info = document.createElement('div');
        info.className = 'wiki-card-info';

        const name = document.createElement('h4');
        name.className = 'wiki-card-name';
        name.textContent = lang === 'fr' ? item.name_fr : item.name_en;
        info.appendChild(name);

        const desc = document.createElement('p');
        desc.className = 'wiki-card-desc';
        desc.textContent = lang === 'fr' ? item.desc_fr : item.desc_en;
        info.appendChild(desc);

        card.appendChild(info);
        grid.appendChild(card);
      });
    }

    // 6. Wiki modal
    function openWikiModal(item, lang, imgBase) {
      const name = lang === 'fr' ? item.name_fr : item.name_en;

      let html = '';

      // Top bar: Copy link (right-aligned)
      html += '<div class="wiki-modal-topbar">';
      html += '<button class="wiki-modal-copy" data-item-id="' + item.id + '">🔗 ' + (lang === 'fr' ? 'Copier le lien' : 'Copy link') + '</button>';
      html += '</div>';

      // Card images (large)
      if (item.images && item.images.length > 0) {
        html += '<div class="wiki-modal-images">';
        item.images.forEach(src => {
          html += buildModalImageHtml(src, imgBase, name, lang);
        });
        html += '</div>';
      }

      // Description
      const desc = lang === 'fr' ? item.desc_fr : item.desc_en;
      html += '<p class="wiki-modal-desc">' + desc + '</p>';

      // Detail sections
      if (item.details && item.details.sections) {
        item.details.sections.forEach(section => {
          const sTitle = lang === 'fr' ? section.title_fr : section.title_en;
          const sContent = renderWikiLinks(lang === 'fr' ? section.content_fr : section.content_en);
          html += '<div class="wiki-modal-section">';
          html += '<h3>' + sTitle + '</h3>';

          // Recipe sections use a compact grid so each image stays with its details.
          if (section.images && section.images.length > 0) {
            html += '<div class="wiki-modal-section-topimg">';
            html += '<div class="wiki-modal-section-content">' + sContent + '</div>';
            html += '<div class="wiki-modal-section-img wiki-modal-recipe-grid">';
            section.images.forEach(img => {
              html += buildModalImageHtml(img, imgBase, sTitle, lang);
            });
            html += '</div>';
            html += '</div>';
          } else {
            html += '<div>' + sContent + '</div>';
          }

          html += '</div>';
        });
      }

      // Detail usages (multiple lines with images)
      if (item.details && item.details.usages) {
        html += '<div class="wiki-modal-section">';
        html += '<h3>' + (lang === 'fr' ? 'Usages du lingot' : 'Ingot Uses') + '</h3>';

        item.details.usages.forEach(usage => {
          const content = renderWikiLinks(lang === 'fr' ? usage.content_fr : usage.content_en);

          html += '<div class="wiki-modal-usage">';
          html += '<div>' + content + '</div>';

          if (usage.images && usage.images.length > 0) {
            html += '<div class="wiki-modal-section-img">';
            usage.images.forEach(img => {
              html += buildModalImageHtml(img, imgBase, content, lang);
            });
            html += '</div>';
          }

          html += '</div>';
        });

        html += '</div>';
      }

      // Detail images
      if (item.details && item.details.images && item.details.images.length > 0) {
        html += '<div class="wiki-modal-detail-images">';
        item.details.images.forEach(src => {
          html += buildModalImageHtml(src, imgBase, name, lang);
        });
        html += '</div>';
      }

      // Use existing openModal function
      if (typeof openModal === 'function') {
        openModal(name, '', html);
      }

      requestAnimationFrame(function () {
        bindImageSwitchers(document.querySelector('.modal-body') || document);
      });
      setTimeout(function () {
        bindImageSwitchers(document.querySelector('.modal-body') || document);
      }, 120);

      // Bind copy link button
      var copyBtn = document.querySelector('.wiki-modal-copy');
      if (copyBtn) {
        copyBtn.addEventListener('click', function () {
          var url = window.location.origin + window.location.pathname + '#wiki=' + encodeURIComponent(item.id);
          navigator.clipboard.writeText(url).then(function () {
            copyBtn.textContent = '✅ ' + (lang === 'fr' ? 'Copié !' : 'Copied!');
            setTimeout(function () {
              copyBtn.textContent = '🔗 ' + (lang === 'fr' ? 'Copier le lien' : 'Copy link');
            }, 2000);
          });
        });
      }

      // Bind wiki-link clicks (cross-linking between items)
      document.querySelectorAll('.modal-body .wiki-link').forEach(function (link) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          var targetId = link.dataset.wikiId;
          var target = allItems.find(function (it) { return it.id === targetId; });
          if (target) {
            openWikiModal(target, lang, imgBase);
          }
        });
      });
    }

    // Initial render
    renderGrid();

    // 7. Handle #wiki=itemId from global search
    function handleWikiHash() {
      const hash = window.location.hash;
      const wikiItemId = hash.startsWith('#wiki=') ? decodeURIComponent(hash.slice(6)) : null;
      if (!wikiItemId) return;
      const target = allItems.find(item => item.id === wikiItemId);
      if (target) {
        openWikiModal(target, lang, imgBasePath);
      } else {
        window.location.href = '../'.repeat(depth) + '404.html';
      }
    }

    window.addEventListener('hashchange', handleWikiHash);
    handleWikiHash();
  }

  // Expose globally
  window.initWiki = initWiki;
})();
