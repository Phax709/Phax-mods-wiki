// ===== i18n — Language system =====
const i18n = {
  currentLang: localStorage.getItem('lang') || 'fr',
  translations: null,

  allTranslations: {
    fr: {
      "nav.home": "Accueil",
      "nav.guide": "Assistance",
      "nav.mods": "Mods",
      "nav.credits": "Crédits",
      "nav.installation": "Installation de mods",
      "nav.support": "Discord & Contact",
      "nav.navigation": "Navigation",
      "search.placeholder": "Rechercher un mod...",

      "home.title": "Phax709 Studios",
      "home.description": "Bienvenue sur le wiki officiel des <strong>mods Minecraft</strong> créés par Phax709. Retrouvez ici toute la documentation, les guides et les détails de chaque mod.",
      "home.mods_title": "Nos Mods",
      "home.status_title": "Statut",
      "home.guides_title": "📖 Assistance",
      "home.install_link": "Comment installer nos mods",
      "home.support_link": "Discord & Contact",

      "card.acatar.desc": "Facilite l'expérience de jeu",
      "card.chaosium.desc": "Complexifie Minecraft",
      "card.sirens.desc": "Blocs d'alarmes sonores et lumineuses",
      "card.potion.desc": "Potions en 15min, 30min et 1h",

      "card.wiki_btn": "📖 Wiki",
      "install.title": "📦 Installation de mods",
      "install.prerequisites": "Prérequis",
      "install.prereq.java": "Minecraft <strong>Java Edition</strong>",
      "install.prereq.loader": "Un mod loader : <strong>Forge</strong>, <strong>NeoForge</strong> ou <strong>Fabric</strong>",
      "install.forge_neoforge.title": "Avec Forge ou NeoForge",
      "install.forge_neoforge.step1": "Téléchargez <a href=\"https://files.minecraftforge.net/\" target=\"_blank\" rel=\"noopener\">Forge</a> ou <a href=\"https://neoforged.net/\" target=\"_blank\" rel=\"noopener\">NeoForge</a>",
      "install.forge_neoforge.step2": "Lancez l'installateur et sélectionnez <strong>Install Client</strong>",
      "install.forge_neoforge.step3": "Ouvrez le launcher Minecraft et sélectionnez le profil Forge ou NeoForge",
      "install.forge_neoforge.step4": "Placez vos fichiers <code>.jar</code> dans le dossier <code>mods/</code>",
      "install.forge_neoforge.folder": "<strong>Dossier mods :</strong>",
      "install.fabric.title": "Avec Fabric",
      "install.fabric.step1": "Téléchargez <a href=\"https://fabricmc.net/use/installer/\" target=\"_blank\" rel=\"noopener\">Fabric Installer</a>",
      "install.fabric.step2": "Lancez l'installateur",
      "install.fabric.step3": "Installez aussi <a href=\"https://modrinth.com/mod/fabric-api\" target=\"_blank\" rel=\"noopener\">Fabric API</a>",
      "install.fabric.step4": "Placez vos mods dans le dossier <code>mods/</code>",
      "install.fabric.warning": "<strong>⚠️ Compatibilité :</strong> Les mods Forge et Fabric ne sont <strong>pas</strong> compatibles entre eux. Vérifiez toujours le mod loader requis.",
      "install.fabric.disclaimer": "<strong>ℹ️ Note :</strong> Les mods de Phax709 ne sont actuellement <strong>pas disponibles sur Fabric</strong>. Cependant, ce guide reste valable pour l'installation de tout mod Fabric.",
      "install.app.title": "Via une application (CurseForge, Modrinth, etc.)",
      "install.app.intro": "Si vous utilisez une application comme <strong>CurseForge App</strong>, <strong>Modrinth App</strong>, <strong>Prism Launcher</strong> ou autre :",
      "install.app.step1": "Ouvrez l'application et accédez à la section <strong>Mods</strong>",
      "install.app.step2": "Utilisez la barre de recherche pour trouver le mod souhaité",
      "install.app.step3": "Vérifiez que la <strong>version Minecraft</strong> et le <strong>mod loader</strong> correspondent à votre profil",
      "install.app.step4": "Cliquez sur <strong>Installer</strong>",
      "install.app.warning": "<strong>⚠️ Mod introuvable ou MàJ absente ?</strong> Si aucun résultat ne correspond à votre recherche, il est possible que le mod ou la mise à jour ne soit <strong>pas encore disponible</strong> (délai de synchronisation de l'application) pour votre version de Minecraft ou votre mod loader. Essayez de changer la version dans les filtres de recherche, ou consultez directement la page du mod sur CurseForge / Modrinth pour vérifier les versions supportées.",
      
      "support.title": "📬 Support & Contact",
      "support.intro": "Vous avez une idée, un bug à signaler, ou simplement un avis à partager ? Utilisez les formulaires ci-dessous pour nous contacter. Chaque retour compte !",
      "support.bug.title": "Signaler un bug",
      "support.bug.desc": "Vous avez rencontré un problème dans l'un de nos mods ? Dites-le nous !",
      "support.suggestion.title": "Proposer une suggestion",
      "support.suggestion.desc": "Une idée de fonctionnalité pour un mod ? Partagez-la avec nous !",
      "support.satisfaction.title": "Enquête de satisfaction",
      "support.satisfaction.desc": "Donnez votre avis sur nos mods pour nous aider à les améliorer.",
      "support.site.title": "Amélioration du site",
      "support.site.desc": "Des idées pour rendre ce wiki meilleur ? On vous écoute !",
      "support.discord.title": "💬 Rejoignez-nous sur Discord",
      "support.discord.text": "Pour discuter directement avec la communauté et l'équipe Phax709 Studios, rejoignez notre serveur Discord :",
      "support.discord.card": "Discord Phax709",
      "support.discord.join": "Rejoindre le serveur",

      "mod.author": "Auteur",
      "mod.version": "Version Minecraft",
      "mod.loader": "Mod Loader",
      "mod.link": "Lien",
      "mod.description": "Description",
      "mod.features": "Fonctionnalités",
      "mod.wiki_title": "Wiki",
      "mod.coming_soon": "💡 Contenu détaillé à venir",

      "error.title": "Tu t'es perdu, aventurier !",
      "error.desc": "Cette page n'existe pas ou a été déplacée. Ouvre ta map et retrouve ton chemin !",
      "error.home": "Retour au spawn",

      "acatar.desc": "<strong>Acatar</strong> est un mod qui a pour objectif de <strong>faciliter l'expérience de jeu</strong> sur Minecraft. Il apporte des améliorations et des ajouts pratiques pour rendre votre partie plus fluide et agréable.",
      "acatar.feat1": "Simplification de certaines mécaniques de jeu",
      "acatar.feat2": "Ajouts pratiques pour le quotidien du joueur",
      "acatar.feat3": "Amélioration de la qualité de vie en jeu",
      "acatar.coming": "Cette page sera enrichie avec la liste complète des items, blocs et fonctionnalités du mod.",

      "chaosium.desc": "<strong>Chaosium</strong> est un mod qui <strong>complexifie Minecraft</strong>. Il ajoute de nouvelles mécaniques, des défis supplémentaires et une profondeur de gameplay pour les joueurs en quête d'une expérience plus exigeante.",
      "chaosium.feat1": "Nouvelles mécaniques de jeu avancées",
      "chaosium.feat2": "Complexification des systèmes existants",
      "chaosium.feat3": "Défis supplémentaires pour les joueurs expérimentés",
      "chaosium.coming": "Cette page sera enrichie avec la liste complète des mécaniques, items et systèmes ajoutés par le mod.",
      
      "sirens.desc": "<strong>Phax Sirens</strong> ajoute des <strong>blocs de sirènes d'alarme</strong> à Minecraft. Chaque sirène est entièrement configurable et produit des effets sonores et lumineux pour sécuriser vos bases ou créer des ambiances immersives.",
      "sirens.feat1": "Plusieurs types de blocs de sirènes",
      "sirens.feat2": "Alertes sonores variées et personnalisables",
      "sirens.feat3": "Effets lumineux intégrés",
      "sirens.feat4": "Activation par redstone",
      "sirens.coming": "Cette page sera enrichie avec la liste complète des sirènes, leurs crafts et leurs paramètres de configuration.",
      
      "potion.desc": "<strong>Phax : Potion Time+</strong> reprend toutes les <strong>potions existantes</strong> de Minecraft et les décline en versions à durée prolongée : <strong>15 minutes</strong>, <strong>30 minutes</strong> et <strong>1 heure</strong>. Idéal pour les longues sessions d'exploration ou de combat !",
      "potion.feat1": "Toutes les potions vanilla en version <strong>15 min</strong>",
      "potion.feat2": "Toutes les potions vanilla en version <strong>30 min</strong>",
      "potion.feat3": "Toutes les potions vanilla en version <strong>1 heure</strong>",
      "potion.feat4": "Recettes de craft dédiées pour chaque durée",
      "potion.coming": "Cette page sera enrichie avec les recettes de craft et la liste complète des potions disponibles.",
      
      "search.no_result": "Aucun résultat",
      
      "theme.dark": "Sombre",
      "theme.ice_spikes": "Ice Spikes",
      "theme.ocean": "Océan",
      "theme.redstone": "Redstone",
      "theme.lush_cave": "Lush Cave",
      "theme.deep_dark": "Deep Dark",
      "theme.nether": "Nether",
      "theme.end": "End",
      
      "mod.status": "Statut",
      "status.available": "Disponible",
      "status.beta": "Bêta",
      "status.development": "En développement",
      "status.progress": "Progression",
      "status.features": "Fonctionnalités prévues",
      
      "nav.news": "News",
      "nav.patchnotes": "Patchnotes",
      "home.news_title": "📰 Dernières News",
      "home.news_see_all": "Voir toutes les news →",
      "news.title": "📰 News",
      "news.no_news": "Aucune news pour le moment.",
      "news.badge_announcement": "Annonce",
      "news.badge_maintenance": "Maintenance",
      "news.badge_urgent": "Urgent",
      "news.badge_update": "Mise à jour",
      "news.badge_event": "Événement",
      "news.badge_info": "Info",
      "news.filter_all_types": "Tous les types",
      "news.filter_announcement": "📢 Annonce",
      "news.filter_update": "🔄 Mise à jour",
      "news.filter_maintenance": "🔧 Maintenance",
      "news.filter_urgent": "⚠️ Urgent",
      "news.filter_event": "🎉 Événement",
      "news.filter_info": "ℹ️ Info",
      
      "patchnotes.title": "📋 Patchnotes",
      "patchnotes.search_placeholder": "Rechercher dans les patchnotes...",
      "patchnotes.filter_all_mods": "Tous les mods",
      "patchnotes.filter_all_versions": "Toutes les versions MC",
      "patchnotes.filter_all_loaders": "Tous les loaders",
      "patchnotes.sort_newest": "Plus récentes d'abord",
      "patchnotes.sort_oldest": "Plus anciennes d'abord",
      "patchnotes.no_result": "Aucun patchnote trouvé.",
      "news.sort_newest": "Plus récentes d'abord",
      "news.sort_oldest": "Plus anciennes d'abord",
      
      "footer.credits": "Crédits",
      "credits.title": "📜 Crédits",
      "credits.intro": "Cette page liste les droits d'auteur et les attributions des éléments utilisés dans ce wiki.",
      "credits.mojang_title": "Attribution — Mojang / Minecraft",
      "credits.mojang_text": "Minecraft est une marque déposée de Mojang AB. Certaines textures (ex. lingots, blocs) utilisées sur ce site et/ou dans les mods sont des dérivés des textures de Minecraft (recolorations/variantes). Ce site et ces mods ne sont ni affiliés, ni approuvés par Mojang AB. Aucun fichier de jeu original n'est redistribué.",
      "credits.mojang_warning": "⚠️ Cette attribution s'applique à toutes les images du wiki qui intègrent des textures dérivées ou historiques de Minecraft, y compris les captures de recettes, les aperçus de blocs et autres illustrations. Ces visuels sont présentés à titre d'exemple uniquement.",
      "credits.textures_title": "Textures & images originales",
      "credits.textures_text": "Certaines textures et images de ce wiki sont des créations originales de Phax709. Leur réutilisation est encadrée par la licence ci-dessous. Pour toute intégration dans un autre projet ou demande spécifique hors du cadre de cette licence, merci de me contacter sur Discord.",
      "credits.mods_title": "Crédits liés aux mods",
      "credits.mods_text": "Sauf mention contraire, le code des mods, les assets non issus de Minecraft (textures, logos, images) et la documentation sont créés par Phax709. Les éléments dérivés de Minecraft appartiennent à Mojang AB (voir l'attribution ci-dessus).",
      "credits.license_title": "Licence",
      "credits.license_intro": "Sauf mention contraire, le contenu de ce site (texte, mises en page, images originales) est sous licence CC BY-NC-ND 4.0 — © 2025-2026 Phax709.",
      "credits.license_1": "Redistribution non commerciale autorisée avec crédit \"Phax709\" et lien vers ce site.",
      "credits.license_2": "Aucune modification ni ré-hébergement direct des fichiers (mods, textures) sur d'autres plateformes.",
      "credits.license_3": "Vidéos YouTube / streams Twitch monétisés autorisés : crédit + lien, sans héberger les fichiers.",
      "credits.license_4": "Modpacks / rehosts interdits sans autorisation écrite.",
      "credits.third_party_title": "Éléments tiers",
      "credits.third_party_discord": "Logo Discord © Discord",
      "credits.credit_freepik_urgent": "Illustration utilisée pour les messages urgents — ",
      "credits.credit_freepik_maintenance": "Illustration utilisée pour les alertes et la maintenance — ",
      "credits.credit_freepik_comingsoon": "Illustration utilisée pour le mod en préparation — ",
      "credits.credit_freepik_news": "Illustration utilisée pour les news — ",
      "credits.stack_title": "Stack du site",
      "credits.stack_host": "Hébergement : GitHub Pages",
      "credits.stack_code": "Code front : HTML / CSS / JavaScript (vanilla)",
      "credits.contact": "Attribution manquante ou question d'utilisation ? Contactez-moi sur le serveur Discord."
    },
    en: {
      "nav.home": "Home",
      "nav.guide": "Help",
      "nav.mods": "Mods",
      "nav.credits": "Credits",
      "nav.installation": "Mod Installation",
      "nav.support": "Discord & Contact",
      "nav.navigation": "Navigation",
      "search.placeholder": "Search a mod...",
      "home.title": "Phax709 Studios",
      "home.description": "Welcome to the official wiki for <strong>Minecraft mods</strong> created by Phax709. Find all the documentation, guides and details about each mod here.",
      "home.mods_title": "Our Mods",
      "home.status_title": "Status",
      "home.guides_title": "📖 Help",
      "home.install_link": "How to install our mods",
      "home.support_link": "Discord & Contact",
      "card.acatar.desc": "Makes the game easier",
      "card.chaosium.desc": "Makes Minecraft harder",
      "card.sirens.desc": "Sound and light alarm blocks",
      "card.potion.desc": "Potions lasting 15min, 30min and 1h",
      "card.wiki_btn": "📖 Wiki",
      "install.title": "📦 Mod Installation",
      "install.prerequisites": "Prerequisites",
      "install.prereq.java": "Minecraft <strong>Java Edition</strong>",
      "install.prereq.loader": "A mod loader: <strong>Forge</strong>, <strong>NeoForge</strong> or <strong>Fabric</strong>",
      "install.forge_neoforge.title": "With Forge or NeoForge",
      "install.forge_neoforge.step1": "Download <a href=\"https://files.minecraftforge.net/\" target=\"_blank\" rel=\"noopener\">Forge</a> or <a href=\"https://neoforged.net/\" target=\"_blank\" rel=\"noopener\">NeoForge</a>",
      "install.forge_neoforge.step2": "Run the installer and select <strong>Install Client</strong>",
      "install.forge_neoforge.step3": "Open the Minecraft launcher and select the Forge or NeoForge profile",
      "install.forge_neoforge.step4": "Place your <code>.jar</code> files in the <code>mods/</code> folder",
      "install.forge_neoforge.folder": "<strong>Mods folder:</strong>",
      "install.fabric.title": "With Fabric",
      "install.fabric.step1": "Download <a href=\"https://fabricmc.net/use/installer/\" target=\"_blank\" rel=\"noopener\">Fabric Installer</a>",
      "install.fabric.step2": "Run the installer",
      "install.fabric.step3": "Also install <a href=\"https://modrinth.com/mod/fabric-api\" target=\"_blank\" rel=\"noopener\">Fabric API</a>",
      "install.fabric.step4": "Place your mods in the <code>mods/</code> folder",
      "install.fabric.warning": "<strong>⚠️ Compatibility:</strong> Forge, NeoForge and Fabric mods are <strong>not</strong> compatible with each other. Always check the required mod loader.",
      "install.fabric.disclaimer": "<strong>ℹ️ Note:</strong> Phax709's mods are currently <strong>not available on Fabric</strong>. However, this guide is still valid for installing any Fabric mod.",
      "install.app.title": "Using an app (CurseForge, Modrinth, etc.)",
      "install.app.intro": "If you are using an app like <strong>CurseForge App</strong>, <strong>Modrinth App</strong>, <strong>Prism Launcher</strong> or similar:",
      "install.app.step1": "Open the app and go to the <strong>Mods</strong> section",
      "install.app.step2": "Use the search bar to find the mod you want",
      "install.app.step3": "Make sure the <strong>Minecraft version</strong> and <strong>mod loader</strong> match your profile",
      "install.app.step4": "Click <strong>Install</strong>",
      "install.app.warning": "<strong>⚠️ Mod missing or update not showing?</strong> If no results match your search, the mod or update may <strong>not be available yet</strong> (app sync delay) for your Minecraft version or mod loader. Try changing the version in the search filters, or check the mod page directly on CurseForge / Modrinth to verify supported versions.",
      "support.title": "📬 Support & Contact",
      "support.intro": "Got an idea, a bug to report, or simply feedback to share? Use the forms below to reach us. Every bit of feedback counts!",
      "support.bug.title": "Report a Bug",
      "support.bug.desc": "Encountered an issue with one of our mods? Let us know!",
      "support.suggestion.title": "Suggest a Feature",
      "support.suggestion.desc": "Got a feature idea for a mod? Share it with us!",
      "support.satisfaction.title": "Satisfaction Survey",
      "support.satisfaction.desc": "Give us your feedback on our mods to help us improve.",
      "support.site.title": "Website Improvement",
      "support.site.desc": "Ideas to make this wiki better? We're listening!",
      "support.discord.title": "💬 Join us on Discord",
      "support.discord.text": "Chat directly with the community and the Phax709 Studios team by joining our Discord server:",
      "support.discord.card": "Discord Phax709",
      "support.discord.join": "Join the server",
      "mod.author": "Author",
      "mod.version": "Minecraft Version",
      "mod.loader": "Mod Loader",
      "mod.link": "Link",
      "mod.description": "Description",
      "mod.features": "Features",
      "mod.wiki_title": "Wiki",
      "mod.coming_soon": "💡 Detailed content coming soon",
      "error.title": "You're lost, adventurer!",
      "error.desc": "This page doesn't exist or has been moved. Open your map and find your way back!",
      "error.home": "Back to spawn",
      "acatar.desc": "<strong>Acatar</strong> is a mod designed to <strong>make gameplay easier</strong> in Minecraft. It brings improvements and practical additions to make your game smoother and more enjoyable.",
      "acatar.feat1": "Simplification of certain game mechanics",
      "acatar.feat2": "Practical additions for everyday gameplay",
      "acatar.feat3": "Quality of life improvements",
      "acatar.coming": "This page will be expanded with the full list of items, blocks and features of the mod.",
      "chaosium.desc": "<strong>Chaosium</strong> is a mod that <strong>makes Minecraft more complex</strong>. It adds new mechanics, extra challenges and deeper gameplay for players seeking a more demanding experience.",
      "chaosium.feat1": "New advanced game mechanics",
      "chaosium.feat2": "More complex existing systems",
      "chaosium.feat3": "Extra challenges for experienced players",
      "chaosium.coming": "This page will be expanded with the full list of mechanics, items and systems added by the mod.",
      "sirens.desc": "<strong>Phax Sirens</strong> adds <strong>alarm siren blocks</strong> to Minecraft. Each siren is fully configurable and produces sound and light effects to secure your bases or create immersive atmospheres.",
      "sirens.feat1": "Multiple types of siren blocks",
      "sirens.feat2": "Various customizable sound alerts",
      "sirens.feat3": "Built-in light effects",
      "sirens.feat4": "Redstone activation",
      "sirens.coming": "This page will be expanded with the full list of sirens, their crafting recipes and configuration options.",
      "potion.desc": "<strong>Phax: Potion Time+</strong> takes all <strong>existing potions</strong> in Minecraft and adds extended duration versions: <strong>15 minutes</strong>, <strong>30 minutes</strong> and <strong>1 hour</strong>. Perfect for long exploration or combat sessions!",
      "potion.feat1": "All vanilla potions in <strong>15 min</strong> version",
      "potion.feat2": "All vanilla potions in <strong>30 min</strong> version",
      "potion.feat3": "All vanilla potions in <strong>1 hour</strong> version",
      "potion.feat4": "Dedicated crafting recipes for each duration",
      "potion.coming": "This page will be expanded with crafting recipes and the full list of available potions.",
      "search.no_result": "No results",
      "theme.dark": "Dark",
      "theme.ice_spikes": "Ice Spikes",
      "theme.ocean": "Ocean",
      "theme.redstone": "Redstone",
      "theme.lush_cave": "Lush Cave",
      "theme.deep_dark": "Deep Dark",
      "theme.nether": "Nether",
      "theme.end": "End",
      "mod.status": "Status",
      "status.available": "Available",
      "status.beta": "Beta",
      "status.development": "In Development",
      "status.progress": "Progress",
      "status.features": "Planned features",
      "nav.news": "News",
      "nav.patchnotes": "Patchnotes",
      "home.news_title": "📰 Latest News",
      "home.news_see_all": "See all news →",
      "news.title": "📰 News",
      "news.no_news": "No news at the moment.",
      "news.badge_announcement": "Announcement",
      "news.badge_maintenance": "Maintenance",
      "news.badge_urgent": "Urgent",
      "news.badge_update": "Update",
      "news.badge_event": "Event",
      "news.badge_info": "Info",
      "news.filter_all_types": "All types",
      "news.filter_announcement": "📢 Announcement",
      "news.filter_update": "🔄 Update",
      "news.filter_maintenance": "🔧 Maintenance",
      "news.filter_urgent": "⚠️ Urgent",
      "news.filter_event": "🎉 Event",
      "news.filter_info": "ℹ️ Info",
      "patchnotes.title": "📋 Patchnotes",
      "patchnotes.search_placeholder": "Search patchnotes...",
      "patchnotes.filter_all_mods": "All mods",
      "patchnotes.filter_all_versions": "All MC versions",
      "patchnotes.filter_all_loaders": "All loaders",
      "patchnotes.sort_newest": "Newest first",
      "patchnotes.sort_oldest": "Oldest first",
      "patchnotes.no_result": "No patchnotes found.",
      "news.sort_newest": "Newest first",
      "news.sort_oldest": "Oldest first",
      "footer.credits": "Credits",
      "credits.title": "📜 Credits",
      "credits.intro": "This page lists the copyrights and attributions for elements used in this wiki.",
      "credits.mojang_title": "Attribution — Mojang / Minecraft",
      "credits.mojang_text": "Minecraft is a trademark of Mojang AB. Some textures (e.g. ingots, blocks) used on this site and/or in the mods are derivatives of Minecraft textures (recolors/variants). This site and these mods are not affiliated with or endorsed by Mojang AB. No original game files are redistributed.",
      "credits.mojang_warning": "⚠️ This attribution applies to all wiki images that include derived or historical Minecraft textures, including recipe screenshots, block previews, and other illustrations. These visuals are shown for example purposes only.",
      "credits.textures_title": "Original textures & images",
      "credits.textures_text": "Some textures and images on this wiki are original creations by Phax709. Their use is governed by the license below. For any integration into another project or specific request outside the scope of this license, please contact me on Discord.",
      "credits.mods_title": "Mod credits",
      "credits.mods_text": "Unless otherwise noted, mod code, non-Minecraft assets (textures, logos, images) and documentation are created by Phax709. Elements derived from Minecraft belong to Mojang AB (see attribution above).",
      "credits.license_title": "License",
      "credits.license_intro": "Unless otherwise noted, the content of this site (text, layouts, original images) is licensed under CC BY-NC-ND 4.0 — © 2025-2026 Phax709.",
      "credits.license_1": "Non-commercial redistribution allowed with credit to \"Phax709\" and a link to this site.",
      "credits.license_2": "No modification or direct re-hosting of files (mods, textures) on other platforms.",
      "credits.license_3": "Monetized YouTube videos / Twitch streams allowed: credit + link, without hosting the files.",
      "credits.license_4": "Modpacks / rehosts prohibited without written authorization.",
      "credits.third_party_title": "Third-party elements",
      "credits.third_party_discord": "Discord logo © Discord",
      "credits.credit_freepik_urgent": "Illustration used for urgent messages — ",
      "credits.credit_freepik_maintenance": "Illustration used for alerts and maintenance — ",
      "credits.credit_freepik_comingsoon": "Illustration used for upcoming mod — ",
      "credits.credit_freepik_news": "Illustration used for news — ",
      "credits.stack_title": "Site stack",
      "credits.stack_host": "Hosting: GitHub Pages",
      "credits.stack_code": "Front-end: HTML / CSS / JavaScript (vanilla)",
      "credits.contact": "Missing attribution or usage question? Contact me on the Discord server."
    }
  },

  init() {
    this.translations = this.allTranslations[this.currentLang] || this.allTranslations['fr'];
    this.applyAll();
    this.updateToggleBtn();
  },

  get(key) {
    if (!this.translations) {
      this.translations = this.allTranslations[this.currentLang] || this.allTranslations['fr'];
    }
    return this.translations[key] || key;
  },

  applyAll() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.get(key);
      if (val !== key) {
        el.innerHTML = val;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = this.get(key);
      if (val !== key) {
        el.setAttribute('placeholder', val);
      }
    });
  },

  toggle() {
    this.currentLang = this.currentLang === 'fr' ? 'en' : 'fr';
    localStorage.setItem('lang', this.currentLang);
    this.translations = this.allTranslations[this.currentLang] || this.allTranslations['fr'];
    this.applyAll();
    this.updateToggleBtn();
    document.dispatchEvent(new Event('langChanged'));
    // Refresh theme dropdown labels
    if (typeof themeManager !== 'undefined') {
      themeManager.buildDropdown();
      themeManager.updateBtn();
    }
  },

  updateToggleBtn() {
    const btn = document.getElementById('langToggle');
    if (btn) {
      btn.textContent = this.currentLang === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR';
      btn.title = this.currentLang === 'fr' ? 'Switch to English' : 'Passer en français';
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  i18n.init();

  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.addEventListener('click', () => i18n.toggle());
  }
});
