// ===== Configuration des news =====
// Ajoute tes news ici. Les plus récentes en premier.
//
// Chaque news a :
//   - id        : identifiant unique
//   - date      : date de publication (YYYY-MM-DD)
//   - showUntil : date jusqu'à laquelle la news apparaît en accueil (YYYY-MM-DD)
//                 Après cette date, elle reste visible uniquement sur la page News.
//   - icon      : emoji affiché à côté
//   - badge     : type de badge (announcement, maintenance, urgent, update, event, info)
//   - image     : (optionnel) chemin vers une image affichée dans le slider
//   - title     : { fr: "...", en: "..." }
//   - content   : { fr: "...", en: "..." }  (HTML autorisé)

const newsConfig = [
  {
    id: 'welcome',
    date: '2026-04-14',
    showUntil: '2026-09-14',
    icon: '🎉',
    badge: 'announcement',
    image: 'pages/images/ui/breaking_news.jpg',
    title: {
      fr: 'Bienvenue sur le nouveau wiki !',
      en: 'Welcome to the new wiki!'
    },
    content: {
      fr: 'Le site officiel des mods de Phax709 <strong>Wiki des Mods de Phax709</strong> change de nom pour <strong>Phax709 Studios</strong> et se refait une toute nouvelle beauté pour une utilisation plus facile. Retrouvez toute la documentation de nos mods ici !',
      en: 'The official site for Phax709 mods <strong>Wiki des Mods de Phax709</strong> is changing its name to <strong>Phax709 Studios</strong> and getting a brand new look for easier use. Find all the documentation for our mods here!'
    }
  }
];
