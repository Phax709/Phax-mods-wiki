
const translations = {
  fr: {
    accueil: "Accueil",
    acatar: "Acatar",
    chaosium: "Chaosium",
    patchnotes: "Patch Notes",
    settings: "Paramètres",
    credits: "Crédits",
    tout: "Tout",
    blocs: "Blocs",
    items: "Objets",
    mobs: "Mobs",
    patch_acatar: "Patchnotes Acatar",
    patch_chaosium: "Patchnotes Chaosium",
    patch_history: "Historique des mises à jour",
    prochaine_maj: "Prochaine mise à jour",
    pourcentage_complete: "{percent}% complété",
    next_update: "Prochaine mise à jour",
    status: "Statut",
    mod_status_title: "Statut du mod",
    progress_label: "Progression",
    planned_features: "Fonctionnalités prévues",
    planned_update: "Mise à jour prévue pour le ",
    help_title: "Nous aider",
    help_desc: "Signalez un bug ou proposez une idée pour améliorer les mods.",
    report_bug: "Signaler un bug",
    suggest_idea: "Proposer une suggestion",
    satisfaction_survey: "Enquête de satisfaction",
    langue_fr: "🇫🇷 Français",
    langue_en: "🇬🇧 English"
  },
  en: {
    accueil: "Home",
    acatar: "Acatar",
    chaosium: "Chaosium",
    patchnotes: "Patch Notes",
    settings: "Settings",
    credits: "Credits",
    tout: "All",
    blocs: "Blocks",
    items: "Items",
    mobs: "Mobs",
    patch_acatar: "Acatar Patch Notes",
    patch_chaosium: "Chaosium Patch Notes",
    patch_history: "Patch History",
    prochaine_maj: "Next Update",
    pourcentage_complete: "{percent}% complete",
    next_update: "Next Update",
    status: "Status",
    mod_status_title: "Mod Status",
    progress_label: "Progress",
    planned_features: "Planned features",
    planned_update: "Update planned for ",
    help_title: "Help us",
    help_desc: "Report a bug or suggest an idea to improve the mods.",
    report_bug: "Report a bug",
    suggest_idea: "Suggest an idea",
    satisfaction_survey: "Satisfaction survey",
    langue_fr: "🇫🇷 French",
    langue_en: "🇬🇧 English"
  }
};

/********************
 * CONSTANTES & ÉTAT
 ********************/
const ETAT = {
  langue: localStorage.getItem('siteLanguage') || 'fr',
  theme: localStorage.getItem('siteTheme') || 'theme-clair', // "theme-clair" | "theme-sombre"
  fontSize: localStorage.getItem('siteFont') || 'font-normal', // "font-normal" | "font-grand" | "font-tres-grand"
};

const SELECTEURS = {
  // Header
  settingsMenu: '#settingsMenu',
  settingsToggle: '#settingsToggle',
  settingsPanel: '#settingsPanel',
  langSelector: '.lang-selector',
  langBtn: '#currentLangBtn',
  langDropdown: '#langDropdown',
  langFlag: '#currentLangFlag',

  // Pages & navigation
  page: '.page',
  navLiens: '.bandeau nav a',

  // Patchnotes
  patchList: '#patchnotes .patch-list',

  // Cartes
  mod1Grid: '#mod1 .cards-grid',
  mod2Grid: '#mod2 .cards-grid',
};

const CARD_SOURCES = {
  mod1: 'cards/cards_mod1.json',
  mod2: 'cards/cards_mod2.json',
};

const _cache = {
  cartes: {},
  patchnotes: null,
};


/********************
 * OUTILS DOM
 ********************/
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function show(el) { if (el) el.style.display = 'block'; }
function hide(el) { if (el) el.style.display = 'none'; }
function addClass(el, c) { if (el) el.classList.add(c); }
function remClass(el, c) { if (el) el.classList.remove(c); }
function hasClass(el, c) { return !!(el && el.classList.contains(c)); }


/********************
 * I18N (simple)
 ********************/
/********************
 * I18N — applique les traductions SANS casser les menus
 ********************/
function applyTranslations(lang) {
  const dict = (translations && translations[lang]) ? translations[lang] : translations.fr;

  // Remplace uniquement le texte des éléments marqués data-translate
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate')?.trim();
    if (!key) return;

    let txt = dict[key];
    if (txt == null) return;

    // Placeholder {percent} optionnel si l'élément donne une valeur
    const pct = el.getAttribute('data-percent');
    if (pct) txt = txt.replace('{percent}', pct);

    // IMPORTANT : n’écrase pas la structure (pas d’innerHTML ici)
    el.textContent = txt;
  });

  // (Optionnel) Met à jour le libellé des options de langue si tu as un span dédié
  // Exemple HTML recommandé :
  // <button class="lang-option" data-lang="fr"><img ...><span class="lbl"></span></button>
  const frLbl = document.querySelector('.lang-option[data-lang="fr"] .lbl');
  if (frLbl) frLbl.textContent = dict.langue_fr;
  const enLbl = document.querySelector('.lang-option[data-lang="en"] .lbl');
  if (enLbl) enLbl.textContent = dict.langue_en;
}

