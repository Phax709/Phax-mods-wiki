
const translations = {
  fr: {
    accueil: "Accueil",
    language: "Langue",
    site_title: "Wiki des Mods de Phax709",
    acatar: "Acatar",
    chaosium: "Chaosium",
    home_acatar_desc: "Un mod qui facilite les nouveaux joueurs dans Minecraft ainsi pour les joueurs avec plus d'expérience des fonctionnalités nouvelles.",
    home_chaosium_desc: "Un mod fait pour les joueurs très expérimentés et qui veulent du challenge et de la difficulté ! D'où sont nom !",
    patchnotes: "Patch Notes",
    settings: "Paramètres",
    credits: "Crédits",
    back: "Retour",
    theme_label: "Thème :",
    font_label: "Taille du texte :",
    dark: "Sombre",
    light: "Clair",
    font_normal: "Normale",
    font_large: "Grand",
    font_xlarge: "Très grand",
    search_placeholder: "Rechercher…",
    home_welcome_title: "Bienvenue",
    home_welcome_p1_a: "Bienvenue sur le wiki des mods Minecraft créé par",
    home_welcome_p2: "Sélectionnez un mod dans le menu en haut pour en savoir plus !",
    all_mc_versions: "Toutes les versions Minecraft",
    sort_new_to_old: "Plus récent → plus ancien",
    sort_old_to_new: "Plus ancien → plus récent",
    tout: "Tout",
    blocs: "Blocs",
    items: "Objets",
    mobs: "Mobs",
    nature: "Nature",
    structure: "Structures",
    minerai: "Minerais",
    craft: "Craft", //à choisir mais je peux aussi mettre Recette
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
    langue_fr: "Français",
    langue_en: "English"
  },
  en: {
    accueil: "Home",
    language: "Language",
    site_title: "Phax709 Mods Wiki",
    acatar: "Acatar",
    chaosium: "Chaosium",
    home_acatar_desc: "A mod that facilitates new players in Minecraft as well as for players with more experience of the new features.",
    home_chaosium_desc: "A mod made for very experienced players who want challenge and difficulty! Hence the name!",
    patchnotes: "Patch Notes",
    settings: "Settings",
    credits: "Credits",
    back: "Back",
    theme_label: "Theme:",
    font_label: "Text size:",
    dark: "Dark",
    light: "Light",
    font_normal: "Normal",
    font_large: "Large",
    font_xlarge: "Very large",
    search_placeholder: "Search…",
    home_welcome_title: "Welcome",
    home_welcome_p1_a: "Welcome to the wiki for Minecraft mods created by",
    home_welcome_p2: "Pick a mod from the top menu to learn more!",
    all_mc_versions: "All Minecraft versions",
    sort_new_to_old: "Newest → oldest",
    sort_old_to_new: "Oldest → newest",
    tout: "All",
    blocs: "Blocks",
    items: "Items",
    mobs: "Mobs",
    nature: "Nature",
    structure: "Structures",
    minerai: "Ores",
    craft: "Craft",
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
    langue_fr: "French",
    langue_en: "English"
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
function setPageTitle(lang) {
  const wanted = (translations?.[lang]?.site_title) || translations.fr.site_title || '';

  // cible prioritairement <title id="siteTitle">
  let titleEl = document.getElementById('siteTitle') || document.querySelector('head > title');
  if (!titleEl) {
    titleEl = document.createElement('title');
    titleEl.id = 'siteTitle';
    document.head.appendChild(titleEl);
  }
  titleEl.textContent = wanted;

  // synchronise l’API document.title (barre d’onglet)
  document.title = wanted;
}

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

  document.querySelectorAll('[data-translate-placeholder]').forEach(el=>{
  const k = el.getAttribute('data-translate-placeholder'); 
  if (translations[lang]?.[k]) el.placeholder = translations[lang][k];
});
document.querySelectorAll('[data-translate-title]').forEach(el=>{
  const k = el.getAttribute('data-translate-title'); 
  if (translations[lang]?.[k]) el.title = translations[lang][k];
});

}

function setLanguage(lang) {
  const chosen = lang || 'fr';
  ETAT.langue = chosen;
  localStorage.setItem('siteLanguage', chosen);

  document.documentElement.setAttribute('lang', chosen);

  const flag = document.querySelector('#currentLangFlag');
  if (flag) flag.src = (chosen === 'en') ? 'images/flag-gb.png' : 'images/flag-fr.png';

  applyTranslations(chosen);
  setPageTitle(chosen); // <= ajoute cette ligne

  if (document.getElementById('patchnotes')?.style.display !== 'none') renderPatchList();
  if (document.getElementById('mod1')?.style.display !== 'none') ensureCards('mod1');
  if (document.getElementById('mod2')?.style.display !== 'none') ensureCards('mod2');

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

  // Activer aussi le lien du drawer (mobile)
  document.querySelectorAll('#mobileDrawer .drawer-link').forEach(a => a.classList.remove('active'));
  const dl = document.querySelector(`#mobileDrawer .drawer-link[data-page="${pageId}"]`);
  if (dl) dl.classList.add('active');

  // 3bis) mémoriser la dernière page
  try { localStorage.setItem('lastPage', pageId); } catch {}

  // 4) état par page
  const grid   = page?.querySelector('.cards-grid');
  const list   = page?.querySelector('.patch-list');
  const detail = page?.querySelector('.card-detail');
  const status = page?.querySelector('.update-panel');

  // fermer les panneaux contextuels
  if (status) status.style.display = 'none';
  if (detail) detail.style.display = 'none';

  // Pages de mods : ré-affiche la grille & recharge les cartes
  if (pageId === 'mod1' || pageId === 'mod2') {
    if (grid) grid.style.display = 'grid';
    if (pageId === 'mod1' && typeof ensureCards === 'function') ensureCards('mod1', {force:true});
    if (pageId === 'mod2' && typeof ensureCards === 'function') ensureCards('mod2', {force:true});

    // Restaurer l’état mémorisé : Statut ou Grille (+ type filtré)
    const lastView = localStorage.getItem(`${pageId}:lastView`);
    if (lastView === 'status') {
      showStatus(pageId); // cache la grille et ouvre "Statut"
    } else {
      const savedType = localStorage.getItem(`${pageId}:lastType`) || 'all';
      const btn = page.querySelector(`.side-buttons .card-btn[data-type="${savedType}"]`);
      if (btn) btn.click(); // applique le filtre et active le bouton
      else {
        // si pas de bouton trouvé, on mémorise au moins la vue "grid"
        try { localStorage.setItem(`${pageId}:lastView`, 'grid'); } catch {}
      }
    }
  }

  if (pageId === 'patchnotes') {
    if (list)   list.style.display = 'flex';
    if (detail) detail.style.display = 'none';
    renderPatchList();
  }

  // 5) remonter
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setPageTitle(ETAT.langue);
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
  // mémoriser l’état choisi (utile si les boutons appellent filterCategory via onclick)
  try {
    localStorage.setItem('lastPage', pageId);
    localStorage.setItem(`${pageId}:lastView`, 'grid');
    localStorage.setItem(`${pageId}:lastType`, category || 'all');
  } catch {}
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
  if (!f) return;
  const set = new Set((data || []).map(n => n.mc).filter(Boolean));
  const versions = Array.from(set).sort((a,b) => a.localeCompare(b, undefined, { numeric:true }));
  // ⬇️ change UNIQUEMENT cette ligne :
  f.innerHTML = `<option value="">${t('all_mc_versions')}</option>` +
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

  // Helpers
  const getMc = (n) => {
    const raw = n.mc || n.minecraft_version || n.minecraftVersion || n.minecraft || n.mc_version || n.mcVersion || "";
    return raw ? String(raw).replace(/^MC\s*/i, "") : "";
  };
  const isBeta = (n) => !!(
    n.beta === true || n.is_beta === true ||
    /beta/i.test([n.channel, n.stage, n.tag, n.version, n.title].filter(Boolean).join(' '))
  );

  // 2) Catégorie active (menu gauche) : all | acatar | chaosium
  const activeBtn = document.querySelector('#patchnotes .side-buttons .card-btn.active');
  const cat = activeBtn ? (activeBtn.getAttribute('data-cat') || 'all') : 'all';

  // 3) Source + filtre catégorie via "mod"
  let notes = data.filter(n => (cat === 'all' ? true : (n.mod || '').toLowerCase() === cat));

  // 4) Filtre version Minecraft (utilise tous les alias)
  if (_patchMc) notes = notes.filter(n => getMc(n) === _patchMc);

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

  // 7) Rendu : gauche = titre + badges, droite = date
  list.innerHTML = '';
  notes.forEach(n => {
    const modKey = (n.mod || '').toLowerCase();
    const modName = (modKey === 'chaosium')
      ? (translations?.[lang]?.chaosium || 'Chaosium')
      : (translations?.[lang]?.acatar   || 'Acatar');

    const title    = `${modName}${n.version ? ` - v${n.version}` : ''}`;
    const mc       = getMc(n);
    const beta     = isBeta(n);

    const mcBadge   = mc   ? `<span class="pn-badge mc">MC ${mc}</span>` : '';
    const betaBadge = beta ? `<span class="pn-badge beta">Beta</span>`   : '';
    const dateHtml  = n.date ? `<span class="pe-date">${n.date}</span>` : '';

    const div = document.createElement('div');
    div.className = `patch-entry ${modKey}`;
    div.dataset.id = n.id;

    // pe-title (avec badges dedans) + date à droite
    div.innerHTML = `
      <span class="pe-title"><strong>${title}</strong> ${mcBadge} ${betaBadge}</span>
      ${dateHtml}
    `;
    div.addEventListener('click', () => showPatchDetail(n.id));
    list.appendChild(div);
  });

  // 8) Assure la bonne vue
  const detail = document.querySelector('#patchnotes .card-detail');
  if (detail) detail.style.display = 'none';
  list.style.display = 'flex';
}


/********************
 * PATCHNOTES — détail & retour
 ********************/
// === DÉTAIL PATCHNOTE : titre + badges (MC + Beta)
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
  const modName = (modKey === 'chaosium')
    ? (translations?.[lang]?.chaosium || 'Chaosium')
    : (translations?.[lang]?.acatar   || 'Acatar');

  const title    = `${modName}${n.version ? ` - v${n.version}` : ''}`;
  const dateHtml = n.date ? `<div class="patch-meta">${n.date}</div>` : '';

  // --- Version Minecraft (fallback sur plusieurs clés)
  const mcRaw =
    n.minecraft_version || n.minecraftVersion || n.minecraft ||
    n.mc_version || n.mcVersion || n.mc || "";
  const mc = mcRaw ? String(mcRaw).replace(/^MC\s*/i, "") : "";

  // --- Détection Beta (booléen ou mot-clé)
  const isBeta = !!(
    n.beta === true || n.is_beta === true ||
    /beta/i.test([n.channel, n.stage, n.tag, n.version, n.title].filter(Boolean).join(' '))
  );

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
    <div class="pn-head">
      <h3>${title}</h3>
      <div class="pn-badges">
        ${mc ? `<span class="pn-badge mc">MC ${mc}</span>` : ''}
        ${isBeta ? `<span class="pn-badge beta">Beta</span>` : ''}
      </div>
    </div>
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
// On lit d'abord une date de mise à jour PRÉVUE (next_update) si présente,
// sinon on retombe sur updated_at pour ne rien casser.
let dateLabel = "";
let isIndet = false;
const rawPlan = (info.next_update || info.updated_at || '').toString().trim();

if (rawPlan) {
  const low = rawPlan.toLowerCase();
  isIndet = ['indeterminee','indéterminée','indetermine','indeterminate','unknown','n/a','-','—','?'].includes(low);

  if (isIndet) {
    // Cas “date indéterminée”
    dateLabel = (lang === 'fr') ? "Date indéterminée" : "Date indeterminate";
  } else {
    // Date valide → on formate puis on préfixe avec la clé de traduction “planned_update”
    const d = new Date(rawPlan);
    const human = isNaN(d)
      ? rawPlan
      : d.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', { year:'numeric', month:'long', day:'numeric' });
    // "Mise à jour prévue pour le " (FR) / "Update planned for " (EN)
    dateLabel = (translations[lang].planned_update || '') + human;
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


// ⬇️ mémoriser que l’on est en vue "status"
try {
  localStorage.setItem('lastPage', modId);
  localStorage.setItem(`${modId}:lastView`, 'status');
} catch {}
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

// Mémoriser la catégorie sélectionnée dans mod1/mod2 (sans changer ton filtrage)
(function rememberModFiltersOnce(){
  if (window.__rememberModFilters) return;
  window.__rememberModFilters = true;

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('#mod1 .side-buttons .card-btn[data-type], #mod2 .side-buttons .card-btn[data-type]');
    if (!btn) return;

    const page = btn.closest('.page');        // 'mod1' ou 'mod2'
    const mod  = page ? page.id : null;
    if (!mod) return;

    const type = btn.getAttribute('data-type') || 'all';
    try {
      localStorage.setItem('lastPage', mod);               // la page (mod1/mod2)
      localStorage.setItem(`${mod}:lastView`, 'grid');     // on est en "grille"
      localStorage.setItem(`${mod}:lastType`, type);       // la catégorie cliquée
    } catch {}
  }, true);
})();


window.addEventListener('DOMContentLoaded', () => {
  console.log('[INIT] prêt');
  // Applique langue / drapeau dès le départ
  setLanguage(ETAT.langue);

  initUI();
  const saved = localStorage.getItem('lastPage');
  const startPage = (saved && document.getElementById(saved)) ? saved : 'accueil';
  showPage(startPage);
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

  // --- UL "riche" : *Sous-titre, lignes vides = espace
  const renderRichList = (arr) => {
    const lines = Array.isArray(arr) ? arr : [];
    if (!lines.length) return '';
    return `<ul>${
      lines.map(raw => {
        const txt = (raw ?? '').toString();
        if (!txt.trim()) return `<li class="spacer" style="list-style:none;height:.35rem;"></li>`;
        if (/^\s*\*/.test(txt)) {
          const label = txt.replace(/^\s*\*\s*/, '');
          return `<li class="subhead" style="list-style:none;margin:8px 0 4px;text-indent:-1.15em;padding-left:1.15em;"><strong>${label}</strong></li>`;
        }
        return `<li>${txt}</li>`;
      }).join('')
    }</ul>`;
  };

  // --- SPRITE helper (animation frame par frame, style Minecraft)
  const makeSprite = (sideKey, cfg, targetH, pixelated = true, maxW = null, extraCSS = '') => {
    if (!cfg || !cfg.src) return '';
    // accepter frame_width|height ET frameWidth|Height
    cfg.frame_width  = cfg.frame_width  ?? cfg.frameWidth;
    cfg.frame_height = cfg.frame_height ?? cfg.frameHeight;
    if (!cfg.frames || !cfg.frame_width || !cfg.frame_height) return '';

    const frames = Math.max(1, cfg.frames|0);
    const dir    = (cfg.direction === 'horizontal') ? 'horizontal' : 'vertical';
    const fps    = (cfg.fps && cfg.fps > 0) ? cfg.fps : 6;

    // Taille d'affichage (on garde le ratio d'une frame)
    const dispH  = Math.max(1, targetH|0);
    const ratio  = cfg.frame_width / cfg.frame_height;
    const dispW  = Math.round(dispH * ratio);

    // 1 frame visible = dispW x dispH
    const bgSize = (dir === 'horizontal')
      ? `${dispW * frames}px ${dispH}px`
      : `${dispW}px ${dispH * frames}px`;

    const order     = Array.isArray(cfg.order) ? cfg.order : null;         // ex [0,1,2,3,2,1]
    const durations = Array.isArray(cfg.durations) ? cfg.durations : null; // en ms

    const pxCSS   = pixelated ? 'image-rendering:pixelated;' : 'image-rendering:auto;';
    const maxWcss = (maxW && maxW > 0) ? `max-width:${maxW}px;` : '';

    return `
      <div class="sprite-${sideKey}" data-sprite="1"
           data-frames="${frames}" data-fps="${fps}"
           data-dir="${dir}" data-fw="${cfg.frame_width}" data-fh="${cfg.frame_height}"
           ${order ? `data-order="${order.join(',')}"` : ''}
           ${durations ? `data-durations="${durations.join(',')}"` : ''}
           style="
             width:${dispW}px;height:${dispH}px;
             background-image:url('${resolveAsset(modId, cfg.src)}');
             background-repeat:no-repeat;
             background-position:0 0;
             background-size:${bgSize};
             ${pxCSS}${maxWcss}
             border-radius:8px;
             ${extraCSS}
           "></div>`;
  };

  grid.innerHTML = (cards || []).map(c => {
    const title = (lang === 'en') ? (c.title_en || c.title_fr || '') : (c.title_fr || c.title_en || '');
    const desc  = (lang === 'en') ? (c.description_en || c.description_fr || '') : (c.description_fr || c.description_en || '');

    // ---------- SOURCES d'images : gauche/droite + pools ----------
    // GAUCHE
    const leftPool = Array.isArray(c.image_left_pool) ? c.image_left_pool : [];
    const leftCandidates = leftPool.length ? leftPool : (c.image_left ? [c.image_left] : []);
    let leftIdx = 0;
    if (leftCandidates.length > 1) {
      const mode = c.left_select || 'sticky'; // 'sticky' | 'daily' | 'random'
      if (mode === 'daily') {
        const day = Math.floor(Date.now() / 86400000);
        leftIdx = day % leftCandidates.length;
      } else if (mode === 'random') {
        leftIdx = Math.floor(Math.random() * leftCandidates.length);
      } else {
        const key = 'leftChoice:' + (c.id || 'card');
        const saved = localStorage.getItem(key);
        if (saved !== null && !isNaN(+saved)) leftIdx = (+saved) % leftCandidates.length;
        else { leftIdx = Math.floor(Math.random() * leftCandidates.length); try{localStorage.setItem(key, String(leftIdx));}catch(_){} }
      }
    }
    const leftUrls = leftCandidates.map(raw => resolveAsset(modId, raw));
    const leftSrc  = leftUrls[leftIdx] || '';

    // DROITE
    const rightPool = Array.isArray(c.image_right_pool) ? c.image_right_pool
                    : (Array.isArray(c.image_pool) ? c.image_pool : []); // alias optionnel
    const rightCandidates = rightPool.length ? rightPool : (c.image ? [c.image] : []);
    let rightIdx = 0;
    if (rightCandidates.length > 1) {
      const mode = c.right_select || 'sticky';
      if (mode === 'daily') {
        const day = Math.floor(Date.now() / 86400000);
        rightIdx = day % rightCandidates.length;
      } else if (mode === 'random') {
        rightIdx = Math.floor(Math.random() * rightCandidates.length);
      } else {
        const key = 'rightChoice:' + (c.id || 'card');
        const saved = localStorage.getItem(key);
        if (saved !== null && !isNaN(+saved)) rightIdx = (+saved) % rightCandidates.length;
        else { rightIdx = Math.floor(Math.random() * rightCandidates.length); try{localStorage.setItem(key, String(rightIdx));}catch(_){} }
      }
    }
    const rightUrls = rightCandidates.map(raw => resolveAsset(modId, raw));
    const rightSrc  = rightUrls[rightIdx] || '';

    // Intervalles d’alternance auto (0 = off)
    const leftRotateMs =
      (typeof c.left_rotate_ms === 'number' && c.left_rotate_ms > 0) ? Math.round(c.left_rotate_ms)
      : (typeof c.left_rotate_seconds === 'number' && c.left_rotate_seconds > 0) ? Math.round(c.left_rotate_seconds*1000)
      : 0;
    const rightRotateMs =
      (typeof c.right_rotate_ms === 'number' && c.right_rotate_ms > 0) ? Math.round(c.right_rotate_ms)
      : (typeof c.right_rotate_seconds === 'number' && c.right_rotate_seconds > 0) ? Math.round(c.right_rotate_seconds*1000)
      : 0;

    // Sprites animés (optionnels)
    const leftSprite  = c.left_sprite  || c.image_left_sprite  || null;
    const rightSprite = c.right_sprite || c.image_right_sprite || null;

    // ---------- Image miniature (GRILLE) ----------
    const leftPixel  = (typeof c.image_left_pixelated === 'boolean') ? c.image_left_pixelated : (c.image_pixelated === true);
    const rightPixel = (c.image_pixelated === true);

    const thumbStylesSolo = [
      'display:block','width:100%',
      (c.thumb_cover ? 'object-fit:cover' : 'object-fit:contain'),
      'border-radius:8px','margin-bottom:8px'
    ];
    if (typeof c.thumb_height === 'number' && c.thumb_height > 0) thumbStylesSolo.push(`height:${c.thumb_height}px`);
    else thumbStylesSolo.push('max-height:140px');
    if (rightPixel) thumbStylesSolo.push('image-rendering:pixelated');

    let thumbImg = '';
    if ((leftSrc || leftSprite) && (rightSrc || rightSprite)) {
      // DUO (gauche + droite) — hauteur commune en carte
      const pairH =
        (typeof c.thumb_pair_height === 'number' && c.thumb_pair_height > 0) ? c.thumb_pair_height :
        (typeof c.thumb_right_height === 'number' && c.thumb_right_height > 0) ? c.thumb_right_height :
        (typeof c.thumb_height === 'number' && c.thumb_height > 0) ? c.thumb_height : 110;

      // GAUCHE
      let leftNode = '';
      if (leftSprite) {
        const leftH = (typeof c.thumb_left_height === 'number' && c.thumb_left_height > 0) ? c.thumb_left_height : pairH;
        leftNode = makeSprite('L', leftSprite, leftH, leftPixel);
      } else {
        const leftSizeStyle = (typeof c.thumb_left_width === 'number' && c.thumb_left_width > 0)
          ? `width:${c.thumb_left_width}px;height:${pairH}px;`
          : `height:${(typeof c.thumb_left_height === 'number' && c.thumb_left_height > 0) ? c.thumb_left_height : pairH}px;max-width:${pairH}px;`;
        const rotateAttrs = (leftUrls.length > 1 && leftRotateMs > 0)
          ? ` data-rotate="left" data-urls="${leftUrls.map(u=>encodeURIComponent(u)).join(',')}" data-ms="${leftRotateMs}" data-idx="${leftIdx}" data-ts="${Date.now()}"`
          : '';
        leftNode = `
          <img class="thumb-left" src="${leftSrc}" alt="block"
               onerror="this.style.display='none'"
               ${rotateAttrs}
               style="${leftSizeStyle}object-fit:contain;${leftPixel?'image-rendering:pixelated;':'image-rendering:auto;'}border-radius:8px;">`;
      }

      // DROITE
      let rightNode = '';
      if (rightSprite) {
        rightNode = makeSprite('R', rightSprite, pairH, rightPixel);
      } else {
        const rotateAttrs = (rightUrls.length > 1 && rightRotateMs > 0)
          ? ` data-rotate="right" data-urls="${rightUrls.map(u=>encodeURIComponent(u)).join(',')}" data-ms="${rightRotateMs}" data-idx="${rightIdx}" data-ts="${Date.now()}"`
          : '';
        rightNode = `
          <img class="thumb-right" src="${rightSrc}" alt="${(title||'').replace(/"/g,'&quot;')}"
               onerror="this.style.display='none'"
               ${rotateAttrs}
               style="height:${pairH}px;width:auto;object-fit:contain;${rightPixel?'image-rendering:pixelated;':'image-rendering:auto;'}border-radius:8px;margin-bottom:8px;flex:0 0 auto;">`;
      }

      thumbImg = `
        <div class="thumb-pair" style="display:flex;align-items:center;justify-content:center;gap:12px;">
          ${leftNode}
          ${rightNode}
        </div>`;
    } else {
      // UNE SEULE IMAGE / SPRITE à droite → centré
      if (rightSrc) {
        thumbImg = `<img class="thumb" src="${rightSrc}" alt="${(title||'').replace(/"/g,'&quot;')}"
                 onerror="this.style.display='none'"
                 style="display:block;margin:0 auto 8px;${thumbStylesSolo.join(';')}">`;
      } else if (rightSprite) {
        const h = (typeof c.thumb_height === 'number' && c.thumb_height > 0) ? c.thumb_height : 110;
        thumbImg = makeSprite('Rsolo', rightSprite, h, rightPixel, null, 'display:block;margin:0 auto 8px;');
      } else {
        thumbImg = '';
      }
    }

    // ---------- Image "preview" (DÉTAIL) ----------
    const previewSrc = rightSrc;
    let detailImg = '';
    if ((previewSrc || rightSprite) && (leftSrc || leftSprite) && c.detail_pair !== false) {
      // Duo en détail : hauteurs indépendantes possibles
      const baseH = (typeof c.detail_pair_height === 'number' && c.detail_pair_height > 0) ? c.detail_pair_height : 180;
      const leftH  = (typeof c.detail_left_height  === 'number' && c.detail_left_height  > 0) ? c.detail_left_height  : baseH;
      const rightH = (typeof c.detail_right_height === 'number' && c.detail_right_height > 0)
                   ? c.detail_right_height
                   : (typeof c.detail_right_scale === 'number' && c.detail_right_scale > 0
                      ? Math.round(baseH * c.detail_right_scale)
                      : baseH);
      const rightMaxW = (typeof c.detail_right_max_width === 'number' && c.detail_right_max_width > 0) ? c.detail_right_max_width : 440;

      // GAUCHE
      let leftDetailNode = '';
      if (leftSprite) {
        leftDetailNode = makeSprite('Ldet', leftSprite, leftH, leftPixel);
      } else {
        const rotateAttrs = (leftUrls.length > 1 && leftRotateMs > 0)
          ? ` data-rotate="left" data-urls="${leftUrls.map(u=>encodeURIComponent(u)).join(',')}" data-ms="${leftRotateMs}" data-idx="${leftIdx}" data-ts="${Date.now()}"`
          : '';
        leftDetailNode = `
          <img src="${leftSrc}" alt="block"
               onerror="this.style.display='none'"
               ${rotateAttrs}
               style="height:${leftH}px;width:auto;${leftPixel?'image-rendering:pixelated;':'image-rendering:auto;'}border-radius:8px;">`;
      }

      // DROITE
      let rightDetailNode = '';
      if (rightSprite) {
        rightDetailNode = makeSprite('Rdet', rightSprite, rightH, rightPixel, rightMaxW);
      } else {
        const rotateAttrs = (rightUrls.length > 1 && rightRotateMs > 0)
          ? ` data-rotate="right" data-urls="${rightUrls.map(u=>encodeURIComponent(u)).join(',')}" data-ms="${rightRotateMs}" data-idx="${rightIdx}" data-ts="${Date.now()}"` : '';
        rightDetailNode = `
          <img src="${previewSrc}" alt="${(title||'').replace(/"/g,'&quot;')}"
               onerror="this.style.display='none'"
               ${rotateAttrs}
               style="height:${rightH}px;max-width:${rightMaxW}px;width:auto;${rightPixel?'image-rendering:pixelated;':'image-rendering:auto;'}border-radius:8px;flex:0 0 auto;">`;
      }

      detailImg = `
        <div class="detail-pair" style="display:flex;align-items:flex-start;justify-content:center;gap:12px;margin:8px 0 12px;">
          ${leftDetailNode}
          ${rightDetailNode}
        </div>`;
    } else {
      // Sprite/IMG seule à droite → centré
      const detailImgStylesSolo = ['border-radius:8px','display:block','margin:8px auto 12px','max-width:440px','width:100%'];
      if (rightPixel) detailImgStylesSolo.push('image-rendering:pixelated');

      if (previewSrc) {
        detailImg = `<img src="${previewSrc}" alt="${(title||'').replace(/"/g,'&quot;')}"
                    onerror="this.style.display='none'" style="${detailImgStylesSolo.join(';')}">`;
      } else if (rightSprite) {
        const baseH =
          (typeof c.detail_right_height === 'number' && c.detail_right_height > 0) ? c.detail_right_height :
          (typeof c.detail_pair_height === 'number' && c.detail_pair_height > 0) ? c.detail_pair_height : 180;
        const maxW = (typeof c.detail_right_max_width === 'number' && c.detail_right_max_width > 0) ? c.detail_right_max_width : 440;
        detailImg = makeSprite('RsoloDet', rightSprite, baseH, rightPixel, maxW, 'display:block;margin:8px auto 12px;');
      } else {
        detailImg = '';
      }
    }

    // ---------- Sections libres & extras ----------
    const details  = c.details || {};
    const sections = Array.isArray(details.sections) ? details.sections : [];
    const sectionsHtml = sections.map(sec => {
      const stitle = (lang === 'en') ? (sec.title_en || sec.title_fr || '') : (sec.title_fr || sec.title_en || '');
      const sitems = (lang === 'en') ? (sec.items_en || sec.items_fr || []) : (sec.items_fr || sec.items_en || []);

      const imgs = (lang === 'en') ? (sec.images_en || sec.images || []) : (sec.images_fr || sec.images_en || sec.images || []);
      const caps = (lang === 'en') ? (sec.captions_en || sec.captions || []) : (sec.captions_fr || sec.captions_en || sec.captions || []);

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
                 </figure>`;
             }).join('')}
           </div>` : '';

      const listHtml = sitems.length ? `<ul style="padding-left:1.15em;">${
        sitems.map(it => {
          const txt = (it ?? '').toString();
          if (!txt.trim()) return `<li class="spacer" style="list-style:none;height:.35rem;"></li>`;
          if (/^\s*\*/.test(txt)) {
            const label = txt.replace(/^\s*\*\s*/, '');
            return `<li class="subhead" style="list-style:none;margin:8px 0 4px;text-indent:-1.15em;padding-left:1.15em;"><strong>${label}</strong></li>`;
          }
          return `<li>${txt}</li>`;
        }).join('')
      }</ul>` : '';

      return `${stitle ? `<h4 class="underline">${stitle}</h4>` : ''}${listHtml}${imgsHtml}`;
    }).join('');

    const craft = details[lang === 'en' ? 'craft_en' : 'craft_fr'] || [];
    const usage = details[lang === 'en' ? 'usage_en' : 'usage_fr'] || [];
    const drops = details[lang === 'en' ? 'drops_en' : 'drops_fr'] || [];
    const extrasHtml = `
      ${craft.length ? `<h4 class="underline">${(translations?.[lang]?.craft)||'Craft'}</h4>${renderRichList(craft)}` : ''}
      ${usage.length ? `<h4 class="underline">${(translations?.[lang]?.usage)||'Usage'}</h4>${renderRichList(usage)}` : ''}
      ${drops.length ? `<h4 class="underline">${(translations?.[lang]?.drops)||'Drops'}</h4>${renderRichList(drops)}` : ''}
    `;

    // ---------- Contenu détail dans data-attr ----------
    const detailHtml = `
      ${detailImg}
      ${desc ? `<p>${desc}</p>` : ''}
      ${sectionsHtml}
      ${extrasHtml}
    `.trim().replace(/"/g, '&quot;');

    // ---------- Render de la carte ----------
    return `
      <div class="small-card ${c.type || ''}"
           data-id="${c.id || ''}"
           data-description="${detailHtml}"
           onclick="showCardDetail('${modId}', this)">
        ${thumbImg}
        <h4>${title}</h4>
        ${desc ? `<p>${desc}</p>` : ''}
      </div>`;
  }).join('');

  // Réapplique le filtre latéral actif
  const page = grid.closest('.page');
  const activeBtn = page?.querySelector('.side-buttons .card-btn.active');
  const type = activeBtn?.getAttribute('data-type') || 'all';
  if (type !== 'all') {
    grid.querySelectorAll('.small-card').forEach(card => {
      card.style.display = card.classList.contains(type) ? 'block' : 'none';
    });
  }

  // Ticker global pour l'alternance d'images (non-sprite)
  if (!window.__rotateTicker) {
    window.__rotateTicker = setInterval(() => {
      const now = Date.now();
      document.querySelectorAll('img[data-rotate]').forEach(img => {
        const ms = parseInt(img.getAttribute('data-ms'), 10) || 3000;
        const ts = parseInt(img.getAttribute('data-ts'), 10) || 0;
        if (now - ts < ms) return;
        let urls = img.__urls;
        if (!urls) {
          const raw = img.getAttribute('data-urls') || '';
          urls = raw.split(',').map(s => decodeURIComponent(s)).filter(Boolean);
          img.__urls = urls;
        }
        if (urls.length < 2) return;
        let idx = parseInt(img.getAttribute('data-idx'), 10) || 0;
        idx = (idx + 1) % urls.length;
        img.src = urls[idx];
        img.setAttribute('data-idx', String(idx));
        img.setAttribute('data-ts', String(now));
      });
    }, 500);
  }

  // Lancer/assurer l'animateur de sprites (frame par frame)
  if (typeof ensureSpriteAnimator === 'function') ensureSpriteAnimator();
}


function ensureSpriteAnimator() {
  if (window.__spriteAnim) return;

  function initNewSprites() {
    document.querySelectorAll('[data-sprite="1"]').forEach(el => {
      if (el.__spr) return;

      const frames = parseInt(el.dataset.frames, 10) || 1;
      const fps    = parseFloat(el.dataset.fps) || 6;
      const dir    = el.dataset.dir === 'horizontal' ? 'horizontal' : 'vertical';

      // ordre & durées personnalisés (ms), façon .mcmeta
      const order = (el.dataset.order || '')
        .split(',').map(x => parseInt(x,10))
        .filter(n => !isNaN(n) && n >= 0 && n < frames);
      const durations = (el.dataset.durations || '')
        .split(',').map(x => parseInt(x,10)).filter(n => !isNaN(n) && n > 0);

      const dispW = el.clientWidth  || parseInt(getComputedStyle(el).width, 10);
      const dispH = el.clientHeight || parseInt(getComputedStyle(el).height, 10);

      el.__spr = {
        frames, fps, dir, dispW, dispH,
        idx: 0,
        order: order.length ? order : null,
        durations: durations.length ? durations : null,
        next: performance.now() + (durations.length ? durations[0] : 1000 / fps)
      };
    });
  }

  function step(t) {
    document.querySelectorAll('[data-sprite="1"]').forEach(el => {
      const s = el.__spr; if (!s) return;

      if (t >= s.next) {
        // avance l’index (ordre custom si présent)
        if (s.order) {
          const pos = s.order.indexOf(s.idx);
          const nextPos = (pos + 1) % s.order.length;
          s.idx = s.order[nextPos];
        } else {
          s.idx = (s.idx + 1) % s.frames;
        }

        // déplacement EXACT d'une frame à l'autre
        const offX = (s.dir === 'horizontal') ? -(s.dispW * s.idx) : 0;
        const offY = (s.dir === 'vertical')   ? -(s.dispH * s.idx) : 0;
        el.style.backgroundPosition = `${offX}px ${offY}px`;

        // prochaine échéance (durations[] sinon 1000/fps)
        const base = s.durations
          ? s.durations[(s.order ? s.order.indexOf(s.idx) : s.idx) % s.durations.length]
          : (1000 / s.fps);
        s.next = t + base;
      }
    });
    requestAnimationFrame(step);
  }

  // Observe les ajouts de nœuds (ex : ouverture d’un détail)
  const mo = new MutationObserver(initNewSprites);
  mo.observe(document.body, { childList: true, subtree: true });

  initNewSprites();
  requestAnimationFrame(step);
  window.__spriteAnim = true;
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

// Drawer mobile
(function wireMobileDrawer(){
  const drawer = document.getElementById('mobileDrawer');
  const btn    = document.getElementById('mobileMenuBtn');
  if (!drawer || !btn) return;

  function openDrawer(){
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    btn.setAttribute('aria-expanded', 'true');
  }
  function closeDrawer(){
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    btn.setAttribute('aria-expanded', 'false');
  }
  window.openPageFromDrawer = function(pageId){
    showPage(pageId);
    closeDrawer();
  };

  btn.addEventListener('click', (e)=>{ e.stopPropagation(); drawer.classList.contains('open') ? closeDrawer() : openDrawer(); });
  drawer.addEventListener('click', (e)=>{ if (e.target.matches('[data-close], .drawer-backdrop')) closeDrawer(); });
  document.addEventListener('keydown', (e)=>{ if (e.key === 'Escape') closeDrawer(); });
})();

// Ouvre le panneau Paramètres depuis le drawer
function openSettingsPanel() {
  const settingsMenu   = document.getElementById('settingsMenu');   // wrapper du bouton ⚙ + panneau
  const settingsPanel  = document.getElementById('settingsPanel');  // le panneau
  const langSelector   = document.querySelector('.lang-selector');  // le menu langue (à fermer)

  if (!settingsMenu || !settingsPanel) return;

  // Fermer la langue si ouverte
  if (langSelector) langSelector.classList.remove('open');

  // Ouvrir le panneau paramètres (compat .open ET .panel-open)
  settingsMenu.classList.add('open');
  settingsMenu.classList.add('panel-open');

  // Ceinture + bretelles si une règle CSS met display:none
  settingsPanel.style.display = 'block';

  // ARIA (facultatif)
  const toggle = document.getElementById('settingsToggle');
  if (toggle) toggle.setAttribute('aria-expanded', 'true');
}

// Ouvrir le panneau Paramètres depuis le drawer (en différé pour éviter le close global)
function openSettingsFromDrawer(e) {
  if (e) { e.preventDefault(); e.stopPropagation(); }
  // ferme le drawer d'abord
  if (typeof closeDrawer === 'function') closeDrawer();
  // puis ouvre les paramètres après la fin de ce clic
  setTimeout(() => {
    const btn = document.getElementById('settingsToggle');
    if (btn) btn.click(); // utilise ta logique existante d'ouverture
  }, 80);
  return false;
}

function setThemeFromDrawer(cls) {
  ETAT.theme = cls;
  localStorage.setItem('siteTheme', cls);
  if (typeof appliquerThemeEtPolice === 'function') {
    appliquerThemeEtPolice();
  } else if (typeof applyThemeAndFont === 'function') {
    applyThemeAndFont();
  } else {
    const root = document.documentElement;
    root.classList.remove('theme-sombre','theme-clair');
    root.classList.add(cls);
  }
}

function setFontFromDrawer(cls) {
  ETAT.fontSize = cls;
  localStorage.setItem('siteFont', cls);
  if (typeof appliquerThemeEtPolice === 'function') {
    appliquerThemeEtPolice();
  } else if (typeof applyThemeAndFont === 'function') {
    applyThemeAndFont();
  } else {
    const root = document.documentElement;
    root.classList.remove('font-normal','font-grand','font-tres-grand');
    root.classList.add(cls);
  }
}

// ---------- Liens entre cartes (ex: <a data-card-id="baton_forge">Bâton forgé</a>)
function gotoCard(modId, cardId) {
  // revenir sur la grille si un panneau est ouvert
  if (typeof showCards === 'function') showCards(modId);

  const gridSel = (modId === 'mod1') ? SELECTEURS.mod1Grid : SELECTEURS.mod2Grid;
  const grid = document.querySelector(gridSel);
  if (!grid) return;

  // essaie d'ouvrir tout de suite
  let el = grid.querySelector(`.small-card[data-id="${cardId}"]`);
  if (el) {
    showCardDetail(modId, el);
    try { el.scrollIntoView({ behavior:'smooth', block:'center' }); } catch(_){}
    return;
  }

  // si la carte n'est pas encore rendue, (re)charge et réessaie
  if (typeof ensureCards === 'function') ensureCards(modId);
  setTimeout(() => {
    el = grid.querySelector(`.small-card[data-id="${cardId}"]`);
    if (el) showCardDetail(modId, el);
  }, 120);
}

// capture les clics sur <a data-card-id="...">
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[data-card-id]');
  if (!link) return;

  e.preventDefault();
  // déduire le mod depuis la page courante
  const page = link.closest('.page');
  const modId =
    page?.id ||
    (document.getElementById('mod1')?.style.display !== 'none' ? 'mod1' : 'mod2');

  const targetId = link.getAttribute('data-card-id');
  if (targetId) gotoCard(modId, targetId);
}, true);

/********************
 * NAVIGATION ENTRE CARTES (pile d'historique sans double push)
 ********************/
(function wireCardHistory() {
  if (window.__cardHistoryWired) return;
  window.__cardHistoryWired = true;

  const HISTORY = { mod1: [], mod2: [], backNav: false };

  const getDetailEl  = (m) => document.querySelector(`#${m} .card-detail`);
  const getCurrentId = (m) => getDetailEl(m)?.getAttribute('data-current-card-id') || null;
  const setCurrentId = (m, id) => { const d = getDetailEl(m); if (d) d.setAttribute('data-current-card-id', id || ''); };
  const gridSel      = (m) => (m === 'mod1' ? SELECTEURS.mod1Grid : SELECTEURS.mod2Grid);

  // --- showCardDetail : push l'ancienne carte (sauf pendant un "retour")
  const origShow = window.showCardDetail;
  if (typeof origShow === 'function') {
    window.showCardDetail = function(modId, el, ...rest) {
      try {
        const curr = getCurrentId(modId);
        const next = el?.getAttribute('data-id');
        if (!HISTORY.backNav && curr && next && curr !== next) {
          (HISTORY[modId] ||= []).push(curr);
        }
      } catch (_) {}
      const res = origShow.apply(this, [modId, el, ...rest]);
      try { setCurrentId(modId, el?.getAttribute('data-id') || null); } catch (_) {}
      HISTORY.backNav = false; // fin du mode retour
      return res;
    };
  }

  // --- hideCardDetail : revenir d'abord à la carte précédente, sinon à la grille
  const origHide = window.hideCardDetail;
  if (typeof origHide === 'function') {
    window.hideCardDetail = function(modId, ...rest) {
      const prev = (HISTORY[modId] || []).pop();
      if (prev) {
        const grid = document.querySelector(gridSel(modId));
        const el = grid?.querySelector(`.small-card[data-id="${prev}"]`);
        if (el) {
          HISTORY.backNav = true;                 // empêche tout "re-push"
          return window.showCardDetail(modId, el);
        }
      }
      setCurrentId(modId, null);
      return origHide.apply(this, [modId, ...rest]);
    };
  }

  // --- gotoCard : NE PUSH PLUS (c'est showCardDetail qui s'en charge)
  const origGoto = window.gotoCard;
  if (typeof origGoto === 'function') {
    window.gotoCard = function(modId, cardId) {
      HISTORY.backNav = false;
      return origGoto.apply(this, arguments);
    };
  }

  // --- change de page : purge la pile
  const origShowPage = window.showPage;
  if (typeof origShowPage === 'function') {
    window.showPage = function(pageId) {
      HISTORY.mod1 = []; HISTORY.mod2 = []; HISTORY.backNav = false;
      return origShowPage.apply(this, arguments);
    };
  }
})();
