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
    id: 'secret-project-teaser',
    date: '2026-10-02',
    showUntil : '2027-02-01',
    icon: '❓',
    badge: 'announcement',
    image: 'pages/images/ui/mysterious.png',
    title: {
      fr: '??? : Un projet de longue date en réalisation...',
      en: '??? : A long-standing project in development...'
    },
    content: {
      fr: `<p>Un signal inconnu vient d'être détecté...</p>
           <p style="font-family: monospace; word-break: break-all; background: #1e1e1e; padding: 10px; border-radius: 6px; color: #00ffcc;">
             ..- -. / .--. .-. --- .--- . - / -.. .- -. ... / .-.. . ... / -- .. .-.. .. . ..- -..- / .--. .-. --- ..-. --- -. -.. ... / --- ..- / .--. .-.. ..- ... / .--. .-. --- -.-. .... . / .. -. - .-. .. --. ..- .
           </p>
           <p><em>Saurez-vous décoder ce message ?</em></p>`,
      en: `<p>An unknown signal has just been detected...</p>
           <p style="font-family: monospace; word-break: break-all; background: #1e1e1e; padding: 10px; border-radius: 6px; color: #00ffcc;">
             ..- -. / .--. .-. --- .--- . - / -.. .- -. ... / .-.. . ... / -- .. .-.. .. . ..- -..- / .--. .-. --- ..-. --- -. -.. ... / --- ..- / .--. .-.. ..- ... / .--. .-. --- -.-. .... . / .. -. - .-. .. --. ..- .
           </p>
           <p><em>Can you decode this message?</em></p>`
    }
  },
  {
    id: 'acatar-next-update-teaser-2',
    date: '2026-10-02',
    showUntil: '2026-12-01',
    icon: '🗝️',
    badge: 'announcement',
    image: 'pages/images/ui/teaser_acatar_nextupdate 2.png',
    title: {
      fr: 'Carnet de développement & Teasing : Que se prépare-t-il pour Acatar ?',
      en: 'Dev Log & Teasing: What\'s Brewing for Acatar?'
    },
    content: {
      fr: `<p>Le développement avance très bien ! Pour vous faire patienter, voici un petit aperçu confidentiel du patchnote en cours de rédaction. Comme vous pouvez le constater, la liste des changements est déjà bien fournie, et elle est encore susceptible d'évoluer dans un futur proche !</p>
           <p><img src="pages/images/ui/teaser_acatar_nextupdate 2.1.png" alt="Teaser des fichiers de développement" style="max-width: 100%; height: auto; margin: 10px 0; border-radius: 6px;" /></p>
           <p>Notez qu'avec la sortie récente de <strong>Minecraft Dungeons II</strong>, certaines fonctionnalités seront reprises ou serviront d'inspiration pour enrichir le contenu lors de la refonte de la dimension du <strong>Midler</strong> !</p>
           <p>Le développement prend du temps car chaque nouveauté est testée pour garantir qu'elle soit fluide, opérationnelle et sans bug. D'ailleurs, de nombreux soucis identifiés lors des récentes phases de vérification ont déjà été résolus.</p>
           <p><em>Petite précision concernant le pourcentage de progression affiché sur le statut du mod :</em> celui-ci est donné <strong>à titre indicatif</strong>. Il est basé sur mon ressenti global par rapport à ce que je souhaite intégrer dans cette mise à jour, en répartissant différemment les pourcentages selon l'importance de chaque objectif.</p>
           <p>Merci pour votre soutien et à très vite pour la suite !</p>`,
      en: `<p>Development is progressing smoothly! To give you a sneak peek, here is a confidential preview of the patch notes currently being written. As you can see, the list of changes is already quite extensive and may continue to grow in the near future!</p>
           <p><img src="pages/images/ui/teaser_acatar_nextupdate 2.1.png" alt="Development files teaser" style="max-width: 100%; height: auto; margin: 10px 0; border-radius: 6px;" /></p>
           <p>Please note that with the recent release of <strong>Minecraft Dungeons II</strong>, some of its features will be brought over or serve as inspiration to enrich the content for the upcoming <strong>Midler</strong> dimension overhaul!</p>
           <p>Development takes time because every feature is thoroughly tested to ensure smooth, bug-free, and operational gameplay. In fact, many issues found during recent testing phases have already been fixed.</p>
           <p><em>A quick note regarding the progress percentage shown in the mod's status:</em> it is <strong>strictly indicative</strong>. It reflects my overall personal feel regarding everything planned for this update, with percentages distributed based on the scope of each goal.</p>
           <p>Thank you for your support and stay tuned for more!</p>`
    }
  },
  {
    id: 'acatar-next-update-teaser-1',
    date: '2026-09-23',
    showUntil: '2026-11-23',
    icon: '🌳',
    badge: 'announcement',
    image: 'pages/images/ui/first_teaser_acatar_nextupdate.png',
    title: {
      fr: 'Aperçu : Un nouveau biome se dévoile !',
      en: 'Teaser: A new biome revealed!'
    },
    content: {
      fr: `<p>Découvrez un premier aperçu de la prochaine mise à jour d'<strong>Acatar</strong> !</p>
           <p>Ce biome semble renfermer quelque chose... À suivre !</p>
           <p><em>Pré-rendu en jeu — travail en cours, sujet à modifications.</em></p>`,
      en: `<p>Take a first look at the upcoming <strong>Acatar</strong> update!</p>
           <p>This biome seems to hold something hidden... To be continued!</p>
           <p><em>In-game preview — work in progress, subject to change.</em></p>`
    }
  },
  {
    id: 'acatar-sakura-biome-fix-info',
    date: '2026-09-15',
    showUntil: '2026-11-15',
    icon: '🌸',
    badge: 'update',
    image: 'pages/images/ui/breaking_news.jpg',
    title: {
      fr: 'Génération de la Forêt de Sakura & Compatibilité des mods',
      en: 'Sakura Forest Generation & Mod Compatibility'
    },
    content: {
      fr: `<p>Depuis la publication du correctif d'<strong>Acatar 1.0.1</strong> pour Minecraft 26.1.2, j'ai tout mis en œuvre pour réactiver la génération du biome « Forêt de Sakura ».</p>
           <p>Aucune solution classique ne fonctionnant, j'ai analysé le problème plus en profondeur. L'impossibilité de créer un monde est potentiellement due à un conflit avec un autre mod. Vérifiez si l'un de vos mods installés provoque ce souci. Dans mes configurations de test post-export, le mod <strong>Jade</strong> en était la cause, mais d'autres mods peuvent présenter ce problème avec les récentes versions de Minecraft.</p>
           <p>Je vous conseille de tester vos mods un par un si le problème persiste afin de trouver le responsable et le signaler à son créateur. Désolé pour la gêne occasionnée, mais cette étape s'avère nécessaire !</p>`,
      en: `<p>Since the release of the <strong>Acatar 1.0.1</strong> patch for Minecraft 26.1.2, I have been doing everything possible to restore the generation of the "Sakura Forest" biome.</p>
           <p>Since standard methods failed, I looked deeper into the source of the issue. The inability to create a world is potentially caused by a conflict with another mod. Please check if any mod in your setup causes this issue. In my post-export test configurations, the <strong>Jade</strong> mod was causing it, but other mods might have similar issues with recent Minecraft versions.</p>
           <p>I recommend testing your mods one by one if the problem persists to identify the culprit and report the bug to its respective author. Sorry for the inconvenience, but this check is necessary!</p>`
    }
  },
  {
    id: 'acatar-version-change',
    date: '2026-09-14',
    showUntil: '2026-10-15',
    icon: '🚀',
    badge: 'announcement',
    title: {
      fr: 'Avenir d\'Acatar : évolution des versions Minecraft',
      en: 'Acatar Future: Minecraft Version Updates'
    },
    content: {
      fr: `<p>Après quelques dernières mises à jour, le mod <strong>Acatar</strong> arrêtera le support de Minecraft 1.21.1 pour se concentrer sur <strong>Minecraft 26.1.2</strong>.</p>
           <p>Suite au changement de rythme des mises à jour de Mojang, ce choix permet de suivre le mouvement tout en évitant les bugs sur les anciennes versions.</p>`,
      en: `<p>After a few final updates, the <strong>Acatar</strong> mod will end support for Minecraft 1.21.1 and focus on <strong>Minecraft 26.1.2</strong>.</p>
           <p>Following Mojang's change in update pacing, this choice allows us to keep up while avoiding bugs on older versions.</p>`
    }
  },
  {
    id: 'bug-resolved',
    date: '2026-09-14',
    showUntil: '2026-09-25',
    icon: '✅',
    badge: 'update',
    image: 'pages/images/ui/new_logo_acatar.png',
    title: {
      fr: 'Problèmes résolus et fichiers en ligne !',
      en: 'Issues resolved and files are online!'
    },
    content: {
      fr: `<p>Tous les bugs signalés ont été résolus et la vérification sur CurseForge est passée. Les fichiers mis à jour sont désormais disponibles en ligne !</p>`,
      en: `<p>All reported bugs have been resolved and the CurseForge verification is complete. The updated files are now available online!</p>`
    }
  },
  {
    id: 'welcome',
    date: '2026-09-12',
    showUntil: '2026-11-01',
    icon: '🎉',
    badge: 'announcement',
    title: {
      fr: 'Nouveautés, mise à jour des mods et lancement de Phax709 Studios !',
      en: 'Updates, mod releases, and the launch of Phax709 Studios!'
    },
    content: {
      fr: `<p>Je suis vraiment fier de vous annoncer le lancement de ce tout nouveau site ! Le site officiel <strong>Wiki des Mods de Phax709</strong> change officiellement de nom pour devenir <strong>Phax709 Studios</strong>.</p>
          <p>Cela fait plusieurs mois que j'y travaille très régulièrement. La majeure partie de mon temps a été consacrée à la réécriture complète du moteur du site, à la refonte graphique ainsi qu'à la réorganisation de la structure des fichiers.</p>
          <p>Ce nouveau site bénéficie de deux atouts majeurs par rapport à l'ancien :</p>
          <ul>
            <li>Je peux désormais le maintenir et le modifier beaucoup plus facilement.</li>
            <li>Il dispose enfin d'une documentation quasi complète pour <strong>Acatar</strong>.</li>
            </ul>
          <p>Concernant les autres contenus : vous pouvez déjà noter que les 3 autres mods arriveront dans quelques semaines, il faudra patienter encore un tout petit peu ! De nouvelles fonctionnalités débarqueront également dans la prochaine mise à jour.</p>
          <p>Certains points du site peuvent être changés légèrement par rapport à mes attentes que j'aimerais et pour simplifier la compréhension de vous — comme par exemple préciser ce que signifie exactement un mod affiché « en développement ». Il reste aussi quelques détails graphiques que j'aimerais peaufiner, mais tout cela arrivera en temps voulu.</p>
        <p>J'espère sincèrement que vous apprécierez tout le travail apporté à cette nouvelle version !</p>`,

      en: `<p>I am really proud to announce the launch of this brand-new site! The official site <strong>Wiki des Mods de Phax709</strong> is officially changing its name to <strong>Phax709 Studios</strong>.</p>
          <p>I've been working on this regularly for months. Most of the time was spent rewriting the entire site engine from scratch, redesigning the graphics, and reorganizing all the files.</p>
          <p>This new site brings two major advantages over the old one:</p>
          <ul>
            <li>I can now maintain and update it much more easily.</li>
            <li>It finally features almost complete documentation for <strong>Acatar</strong>.</li>
          </ul>
          <p>As for the rest of the content: the 3 other mods will arrive in a few weeks, so please be patient just a little longer! New features will also land in the next update.</p>
          <p>Certain points of the site may be changed slightly compared to my expectations that I would like and to simplify the understanding of you — for example, clarifying what it means when a mod is marked as "in development". There are also a few visual details I'd like to polish, but that will come in due time.</p>
          <p>I truly hope you enjoy all the hard work put into this new site!</p>`
    }
  }
];