function setLanguage(lang) {
  const chosen = lang || 'fr';
  ETAT.langue = chosen; // ✅ update l'état en mémoire
  localStorage.setItem('siteLanguage', chosen);

  // Drapeau (ne modifie pas la structure du menu)
  const flag = document.querySelector('#currentLangFlag');
  if (flag) flag.src = (chosen === 'en') ? 'images/flag-gb.png' : 'images/flag-fr.png';

  // Appliquer les traductions
  applyTranslations(chosen);

  // Re-render de ce qui dépend de la langue (si visible)
  if (document.getElementById('patchnotes')?.style.display !== 'none') {
    renderPatchList();
  }
  // ✅ on appelle désormais ensureCards(...)
  if (document.getElementById('mod1')?.style.display !== 'none') ensureCards('mod1');
  if (document.getElementById('mod2')?.style.display !== 'none') ensureCards('mod2');

  // Panneau statut déjà ouvert → on le réactualise
  const st1 = document.querySelector('#mod1 .update-panel');
  if (st1 && st1.style.display !== 'none') showStatus('mod1', true);
  const st2 = document.querySelector('#mod2 .update-panel');
  if (st2 && st2.style.display !== 'none') showStatus('mod2', true);
}





/********************
 * THÈME & TAILLE DE POLICE
 ********************/
function appliquerThemeEtPolice() {
  document.body.classList.remove('theme-clair', 'theme-sombre', 'font-normal', 'font-grand', 'font-tres-grand');
  document.body.classList.add(ETAT.theme, ETAT.fontSize);
}

function initThemeEtPolice() {
  // Applique l’état sauvegardé
  appliquerThemeEtPolice();

  // Boutons (optionnels si présents dans ton HTML)
  const btnSombre = document.getElementById('themeSombre');
  const btnClair = document.getElementById('themeClair');
  const fontNormal = document.getElementById('fontNormal');
  const fontGrand = document.getElementById('fontGrand');
  const fontTresGrand = document.getElementById('fontTresGrand');

  if (btnSombre) btnSombre.addEventListener('click', () => {
    ETAT.theme = 'theme-sombre';
    localStorage.setItem('siteTheme', ETAT.theme);
    appliquerThemeEtPolice();
  });
  if (btnClair) btnClair.addEventListener('click', () => {
    ETAT.theme = 'theme-clair';
    localStorage.setItem('siteTheme', ETAT.theme);
    appliquerThemeEtPolice();
  });

  if (fontNormal) fontNormal.addEventListener('click', () => {
    ETAT.fontSize = 'font-normal';
    localStorage.setItem('siteFont', ETAT.fontSize);
    appliquerThemeEtPolice();
  });
  if (fontGrand) fontGrand.addEventListener('click', () => {
    ETAT.fontSize = 'font-grand';
    localStorage.setItem('siteFont', ETAT.fontSize);
    appliquerThemeEtPolice();
  });
  if (fontTresGrand) fontTresGrand.addEventListener('click', () => {
    ETAT.fontSize = 'font-tres-grand';
    localStorage.setItem('siteFont', ETAT.fontSize);
    appliquerThemeEtPolice();
  });
}


/********************
 * MENU LANGUE
 ********************/
function initMenuLangue() {
  const langSelector = $(SELECTEURS.langSelector);
  const langBtn      = $(SELECTEURS.langBtn);
  const dropdown     = $(SELECTEURS.langDropdown);

  if (!langSelector || !langBtn || !dropdown) return;

  // Drapeau au chargement
  setLanguage(ETAT.langue);

  // Un SEUL handler pour ouvrir/fermer (état contrôlé)
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    // fermer paramètres avant
    remClass($(SELECTEURS.settingsMenu), 'open');
    // toggle explicite
    if (hasClass(langSelector, 'open')) remClass(langSelector, 'open'); else addClass(langSelector, 'open');
  });

  // Choix langue
  dropdown.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = opt.getAttribute('data-lang') || 'fr';
      setLanguage(lang);
      remClass(langSelector, 'open');
    });
  });

  // Empêche la fermeture immédiate si clic à l’intérieur
  langSelector.addEventListener('click', (e) => e.stopPropagation());
}


/********************
 * MENU PARAMÈTRES (⚙)
 ********************/
function initMenuParametres() {
  const settingsMenu   = $(SELECTEURS.settingsMenu);
  const settingsToggle = $(SELECTEURS.settingsToggle);
  const langSelector   = $(SELECTEURS.langSelector);

  if (!settingsMenu || !settingsToggle) return;

  settingsToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    // Fermer langue avant
    remClass(langSelector, 'open');
    // Toggle contrôlé
    if (hasClass(settingsMenu, 'open')) remClass(settingsMenu, 'open'); else addClass(settingsMenu, 'open');
  });

  // Empêche fermeture sur clic interne
  settingsMenu.addEventListener('click', (e) => e.stopPropagation());

  // Clic ailleurs → tout fermer
  document.addEventListener('click', () => {
    remClass(langSelector, 'open');
    remClass(settingsMenu, 'open');
  });
}


/********************
 * NAVIGATION PAGES
 ********************/
function showPage(pageId) {
  // 1) cacher toutes les pages
  document.querySelectorAll('.page').forEach(p => (p.style.display = 'none'));

  // 2) afficher la page demandée
  const page = document.getElementById(pageId);
  if (page) page.style.display = 'block';

  // 3) nav actif (header)
  document.querySelectorAll('.bandeau nav a').forEach(a => a.classList.remove('active'));
  const nav = document.getElementById('nav-' + pageId);
  if (nav) nav.classList.add('active');

  // 4) état par page
  const grid   = page?.querySelector('.cards-grid');
  const list   = page?.querySelector('.patch-list');
  const detail = page?.querySelector('.card-detail');
  const status = page?.querySelector('.update-panel');

  // on ferme les panneaux contextuels
  if (status) status.style.display = 'none';
  if (detail) detail.style.display = 'none';

  if (pageId === 'mod1' || pageId === 'mod2') {
  if (grid) grid.style.display = 'grid';
  if (pageId === 'mod1' && typeof ensureCards === 'function') ensureCards('mod1', {force:true}); // <-- force
  if (pageId === 'mod2' && typeof ensureCards === 'function') ensureCards('mod2', {force:true}); // <-- force
}


  if (pageId === 'patchnotes') {
    // liste visible, détail caché + (re)rendu
    if (list)   list.style.display = 'flex';
    if (detail) detail.style.display = 'none';
    renderPatchList();
  }

  // 5) remonter
  window.scrollTo({ top: 0, behavior: 'smooth' });
}




