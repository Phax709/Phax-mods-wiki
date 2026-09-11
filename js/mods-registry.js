// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                     REGISTRE CENTRAL DES MODS                                ║
// ║                                                                              ║
// ║  Ce fichier est la SOURCE UNIQUE de toute information sur les mods.          ║
// ║  Toutes les autres parties du site (sidebar, cartes, status bar,             ║
// ║  recherche, wiki, badges de liens) lisent depuis ce registre.                ║
// ║                                                                              ║
// ║  ─── AJOUTER UN NOUVEAU MOD ───                                              ║
// ║  1. Ajouter une entrée dans modsRegistry ci-dessous                          ║
// ║  2. Créer la page HTML du mod dans pages/mods/                               ║
// ║  3. (Optionnel) Créer les JSON wiki dans pages/wiki/<wikiId>/                ║
// ║  4. (Optionnel) Ajouter les patchnotes dans patchnotes-config.js             ║
// ║  5. (Optionnel) Ajouter les traductions i18n (descriptions page mod)         ║
// ║  C'est tout ! La sidebar, les cartes, la status bar, la recherche            ║
// ║  et les badges seront automatiquement mis à jour.                            ║
// ║                                                                              ║
// ║  ─── STRUCTURE D'UNE ENTRÉE ───                                              ║
// ║                                                                              ║
// ║  id          : Identifiant unique du mod (correspond à data-mod-id HTML)     ║
// ║                Exemples : 'acatar', 'phax-sirens', 'potion-time-plus'        ║
// ║                                                                              ║
// ║  name        : Nom d'affichage du mod                                        ║
// ║                Exemple : 'Phax : Potion Time+'                               ║
// ║                                                                              ║
// ║  emoji       : Emoji du mod (utilisé dans sidebar, status bar, modale)       ║
// ║                Exemple : '🔮'                                                ║
// ║                                                                              ║
// ║  category    : Catégorie pour la recherche                                   ║
// ║                Exemple : 'Mod'                                               ║
// ║                                                                              ║
// ║  tags        : Mots-clés pour la recherche (tableau de strings)              ║
// ║                Exemple : ['chaos', 'magie', 'dimension']                     ║
// ║                                                                              ║
// ║  page        : Nom du fichier HTML dans pages/mods/                          ║
// ║                Exemple : 'chaosium.html'                                     ║
// ║                                                                              ║
// ║  cardDescKey : Clé i18n pour la description sur la carte d'accueil           ║
// ║                Exemple : 'card.chaosium.desc'                                ║
// ║                                                                              ║
// ║  wikiId      : Identifiant du dossier wiki dans pages/wiki/                  ║
// ║                Correspond au nom du dossier contenant categories.json        ║
// ║                Exemple : 'phax-potion-time-plus'                             ║
// ║                Peut différer de l'id (ex: potion-time-plus → phax-…)         ║
// ║                                                                              ║
// ║  status      : Statut actuel du mod                                          ║
// ║                Valeurs : 'available' | 'beta' | 'development'                ║
// ║                - 'available'   → Disponible (pas de modale au clic)          ║
// ║                - 'beta'        → Bêta (modale avec progression)              ║
// ║                - 'development' → En développement (modale avec progression)  ║
// ║                                                                              ║
// ║  progress    : Pourcentage d'avancement (0 à 100)                            ║
// ║                Uniquement utile si status = 'beta' ou 'development'          ║
// ║                Optionnel, défaut : 0                                         ║
// ║                                                                              ║
// ║  features    : Liste de fonctionnalités prévues (tableau)                    ║
// ║                Chaque entrée : { text: { fr: "...", en: "..." }, done: … }   ║
// ║                done: true = ✅ terminé, false = ⬜ en cours                 ║
// ║                Optionnel (tableau vide par défaut)                           ║
// ║                                                                              ║
// ║  links       : Liens externes du mod                                         ║
// ║                curseforge : URL CurseForge ('' si pas encore dispo)          ║
// ║                modrinth   : URL Modrinth   ('' si pas encore dispo)          ║
// ║                Un lien vide affichera un badge grisé.                        ║
// ║                                                                              ║
// ║  ─── EXEMPLE COMPLET ───                                                     ║
// ║                                                                              ║
// ║  {                                                                           ║
// ║    id: 'mon-mod',                                                            ║
// ║    name: 'Mon Super Mod',                                                    ║
// ║    emoji: '⭐',                                                              ║
// ║    category: 'Mod',                                                          ║
// ║    tags: ['super', 'mod', 'exemple'],                                        ║
// ║    page: 'mon-mod.html',                                                     ║
// ║    cardDescKey: 'card.mon-mod.desc',                                         ║
// ║    wikiId: 'mon-mod',                                                        ║
// ║    status: 'development',                                                    ║
// ║    progress: 45,                                                             ║
// ║    features: [                                                               ║
// ║      { text: { fr: 'Feature 1', en: 'Feature 1' }, done: true },             ║
// ║      { text: { fr: 'Feature 2', en: 'Feature 2' }, done: false }             ║
// ║    ],                                                                        ║
// ║    links: {                                                                  ║
// ║      curseforge: 'https://www.curseforge.com/minecraft/mc-mods/mon-mod',     ║
// ║      modrinth: 'https://modrinth.com/mod/mon-mod'                            ║
// ║    }                                                                         ║
// ║  }                                                                           ║
// ║                                                                              ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