/********************
 * FILTRE & RECHERCHE — version qui ferme Statut et ré-affiche la grille
 ********************/
function filterCategory(pageId, category) {
  const page   = document.getElementById(pageId);
  if (!page) return;

  const grid   = page.querySelector('.cards-grid');
  const list   = page.querySelector('.patch-list');
  const detail = page.querySelector('.card-detail');
  const status = page.querySelector('.update-panel');

  // fermer Statut + Détail, rouvrir la vue liste/grille
  if (status) status.style.display = 'none';
  if (detail) detail.style.display = 'none';
  if (grid)   grid.style.display   = 'grid';
  if (list)   list.style.display   = 'flex';

  // appliquer le filtre aux cartes
  if (grid) {
    grid.querySelectorAll('.small-card').forEach(card => {
      card.style.display = (category === 'all' || card.classList.contains(category)) ? 'block' : 'none';
    });
  }

  // appliquer le filtre aux patch entries (si tu utilises encore les classes)
  if (list) {
    list.querySelectorAll('.patch-entry').forEach(entry => {
      entry.style.display = (category === 'all' || entry.classList.contains(category)) ? 'flex' : 'none';
    });
  }

  // bouton actif (menu gauche)
  const group = page.querySelector('.side-buttons');
  if (group) {
    group.querySelectorAll('.card-btn').forEach(b => b.classList.remove('active'));
    const btn = group.querySelector(`.card-btn[data-type="${category}"]`) ||
                group.querySelector(`.card-btn[onclick*="'${pageId}', '${category}'"]`) ||
                group.querySelector(`.card-btn[onclick*="'${pageId}','${category}'"]`);
    if (btn) btn.classList.add('active');
  }
}


/********************
 * RECHERCHE (cartes) — corrige l’erreur "pageId" et force le retour à la grille
 ********************/
function searchCards(modId, query) {
  const page   = document.getElementById(modId);
  if (!page) return;

  const grid   = page.querySelector('.cards-grid');
  const detail = page.querySelector('.card-detail');
  const status = page.querySelector('.update-panel');

  // fermer Statut + Détail et revenir sur la grille
  if (status) status.style.display = 'none';
  if (detail) detail.style.display = 'none';
  if (grid)   grid.style.display   = 'grid';

  // filtrer par titre + description
  const q = (query || '').trim().toLowerCase();
  if (!grid) return;
  grid.querySelectorAll('.small-card').forEach(card => {
    const t = (card.querySelector('h4')?.textContent || '').toLowerCase();
    const d = (card.querySelector('p')?.textContent  || '').toLowerCase();
    card.style.display = (!q || t.includes(q) || d.includes(q)) ? 'block' : 'none';
  });
}





/********************
 * PATCHNOTES
 ********************/
async function loadPatchData() {
  if (_cache.patchnotes) return _cache.patchnotes;
  const res = await fetch('patchnotes.json' + `?t=${Date.now()}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const data = await res.json();
  _cache.patchnotes = data;
  return data;
}

// État de la barre d’outils Patchnotes
let _patchToolbarInited = false;
let _patchMc     = "";      // filtre version MC
let _patchSearch = "";      // recherche texte
let _patchSort   = "desc";  // "asc" | "desc"

// Remplit le <select> des versions MC à partir du JSON
function populateVersionFilter(data) {
  const f = document.getElementById('patchVersionFilter');
  if (!f) return; // aucun select dans le HTML → on sort sans casser

  const set = new Set((data || []).map(n => n.mc).filter(Boolean));
  const versions = Array.from(set).sort((a,b) => a.localeCompare(b, undefined, { numeric:true }));

  f.innerHTML = `<option value="">Toutes versions Minecraft</option>` +
                versions.map(v => `<option value="${v}">MC ${v}</option>`).join('');
}

// Branche la recherche, le filtre MC et le tri
function initPatchToolbar() {
  const q = document.getElementById('patchSearch');
  const f = document.getElementById('patchVersionFilter');
  const s = document.getElementById('patchDateSort');

  // Si la toolbar n'existe pas dans le HTML, on ne fait rien
  if (!q && !f && !s) { _patchToolbarInited = true; return; }

  if (q) q.addEventListener('input',  () => { _patchSearch = (q.value || '').trim().toLowerCase(); renderPatchList(); });
  if (f) f.addEventListener('change', () => { _patchMc = f.value; renderPatchList(); });
  if (s) s.addEventListener('change', () => { _patchSort = s.value || 'desc'; renderPatchList(); });

  _patchToolbarInited = true;
}


function buildPatchEntryHTML(entry) {
  // Champs attendus (selon ton JSON) :
  // entry.title, entry.date, entry.mod ("acatar"|"chaosium"), entry.mc (version MC), entry.notes (array)
  const modClass = entry.mod ? entry.mod.toLowerCase() : 'acatar';
  const date = entry.date ? new Date(entry.date).toLocaleDateString(ETAT.langue === 'en' ? 'en-GB' : 'fr-FR') : '';
  const mcBadge = entry.mc ? `<span class="mc-badge">MC ${entry.mc}</span>` : '';
  const notes = Array.isArray(entry.notes) ? entry.notes.map(n => `<li>${n}</li>`).join('') : '';

  return `
    <div class="patch-entry ${modClass}">
      <div class="patch-meta">
        <h4>${entry.title || 'Patch'}</h4>
        <div class="patch-info">
          <span class="patch-date">${date}</span>
          ${mcBadge}
        </div>
      </div>
      <ul class="patch-notes">${notes}</ul>
    </div>
  `;
}

/********************
 * PATCHNOTES — liste (comme avant)
 ********************/
async function renderPatchList() {
  const list = document.querySelector('#patchnotes .patch-list');
  if (!list) return;

  const lang = localStorage.getItem('siteLanguage') || 'fr';
  const data = await loadPatchData(); // lit patchnotes.json

  // 1) Init toolbar au premier rendu
  if (!_patchToolbarInited) {
    populateVersionFilter(data);
    initPatchToolbar();
  }

  // 2) Catégorie active (menu gauche) : all | acatar | chaosium
  const activeBtn = document.querySelector('#patchnotes .side-buttons .card-btn.active');
  const cat = activeBtn ? (activeBtn.getAttribute('data-cat') || 'all') : 'all';

  // 3) Source + filtre catégorie via "mod"
  let notes = data.filter(n => (cat === 'all' ? true : (n.mod || '').toLowerCase() === cat));

  // 4) Filtre version Minecraft
  if (_patchMc) notes = notes.filter(n => (n.mc || '') === _patchMc);

  // 5) Recherche (titre + sections)
  if (_patchSearch) {
    const q = _patchSearch;
    notes = notes.filter(n => {
      const title = (lang === 'fr' ? (n.title_fr || n.title_en) : (n.title_en || n.title_fr)) || '';
      const secs  = (lang === 'fr' ? (n.sections_fr || []) : (n.sections_en || []));
      const hay   = (title + ' ' + secs.map(s => [s.title, ...(s.items||[])] .flat().join(' ')).join(' ')).toLowerCase();
      return hay.includes(q);
    });
  }

  // 6) Tri date (ISO yyyy-mm-dd)
  notes.sort((a,b) => {
    const da = a.date || '';
    const db = b.date || '';
    return (_patchSort === 'asc') ? da.localeCompare(db) : db.localeCompare(da);
  });

  // 7) Rendu : 2 colonnes flex (gauche = titre+badge, droite = date)
  list.innerHTML = '';
  notes.forEach(n => {
    const modKey = (n.mod || '').toLowerCase();
    const MOD_LABEL = { acatar:{fr:'Acatar',en:'Acatar'}, chaosium:{fr:'Chaosium',en:'Chaosium'} };
    const modName = (MOD_LABEL[modKey]?.[lang]) || n.mod || '';
    const title   = `${modName} - v${n.version}`;
    const mcBadge = n.mc ? `<span class="mc-badge">MC ${n.mc}</span>` : '';
    const dateHtml= n.date ? `<span class="pe-date">${n.date}</span>` : '';

    const div = document.createElement('div');
    div.className = `patch-entry ${modKey}`; // utile pour filterCategory
    div.dataset.id = n.id;
    // pe-title (avec badge MC dedans) + date à droite
    div.innerHTML = `
      <span class="pe-title">${title}${mcBadge ? ` ${mcBadge}` : ''}</span>
      ${dateHtml}
    `;
    div.addEventListener('click', () => showPatchDetail(n.id));
    list.appendChild(div);
  });

  // 8) Assure la bonne vue
  const detail = document.querySelector('#patchnotes .card-detail');
  if (detail) detail.style.display = 'none';
  list.style.display = 'flex'; // cohérent avec ton CSS
}

/********************
 * PATCHNOTES — détail & retour
 ********************/
async function showPatchDetail(patchId) {
  const list    = document.querySelector('#patchnotes .patch-list');
  const detail  = document.querySelector('#patchnotes .card-detail');
  const content = detail?.querySelector('.detail-content');
  if (!list || !detail || !content) return;

  const lang = localStorage.getItem('siteLanguage') || 'fr';
  const data = await loadPatchData(); // <- nécessite async
  const n = (data || []).find(x => String(x.id) === String(patchId));
  if (!n) return;

  // Libellés mod
  const modKey  = (n.mod || '').toLowerCase();
  const modName = modKey === 'chaosium'
    ? (translations?.[lang]?.chaosium || 'Chaosium')
    : (translations?.[lang]?.acatar   || 'Acatar');

  const title   = `${modName}${n.version ? ` - v${n.version}` : ''}`;
  const dateHtml = n.date ? `<div class="patch-meta">${n.date}</div>` : '';

  // Sections FR/EN
  const sections = (lang === 'en') ? (n.sections_en || []) : (n.sections_fr || []);
  const sectionsHTML = sections.map(sec => `
    <div class="patchnote-section">
      <h4 class="underline">${sec.title || ''}</h4>
      <ul>${(sec.items || []).map(li => `<li>${li}</li>`).join('')}</ul>
    </div>
  `).join('');

  // Liens optionnels
  const links = Array.isArray(n.links) ? n.links : [];
  const linksHTML = links.length ? `
    <div class="patch-links" style="margin-top:10px;">
      ${links.map(L => {
        const label = (lang === 'en' ? (L.label_en || L.label_fr) : (L.label_fr || L.label_en)) || 'Link';
        return `<a class="card-btn wiki" href="${L.url}" target="_blank" rel="noopener">${label}</a>`;
      }).join(' ')}
    </div>` : '';

  // 💡 On n’injecte PAS de bouton “retour” ici (le bleu existe déjà dans le HTML)
  content.innerHTML = `
    <h3>${title}</h3>
    ${dateHtml}
    ${sectionsHTML}
    ${linksHTML}
  `;

  // bascule list/détail
  list.style.display   = 'none';
  detail.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showPatchList() {
  const list   = document.querySelector('#patchnotes .patch-list');
  const detail = document.querySelector('#patchnotes .card-detail');
  if (!list || !detail) return;
  detail.style.display = 'none';
  list.style.display = 'flex'; // ta liste est en flex dans le CSS “comme avant”
}

/********************
 * DÉTAIL CARTES
 ********************/
function showCardDetail(modId, el) {
  const page = document.getElementById(modId);
  if (!page) return;
  const liste = page.querySelector('.cards-grid');
  const vue   = page.querySelector('.card-detail');
  const zone  = page.querySelector('.detail-content');
  if (!liste || !vue || !zone) return;

  liste.style.display = 'none';
  vue.style.display   = 'block';
  zone.innerHTML      = el.getAttribute('data-description') || '';
}

function hideCardDetail(modId) {
  const page = document.getElementById(modId);
  if (!page) return;
  const liste = page.querySelector('.cards-grid');
  const vue   = page.querySelector('.card-detail');
  if (liste) liste.style.display = 'grid';
  if (vue)   vue.style.display   = 'none';
}

/********************
 * STATUT (status.json) — pour mod1 / mod2
 ********************/

// Petit helper de traduction (utilise ton objet "translations")
function t(key) {
  const lang = localStorage.getItem('siteLanguage') || 'fr';
  return (translations?.[lang]?.[key]) ?? key;
}

let _lastStatusOpen = null;

async function showStatus(modId) {
  // Supporte l'ancien id "status-mod1"/"status-mod2" ET le nouveau ".update-panel"
  const panel = document.getElementById(`status-${modId}`) || document.querySelector(`#${modId} .update-panel`);
  if (!panel) return;

  // Masquer cartes + détail (comme avant)
  const grid   = document.querySelector(`#${modId} .cards-grid`);
  const detail = document.querySelector(`#${modId} .card-detail`);
  if (grid)   grid.style.display = 'none';
  if (detail) detail.style.display = 'none';

  // Pas de bordure (garde l’ombre douce)
  panel.style.border = 'none';

  // Cas file:// (fetch bloqué)
  if (location.protocol === 'file:') {
    panel.innerHTML = `
      <p style="color:#c62828">
        Le chargement du statut est bloqué en <code>file://</code>.<br>
        Lance ton site via un petit serveur local (ex: VSCode Live Server ou <code>python -m http.server</code>).
      </p>`;
    panel.style.display = 'block';
    _lastStatusOpen = modId;
    return;
  }

  // URL robuste
  const STATUS_URL = new URL('status.json', document.baseURI).toString();

  let data;
  try {
    const res = await fetch(
      STATUS_URL + (STATUS_URL.includes('?') ? '&' : '?') + 't=' + Date.now(),
      { cache: 'no-store' }
    );
    if (!res.ok) throw new Error('HTTP ' + res.status);
    data = await res.json();
  } catch (e) {
    panel.innerHTML = `<p style="color:#c62828">
      Impossible de charger le statut (${e.message}).<br>
      URL tentée : <code>${STATUS_URL}</code>
    </p>`;
    panel.style.display = 'block';
    _lastStatusOpen = modId;
    return;
  }

  const lang = localStorage.getItem('siteLanguage') || 'fr';
  const info = data[modId];
  if (!info) {
    panel.innerHTML = `<p style="color:#c62828">Aucune information de statut pour ${modId}.</p>`;
    panel.style.display = 'block';
    _lastStatusOpen = modId;
    return;
  }

  // ===== Badge texte (comme l'ancien script)
  const s = (info.status || 'dev').toLowerCase(); // dev | beta | stable
  const statusLabel = (lang === 'fr')
    ? (s === 'stable' ? 'Stable' : s === 'beta' ? 'Bêta' : 'En développement')
    : (s === 'stable' ? 'Stable' : s === 'beta' ? 'Beta' : 'In development');

  // ===== Date à côté du badge (gérée par CSS, sans inline)
let dateLabel = "";
let isIndet = false;
const raw = (info.updated_at || '').toString().trim();
if (raw) {
  const low = raw.toLowerCase();
  isIndet = ['indeterminee','indéterminée','indetermine','indeterminate','unknown','n/a','-','—','?'].includes(low);
  if (isIndet) {
    dateLabel = (lang === 'fr') ? "Date indéterminée" : "Date indeterminate";
  } else {
    const d = new Date(raw);
    dateLabel = isNaN(d)
      ? raw
      : d.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
}

// ===== Description + Features (FR/EN)
const desc  = (lang === 'fr') ? (info.description_fr || '') : (info.description_en || '');
const feats = (lang === 'fr') ? (info.features_fr || [])    : (info.features_en || []);
const featsHtml = feats.length
  ? `<h3 data-translate="planned_features">${translations[lang].planned_features}</h3>
     <ul>${feats.map(li => `<li>${li}</li>`).join('')}</ul>`
  : '';

// ===== Progression (seulement si pas stable)
const progress = (typeof info.progress === 'number') ? Math.max(0, Math.min(100, info.progress)) : null;
const progressHtml = (progress !== null && s !== 'stable')
  ? `
    <h3 data-translate="progress_label">${translations[lang].progress_label}</h3>
    <div class="status-progress">
      <div class="fill" style="width:${progress}%">${progress}%</div>
    </div>`
  : '';

// ===== Rendu final (markup identique à l’ancien)
const title = translations[lang].mod_status_title;
panel.innerHTML = `
  <div class="status-header">
    <div class="status-badge ${s}">${statusLabel}</div>
    ${dateLabel ? `<span class="status-updated-inline${isIndet ? ' is-indet' : ''}">${dateLabel}</span>` : ""}
  </div>
  <h3>${title}</h3>
  <p>${desc}</p>
  ${progressHtml}
  ${featsHtml}
`;

  panel.style.display = 'block';

  // Activer visuellement le bouton “Statut” (menu gauche)
  const buttons = document.querySelectorAll(`#${modId} .side-buttons .card-btn`);
  buttons.forEach(b => b.classList.remove('active'));
  const statusBtn = Array.from(buttons).find(
    b => b.getAttribute('data-translate') === 'status' ||
         (b.textContent || '').trim().toLowerCase().includes('statut') ||
         (b.textContent || '').trim().toLowerCase().includes('status')
  );
  if (statusBtn) statusBtn.classList.add('active');

  _lastStatusOpen = modId;
}


/********************
 * INIT
 ********************/
function initUI() {
  // Thème & police
  initThemeEtPolice();

  // Menus header
  initMenuLangue();
  initMenuParametres();
}

// Délégation unique pour les menus Langue & Paramètres (robuste même si le DOM est remplacé)
(function wireHeaderMenusOnce() {
  if (window.__headerMenusWired) return;
  window.__headerMenusWired = true;

  document.addEventListener('click', (e) => {
    const langSelector = document.querySelector('.lang-selector');
    const settingsMenu = document.getElementById('settingsMenu');

    const langBtn      = e.target.closest('#currentLangBtn');   // bouton langue
    const settingsBtn  = e.target.closest('#settingsToggle');   // bouton ⚙
    const langOption   = e.target.closest('.lang-option');      // option FR/EN dans le dropdown
    const insideLang   = e.target.closest('.lang-selector');    // clic à l'intérieur du bloc langue
    const insideSettings = e.target.closest('#settingsMenu');   // clic à l'intérieur du bloc paramètres

    // Clic sur le bouton langue
    if (langBtn) {
      e.stopPropagation();
      settingsMenu?.classList.remove('open');           // ferme ⚙ d'abord
      langSelector?.classList.toggle('open');           // toggle menu langue
      return;
    }

    // Clic sur le bouton ⚙
    if (settingsBtn) {
      e.stopPropagation();
      langSelector?.classList.remove('open');           // ferme langue d'abord
      settingsMenu?.classList.toggle('open');           // toggle menu ⚙
      return;
    }

    // Clic sur une option de langue
    if (langOption) {
      e.stopPropagation();
      const lang = langOption.getAttribute('data-lang') || 'fr';
      setLanguage(lang);                                // applique la langue
      langSelector?.classList.remove('open');           // referme le menu
      return;
    }

    // Clic à l’intérieur d’un des deux menus => ne rien fermer
    if (insideLang || insideSettings) {
      return;
    }

    // Clic ailleurs => fermer les deux
    langSelector?.classList.remove('open');
    settingsMenu?.classList.remove('open');
  }, /* useCapture */ true);
})();

window.addEventListener('DOMContentLoaded', () => {
  console.log('[INIT] prêt');
  // Applique langue / drapeau dès le départ
  setLanguage(ETAT.langue);

  initUI();
  showPage('accueil'); // page par défaut
});

/********************
 * CARTES — loaders & rendu
 ********************/
async function loadCards(modId) {
  if (_cache.cartes[modId]) return _cache.cartes[modId];
  const src = CARD_SOURCES[modId];
  if (!src) return [];
  const url = new URL(src, document.baseURI).toString();
  const res = await fetch(url + (url.includes('?') ? '&' : '?') + 't=' + Date.now(), { cache: 'no-store' });
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const data = await res.json();
  _cache.cartes[modId] = Array.isArray(data) ? data : [];
  return _cache.cartes[modId];
}
// Résout un chemin d'asset *par rapport au JSON* (cards/cards_modX.json)
function resolveAsset(modId, src) {
  if (!src) return '';
  try {
    const base = new URL(CARD_SOURCES[modId], document.baseURI);
    return new URL(src, base).toString();
  } catch {
    return src; // au pire, on renvoie tel quel
  }
}

function renderCards(modId, cards) {
  const gridSel = (modId === 'mod1') ? SELECTEURS.mod1Grid : SELECTEURS.mod2Grid;
  const grid = document.querySelector(gridSel);
  if (!grid) return;

  const lang = ETAT.langue || 'fr';

  grid.innerHTML = cards.map(c => {
    const title = lang === 'en' ? (c.title_en || c.title_fr || '') : (c.title_fr || c.title_en || '');
    const desc  = lang === 'en' ? (c.description_en || c.description_fr || '') : (c.description_fr || c.description_en || '');

    // ---------- Image miniature (GRILLE) ----------
    const thumbSrc = c.image ? resolveAsset(modId, c.image) : '';
    const thumbStyles = [
      'display:block',
      'width:100%',                 // prend toute la largeur de la carte
      (c.thumb_cover ? 'object-fit:cover' : 'object-fit:contain'),
      'border-radius:8px',
      'margin-bottom:8px'
    ];
    if (typeof c.thumb_height === 'number' && c.thumb_height > 0) {
      thumbStyles.push(`height:${c.thumb_height}px`);
    } else {
      thumbStyles.push('max-height:140px'); // taille par défaut de la miniature
    }
    if (c.image_pixelated === true) thumbStyles.push('image-rendering:pixelated');
    const thumbImg = thumbSrc
      ? `<img class="thumb" src="${thumbSrc}" alt="${(title||'').replace(/"/g,'&quot;')}"
              onerror="this.style.display='none'" style="${thumbStyles.join(';')}">`
      : '';

    // ---------- Image "preview" (DÉTAIL) — plus petite par défaut ----------
const previewSrc = c.image ? resolveAsset(modId, c.image) : '';
const detailImgStyles = ['border-radius:8px','display:block','margin:8px auto 12px'];
if (typeof c.image_width === 'number' && c.image_width > 0) {
  // taille au cas par cas via JSON
  detailImgStyles.push(`width:${c.image_width}px`, 'max-width:100%');
} else if (c.image_full === true) {
  // pleine largeur si explicitement demandé
  detailImgStyles.push('width:100%');
} else {
  // ✅ défaut : limité à ~440px et centré (plus petit qu’avant)
  detailImgStyles.push('max-width:440px','width:100%');
}
if (c.image_pixelated === true) detailImgStyles.push('image-rendering:pixelated');

const detailImg = previewSrc
  ? `<img src="${previewSrc}" alt="${(title||'').replace(/"/g,'&quot;')}"
          onerror="this.style.display='none'" style="${detailImgStyles.join(';')}">`
  : '';



    // ---------- Sections libres (multi-langue) ----------
    const details  = c.details || {};
    const sections = Array.isArray(details.sections) ? details.sections : [];
    const sectionsHtml = sections.map(sec => {
      const stitle = (lang === 'en') ? (sec.title_en || sec.title_fr || '') : (sec.title_fr || sec.title_en || '');
      const sitems = (lang === 'en') ? (sec.items_en || sec.items_fr || []) : (sec.items_fr || sec.items_en || []);

      // images par section : images_<lang> | images (fallback)
      const imgs = (lang === 'en')
        ? (sec.images_en || sec.images || [])
        : (sec.images_fr || sec.images_en || sec.images || []);
      const caps = (lang === 'en')
        ? (sec.captions_en || sec.captions || [])
        : (sec.captions_fr || sec.captions_en || sec.captions || []);

      const imgsHtml = imgs.length
        ? `<div class="section-images" style="display:flex;flex-wrap:wrap;gap:10px;margin:8px 0;">
             ${imgs.map((raw, i) => {
               const src = resolveAsset(modId, raw);
               const cap = caps[i] || '';
               return `
                 <figure style="margin:0;">
                   <img src="${src}" alt="${(stitle||title||'').replace(/"/g,'&quot;')}"
                        onerror="this.style.display='none'"
                        style="max-width:220px;border-radius:8px;">
                   ${cap ? `<figcaption style="opacity:.7;font-size:.9em;margin-top:4px;">${cap}</figcaption>` : ''}
                 </figure>
               `;
             }).join('')}
           </div>`
        : '';

      const listHtml = sitems.length ? `<ul>${sitems.map(it => `<li>${it}</li>`).join('')}</ul>` : '';
      return `${stitle ? `<h4 class="underline">${stitle}</h4>` : ''}${listHtml}${imgsHtml}`;
    }).join('');

    // ---------- Extras (craft / usage / drops) ----------
    const craft = details[lang === 'en' ? 'craft_en' : 'craft_fr'] || [];
    const usage = details[lang === 'en' ? 'usage_en' : 'usage_fr'] || [];
    const drops = details[lang === 'en' ? 'drops_en' : 'drops_fr'] || [];
    const extrasHtml = `
      ${craft.length ? `<h4 class="underline">${(translations?.[lang]?.craft)||'Craft'}</h4><ul>${craft.map(x=>`<li>${x}</li>`).join('')}</ul>` : ''}
      ${usage.length ? `<h4 class="underline">${(translations?.[lang]?.usage)||'Usage'}</h4><ul>${usage.map(x=>`<li>${x}</li>`).join('')}</ul>` : ''}
      ${drops.length ? `<h4 class="underline">${(translations?.[lang]?.drops)||'Drops'}</h4><ul>${drops.map(x=>`<li>${x}</li>`).join('')}</ul>` : ''}
    `;

    // ---------- Contenu affiché dans le DÉTAIL ----------
    const detailHtml = `
      ${detailImg}
      ${desc ? `<p>${desc}</p>` : ''}
      ${sectionsHtml}
      ${extrasHtml}
    `.trim().replace(/"/g, '&quot;');

    // ---------- Carte (GRILLE) ----------
    return `
      <div class="small-card ${c.type || ''}"
           data-id="${c.id || ''}"
           data-description="${detailHtml}"
           onclick="showCardDetail('${modId}', this)">
        ${thumbImg}
        <h4>${title}</h4>
        ${desc ? `<p>${desc}</p>` : ''}
      </div>
    `;
  }).join('');

  // Re-applique le filtre latéral actif après re-render
  const page = grid.closest('.page');
  const activeBtn = page?.querySelector('.side-buttons .card-btn.active');
  const type = activeBtn?.getAttribute('data-type') || 'all';
  if (type !== 'all') {
    grid.querySelectorAll('.small-card').forEach(card => {
      card.style.display = card.classList.contains(type) ? 'block' : 'none';
    });
  }
}





async function ensureCards(modId, opts = {}) {
  const gridSel = (modId === 'mod1') ? SELECTEURS.mod1Grid : SELECTEURS.mod2Grid;
  const grid = document.querySelector(gridSel);
  if (!grid) return;

  // option pour forcer le rechargement (clear cache)
  if (opts.force && _cache?.cartes) {
    _cache.cartes[modId] = null;
  }

  try {
    const data = await loadCards(modId);
    if (Array.isArray(data) && data.length) {
      renderCards(modId, data);

      // réappliquer le filtre actif (si autre que "all")
      const page = grid.closest('.page');
      const activeBtn = page?.querySelector('.side-buttons .card-btn.active');
      const type = activeBtn?.getAttribute('data-type') || 'all';
      if (type !== 'all') {
        grid.querySelectorAll('.small-card').forEach(card => {
          card.style.display = card.classList.contains(type) ? 'block' : 'none';
        });
      }
    } else {
      // si rien dans le JSON et aucune carte HTML déjà présente → petit message
      if (!grid.querySelector('.small-card')) {
        grid.innerHTML = `<p style="opacity:.7">Aucune carte trouvée. Vérifie <code>${CARD_SOURCES[modId]}</code>.</p>`;
      }
    }
  } catch (e) {
    // si parse/404 et grille vide → message clair
    if (!grid.querySelector('.small-card')) {
      grid.innerHTML = `<p style="color:#c62828">Impossible de charger <code>${CARD_SOURCES[modId]}</code> (${e.message}).</p>`;
    } else {
      console.warn('[cards]', modId, e);
    }
  }
}



/********************
 * CARTES — forcer l'affichage de la grille
 ********************/
function showCards(modId) {
  const page   = document.getElementById(modId);
  if (!page) return;

  const grid   = page.querySelector('.cards-grid');
  const detail = page.querySelector('.card-detail');
  const status = page.querySelector('.update-panel');

  // Ferme Statut + le panneau détail
  if (status) status.style.display = 'none';
  if (detail) detail.style.display = 'none';

  // Ré-affiche explicitement la grille en "grid"
  if (grid) grid.style.display = 'grid';
}


/********************
 * INIT — Bouton "← Retour" (Patchnotes)
 ********************/
(function wirePatchBackOnce() {
  if (window.__patchBackWired) return;
  window.__patchBackWired = true;

  document.addEventListener('click', (e) => {
    const back = e.target.closest('#patchnotes .back-btn');
    if (!back) return;
    e.preventDefault();

    // Si tu as showPatchList(), on l’utilise, sinon on retombe sur hideCardDetail('patchnotes')
    if (typeof showPatchList === 'function') {
      showPatchList();
    } else if (typeof hideCardDetail === 'function') {
      hideCardDetail('patchnotes');
    }
  }, true);
})();

/********************
 * INIT — Recherche & filtres des cartes (délégation, fix)
 ********************/
(function wireCardsUIOnce(){
  if (window.__cardsWired) return;
  window.__cardsWired = true;

  // Ferme Statut & Détail et ré-affiche la grille, en rechargeant si besoin
  async function ensureGridVisibleFrom(el) {
    const page = el.closest('.page');
    if (!page) return;
    const grid   = page.querySelector('.cards-grid');
    const detail = page.querySelector('.card-detail');
    const status = page.querySelector('.update-panel');

    if (status) status.style.display = 'none';
    if (detail) detail.style.display = 'none';
    if (!grid) return;

    // Remet la grille visible
    grid.style.display = 'grid';

    // Si aucune carte, on recharge la source JSON
    if (!grid.querySelector('.small-card')) {
      const modId = page.id; // "mod1" | "mod2"
      if (typeof ensureCards === 'function') {
        try { await ensureCards(modId); } catch(_) {}
      }
    }
  }

  // Recherche (input.search-bar) par page mod
  document.addEventListener('input', async (e) => {
    const input = e.target.closest('.search-bar');
    if (!input) return;

    await ensureGridVisibleFrom(input);

    const page = input.closest('.page');
    const grid = page?.querySelector('.cards-grid');
    if (!grid) return;

    const q = (input.value || '').trim().toLowerCase();
    grid.querySelectorAll('.small-card').forEach(card => {
      const t = (card.querySelector('h4')?.textContent || '').toLowerCase();
      const d = (card.querySelector('p')?.textContent || '').toLowerCase();
      card.style.display = (!q || t.includes(q) || d.includes(q)) ? 'block' : 'none';
    });
  }, true);

  // Filtres side-menu : <button class="card-btn" data-type="bloc|item|mob|all">
  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('.side-buttons .card-btn[data-type]');
    if (!btn) return;

    await ensureGridVisibleFrom(btn);

    const page = btn.closest('.page');
    const grid = page?.querySelector('.cards-grid');
    if (!grid) return;

    // activer visuellement
    const group = btn.parentElement;
    if (group) group.querySelectorAll('.card-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // appliquer le filtre
    const type = btn.getAttribute('data-type') || 'all';
    grid.querySelectorAll('.small-card').forEach(card => {
      card.style.display = (type === 'all' || card.classList.contains(type)) ? 'block' : 'none';
    });
  }, true);
})();