const modsRegistry = [
  {
    id: 'acatar',
    name: 'Acatar',
    emoji: '🌍',
    category: 'Mod',
    tags: ['acatar', 'monde', 'dimension'],
    page: 'acatar.html',
    cardDescKey: 'card.acatar.desc',
    wikiId: 'acatar',
    status: 'available',
    progress: 0,
    features: [],
    links: {
      curseforge: 'https://www.curseforge.com/minecraft/mc-mods/acatar',
      modrinth: 'https://modrinth.com/mod/acatar'
    }
  },
  {
    id: 'chaosium',
    name: 'Chaosium',
    emoji: '🔮',
    category: 'Mod',
    tags: ['chaosium', 'chaos', 'magie'],
    page: 'chaosium.html',
    cardDescKey: 'card.chaosium.desc',
    wikiId: 'chaosium',
    status: 'development',
    progress: 67,
    features: [
      { text: { fr: 'Système de magie de base', en: 'Base magic system' }, done: true },
      { text: { fr: 'Nouveaux minerais du Chaos', en: 'New Chaos ores' }, done: true },
      { text: { fr: 'Boss du Chaos', en: 'Chaos Boss' }, done: false },
      { text: { fr: 'Dimension du Chaos', en: 'Chaos Dimension' }, done: false },
      { text: { fr: 'Enchantements spéciaux', en: 'Special enchantments' }, done: false }
    ],
    links: {
      curseforge: 'https://www.curseforge.com/minecraft/mc-mods/chaosium',
      modrinth: 'https://modrinth.com/mod/chaosium'
    }
  },
  {
    id: 'phax-sirens',
    name: 'Phax Sirens',
    emoji: '🚨',
    category: 'Mod',
    tags: ['sirens', 'sirene', 'alarme', 'siren', 'blocs'],
    page: 'phax-sirens.html',
    cardDescKey: 'card.sirens.desc',
    wikiId: 'phax-sirens',
    status: 'available',
    progress: 0,
    features: [],
    links: {
      curseforge: 'https://www.curseforge.com/minecraft/mc-mods/phax-sirens',
      modrinth: 'https://modrinth.com/mod/phax-sirens'
    }
  },
  {
    id: 'potion-time-plus',
    name: 'Phax : Potion Time+',
    emoji: '🧪',
    category: 'Mod',
    tags: ['potion', 'time', 'brewing', 'alchimie'],
    page: 'potion-time-plus.html',
    cardDescKey: 'card.potion.desc',
    wikiId: 'phax-potion-time-plus',
    status: 'available',
    progress: 0,
    features: [],
    links: {
      curseforge: 'https://www.curseforge.com/minecraft/mc-mods/phax-potion-time',
      modrinth: 'https://modrinth.com/mod/phax-potion-time+'
    }
  }
];

// ===== Helpers (utilisés par main.js) =====

// Obtenir un mod par son id
function getModById(id) {
  return modsRegistry.find(m => m.id === id);
}

// Obtenir le nom d'affichage avec emoji
function getModDisplayName(id) {
  const mod = getModById(id);
  return mod ? mod.emoji + ' ' + mod.name : id;
}

// Générer un objet { id: config } compatible avec l'ancien modsConfig
function getModsConfig() {
  const config = {};
  modsRegistry.forEach(mod => {
    config[mod.id] = {
      status: mod.status,
      progress: mod.progress || 0,
      features: mod.features || []
    };
  });
  return config;
}

// Générer un objet { id: links } compatible avec l'ancien modsLinks
function getModsLinks() {
  const links = {};
  modsRegistry.forEach(mod => {
    links[mod.id] = mod.links || { curseforge: '', modrinth: '' };
  });
  return links;
}

// Compatibilité : exposer modsConfig et modsLinks pour les scripts existants
const modsConfig = getModsConfig();
const modsLinks = getModsLinks();