/********************
 * INIT — Bandeau : lien actif
 ********************/
(function wireHeaderNavActive(){
  if (window.__navActiveWired) return;
  window.__navActiveWired = true;

  function setActiveNavById(pageId) {
    const links = document.querySelectorAll('.bandeau nav a');
    links.forEach(a => {
      const href = a.getAttribute('href') || '';
      const data = a.getAttribute('data-page') || '';
      const target =
        (data || '').replace(/^#/, '') ||
        (href.includes('#') ? href.split('#').pop() : '').replace(/^#/, '');
      a.classList.toggle('active', target === pageId);
    });
  }

  // clique sur le bandeau
  document.addEventListener('click', (e) => {
    const a = e.target.closest('.bandeau nav a');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    const data = a.getAttribute('data-page') || '';
    const pageId = (data || (href.includes('#') ? href.split('#').pop() : '')).replace(/^#/, '');
    if (pageId) setActiveNavById(pageId);
  }, true);

  // expose une fonction globale pour l’utiliser depuis showPage(id)
  window.__setActiveNavById = setActiveNavById;
})();

// S’assure que le bon lien est actif après recharge
window.addEventListener('DOMContentLoaded', () => {
  const visible = Array.from(document.querySelectorAll('.page'))
    .find(p => getComputedStyle(p).display !== 'none');
  const id = visible ? visible.id : 'accueil';
  document.querySelectorAll('.bandeau nav a').forEach(a => a.classList.remove('active'));
  const nav = document.getElementById('nav-' + id);
  if (nav) nav.classList.add('active');
});
