// ===== Configuration des patchnotes =====
// Ajoute les patchnotes de chaque version ici.
// Les plus récents en premier dans chaque mod.
//
// Chaque entrée a :
//   - version  : numéro de version (ex: "1.0.0")
//   - date     : date de sortie (YYYY-MM-DD)
//   - loader   : "Forge", "NeoForge", "Fabric", "Forge + NeoForge", "Fabric + NeoForge", ou "All"
//   - mcVersion: version Minecraft (ex: "1.20.1")
//   - type     : "release", "beta", ou "alpha"
//   - changes  : { fr: ["changement 1", "..."], en: ["change 1", "..."] }
//
// Pour les sections Ajout / Modification, utiliser des backticks ` et du HTML :
//   `<b class="patch-add">Ajout :</b>
//   <ul>
//     <li>Premier ajout</li>
//     <li>Deuxième ajout</li>
//     <li>etc.</li>
//   </ul>`
//
//   `<b class="patch-fix">Modification :</b>
//   <ul>
//     <li>Première correction</li>
//     <li>etc.</li>
//   </ul>`
//
// On peut mettre que Ajout, que Modification, ou les deux. Autant de <li> que nécessaire.
//
// Classes CSS disponibles pour les sections :
//   - .patch-add  → Ajout        (vert #53d769)
//   - .patch-fix  → Modification (rouge #f44336)
//   - .patch-info → Information  (bleu #2196f3)
//   - .patch-warn → Attention    (orange #ff9800)
//
// Pour une sous-liste numérotée dans un <li> :
//     <li>Texte principal :
//       <ol>
//         <li>Élément 1</li>
//         <li>Élément 2</li>
//       </ol>
//     </li>

const patchnotesConfig = {
  acatar: [
    {
      version: '1.0.0',
      date: '2026-08-26',
      loader: 'NeoForge',
      mcVersion: '26.1.2',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Support de la version Minecraft 26.1.2</li>
            <li>Rebalancement complet des outils, minerais et blocs : Ajustement de tous les niveaux de récolte à travers tous les outils, minerais et blocs pour une progression plus fluide</li>
            <li>Nouvelles recettes d'artisanat : Ajout de recettes pour fabriquer l'Œuf d'Apparition du Nautilus et l'Œuf d'Apparition du desséché</li>
            <li>Ajout d'une nouvelle recette pour fabriquer de la poudre à canon à partir de poudre de souffre</li>    
            <li>Ajout d'une recette pour l'armure pour cheval en cuivre</li>
            <li>Ajout du craft de l'oeuf d'apparition du loup lyvora</li>  
            </ul>`,
          `<b class="patch-fix">Changements & Corrections :</b>
          <ul>
            <li>Des changements concernants le disque de musique "Sweden" : 
              <ol>
                <li>Le disque jouant Sweden déclenche désormais les musiques du tag [music.game]</li>
                <li>Renommage du disque en "C418 — Musiques aléatoires de l'Overworld"</li>
                <li>Mise à jour de la description du succès lié au disque</li>
              </ol>
            </li>
            <li>Ajout de la recette manquante de la pomme en dioptasium</li>
            <li>Ajout de la recette manquante pour decrafter un bloc de xenite</li>
            <li>Ajout de la recette manquante pour decrafter un bloc d'uranium</li>
            <li>Ajout de la recette manquante pour decrafter le bloc de crystal rouge</li>
            <li>La recette de la poudre de souffre est désormais en mode sans forme</li>
            <li>Modification de la recette de l'essence végétale pour remplacer les bouteilles incraftables par des items du tag 'vegetal'</li>
            <li>Modification du nombre de minerai de chrome échangé par le villageois mineur</li>
            <li>Suppression d'un échange non équitable avec le mineur</li>
            <li>Modification de la recette du gravier</li>
            <li>Modification de la recette du spawner en ajoutant l'éclat d'arcane</li>
            <li>Suppression de 2 recettes en doublon, d'œufs d'apparition de créatures</li>
            <li>Correction de certaines traductions incorrectes</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Added:</b>
          <ul>
            <li>Added support for Minecraft version 26.1.2</li>
            <li>Complete tool, ore, and block rebalancing: Adjusted all mining levels (harvest levels) across all tools, ores, and blocks for a smoother progression</li>
            <li>New crafting recipes: Added recipes to craft the Nautilus Spawn Egg and the Parched Spawn Egg</li>
            <li>Addition of a recipe for copper horse armor</li>
            <li>Addition of a recipe for the wolf lyvora's egg</li>
          </ul>`,
          `<b class="patch-fix">Changes & Fixes</b>
          <ul>
            <li>Changes related to the "Sweden" music disc: 
              <ol>
                <li>The disc playing Sweden now triggers track events from the [music.game] tag</li>
                <li>Renamed the disc to "C418 — Random Overworld Tracks"</li>
                <li>Updated the description of the achievement linked to the disc</li>
              </ol>
            </li>
            <li>Fixed missing recipe for the Dioptasium Apple</li>
            <li>Fixed missing recipe to uncraft a Xenite Block</li>
            <li>Fixed missing recipe to uncraft an Uranium Block</li>
            <li>Fixed missing recipe to uncraft the Red Crystal Block</li>
            <li>The recipe for Sulfur Powder is now shapeless</li>
            <li>Modification of the recipe for vegetable essence to replace the uncraftable bottles with items from the 'vegetal' tag</li>
            <li>Modification of the number of chromium ore exchanged by the minor villager</li>
            <li>Suppression of an unfair exchange with the minor</li>
            <li>Modification of the recipe of gravel</li>
            <li>Modification of the recipe of spawner by adding arcane shard</li>
            <li>Deletion of 2 duplicate recipes, from creature spawn eggs</li>
            <li>Correction of some incorrect translations</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.4.2',
      date: '2026-08-26',
      loader: 'NeoForge',
      mcVersion: '1.21.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Rebalancement complet des outils, minerais et blocs : Ajustement de tous les niveaux de récolte à travers tous les outils, minerais et blocs pour une progression plus fluide</li>
            <li>Ajout du craft de l'oeuf d'apparition du loup lyvora</li>
            </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Des changements concernants le disque de musique "Sweden" : 
              <ol>
                <li>Le disque jouant Sweden déclenche désormais les musiques du tag [music.game]</li>
                <li>Renommage du disque en "C418 — Musiques aléatoires de l'Overworld"</li>
                <li>Mise à jour de la description du succès lié au disque</li>
              </ol>
            </li>
            <li>Ajout de la recette manquante de la pomme en dioptasium</li>
            <li>Ajout de la recette manquante pour decrafter un bloc de xenite</li>
            <li>Ajout de la recette manquante pour decrafter un bloc d'uranium</li>
            <li>Ajout de la recette manquante pour decrafter le bloc de crystal rouge</li>
            <li>La recette de la poudre de souffre est désormais en mode sans forme</li>
            <li>Modification de la recette de l'essence végétale pour remplacer les bouteilles incraftables par des items du tag 'vegetal'</li>
            <li>Modification du nombre de minerai de chrome échangé par le villageois mineur</li>
            <li>Suppression d'un échange non équitable avec le mineur</li>
            <li>Modification de la recette du gravier</li>
            <li>Modification de la recette du spawner en ajoutant l'éclat d'arcane</li>
            <li>Suppression de 2 recettes en doublon, d'œufs d'apparition de créatures</li>
            <li>Correction de certaines traductions incorrectes</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Added:</b>
          <ul>
            <li>Complete tool, ore, and block rebalancing: Adjusted all mining levels (harvest levels) across all tools, ores, and blocks for a smoother progression</li>
            <li>Addition of a recipe for the wolf lyvora's egg</li>
          </ul>`,
          `<b class="patch-fix">Changes & Fixes</b>
          <ul>
            <li>Changes related to the "Sweden" music disc: 
              <ol>
                <li>The disc playing Sweden now triggers track events from the [music.game] tag</li>
                <li>Renamed the disc to "C418 — Random Overworld Tracks"</li>
                <li>Updated the description of the achievement linked to the disc</li>
              </ol>
            </li>
            <li>Fixed missing recipe for the Dioptasium Apple</li>
            <li>Fixed missing recipe to uncraft a Xenite Block</li>
            <li>Fixed missing recipe to uncraft an Uranium Block</li>
            <li>Fixed missing recipe to uncraft the Red Crystal Block</li>
            <li>The recipe for Sulfur Powder is now shapeless</li>
            <li>Modification of the recipe for vegetable essence to replace the uncraftable bottles with items from the 'vegetal' tag</li>
            <li>Modification of the number of chromium ore exchanged by the minor villager</li>
            <li>Suppression of an unfair exchange with the minor</li>
            <li>Modification of the recipe of gravel</li>
            <li>Modification of the recipe of spawner by adding arcane shard</li>
            <li>Deletion of 2 duplicate recipes, from creature spawn eggs</li>
            <li>Correction of some incorrect translations</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.0.0',
      date: '2026-07-07',
      loader: 'NeoForge',
      mcVersion: '1.21.8',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout d'une nouvelle recette d'artisanat pour l'Œuf d'Apparition de Tortue</li>
            <li>Ajout d'un nouveau commerce de niveau Maître au villageois Boucher pour obtenir le disque musical Lava Chicken</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Added :</b>
          <ul>
            <li>Added a new crafting recipe for the Turtle Spawn Egg</li>
            <li>Added a new Master level trade to the Butcher villager to obtain the Lava Chicken music disc</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.4.1',
      date: '2025-12-29',
      loader: 'Forge, NeoForge',
      mcVersion: '1.21.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-fix">Corrections et nettoyage de compatibilité :</b>
          <ul>
            <li>Correction des tags et des references invalides</li>
            <li>Suppression des entrées legacy non supportées</li>
            <li>Correction et suppression des recettes invalides</li>
            <li>Suppression des recettes utilisant des éléments uniquement présents en Minecraft 1.21.4</li>
            <li>Suppression de la dépendance Curios</li>
            <li>Amélioration de la stabilité sur Minecraft 1.21.1</li>
          </ul>`
        ],
        en: [
          `<b class="patch-fix">Bug fixes and compatibility cleanup :</b>
          <ul>
            <li>Fixed invalid tags and broken references</li>
            <li>Removed unsupported legacy entries</li>
            <li>Fixed and removed invalid recipes</li>
            <li>Removed recipes using Minecraft 1.21.4-only elements</li>
            <li>Removed the Curios dependency</li>
            <li>Improved stability on Minecraft 1.21.1</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.4.0',
      date: '2025-10-20',
      loader: 'Forge, NeoForge',
      mcVersion: '1.21.1',
      type: 'alpha',
      changes: {
        fr: [
          `<b class="patch-warn">Attention :</b>
          <ul>
            <li> ⚠️ Version obsolète :
              <ol>
                <li>Cette version n'est plus maintenue.</li>
                <li>Elle peut contenir des bugs et peut nécessiter des dépendances supplémentaires (comme Curios).</li>
                <li>Veuillez utiliser Acatar 1.4.1 ou une version plus récente à la place.</li>
              </ol>
            </li>
          </ul>`,
          `<b class="patch-info">Information :</b>
          <ul>
            <li>Explorez la sérénité du Sakura et la puissance du Lyvora, dans une mise à jour où la vie et la lumière s'épanouissent jusque dans le Nether. ⚙️ Certaines fonctionnalités sont encore en phase de test — vos retours aideront à les peaufiner !</li>
          </ul>`,
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Les armures du mod (sauf l'armure de l'espace) peuvent désormais avoir un modèle de forge (disponible uniquement avec les matériaux vanilla : diamant, émeraude, fer, or, redstone, etc.)</li>
            <li>Ajout de 2 crafts pour la potion de Mauvais Présage : un dans la table de craft (9 ingrédients) et un dans l'alambic 🧪</li>
            <li>Ajout de la pomme en dioptasium 🍏</li>
            <li>Ajout du soufre, craftable avec de la poudre de blaze 🔥</li>
            <li>Nouveau minerai : le plomb ⛏️</li>
            <li>Nouveau lingot : le Hazmium, obtenu avec du soufre, du plomb, de la poudre lumineuse et de l'or — utilisé pour l'armure Hazmat ⚗️</li>
            <li>L'armure Hazmat est désormais disponible en survie 🧍‍♂️</li>
            <li>Nouvel enchantement : Protection des radiations ☢️</li>
            <li>Ajout de 2 nouveaux avancements 🏆</li>
            <li>Ajout des racines sakura 🌸</li>
            <li>Ajout du tapis de mousse sakura 🌿</li>
            <li>Le champignon sakura apparaît désormais naturellement dans la forêt de sakura 🍄</li>
            <li>Nouvelle fleur mystique : Anthéria 🌺</li>
            <li>Nouvelle créature : le Loup Lyvora 🐺</li>
            <li>Nouvelle nourriture : la Baie Lyvorienne 🍇</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>💡 Légère réduction de la luminosité du lingot d'uranium</li>
            <li>☠️ Le minerai d'uranium applique désormais l'effet de poison si vous ne portez pas l'armure Hazmat ou une armure avec “Protection des radiations”
              <ol>
                <li>(⚠️ cette fonction est encore instable — privilégiez l'armure Hazmat pour le moment)</li>
              </ol>
            </li>
            <li>🔢 Changement de numéro dans les avancements 5 et 6, devenus 7 et 8</li>
            <li>🧱 Changement de l'icône de l'avancement “Qu'est-ce que c'est ?” (Carmeltazite)</li>
            <li>💣 [⚠️] La bombe nucléaire est toujours en phase de test</li>
            <li>🌾 Le champignon explosif peut désormais être placé sur la terre</li>
            <li>🐗 Réduction du taux d'apparition des Piglins, Hoglins et cochons-zombies dans le biome Sakura</li>
            <li>🌸 [⚠️] Le champignon Sakura ne pousse désormais qu'avec un cristal rouge ou de la poudre d'os</li>
            <li>🈁 Correction : “Sakura Wart Block” devient “Bloc de verrue Sakura”</li>
            <li>🌱 Le Nylium Sakura se propage désormais comme le Nylium carmin lorsqu'il est stimulé à la poudre d'os</li>
            <li>🔥 Le biome Sakura peut désormais générer des portails en ruine naturellement</li>
            <li>👁️ Augmentation de la portée de détection de l'Œil de Révélation</li>
          </ul>`
        ],
        en: [
          `<b class="patch-warn">Attention :</b>
          <ul>
            <li>⚠️ Deprecated version : 
              <ol>
                <li>This version is no longer maintained.</li>
                <li>It may contain bugs and may require additional dependencies (such as Curios).</li>
                <li>Please use Acatar 1.4.1 or newer instead.</li>
              </ol>
            </li>
          </ul>`,
          `<b class="patch-info">Information:</b>
          <ul>
            <li>Explore the serenity of Sakura and the power of Lyvora, in an update where life and light flourish even in the Nether. ⚙️ Some features are still in testing phase — your feedback will help refine them!</li>
          </ul>`,
          `<b class="patch-add">Added:</b>
          <ul>
            <li>Mod armors (except space armor) can now have a forge model (available only with vanilla materials: diamond, emerald, iron, gold, redstone, etc.)</li>
            <li>Added 2 crafts for the Bad Omen potion: one in the crafting table (9 ingredients) and one in the brewing stand 🧪</li>
            <li>Added the dioptasium apple 🍏</li>
            <li>Added sulfur, craftable with blaze powder 🔥</l>
            <li>New ore: lead ⛏️</li>
            <li>New ingot: Hazmium, obtained with sulfur, lead, luminous powder and gold — used for Hazmat armor ⚗️</li>
            <li>Hazmat armor is now available in survival 🧍‍♂️</li>
            <li>New enchantment: Radiation Protection ☢️</li>
            <li>Add 2 new achievements 🏆</li>
            <li>Add sakura roots 🌸</li>
            <li>Add sakura carpet 🌿</li>
            <li>The sakura mushroom appears naturally in the sakura forest 🍄</li>
            <li>New mystical flower: Anthéria 🌺</li>
            <li>New creature: the Lyvora Wolf 🐺</li>
            <li>New food: the Lyvorian Berry 🍇</li>
          </ul>`,
          `<b class="patch-fix">Fix:</b>
          <ul>
            <li>💡 Slight reduction of the uranium ingot's brightness</li>
            <li>☠️ The uranium ore now applies the poison effect if you are not wearing the Hazmat armor or an armor with “Radiation Protection”
              <ol>
                <li>(⚠️ this function is still unstable — prioritize Hazmat armor for now)</li>
              </ol>
            </li>
            <li>🔢 Change of number in achievements 5 and 6, now 7 and 8</li>
            <li>🧱 Change of icon for the achievement “What is this?” (Carmeltazite)</li>
            <li>💣 [⚠️] The nuclear bomb is still in testing phase</li>
            <li>🌾 The explosive mushroom can now be placed on dirt</li>
            <li>🐗 Reduction of the spawn rate of Piglins, Hoglins and zombified pigs in the Sakura biome</li>
            <li>🌸 [⚠️] The Sakura mushroom now only grows with a red crystal or bone meal</li>
            <li>🈁 Fix: “Sakura Wart Block” becomes “Sakura Wart Block”</li>
            <li>🌱 The Sakura Nylium now spreads like Crimson Nylium when stimulated with bone meal</li>
            <li>🔥 The Sakura biome can now naturally generate ruined portals</li>
            <li>👁️ Increased the detection range of the Eye of Revelation</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.3.0',
      date: '2025-10-20',
      loader: 'Forge, NeoForge',
      mcVersion: '1.21.4',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-info">Information :</b>
          <ul>
            <li>Explorez la sérénité du Sakura et la puissance du Lyvora, dans une mise à jour où la vie et la lumière s'épanouissent jusque dans le Nether. ⚙️ Certaines fonctionnalités sont encore en phase de test — vos retours aideront à les peaufiner !</li>
          </ul>`,
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Les armures du mod (sauf l'armure de l'espace) peuvent désormais avoir un modèle de forge (disponible uniquement avec les matériaux vanilla : diamant, émeraude, fer, or, redstone, etc.)</li>
            <li>Ajout de 2 crafts pour la potion de Mauvais Présage : un dans la table de craft (9 ingrédients) et un dans l'alambic 🧪</li>
            <li>Ajout de la pomme en dioptasium 🍏</li>
            <li>Ajout du soufre, craftable avec de la poudre de blaze 🔥</li>
            <li>Nouveau minerai : le plomb ⛏️</li>
            <li>Nouveau lingot : le Hazmium, obtenu avec du soufre, du plomb, de la poudre lumineuse et de l'or — utilisé pour l'armure Hazmat ⚗️</li>
            <li>L'armure Hazmat est désormais disponible en survie 🧍‍♂️</li>
            <li>Nouvel enchantement : Protection des radiations ☢️</li>
            <li>Ajout de 2 nouveaux avancements 🏆</li>
            <li>Ajout des racines sakura 🌸</li>
            <li>Ajout du tapis de mousse sakura 🌿</li>
            <li>Le champignon sakura apparaît désormais naturellement dans la forêt de sakura 🍄</li>
            <li>Nouvelle fleur mystique : Anthéria 🌺</li>
            <li>Nouvelle créature : le Loup Lyvora 🐺</li>
            <li>Nouvelle nourriture : la Baie Lyvorienne 🍇</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>💡 Légère réduction de la luminosité du lingot d'uranium</li>
            <li>☠️ Le minerai d'uranium applique désormais l'effet de poison si vous ne portez pas l'armure Hazmat ou une armure avec “Protection des radiations”
              <ol>
                <li>(⚠️ cette fonction est encore instable — privilégiez l'armure Hazmat pour le moment)</li>
              </ol>
            </li>
            <li>🔢 Changement de numéro dans les avancements 5 et 6, devenus 7 et 8</li>
            <li>🧱 Changement de l'icône de l'avancement “Qu'est-ce que c'est ?” (Carmeltazite)</li>
            <li>💣 [⚠️] La bombe nucléaire est toujours en phase de test</li>
            <li>🌾 Le champignon explosif peut désormais être placé sur la terre</li>
            <li>🐗 Réduction du taux d'apparition des Piglins, Hoglins et cochons-zombies dans le biome Sakura</li>
            <li>🌸 [⚠️] Le champignon Sakura ne pousse désormais qu'avec un cristal rouge ou de la poudre d'os</li>
            <li>🈁 Correction : “Sakura Wart Block” devient “Bloc de verrue Sakura”</li>
            <li>🌱 Le Nylium Sakura se propage désormais comme le Nylium carmin lorsqu'il est stimulé à la poudre d'os</li>
            <li>🔥 Le biome Sakura peut désormais générer des portails en ruine naturellement</li>
            <li>👁️ Augmentation de la portée de détection de l'Œil de Révélation</li>
          </ul>`
        ],
        en: [
          `<b class="patch-info">Information:</b>
          <ul>
            <li>Explore the serenity of Sakura and the power of Lyvora, in an update where life and light flourish even in the Nether. ⚙️ Some features are still in testing phase — your feedback will help refine them!</li>
          </ul>`,
          `<b class="patch-add">Added:</b>
          <ul>
            <li>Mod armors (except space armor) can now have a forge model (available only with vanilla materials: diamond, emerald, iron, gold, redstone, etc.)</li>
            <li>Added 2 crafts for the Bad Omen potion: one in the crafting table (9 ingredients) and one in the brewing stand 🧪</li>
            <li>Added the dioptasium apple 🍏</li>
            <li>Added sulfur, craftable with blaze powder 🔥</l>
            <li>New ore: lead ⛏️</li>
            <li>New ingot: Hazmium, obtained with sulfur, lead, luminous powder and gold — used for Hazmat armor ⚗️</li>
            <li>Hazmat armor is now available in survival 🧍‍♂️</li>
            <li>New enchantment: Radiation Protection ☢️</li>
            <li>Add 2 new achievements 🏆</li>
            <li>Add sakura roots 🌸</li>
            <li>Add sakura carpet 🌿</li>
            <li>The sakura mushroom appears naturally in the sakura forest 🍄</li>
            <li>New mystical flower: Anthéria 🌺</li>
            <li>New creature: the Lyvora Wolf 🐺</li>
            <li>New food: the Lyvorian Berry 🍇</li>
          </ul>`,
          `<b class="patch-fix">Fix:</b>
          <ul>
            <li>💡 Slight reduction of the uranium ingot's brightness</li>
            <li>☠️ The uranium ore now applies the poison effect if you are not wearing the Hazmat armor or an armor with “Radiation Protection”
              <ol>
                <li>(⚠️ this function is still unstable — prioritize Hazmat armor for now)</li>
              </ol>
            </li>
            <li>🔢 Change of number in achievements 5 and 6, now 7 and 8</li>
            <li>🧱 Change of icon for the achievement “What is this?” (Carmeltazite)</li>
            <li>💣 [⚠️] The nuclear bomb is still in testing phase</li>
            <li>🌾 The explosive mushroom can now be placed on dirt</li>
            <li>🐗 Reduction of the spawn rate of Piglins, Hoglins and zombified pigs in the Sakura biome</li>
            <li>🌸 [⚠️] The Sakura mushroom now only grows with a red crystal or bone meal</li>
            <li>🈁 Fix: “Sakura Wart Block” becomes “Sakura Wart Block”</li>
            <li>🌱 The Sakura Nylium now spreads like Crimson Nylium when stimulated with bone meal</li>
            <li>🔥 The Sakura biome can now naturally generate ruined portals</li>
            <li>👁️ Increased the detection range of the Eye of Revelation</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.2.0',
      date: '2025-06-30',
      loader: 'Forge, NeoForge',
      mcVersion: '1.21.4',
      type: 'beta',
      changes: {
        fr: [
          `<b class="patch-info">Information :</b>
          <ul>
            <li>Merci de votre patience pour ce long moment sans mise à jour du mod, mais avant de publier une mise à jour définitive (non en beta) je voudrais que vous participiez à celle-ci donc si vous avez des idées concernant une mise à jour "Desert" je suis preneur, si vous voulez voir votre rêve ce réaliser vous savez où me trouvez</li>
          </ul>`,
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout d'une bouteille d'xp condensée</li>
            <li>Ajout du noyau d'expérience</li>
            <li>Ajout du générateur d'xp</li>
            <li>Ajout du Sapling upgrade</li>
            <li>Nouvelle fonctionnalité pour le bloc de scierie (en test)</li>
            <li>Ajout d'une bombe nucleaire (en test)</li>
            <li>Ajout de variante de l'obsidienne en brique et en version normale</li>
            <li>Ajout de l'apparition du piglin, du piglin zombifié et du hoglin dans le biome de sakura</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>Les coffres dans l'arene d'Extermate donnera plus qu'un seul item</li>
            <li>Modification du nombre d'arbre de sakura dans la nether</li>
            <li>L'arene d'Extermate peut désormais apparaitre dans les terres désolées du nether</li>
            <li>L'apparition de l'arene d'Extermate apparait désormais plus souvent (demande plus de verifiaction, si vous voulez participer n'hésitez pas)</li>
          </ul>`
        ],
        en: [
          `<b class="patch-info">Information:</b>
          <ul>
            <li>Thank you for your patience for this long moment without an update of the mod, but before publishing a definitive update (not in beta) I would like you to participate in it so if you have any ideas regarding a "Desert" update I am taking, if you want to see your dream come true you know where to find me</li>
          </ul>`,
          `<b class="patch-add">Added:</b>
          <ul>
            <li>Added a condensed xp bottle</li>
            <li>Added the experience core</li>
            <li>Added the xp generator</li>
            <li>Added the Sapling upgrade</li>
            <li>New feature for the sawmill block (in test)</li>
            <li>Added a nuclear bomb (in test)</li>
            <li>Added a variant of obsidian in brick and in normal version</li>
            <li>Added the appearance of the piglin, the zombified piglin and the hoglin in the sakura biome</li>
          </ul>`,
          `<b class="patch-fix">Fix:</b>
          <ul>
            <li>The chests in the Extermate arena will now give more than one item</li>
            <li>Modification of the number of sakura trees in the nether</li>
            <li>The Extermate arena can now appear in the desolate lands of the nether</li>
            <li>The appearance of the Extermate arena appears more often (requires more verification, if you want to participate do not hesitate)</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.3.0',
      date: '2025-06-30',
      loader: 'Forge, NeoForge',
      mcVersion: '1.21.1',
      type: 'beta',
      changes: {
        fr: [
          `<b class="patch-info">Information :</b>
          <ul>
            <li>Merci de votre patience pour ce long moment sans mise à jour du mod, mais avant de publier une mise à jour définitive (non en beta) je voudrais que vous participiez à celle-ci donc si vous avez des idées concernant une mise à jour "Desert" je suis preneur, si vous voulez voir votre rêve ce réaliser vous savez où me trouvez</li>
          </ul>`,
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout d'une bouteille d'xp condensée</li>
            <li>Ajout du noyau d'expérience</li>
            <li>Ajout du générateur d'xp</li>
            <li>Ajout du Sapling upgrade</li>
            <li>Nouvelle fonctionnalité pour le bloc de scierie (en test)</li>
            <li>Ajout d'une bombe nucleaire (en test)</li>
            <li>Ajout de variante de l'obsidienne en brique et en version normale</li>
            <li>Ajout de l'apparition du piglin, du piglin zombifié et du hoglin dans le biome de sakura</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>Les coffres dans l'arene d'Extermate donnera plus qu'un seul item</li>
            <li>Modification du nombre d'arbre de sakura dans la nether</li>
            <li>L'arene d'Extermate peut désormais apparaitre dans les terres désolées du nether</li>
            <li>L'apparition de l'arene d'Extermate apparait désormais plus souvent (demande plus de verifiaction, si vous voulez participer n'hésitez pas)</li>
          </ul>`
        ],
        en: [
          `<b class="patch-info">Information:</b>
          <ul>
            <li>Thank you for your patience for this long moment without an update of the mod, but before publishing a definitive update (not in beta) I would like you to participate in it so if you have any ideas regarding a "Desert" update I am taking, if you want to see your dream come true you know where to find me</li>
          </ul>`,
          `<b class="patch-add">Added:</b>
          <ul>
            <li>Added a condensed xp bottle</li>
            <li>Added the experience core</li>
            <li>Added the xp generator</li>
            <li>Added the Sapling upgrade</li>
            <li>New feature for the sawmill block (in test)</li>
            <li>Added a nuclear bomb (in test)</li>
            <li>Added a variant of obsidian in brick and in normal version</li>
            <li>Added the appearance of the piglin, the zombified piglin and the hoglin in the sakura biome</li>
          </ul>`,
          `<b class="patch-fix">Fix:</b>
          <ul>
            <li>The chests in the Extermate arena will now give more than one item</li>
            <li>Modification of the number of sakura trees in the nether</li>
            <li>The Extermate arena can now appear in the desolate lands of the nether</li>
            <li>The appearance of the Extermate arena appears more often (requires more verification, if you want to participate do not hesitate)</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.1.0',
      date: '2025-04-14',
      loader: 'Forge, NeoForge',
      mcVersion: '1.21.4',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout du lingot de scarlet (peut être crafter avec 9 lingots du mod)</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>Le casque de vision nocturne et de régénération peuvent être réparer avec le lingot de scarlet</li>
            <li>L'echange de tete de wither contre deux etoiles du nether est désormais au niveau master du miner</li>
            <li>Correction où le baton du creeper céruléen ne dropait pas</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Added :</b>
          <ul>
            <li>Added the scarlet ingot (can be crafted with 9 mod ingots)</li>
          </ul>`,
          `<b class="patch-fix">Fix :</b>
          <ul>
            <li>The night vision and regeneration helmets can be repaired with the scarlet ingot</li>
            <li>The exchange of wither head for two nether stars is now at the master level of the miner</li>
            <li>Fix where the cerulean creeper stick was not dropping</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.2.1',
      date: '2025-04-14',
      loader: 'Forge, NeoForge',
      mcVersion: '1.21.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout du lingot de scarlet (peut être crafter avec 9 lingots du mod)</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>Le casque de vision nocturne et de régénération peuvent être réparer avec le lingot de scarlet</li>
            <li>L'echange de tete de wither contre deux etoiles du nether est désormais au niveau master du miner</li>
            <li>Correction où le baton du creeper céruléen ne dropait pas</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Added :</b>
          <ul>
            <li>Added the scarlet ingot (can be crafted with 9 mod ingots)</li>
          </ul>`,
          `<b class="patch-fix">Fix :</b>
          <ul>
            <li>The night vision and regeneration helmets can be repaired with the scarlet ingot</li>
            <li>The exchange of wither head for two nether stars is now at the master level of the miner</li>
            <li>Fix where the cerulean creeper stick was not dropping</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.0.0',
      date: '2025-04-08',
      loader: 'Forge, NeoForge',
      mcVersion: '1.21.4',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout d'un craft pour le motif de bannière :Globe, piglin(groin), tourbillon et rafaleur</li>
            <li>Ajout d'un craft pour le trident</li>
            <li>Ajout d'un craft pour la tête de dragon</li>
            <li>Ajout du craft pour l'œuf du creaking</li>
            <li>Ajout de la cuisson de la cobblestone dans le haut fourneau(2s)</li>
            <li>Ajout d'un craft pour la netherite upgrade (netherrack + diamant )</li>
            <li>Ajout d'une croix sur l'interface du spawner de collosum</li>
            <li>Ajout d'une porte en résine</li>
            <li>Ajout d'une fleur (Ecliptia) (in mushroom fields)</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>Suppression du support du mod avec Jei</li>
            <li>Suppression du support des modèles de forge avec les armures</li>
            <li>Changement de "Purifieur" en "purificateur" dans la version française</li>
            <li>Restructuration de la langue française</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Added :</b>
          <ul>
            <li>Added a craft for the banner pattern :Globe, piglin(groin), flow and guster</li>
            <li>Added a craft for the trident</li>
            <li>Added a craft for the dragon head</li>
            <li>Added the craft for the creaking egg</li>
            <li>Added the cooking of cobblestone in the blast furnace (2s)</li>
            <li>Added a craft for the netherite upgrade (netherrack + diamond)</li>
            <li>Added a cross on the collosum spawner interface</li>
            <li>Added a door made of resin</li>
            <li>Added a flower (Ecliptia) (in mushroom fields)</li>
          </ul>`,
          `<b class="patch-fix">Fix :</b>
          <ul>
            <li>Removed support for the mod with Jei</li>
            <li>Removed support for forge models with armors</li>
            <li>Changed "Purifieur" to "purificateur" in the French version</li>
            <li>Restructured the French language</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.2.0',
      date: '2025-04-08',
      loader: 'Forge, NeoForge',
      mcVersion: '1.21.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout d'un craft pour le motif de bannière :Globe, piglin(groin), tourbillon et rafaleur</li>
            <li>Ajout d'un craft pour le trident</li>
            <li>Ajout d'un craft pour la tête de dragon</li>
            <li>Ajout du craft pour l'œuf du creaking (impossible de l'obtenir pour la 1.21.1 en survie et créatif)</li>
            <li>Ajout de la cuisson de la cobblestone dans le haut fourneau(2s)</li>
            <li>Ajout d'un craft pour la netherite upgrade (netherrack + diamant )</li>
            <li>Ajout d'une croix sur l'interface du spawner de collosum</li>
            <li>Ajout d'une porte en résine (impossible de l'obtenir en survie pour la 1.21.1)</li>
            <li>Ajout d'une fleur (Ecliptia) (in mushroom fields)</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>Suppression du support du mod avec Jei</li>
            <li>Suppression du support des modèles de forge avec les armures</li>
            <li>Changement de "Purifieur" en "purificateur" dans la version française</li>
            <li>Restructuration de la langue française</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Added :</b>
          <ul>
            <li>Added a craft for the banner pattern :Globe, piglin(groin), flow and guster</li>
            <li>Added a craft for the trident</li>
            <li>Added a craft for the dragon head</li>
            <li>Added the craft for the creaking egg (impossible to obtain it for 1.21.1 in survival and creative)</li>
            <li>Added the cooking of cobblestone in the blast furnace (2s)</li>
            <li>Added a craft for the netherite upgrade (netherrack + diamond)</li>
            <li>Added a cross on the collosum spawner interface</li>
            <li>Added a door made of resin (impossible to obtain it in survival for 1.21.1)</li>
            <li>Added a flower (Ecliptia) (in mushroom fields)</li>
          </ul>`,
          `<b class="patch-fix">Fix :</b>
          <ul>
            <li>Removed support for the mod with Jei</li>
            <li>Removed support for forge models with armors</li>
            <li>Changed "Purifieur" to "purificateur" in the French version</li>
            <li>Restructured the French language</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.1.1',
      date: '2025-03-08',
      loader: 'Forge, NeoForge',
      mcVersion: '1.21.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout d'une rune des éléments
              <ol>
                <li>(amélioration en netherite + 8 colorants du mod)</li>
              </ol>
            </li>
            <li>Ajout du casque de vision nocturne
              <ol>
                <li>( dans la table de forge, rune des éléments + casque + colorant de l'espace )</li>
              </ol>
            </li>
            <li>Ajout du casque de regeneration
              <ol>
                <li>( dans la table de forge, rune des éléments + casque + sceau d'élixir de vie )</li>
              </ol>
            </li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>Correction des dégâts d'attaques de l'épée en dioptasium qui était trop faible</li>
            <li>Correction de la langue en anglais de l'armure en paladium, multicolor, space</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Added :</b>
          <ul>
            <li>Added an elemental rune
              <ol>
                <li>(netherite upgrade + 8 mod dyes)</li>
              </ol>
            </li>
            <li>Added the night vision helmet
              <ol>
                <li>(in the forge table, elemental rune + helmet + space dye)</li>
              </ol>
            </li>
            <li>Added the regeneration helmet
              <ol>
                <li>(in the forge table, elemental rune + helmet + elixir of life seal)</li>
              </ol>
            </li>
          </ul>`,
          `<b class="patch-fix">Fix :</b>
          <ul>
            <li>Fixed the attack damage of the dioptasium sword which was too low</li>
            <li>Fixed the English language of the paladium, multicolor, space armor</li>
          </ul>`
        ],
      },
    },
    {
      version: '1.1.0',
      date: '2025-02-13',
      loader: 'Forge, NeoForge',
      mcVersion: '1.21.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout du craft de 6 armors trims (bolt, flow, host, shaper, raiser, wayfinder)</li>
            <li>Ajout du craft du heavy core</li>
            <li>Ajout d'un nouveau minerai présent dans l'end la "nyxite"</li>
            <li>Ajout d'un nouveau type d'armure et d'outils en nyxite</li>
            <li>Ajout d'un bâton en auriacier (aurasteel) (alliage cuivre et nickel)</li>
            <li>Ajout de l'avancement "Jusqu'à la fin"</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>Modification de l'avancement "Découvertes géologiques" pour integrer le nyxite</li>
            <li>Changement de la recette du lingot en multicolor : remplacement du lingot en netherite pour celui de nyxite</li>
            <li>Désormais le ondegel prendra feu lorsqu'il fera jour (même sous un blocs)</li>
            <li>Changement du niveau d'outils pour récolter le minerai de paladium qui passe du fer à la pierre</li>
            <li>Changement du niveau d'outils pour récolter le minerai de red et du minerai de red du nether qui passe du diamant au fer</li>
            <li>Changement des vitesses d'attaques des épées :
              <ol>
                <li>Paladium : 1,7 → 1,7 ( Aucun changement )</li>
                <li>Red : 1,7 → 1,9 ( Augmentation )</li>
                <li>Amazonite : 4 → 2,2 ( Réduction )</li>
                <li>Dioptasium : 2,0 → 3,5 ( Augmentation )</li>
                <li>Multicolor : 2,0 → 7,0 ( Augmentation )</li>
              </ol>
            </li>
            <li>Changement des dégâts d'attaques des épées :
              <ol>
                <li>Paladium : ( Aucun changement )</li>
                <li>Red : 8 → 9 ( Augmentation )</li>
                <li>Amazonite : 15 → 22 ( Augmentation )</li>
                <li>Dioptasium : 16 → 16 ( Aucun changement )</li>
                <li>Multicolor : 42 → 42 ( Aucun changement )</li>
              </ol>
            </li>
            <li>Changement des vitesses d'attaque et des dégâts d'attaque des haches :
              <ol>
                <li>Paladium : 1 → 1 ( Aucun changement ) et 10 → 7 ( Réduction )</li>
                <li>Red : 1 → 1 ( Aucun changement ) et 9 → 9 ( Aucun changement )</li>
                <li>Amazonite : 4 → 1 ( Réduction ) et 16 → 10 ( Réduction )</li>
                <li>Dioptasium : 1 → 1 ( Aucun changement ) et 9 → 12 ( Augmentation )</li>
                <li>Multicolor : 1 → 1 ( Aucun changement ) et 20 → 20 ( Aucun changement )</li>
              </ol>
            </li>
            <li>Changement des vitesses d'attques et des degats d'attaques des pioches :
              <ol>
                <li>Paladium : 1 → 1,2 ( Augmentation ) et 2 → 2 ( Aucun changement )</li>
                <li>Red : 1 → 1,2 ( Augmentation ) et 5 → 3 ( Réduction )</li>
                <li>Amazonite : 4 → 1,2 ( Réduction ) et 6 → 4 ( Réduction )</li>
                <li>Dioptasium : 1 → 1,2 ( Augmentation ) et 4 → 5 ( Augmentation )</li>
                <li>Multicolor : 2 → 1,2 ( Réduction ) et 4 → 7 ( Augmentation )</li>
              </ol>
            </li>
            <li>Changement des vitesses d'attaques et des degats d'attaques des houes :
              <ol>
                <li>Paladium : 1 → 1 ( Aucun changement ) et 2 → 1 ( Réduction )</li>
                <li>Red : 1 → 2 ( Augmentation ) et 5 → 1 ( Réduction )</li>
                <li>Amazonite : 4 → 3 ( Réduction ) et 4 → 1 ( Réduction )</li>
                <li>Dioptasium : 1 → 4 ( Augmentation ) et 4 → 1 ( Réduction )</li>
                <li>Multicolor : 4 → 6 ( Augmentation ) et 1 → 1 ( Aucun changement )</li>
              </ol>
            </li>
            <li>Changement des vitesses d'attaques et des degats d'attaques des pelles :
              <ol>
                <li>Paladium : 1 → 1 ( Aucun changement ) et 2 → 3,5 ( Augmentation )</li>
                <li>Red : 1 → 1 ( Aucun changement ) et 5 → 4,5 ( Réduction )</li>
                <li>Amazonite : 4 → 1 ( Réduction ) et 4 → 5,5 ( Augmentation )</li>
                <li>Dioptasium : 1 → 1 ( Aucun changement ) et 4 → 6,5 ( Augmentation )</li>
                <li>Multicolor : 1 → 1 ( Aucun changement ) et 3,25 → 8,5 ( Augmentation )</li>
              </ol>
            </li>
            <li>Changement des vitesses d'attaques et des degats d'attaques des Hammer :
              <ol>
                <li>Paladium : 1 → 1 ( Aucun changement ) et 0 → 1 ( Augmentation )</li>
                <li>Red : 1 → 1 ( Aucun changement ) et 2 → 1 ( Réduction )</li>
                <li>Amazonite : 4 → 1 ( Réduction ) et 4 → 1 ( Réduction )</li>
                <li>Dioptasium : 1 → 1 ( Aucun changement ) et 1 → 1 ( Aucun changement )</li>
                <li>Multicolor : 1 → 1 ( Aucun changement ) et 4 → 1 ( Réduction )</li>
              </ol>
            </li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Add:</b>
          <ul>
            <li>Added the crafting of 6 armor trims (bolt, flow, host, shaper, raiser, wayfinder)</li>
            <li>Added the crafting of the heavy core</li>
            <li>Added a new ore present in the end called "nyxite"</li>
            <li>Added a new type of armor and tools made of nyxite</li>
            <li>Added a stick made of aurasteel (copper and nickel alloy)</li>
            <li>Added the advancement "To the end"</li>
          </ul>`,
          `<b class="patch-fix">Fix:</b>
          <ul>
            <li>Modification of the advancement "Geological discoveries" to integrate the nyxite</li>
            <li>Modification of the advancement "To the end" to integrate the nyxite</li>
            <li>Change of the recipe for the multicolor ingot: replacement of the netherite ingot with the nyxite ingot</li>
            <li>Now the Wavegel will catch fire when it is day (even under a block)</li>
            <li>Change of the tool level to harvest the paladium ore which goes from iron to stone</li>
            <li>Change of the tool level to harvest the red ore and the nether red ore which goes from diamond to iron</li>
            <li>Change of the attack speeds of the swords:
              <ol>
                <li>Paladium: 1.7 → 1.7 (No change)</li>
                <li>Red: 1.7 → 1.9 (Increase)</li>
                <li>Amazonite: 1.7 → 1.7 (No change)</li>
                <li>Dioptasium: 2.0 → 3.5 (Increase)</li>
                <li>Multicolor: 2.0 → 7.0 (Increase)</li>
              </ol>
            </li>
            <li>Change of the attack damage of the swords:
              <ol>
                <li>Paladium: 8 → 8 (No change)</li>
                <li>Red: 8 → 9 (Increase)</li>
                <li>Amazonite: 15 → 22 (Increase)</li>
                <li>Dioptasium: 16 → 16 (No change)</li>
                <li>Multicolor: 42 → 42 (No change)</li>
              </ol>
            </li>
            <li>Change of the attack speeds and attack damage of the axes:
              <ol>
                <li>Paladium: 1 → 1 (No change) and 10 → 7 (Decrease)</li>
                <li>Red: 1 → 1 (No change) and 9 → 9 (No change)</li>
                <li>Amazonite: 4 → 1 (Decrease) and 16 → 10 (Decrease)</li>
                <li>Dioptasium: 1 → 1 (No change) and 9 → 12 (Increase)</li>
                <li>Multicolor: 1 → 1 (No change) and 20 → 20 (No change)</li>
              </ol>
            </li>
            <li>Change of the attack speeds and attack damage of the pickaxes:
              <ol>
                <li>Paladium: 1 → 1.2 (Increase) and 2 → 2 (No change)</li>
                <li>Red: 1 → 1.2 (Increase) and 5 → 3 (Decrease)</li>
                <li>Amazonite: 4 → 1.2 (Decrease) and 6 → 4 (Decrease)</li>
                <li>Dioptasium: 1 → 1.2 (Increase) and 4 → 5 (Increase)</li>
                <li>Multicolor: 2 → 1.2 (Decrease) and 4 → 7 (Increase)</li>
              </ol>
            </li>
            <li>Change of the attack speeds and attack damage of the hoes:
              <ol>
                <li>Paladium: 1 → 1 (No change) and 2 → 1 (Decrease)</li>
                <li>Red: 1 → 2 (Increase) and 5 → 1 (Decrease)</li>
                <li>Amazonite: 4 → 3 (Decrease) and 4 → 1 (Decrease)</li>
                <li>Dioptasium: 1 → 4 (Increase) and 4 → 1 (Decrease)</li>
                <li>Multicolor: 4 → 6 (Increase) and 1 → 1 (No change)</li>
              </ol>
            </li>
            <li>Change of the attack speeds and attack damage of the shovels:
              <ol>
                <li>Paladium: 1 → 1 (No change) and 2 → 3.5 (Increase)</li>
                <li>Red: 1 → 1 (No change) and 5 → 4.5 (Decrease)</li>
                <li>Amazonite: 4 → 1 (Decrease) and 4 → 5.5 (Increase)</li>
                <li>Dioptasium: 1 → 1 (No change) and 4 → 6.5 (Increase)</li>
                <li>Multicolor: 1 → 1 (No change) and 3.25 → 8.5 (Increase)</li>
              </ol>
            </li>
            <li>Change of the attack speeds and attack damage of the hammers:
              <ol>
                <li>Paladium: 1 → 1 (No change) and 0 → 1 (Increase)</li>
                <li>Red: 1 → 1 (No change) and 2 → 1 (Decrease)</li>
                <li>Amazonite: 4 → 1 (Decrease) and 4 → 1 (Decrease)</li>
                <li>Dioptasium: 1 → 1 (No change) and 1 → 1 (No change)</li>
                <li>Multicolor: 1 → 1 (No change) and 4 → 1 (Decrease)</li>
              </ol>
            </li>
            </ul>`
          ]
      }
    },
    {
      version: '1.0.0',
      date: '2025-01-03',
      loader: 'Forge, NeoForge',
      mcVersion: '1.21.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Support de Minecraft 1.21.1</li>
            <li>Ajout du craft de l'œuf du breeze, de l'embourbé (bogged) et du tatou</li>
            <li>Ajout des armors trims tourbillon et des boulons au Customer</li>
            <li>Ajout d'un brouillard dans l'élixir de vie et dans l'eau empoisonnée</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>Modification de la potion de l'être suprême (potion of blueness of the supreme being) pour avoir les nouveaux effets de la 1.21.1</li>
            <li>La porte en verre ignore désormais les pistons</li>
            <li>Réduction des prix du Customer pour être plus raisonnable</li>
            <li>Augmentation de l'xp donné lors d'un échange avec le Customer</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Add:</b>
          <ul>
            <li>Support for Minecraft 1.21.1</li>
            <li>Added crafting for the breeze egg, the bogged egg, and the armadillo egg</li>
            <li>Added armor trims whirlwind and bolts to the Customer</li>
            <li>Added fog in the elixir of life and in the poisoned water</li>
          </ul>`,
          `<b class="patch-fix">Fix:</b>
          <ul>
            <li>Modified the potion of the supreme being to have the new effects of 1.21.1</li>
            <li>The glass door now ignores pistons</li>
            <li>Reduced the prices of the Customer to be more reasonable</li>
            <li>Increased the XP given when trading with the Customer</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.16.0',
      date: '2024-12-20',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout d'un nouveau type de bois le "Opaline"</li>
            <li>Ajout du craft de l'œufs du creeper curuléen et du ondegel</li>
            <li>Ajout d'un craft pour l'éponge</li>
            <li>Ajout de l'armure hazmat</li>
            <li>(expérimentale) lorsque vous êtes proche du bloc de minerai d'uranium sans l'armure hazmat vous prenez des dégats</li>
            <li>Ajouts de 4 blocs de brique de glace et ces dérivées</li>
            <li>Ajout de la potion qui permet d'avoir le succès "Mélanges dangereux" avec une poudre du creeper céruléen</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>Correction d'une erreur de traduction sur l'épée en multicolor</li>
            <li>Refonte des textures de tout le pack d'armure en red</li>
            <li>Refonte des textures de tout le pack d'armure en paladium</li>
            <li>Le bloc de multicolor ne fait désormais plus de lumière</li>
            <li>Changement de texture du lingot de dioptasium</li>
            <li>Changement de la langue sur l'œil de révélation et de la perle ténébreuse</li>
            <li>Changement au niveau du ondegel : 
              <ol>
                <li>Réduction de sa vitesse : 0,3 → 0,25</li>
                <li>Réduction de la plage de suivi : 16 → 8</li>
                <li>Réduction de la force d'attaque : 7 → 4</li>
              </ol>
            </li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Add:</b>
          <ul>
            <li>Added a new type of wood "Opaline"</li>
            <li>Added the craft of the eggs of the cerulean creeper and the Wavegel</li>
            <li>Added a craft for the sponge</li>
            <li>Added the hazmat armor</li>
            <li>(experimental) when you are close to the uranium ore block without the hazmat armor you take damage</li>
            <li>Added 4 blocks of ice brick and their derivatives</li>
            <li>Added the potion that allows you to have the achievement "Dangerous Mixes" with a powder of the cerulean creeper</li>
          </ul>`,
          `<b class="patch-fix">Correction:</b>
          <ul>
            <li>Correction of a translation error on the sword in multicolor</li>
            <li>Redesign of the textures of the whole armor pack in red</li>
            <li>Redesign of the textures of the whole armor pack in paladium</li>
            <li>The multicolor block no longer emits light</li>
            <li>Texture change of the dioptasium ingot</li>
            <li>Change of the language on the eye of revelation and the dark pearl</li>
            <li>Change on the Wavegel:
              <ol>
                <li>Reduction of its speed: 0.3 → 0.25</li>
                <li>Reduction of the tracking range: 16 → 8</li>
                <li>Reduction of the attack strength: 7 → 4</li>
              </ol>
            </li>
          </ul>`
        ]
      }
    },
    {
      version: '1.5.0',
      date: '2024-09-27',
      loader: 'NeoForge',
      mcVersion: '1.20.6',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout de l'œil de révelation - Stack par 6</li>
            <li>Ajout de la perle ténébreuse - Stack par 12</li>
            <li>Ajout de la roche volcanique (se craft avec bloc de magma et de la glace) et apparait dans le nether également</li>
            <li>Ajout du creeper céruléen ( apparait dans les plaines et les différentes forêts )</li>
            <li>Ajout du baton de creeper céruléen et de la poudre de creeper ceruléen</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>suppression du slot de collier supplémentaire</li>
            <li>Changement léger de la texture du bloc de multicolor</li>
            <li>Changement de la texture du lingot de dioptasium</li>
            <li>Changement de texture pour la boule anti dégats</li>
            <li>Les noyés ne drop désormais plus de aquatique slime</li>
            <li>Les Wavegel (ondegel) n'apparaisent plus dans le nether</li>
            <li>Reduction des dégats infligés par le Wavegel (ondegel) passant de 13 à 7</li>
            <li>Changement du nom en jeu pour l'anglais sur le disque "Sunchine voyage"</li>
            <li>Changement de la description et du nom en jeu pour le Français</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Add:</b>
          <ul>
            <li>Added the eye of revelation - Stack by 6</li>
            <li>Added the dark pearl - Stack by 12</li>
            <li>Added the volcanic rock (craft with magma block and ice) and also appears in the nether also</li>
            <li>Added the cerulean creeper (appears in plains and different forests)</li>
            <li>Added the cerulean creeper stick and the cerulean creeper powder</li>
          </ul>`,
          `<b class="patch-fix">Correction:</b>
          <ul>
            <li>Removed the additional collar slot</li>
            <li>Minor texture change for the multicolor block</li>
            <li>Texture change for the dioptasium ingot</li>
            <li>Texture change for the damage prevention orb</li>
            <li>Drowned no longer drop aquatic slime</li>
            <li>Wavegel (ondegel) no longer appears in the nether</li>
            <li>Reduced damage dealt by Wavegel (ondegel) from 13 to 7</li>
            <li>Changed in-game name for English on the "Sunshine Voyage" disc</li>
            <li>Changed description and in-game name for French</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.15.0',
      date: '2024-09-27',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout de l'œil de révelation - Stack par 6</li>
            <li>Ajout de la perle ténébreuse - Stack par 12</li>
            <li>Ajout de la roche volcanique (se craft avec bloc de magma et de la glace) et apparait dans le nether également</li>
            <li>Ajout du creeper céruléen ( apparait dans les plaines et les différentes forêts )</li>
            <li>Ajout du baton de creeper céruléen et de la poudre de creeper ceruléen</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>suppression du slot de collier supplémentaire</li>
            <li>Changement léger de la texture du bloc de multicolor</li>
            <li>Changement de la texture du lingot de dioptasium</li>
            <li>Changement de texture pour la boule anti dégats</li>
            <li>Les noyés ne drop désormais plus de aquatique slime</li>
            <li>Les Wavegel (ondegel) n'apparaisent plus dans le nether</li>
            <li>Reduction des dégats infligés par le Wavegel (ondegel) passant de 13 à 7</li>
            <li>Changement du nom en jeu pour l'anglais sur le disque "Sunchine voyage"</li>
            <li>Changement de la description et du nom en jeu pour le Français</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Add:</b>
          <ul>
            <li>Added the eye of revelation - Stack by 6</li>
            <li>Added the dark pearl - Stack by 12</li>
            <li>Added the volcanic rock (craft with magma block and ice) and also appears in the nether also</li>
            <li>Added the cerulean creeper (appears in plains and different forests)</li>
            <li>Added the cerulean creeper stick and the cerulean creeper powder</li>
          </ul>`,
          `<b class="patch-fix">Correction:</b>
          <ul>
            <li>Removed the additional collar slot</li>
            <li>Minor texture change for the multicolor block</li>
            <li>Texture change for the dioptasium ingot</li>
            <li>Texture change for the damage prevention orb</li>
            <li>Drowned no longer drop aquatic slime</li>
            <li>Wavegel (ondegel) no longer appears in the nether</li>
            <li>Reduced damage dealt by Wavegel (ondegel) from 13 to 7</li>
            <li>Changed in-game name for English on the "Sunshine Voyage" disc</li>
            <li>Changed description and in-game name for French</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.14.0',
      date: '2024-09-11',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout des colliers de régénération, vision nocturne et fire resistance et une base de collier (à mettre dans le slot collier)</li>
            <li>Ajout du ondegel (Wavegel)</li>
            <li>Ajout d'un craft pour les fioles de fire resistance avec le colorant de feu</li>
            <li>ajout de la possibilité d'utiliser les minerais de mod avec les trim de Minecraft (paladium, red, amazonite, dioptasium, chrome, fluorite, xenite, igniera)</li>
            <li>Ajout du lingot de xenite et de la recette</li>
            <li>Ajout d'un slot supplémentaire de collier si curios est installé</li>
            <li>Ajout d'un craft pour le totem d'immortalité</li>
            <li>Ajout d'une recette pour chaque froglight</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>Mise à jour de la texture du minerai de paladium</li>
            <li>Modification du nom de la space armor trim en space armor upgrade</li>
            <li>Le block de xenite se craft désormais avec des lingot de xenite</li>
            <li>Modification des valeurs d'attaque des outils en amazonite</li>
            <li>L'aquatic slime ne drop désormais plus dans le sable, elle drop désormais sur les ondegel (Wavegel)</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Add:</b>
          <ul>
            <li>Added the regeneration, night vision and fire resistance necklaces and a necklace base (to be placed in the necklace slot)</li>
            <li>Added the Wavegel</li>
            <li>Added a craft for fire resistance bottles with the fire dye</li>
            <li>Added the possibility to use mod ores with Minecraft trims (paladium, red, amazonite, dioptasium, chrome, fluorite, xenite, igniera)</li>
            <li>Added the xenite ingot and the recipe</li>
            <li>Added an additional necklace slot if curios is installed</li>
            <li>Added a craft for the totem of immortality</li>
            <li>Added a recipe for each froglight</li>
          </ul>`,
          `<b class="patch-fix">Correction:</b>
          <ul>
            <li>Updated the texture of the paladium ore</li>
            <li>Renamed the space armor trim to space armor upgrade</li>
            <li>The xenite block now crafts with xenite ingots</li>
            <li>Modified the attack values of tools made from amazonite</li>
            <li>The aquatic slime no longer drops in sand, it now drops on Wavegel</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.4.0',
      date: '2024-09-11',
      loader: 'Forge, NeoForge',
      mcVersion: '1.20.6',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout des colliers de régénération, vision nocturne et fire resistance et une base de collier (à mettre dans le slot collier)</li>
            <li>Ajout du ondegel (Wavegel)</li>
            <li>Ajout d'un craft pour les fioles de fire resistance avec le colorant de feu</li>
            <li>ajout de la possibilité d'utiliser les minerais de mod avec les trim de Minecraft (paladium, red, amazonite, dioptasium, chrome, fluorite, xenite, igniera)</li>
            <li>Ajout du lingot de xenite et de la recette</li>
            <li>Ajout d'un slot supplémentaire de collier si curios est installé</li>
            <li>Ajout d'un craft pour le totem d'immortalité</li>
            <li>Ajout d'une recette pour chaque froglight</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>Mise à jour de la texture du minerai de paladium</li>
            <li>Modification du nom de la space armor trim en space armor upgrade</li>
            <li>Le block de xenite se craft désormais avec des lingot de xenite</li>
            <li>Modification des valeurs d'attaque des outils en amazonite</li>
            <li>L'aquatic slime ne drop désormais plus dans le sable, elle drop désormais sur les ondegel (Wavegel)</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Add:</b>
          <ul>
            <li>Added the regeneration, night vision and fire resistance necklaces and a necklace base (to be placed in the necklace slot)</li>
            <li>Added the Wavegel</li>
            <li>Added a craft for fire resistance bottles with the fire dye</li>
            <li>Added the possibility to use mod ores with Minecraft trims (paladium, red, amazonite, dioptasium, chrome, fluorite, xenite, igniera)</li>
            <li>Added the xenite ingot and the recipe</li>
            <li>Added an additional necklace slot if curios is installed</li>
            <li>Added a craft for the totem of immortality</li>
            <li>Added a recipe for each froglight</li>
          </ul>`,
          `<b class="patch-fix">Correction:</b>
          <ul>
            <li>Updated the texture of the paladium ore</li>
            <li>Renamed the space armor trim to space armor upgrade</li>
            <li>The xenite block now crafts with xenite ingots</li>
            <li>Modified the attack values of tools made from amazonite</li>
            <li>The aquatic slime no longer drops in sand, it now drops on Wavegel</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.3.1',
      date: '2024-08-26',
      loader: 'Forge, NeoForge',
      mcVersion: '1.20.6',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>Correction de certaine traduction qui n'était pas présente en Français</li>
            <li>Texture du disque "Sweden" modifié</li>
            <li>Le sable noir se génère désormais naturellement entre la couche 0 et -64</li>
            <li>Modification du craft du purifier</li>
            <li>Suppression des biomes de restrictions pour le spawn du minerai d'amazonite</li>
            <li>Les efficacités des pioches en paladium, red, multicolor, amazonite, dioptasium ont été modifié passant de :
              <ol>
                <li>Paladium : 8 → 8 ( Aucun changement )</li>
                <li>Red : 8 → 9 ( Augmentation )</li>
                <li>Multicolor : 20 → 20 ( Aucun changement )</li>
                <li>Amazonite : 7 → 12 ( Augmentation )</li>
                <li>Dioptasium : 6 → 16 ( Augmentation )</li>
              </ol>
            </li>
            <li>La durabilité des outils ( hors Hammer ) ont été revus :
              <ol>
                <li>Paladium : 1200 → 900 ( Réduction )</li>
                <li>Red : 1800 → 1200 ( Réduction )</li>
                <li>Multicolor : 3000 → 3000 ( Aucun changement )</li>
                <li>Amazonite : 1400 → 1800 ( Augmentation )</li>
                <li>Dioptasium : 1700 → 2400 ( Augmentation )</li>
              </ol>
            </li>
          </ul>`
        ],
        en: [
          `<b class="patch-fix">Correction:</b>
          <ul>
            <li>Correction of certain translations that were not present in French</li>
            <li>Texture of the "Sweden" disk modified</li>
            <li>Black sand now generates naturally between layer 0 and -64</li>
            <li>Modification of the purifier craft</li>
            <li>Removal of biome restrictions for the spawn of amazonite ore</li>
            <li>The efficiencies of the pickaxes in paladium, red, multicolor, amazonite, dioptasium have been modified from:
              <ol>
                <li>Paladium: 8 → 8 (No change)</li>
                <li>Red: 8 → 9 (Increase)</li>
                <li>Multicolor: 20 → 20 (No change)</li>
                <li>Amazonite: 7 → 12 (Increase)</li>
                <li>Dioptasium: 6 → 16 (Increase)</li>
              </ol>
            </li>
            <li>The durability of the tools (except Hammer) have been reviewed:
              <ol>
                <li>Paladium: 1200 → 900 (Reduction)</li>
                <li>Red: 1800 → 1200 (Reduction)</li>
                <li>Multicolor: 3000 → 3000 (No change)</li>
                <li>Amazonite: 1400 → 1800 (Increase)</li>
                <li>Dioptasium: 1700 → 2400 (Increase)</li>
              </ol>
            </li>
          </ul>`
        ]
      }
    },
    {
      version: '1.13.1',
      date: '2024-08-26',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>Correction de certaine traduction qui n'était pas présente en Français</li>
            <li>Texture du disque "Sweden" modifié</li>
            <li>Le sable noir se génère désormais naturellement entre la couche 0 et -64</li>
            <li>Modification du craft du purifier</li>
            <li>Suppression des biomes de restrictions pour le spawn du minerai d'amazonite</li>
            <li>Les efficacités des pioches en paladium, red, multicolor, amazonite, dioptasium ont été modifié passant de :
              <ol>
                <li>Paladium : 8 → 8 ( Aucun changement )</li>
                <li>Red : 8 → 9 ( Augmentation )</li>
                <li>Multicolor : 20 → 20 ( Aucun changement )</li>
                <li>Amazonite : 7 → 12 ( Augmentation )</li>
                <li>Dioptasium : 6 → 16 ( Augmentation )</li>
              </ol>
            </li>
            <li>La durabilité des outils ( hors Hammer ) ont été revus :
              <ol>
                <li>Paladium : 1200 → 900 ( Réduction )</li>
                <li>Red : 1800 → 1200 ( Réduction )</li>
                <li>Multicolor : 3000 → 3000 ( Aucun changement )</li>
                <li>Amazonite : 1400 → 1800 ( Augmentation )</li>
                <li>Dioptasium : 1700 → 2400 ( Augmentation )</li>
              </ol>
            </li>
          </ul>`
        ],
        en: [
          `<b class="patch-fix">Correction:</b>
          <ul>
            <li>Correction of certain translations that were not present in French</li>
            <li>Texture of the "Sweden" disk modified</li>
            <li>Black sand now generates naturally between layer 0 and -64</li>
            <li>Modification of the purifier craft</li>
            <li>Removal of biome restrictions for the spawn of amazonite ore</li>
            <li>The efficiencies of the pickaxes in paladium, red, multicolor, amazonite, dioptasium have been modified from:
              <ol>
                <li>Paladium: 8 → 8 (No change)</li>
                <li>Red: 8 → 9 (Increase)</li>
                <li>Multicolor: 20 → 20 (No change)</li>
                <li>Amazonite: 7 → 12 (Increase)</li>
                <li>Dioptasium: 6 → 16 (Increase)</li>
              </ol>
            </li>
            <li>The durability of the tools (except Hammer) have been reviewed:
              <ol>
                <li>Paladium: 1200 → 900 (Reduction)</li>
                <li>Red: 1800 → 1200 (Reduction)</li>
                <li>Multicolor: 3000 → 3000 (No change)</li>
                <li>Amazonite: 1400 → 1800 (Increase)</li>
                <li>Dioptasium: 1700 → 2400 (Increase)</li>
              </ol>
            </li>
          </ul>`
        ]
      }
    },
    {
      version: '1.3.0',
      date: '2024-08-23',
      loader: 'Forge, NeoForge',
      mcVersion: '1.20.6',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout du craft du mob spawner</li>
            <li>Ajout de la recette de chaque œuf de spawn
              <ol>
                <li>Sauf pour le sniffer, la poule chevauché, le cavalier squelette, l'araignée chevauchée, la vex, le zoglin, le breeze, l'embourbé</li>
              </ol>
            </li>
            <li>Ajout du disque de musique avec la musique de C418 sweden</li>
            <li>Ajout d'un nouveau boss "Extermate" ( warden ) et d'un avancement</li>
            <li>Ajout également de la structure pour aller battre le boss extermate dans le biome sakura, Crimson, warped et soul sand valley</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>Ajout de l'effet regeneration, instant health, resistance, et health boost lorsque la pomme multicolor est utilisé</li>
            <li>Diminution des loot des agricultures (nether star et netherite)</li>
            <li>Mise à jour des traduction françaises</li>
            <li>Mise à jour de la traduction du liquide "elixir of life" en français</li>
            <li>Ajout d'un affichage du prix pour modifier le temps et la météo dans le chrononimbus</li>
            <li>Ajout d'un son lorsque l'armure en amazonite et space est équipée</li>
            <li>Modification du son lorsque l'armure est équipée
              <ol>
                <li>Paladium → son de fer au lieu du diamant</li>
                <li>Red → son de l'or au lieu du diamant</li>
                <li>Dioptasium → son de netherite au lieu du diamant</li>
              </ol>
            </li>
            <li>Modification de la texture de l'armure en amazonite</li>
            <li>Modification de la texture du lingot et du bloc en chrome</li>
            <li>Modification de la durablité des outils passant de 700 à 1700 et de 1000 à 1400 pour le Hammer en dioptasium</li>
            <li>Modification de la texture du lingot et du bloc de chrome</li>
            <li>Modification de la durabilité de l'armure en amazonite, en dioptasium, en multicolor, et en space
              <ol>
                <li>Amazonite : 30 → 100</li>
                <li>Dioptasium : 15 → 150</li>
                <li>Multicolor : 100 → 187</li>
                <li>Space : 25 → 34</li>
              </ol>
            </li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition:</b>
          <ul>
            <li>Added the mob spawner recipe</li>
            <li>Added the recipe for each spawn egg
              <ol>
                <li>Except for the sniffer, the ridden chicken, the skeleton rider, the ridden spider, the vex, the zoglin, the breeze, the swamped</li>
              </ol>
            </li>
            <li>Added the music disc with the music of C418 sweden</li>
            <li>Added a new boss "Extermate" (warden) and an advancement</li>
            <li>Added also the structure to go fight the extermate boss in the sakura, crimson, warped and soul sand valley biomes</li>
          </ul>`,
          `<b class="patch-fix">Correction:</b>
          <ul>
            <li>Added the regeneration, instant health, resistance, and health boost effect when the multicolor apple is used</li>
            <li>Decreased the loot of the agricultures (nether star and netherite)</li>
            <li>Updated the french translations</li>
            <li>Updated the translation of the "elixir of life" liquid in french</li>
            <li>Added a display of the price to change the time and weather in the chrononimbus</li>
            <li>Added a sound when the armor in amazonite and space is equipped</li>
            <li>Modification of the sound when the armor is equipped
              <ol>
                <li>Paladium → iron sound instead of diamond</li>
                <li>Red → gold sound instead of diamond</li>
                <li>Dioptasium → netherite sound instead of diamond</li>
              </ol>
            </li>
            <li>Modification of the texture of the armor in amazonite</li>
            <li>Modification of the texture of the ingot and block in chrome</li>
            <li>Modification of the durability of the tools from 700 to 1700 and from 1000 to 1400 for the Hammer in dioptasium</li>
            <li>Modification of the texture of the ingot and block of chrome</li>
            <li>Modification of the durability of the armor in amazonite, dioptasium, multicolor, and space
              <ol>
                <li>Amazonite : 30 → 100</li>
                <li>Dioptasium : 15 → 150</li>
                <li>Multicolor : 100 → 187</li>
                <li>Space : 25 → 34</li>
              </ol>
            </li>
          </ul>`
        ]
      }
    },
    {
      version: '1.13.0',
      date: '2024-08-23',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout du craft du mob spawner</li>
            <li>Ajout de la recette de chaque œuf de spawn
              <ol>
                <li>Sauf pour le sniffer, la poule chevauché, le cavalier squelette, l'araignée chevauchée, la vex, le zoglin, le breeze, l'embourbé</li>
              </ol>
            </li>
            <li>Ajout du disque de musique avec la musique de C418 sweden</li>
            <li>Ajout d'un nouveau boss "Extermate" ( warden ) et d'un avancement</li>
            <li>Ajout également de la structure pour aller battre le boss extermate dans le biome sakura, Crimson, warped et soul sand valley</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>Ajout de l'effet regeneration, instant health, resistance, et health boost lorsque la pomme multicolor est utilisé</li>
            <li>Diminution des loot des agricultures (nether star et netherite)</li>
            <li>Mise à jour des traduction françaises</li>
            <li>Mise à jour de la traduction du liquide "elixir of life" en français</li>
            <li>Ajout d'un affichage du prix pour modifier le temps et la météo dans le chrononimbus</li>
            <li>Ajout d'un son lorsque l'armure en amazonite et space est équipée</li>
            <li>Modification du son lorsque l'armure est équipée
              <ol>
                <li>Paladium → son de fer au lieu du diamant</li>
                <li>Red → son de l'or au lieu du diamant</li>
                <li>Dioptasium → son de netherite au lieu du diamant</li>
              </ol>
            </li>
            <li>Modification de la texture de l'armure en amazonite</li>
            <li>Modification de la texture du lingot et du bloc en chrome</li>
            <li>Modification de la durablité des outils passant de 700 à 1700 et de 1000 à 1400 pour le Hammer en dioptasium</li>
            <li>Modification de la texture du lingot et du bloc de chrome</li>
            <li>Modification de la durabilité de l'armure en amazonite, en dioptasium, en multicolor, et en space
              <ol>
                <li>Amazonite : 30 → 100</li>
                <li>Dioptasium : 15 → 150</li>
                <li>Multicolor : 100 → 187</li>
                <li>Space : 25 → 34</li>
              </ol>
            </li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition:</b>
          <ul>
            <li>Added the mob spawner recipe</li>
            <li>Added the recipe for each spawn egg
              <ol>
                <li>Except for the sniffer, the ridden chicken, the skeleton rider, the ridden spider, the vex, the zoglin, the breeze, the swamped</li>
              </ol>
            </li>
            <li>Added the music disc with the music of C418 sweden</li>
            <li>Added a new boss "Extermate" (warden) and an advancement</li>
            <li>Added also the structure to go fight the extermate boss in the sakura, crimson, warped and soul sand valley biomes</li>
          </ul>`,
          `<b class="patch-fix">Correction:</b>
          <ul>
            <li>Added the regeneration, instant health, resistance, and health boost effect when the multicolor apple is used</li>
            <li>Decreased the loot of the agricultures (nether star and netherite)</li>
            <li>Updated the french translations</li>
            <li>Updated the translation of the "elixir of life" liquid in french</li>
            <li>Added a display of the price to change the time and weather in the chrononimbus</li>
            <li>Added a sound when the armor in amazonite and space is equipped</li>
            <li>Modification of the sound when the armor is equipped
              <ol>
                <li>Paladium → iron sound instead of diamond</li>
                <li>Red → gold sound instead of diamond</li>
                <li>Dioptasium → netherite sound instead of diamond</li>
              </ol>
            </li>
            <li>Modification of the texture of the armor in amazonite</li>
            <li>Modification of the texture of the ingot and block in chrome</li>
            <li>Modification of the durability of the tools from 700 to 1700 and from 1000 to 1400 for the Hammer in dioptasium</li>
            <li>Modification of the texture of the ingot and block of chrome</li>
            <li>Modification of the durability of the armor in amazonite, dioptasium, multicolor, and space
              <ol>
                <li>Amazonite : 30 → 100</li>
                <li>Dioptasium : 15 → 150</li>
                <li>Multicolor : 100 → 187</li>
                <li>Space : 25 → 34</li>
              </ol>
            </li>
          </ul>`
        ]
      }
    },
    {
      version: '1.2.0',
      date: '2024-08-17',
      loader: 'Forge, NeoForge',
      mcVersion: '1.20.6',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout des 9 autres arbres</li>
            <li>Ajout des pousses dans le forestier ( metier de villageois forestier)
              <ol>
                <li>Des pousses sont aux niveaux master comme la pousse de sakura, d'enderwood, de silverwood, de prismwood, de phylotas s'échangent avec des lingot d'igniera</li>
              </ol>
            </li>
            <li>Ajout du craft de sable  avec 4 grain de sable et du carft du gravier avec 4 poudre a canon</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>Ajout de la traduction du minerai igniera</li>
            <li>La pomme red drop désormais sur les feuilles de redwood</li>
            <li>refonte de la texture du lingot red</li>
            <li>refonte de la texture du bois redwood</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition:</b>
          <ul>
            <li>Added the 9 other trees</li>
            <li>Added saplings in the forestry (villager profession: forester)
              <ol>
                <li>Saplings are at master levels like the sakura sapling, enderwood, silverwood, prismwood, phylotas saplings exchangeable with igniera ingots</li>
              </ol>
            </li>
            <li>Added crafting of sand with 4 sand grains and crafting of gravel with 4 gunpowder</li>
          </ul>`,
          `<b class="patch-fix">Correction:</b>
          <ul>
            <li>Added translation of the igniera ore</li>
            <li>The red apple now drops on redwood leaves</li>
            <li>Redesign of the texture of the red ingot</li>
            <li>Redesign of the texture of the redwood wood</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.12.0',
      date: '2024-08-17',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout des 9 autres arbres</li>
            <li>Ajout des pousses dans le forestier ( metier de villageois forestier)
              <ol>
                <li>Des pousses sont aux niveaux master comme la pousse de sakura, d'enderwood, de silverwood, de prismwood, de phylotas s'échangent avec des lingot d'igniera</li>
              </ol>
            </li>
            <li>Ajout du craft de sable  avec 4 grain de sable et du carft du gravier avec 4 poudre a canon</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>Ajout de la traduction du minerai igniera</li>
            <li>La pomme red drop désormais sur les feuilles de redwood</li>
            <li>refonte de la texture du lingot red</li>
            <li>refonte de la texture du bois redwood</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition:</b>
          <ul>
            <li>Added the 9 other trees</li>
            <li>Added saplings in the forestry (villager profession: forester)
              <ol>
                <li>Saplings are at master levels like the sakura sapling, enderwood, silverwood, prismwood, phylotas saplings exchangeable with igniera ingots</li>
              </ol>
            </li>
            <li>Added crafting of sand with 4 sand grains and crafting of gravel with 4 gunpowder</li>
          </ul>`,
          `<b class="patch-fix">Correction:</b>
          <ul>
            <li>Added translation of the igniera ore</li>
            <li>The red apple now drops on redwood leaves</li>
            <li>Redesign of the texture of the red ingot</li>
            <li>Redesign of the texture of the redwood wood</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.1.0',
      date: '2024-08-12',
      loader: 'Forge, NeoForge',
      mcVersion: '1.20.6',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Nouveau type d'arbres : Sakura avec son arbre et la pousse pour le faire grandir</li>
            <li>Nouveau biome : Forêt de sakura</li>
            <li>Ajout du lac d'elixir de vie dans le biome de sakura dans le nether souvent caché</li>
            <li>Nouveau bloc de barrier en fer et porte en verre</li>
            <li>Nouveau minerai : igniera ( aucune utilisation pour le moment, c'est pour bientôt)</li>
            <li>Ajout du craft du cobweb avec 5 ficelle</li>
            <li>Ajout d'une recette de la deepslate à partir de cobbled deepslate dans le haut fourneau (Blast furnace)</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>Refonte de la texture du lingot et du bloc red</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition:</b>
          <ul>
            <li>New tree type: Sakura with its tree and the sapling to grow it</li>
            <li>New biome: Sakura Forest</li>
            <li>Added the Life Elixir Lake in the Sakura biome in the Nether, often hidden</li>
            <li>New iron barrier block and glass door</li>
            <li>New ore: Igniera (no use for now, coming soon)</li>
            <li>Added crafting of cobweb with 5 string</li>
            <li>Added a recipe for deepslate from cobbled deepslate in the blast furnace</li>
          </ul>`,
          `<b class="patch-fix">Correction:</b>
          <ul>
            <li>Redesign of the texture of the red ingot and block</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.11.0',
      date: '2024-08-12',
      loader: 'Forge, NeoForge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Nouveau type d'arbres : Sakura avec son arbre et la pousse pour le faire grandir</li>
            <li>Nouveau biome : Forêt de sakura</li>
            <li>Ajout du lac d'elixir de vie dans le biome de sakura dans le nether souvent caché</li>
            <li>Nouveau bloc de barrier en fer et porte en verre</li>
            <li>Nouveau minerai : igniera ( aucune utilisation pour le moment, c'est pour bientôt)</li>
            <li>Ajout du craft du cobweb avec 5 ficelle</li>
            <li>Ajout d'une recette de la deepslate à partir de cobbled deepslate dans le haut fourneau (Blast furnace)</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>Refonte de la texture du lingot et du bloc red</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition:</b>
          <ul>
            <li>New tree type: Sakura with its tree and the sapling to grow it</li>
            <li>New biome: Sakura Forest</li>
            <li>Added the Life Elixir Lake in the Sakura biome in the Nether, often hidden</li>
            <li>New iron barrier block and glass door</li>
            <li>New ore: Igniera (no use for now, coming soon)</li>
            <li>Added crafting of cobweb with 5 string</li>
            <li>Added a recipe for deepslate from cobbled deepslate in the blast furnace</li>
          </ul>`,
          `<b class="patch-fix">Correction:</b>
          <ul>
            <li>Redesign of the texture of the red ingot and block</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.0.0',
      date: '2024-08-06',
      loader: 'Forge, NeoForge',
      mcVersion: '1.20.6',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout du support de la 1.20.6</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition:</b>
          <ul>
            <li>Added support for version 1.20.6</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.0.0',
      date: '2024-06-18',
      loader: 'Forge, NeoForge',
      mcVersion: '1.20.4',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout du support de la 1.20.4</li>
          </ul>`,
          `<b class="patch-warn">Important :</b>
          <ul>
            <li>Il n'y a pas de différence majeure entre forge et neoforge, les deux modloaders sont compatibles entre eux</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition:</b>
          <ul>
            <li>Added support for version 1.20.4</li>
          </ul>`,
          `<b class="patch-warn">Important:</b>
          <ul>
            <li>There is no major difference between forge and neoforge, the two modloaders are compatible with each other</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.10.0',
      date: '2024-06-15',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout de la noix de coco
              <ol>
                <li>Obtenable dans les feuilles de palmier</li>
              </ol>
            </li>
            <li>Ajout de la demi noix de coco</li>
            <li>Ajout du lait de coco</li>
            <li>Ajout d'un couteau de cuisine</li>
            <li>Ajout d'une lumière spectrale</li>
            <li>Ajout de 3 blocs venant d'un autre mod «Blockus» par brandcraft sur fabric ( avec credit sur le bloc )</li>
            <li>Ajout d'un nouveau liquide «L''elixir de vie»</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>Correction des traduction de l'ancienne versions</li>
            <li>Changement de nom pour la version française de la fleur d'eau en Aqualo, de la fleur du ciel en Cielyna et de la fleur de lumière en Lumieros</li>
            <li>Correction de la traduction du sel en francais qui affichait «Salt»</li>
            <li>Diminution des drops lâchés lorsque qu'un bloc de palmier est cassé</li>
            <li>Changement léger de la texture de la bûche de bois prismatique</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition:</b>
          <ul>
            <li> Added the coconut
              <ol>
                <li>Obtainable in palm leaves</li>
              </ol>
            </li>
            <li>Added the half coconut</li>
            <li>Added the coconut milk</li>
            <li>Added a kitchen knife</li>
            <li>Added a spectral light</li>
            <li>Added 3 blocks from another mod "Blockus" by brandcraft on fabric (with credit on the block)</li>
            <li>Added a new liquid "Elixir of Life"</li>
          </ul>`,
          `<b class="patch-fix">Correction:</b>
          <ul>
            <li>Correction of the translations of the old versions</li>
            <li>Change the name for the french version of the water flower to Aqualo, the sky flower to Cielyna and the light flower to Lumieros</li>
            <li>Correction of the translation of salt in french which displayed "Salt"</li>
            <li>Diminished drops thrown when a palm tree block is broken</li>
            <li>Change a little the texture of the wooden bucket prismatique</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.9.2',
      date: '2024-06-08',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout du craft de chaque armure de cheval (or,diamant, fer et cuir )</li>
            <li>Ajout du craft de la ficelle a partir de toile d'araignée</li>
            <li>Ajout du craft du colorant vert dans le founeau</li>
            <li>Ajout de la fleur «lightos» et du colorant désormais craftable</li>
            <li>Ajout du craft de la glowstone avec 2 grain de sable et 2 colorant de lumières</li>
            <li>Ajout de 16 couleur de lampe à partir du block de Minecraft [ bulb ]</li>
            <li>Ajout de nombreux avancements</li>
            <li>Ajout d'un avancements pour rejoindre notre serveur discord</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>changement léger de la texture du hammer en dioptasium</li>
            <li>Changement également de la texture du block de chrome</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition:</b>
          <ul>
            <li>Added the craft of each horse armor (gold, diamond, iron and leather)</li><li>Added the craft of the thread from spider silk</li>
            <li>Added the craft of the green dye in the furnace</li>
            <li>Added the "lightos" flower and the dye now craftable</li>
            <li>Added the craft of glowstone with 2 sand grains and 2 light dyes</li>
            <li>Added 16 color of lamp from the Minecraft block [ bulb ]</li>
            <li>Added many advancements</li>
            <li>Added an advancement to join our discord server</li>
          </ul>`,
          `<b class="patch-fix">Correction:</b>
          <ul>
            <li>Changed the texture of the hammer in dioptasium</li>
            <li>Changed also the texture of the chrome block</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.9.1',
      date: '2024-05-20',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>la graine de fleur de netherite et de netherstar peut désormais être composté avec une chance de 85%</li>
            <li>La graine de blé marine peut également être composté avec une chance de 50%</li>
          </ul>`,
          `<b class="patch-fix">Correction :</b>
          <ul>
            <li>Changement de la texture du lingot de fluorite et du block</li>
            <li>Reduction des drops de poudre de netherite et de la graine</li>
            <li>La graine de netherite et la poudre de netherite ne sont plus affecté par l'enchantement fortune</li>
            <li>Changement de la texture de l'épée et de la hache red</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition:</b>
          <ul>
            <li>The netherite flower and netherstar seed can now be composted with an 85% chance</li>
            <li>The sea wheat seed can also be composted with a 50% chance</li>
          </ul>`,
          `<b class="patch-fix">Correction:</b>
          <ul>
            <li>Changed the texture of the fluorite ingot and block</li>
            <li>Reduced the drops of netherite powder and seed</li>
            <li>The netherite seed and powder are no longer affected by the Fortune enchantment</li>
            <li>Changed the texture of the red sword and axe</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.9.0',
      date: '2024-05-17',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout du grain de sable</li>
            <li>Ajout du forge élément</li>
            <li>Ajout des craft de chaque model d'armure ( armor trims)</li>
            <li>Ajout du craft du gilded blackstone</li>
            <li>Ajout d'une nouvelle culture « graine de netherite » craftable dans le feu de camp avec une fire flower ou une graine de torche-fleur entouré de netherrack</li>
            <li>Ajout de la poudre de netherite permet de crafter avec 9 poudre un fragment de netherite</li>
            <li>Ajout de la boule de slime aquatique obtenable sur les noyé ( drowned )</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Changement de la texture du lingot en paladium et de la pioche</li>
            <li>Changement de la texture du sable orange ( moins agressif )</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition :</b>
          <ul>
            <li>Added the sand grain</li>
            <li>Added the forge element</li>
            <li>Added the crafts for each armor trim</li>
            <li>Added the craft of gilded blackstone</li>
            <li>Added a new crop "netherite seed" craftable in the campfire with a fire flower or a torch-flower seed surrounded by netherrack</li>
            <li>Added netherite powder that can be crafted with 9 powder to make a netherite fragment</li>
            <li>Added the aquatic slime ball obtainable on drowned</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Changed the texture of the paladium ingot and pickaxe</li>
            <li>Changed the texture of the orange sand (less aggressive)</li>
          </ul>`
        ]
      }
    },
    {
      version : '1.8.0',
      date: '2024-05-02',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
          <li>Ajout d'un nouveau type de minerai le "Dioptasium" dont les outils ont un niveau de 4</li>
            <li>Ajout d'un champignon explosif 
              <ol>
                <li>Trouvable dans les forêts, jungles et jungles clairsemée</li>
              </ol>
            </li>
            <li>Ajout d'un nouvel onglet créatif avec tout les minerai et outils</li>
            <li>Ajout d'un nouveau liquide "eau empoisonnée" 
              <ol>
                <li>Trouvable dans les marais et les mangroves</li>
              </ol>
            </li>
            <li>Ajout d'informations sur les minerai, pioche et outil grâce à Jei</li>
            <li>Ajout de l'apparition du champignon fluorescent dans les biomes marais et mangroves en plus des lush caves</li>
            <li>Ajout des escalier, dalle et muret de crystal d'azur et phoriste</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Changement de la texture de l'épée en paladium</li>
            <li>Correction du hammer en amazonite dont lequel il ne minai pas en 3*3 comme les autres hammer</li>
            <li>Correction du hammer en amazonite qui avait un niveau de minage de 3 au lieu de 2</li>
            <li>Ajustement du spawn du champignons fluorescent</li>
            <li>Correction du temps de minage du minerai d'amazonite</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition :</b>
          <ul>
            <li>Added a new type of mineral called "Dioptasium" with tools having a level of 4</li>
            <li>Added an explosive mushroom
              <ol>
                <li>Found in forests, jungles and clear jungles</li>
              </ol>
            </li>
            <li>Added a new creative tab with all the minerals and tools</li>
            <li>Added a new liquid called "poisonous water" 
              <ol>
                <li>Found in swamps and mangroves</li>
              </ol>
            </li>
            <li>Added information on minerals, pickaxe and tool thanks to Jei</li>
            <li>Added the appearance of fluorescent mushroom in swamps and mangroves as well as lush caves</li>
            <li>Added stairs, slabs and wall of crystal azur and phoriste</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Changed the texture of the sword to paladium</li>
            <li>Correction of the hammer in amazonite which did not mine in 3*3 like the other hammers</li>
            <li>Correction of the hammer in amazonite which had a mining level of 3 instead of 2</li>
            <li>Adjustment of the spawn of the fluorescent mushroom</li>
            <li>Correction of the mining time of the amazonite mineral</li>
          </ul>`
        ]
      }
    },
    {
      version : '1.7.1',
      date: '2024-04-21',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout de la fleur de la mer* et du craft pour le colorant de la mer 
              <ol>
                <li>*Fleur obtenable sur la plage</li>
              </ol>
            </li>
            <li>Ajout d'une nouvelle culture de la "nether star flower*" 
              <ol>
                <li>*Culture obtenable a partir d'une graine de torche fleur et d'une nether star</li>
              </ol>
            </li>
            <li>Ajout d'un second craft pour la graine de blé marin* 
              <ol>
                <li>*obtenable à partir d'une graine de blé, de sel, et du colorant de la mer</li>
              </ol>
            </li>
            <li>Ajout de la structure du premier boss Colossum</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Diminution de la protection de l'armure en red</li>
            <li> Ajout de la traduction en francais sur la derniere mise à jour</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition :</b>
          <ul>
            <li>Added a mer flower* and a craft for the mer colorant
              <ol>
                <li>*Mer flower obtainable on the beach</li>
              </ol>
            </li>
            <li>Added a new culture of the "nether star flower*" 
              <ol>
                <li>*Culture obtainable from a torch flower seed and a nether star</li>
              </ol>
            </li>
            <li>Added a second craft for the marin ble seed* 
              <ol> 
                <li>*obtainable from a ble seed, salt, and mer colorant</li>
              </ol>
            </li>
            <li>Added the structure of the first boss Colossum</li>
          </ul>`,
          `<b class="patch-fix">Changes :</b>
          <ul>
            <li>Red armor protection reduced</li>
            <li>Added the last update translation in french</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.7.0',
      date: '2024-04-17',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout du crystal rouge, du bloc de crystal rouge et de l'amas de crystal rouge.
              <ol>
                <li>le crystal rouge peut faire grandir les cultures du mod au niveau maximum et augmenter d'une ou plusieurs étape de culture minecraft</li>
                <li>Se craft pour le bloc avec un bloc d'amethyste et un colorant de feu et pour le crystal rouge il faut un colorant de feu entouré d'éclat d'amethyste</li>
              </ol>
            </li>
            <li>Nouveau bloc de culture : fertile soil</li>
            <li>Ajout du bloc de sel obtenable dans les océans couche 0 à 64</li>
            <li>Ajout du bloc de bouton en roche interstellaire</li>
            <li>Ajout des recettes pour les blocs de mur, dalle, escalirer en roche interstellaire</li>
            <li>Les blocs de minerai peuvent être utilisé pour la base de beacon (Paladium, red, multicolor, carmeltazite, fluorite, chrome, amazonite, xenite,nickel)</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Refonte du systeme pour la blue sea weed qui devient une culture comme le blé la "blue sea wheat"
              <ol>
                <li>La graine peut être obtenu en cuisant de l'herbe marine sur un feu de camp
              </ol>
            </li>
            <li> Les outils en amazonite ont maintenant leurs fonctionnalités respectives</li>
            <li>Chrononimbus peut être utilisé en créatif sans à avoir de la poudre de redstone dans son inventaire</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition :</b>
          <ul>
            <li>Added the red crystal, the red crystal block and the red crystal cluster.
              <ol>
                <li>The red crystal can make the mod's crops grow to the maximum level and increase one or more stages of Minecraft crops</li>
                <li>Crafting for the block with an amethyst block and a fire dye, and for the red crystal, a fire dye surrounded by amethyst shards</li>
              </ol>
            </li>
            <li>New crop block: fertile soil</li>
            <li>New block of salt obtainable in oceans from 0 to 64</li>
            <li>New block of button in interstellar rock</li>
            <li>New recipes for the blocks of wall, floor, stairs in interstellar rock</li>
            <li>The mining blocks can be used to make the base of the beacon (Paladium, red, multicolor, carmeltazite, fluorite, chrome, amazonite, xenite,nickel)</li>
          </ul>`,
          `<b class="patch-fix">Changes :</b>
          <ul>
            <li>Redesign of the system for the blue sea weed which becomes a crop like wheat the "blue sea wheat"
              <ol>
                <li>The seed can be obtained by cooking marine grass on a campfire</li></li>
              </ol>
            </li>
            <li>The tools in amazonite now have their respective functions</li>
            <li>Chrononimbus can be used in creative without having redstone powder in its inventory</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.6.0',
      date: '2024-03-04',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>4 nouveaux types de bois :
              <ol>
                <li>le bois de l'end</li>
                <li>Yophylys</li>
                <li>Luminapin</li>
                <li>Noctacacia</li>
              </ol>
            </li>
            <li>3 nouveaux coffres : 
              <ol>
                <li>En Xenite</li>
                <li>En Paladium</li>
                <li>En Multicolore</li>
              </ol>
            </li>
            <li>Nouvelle roche disponible dans l'end : Interstellar rock</li>
            <li>Possibilité de cuire 500 objets avec le fragment de xenite</li>
            <li>Ajout d'une nouvelle profession de villageois "le forestier" avec un nouveau bloc d'artisanat :le bloc de scierie</li>
            <li>Ajout du craft de fragment de xenite dans un haut fourneau</li>
            <li>Ajout d'une alarme</li>
            <li>Ajout d'une fonctionnalité de vol avec l'armure de l'espace</li>
            <li>Ajout du modele de l'armure spatial</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Correction de faute d'orthographe dans des avancements :
              <ol>
                <li>"an incredible music disk ! " Disc > Disk</li>
                <li>dans la creation du lingot de multicolore Multicolored > Multicolor</li>
            </li>
            <li>Suppression de tout les biomes crées jusque là et de leurs avancements</li>
            <li>Suppression du craft de la potion anti dégâts et du spawner de colossum</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition :</b>
          <ul>
            <li>4 new types of wood :
              <ol>
                <li>Enderwood</li>
                <li>Yophylys</li>
                <li>Luminapin</li>
                <li>Noctacacia</li>
              </ol>
            </li>
            <li>3 new chests : 
              <ol>
                <li>In Xenite</li>
                <li>In Paladium</li>
                <li>In Multicolor</li>
              </ol>
            </li>
            <li>New rock available in the end : Interstellar rock</li>
            <li>Ability to smelt 500 items with the xenite fragment</li>
            <li>Add a new profession of villagers "the forester" with a new artisan block : the sawmill block</li>
            <li>Add the craft of the xenite fragment in a furnace</li>
            <li>Add an alarm</li>
            <li>Add a function of flying with the space armor</li>
            <li>Add the model of the space armor</li>
          </ul>`,
          `<b class="patch-fix">Changes :</b>
          <ul>
            <li>Correction of typos in advancements :
              <ol>
                <li>"an incredible music disk ! " Disc > Disk</li>
                <li>in the creation of the multicolor ingot Multicolored > Multicolor</li>
              </ol>
            </li>
            <li>Removal of all the biomes created so far and their advancements</li>
            <li>Removal of the craft of the anti-damage potion and the colossus spawner</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.4.1',
      date: '2024-01-03',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Acatar book</li>
          </ul>`,
          `<b class="patch-info">Information :</b>
          <ul>
            <li>alors pour vous aider a mieux avancé dans mon mod si vous le souhaiter je mais a disposition un livre qui résume ( c'est en gros un wiki mais dans un livre ) la majorité des informations que vous devez savoir pour pouvoir avancé et crafter des blocs ou autre que vous voulez.</li>
            <li>Crafter le avec 8 lingot de paladium et un livre au milieu et faite un clic droit sur le livre pour obtenir le livre avec le wiki puis cliquer sur les different onglet comme minerai puis sur l'un des minerai que vous desirez</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Correction de l'apparition du biome plage avec palmiers et de l'arbre</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition :</b>
          <ul>
            <li>Acatar book</li>
          </ul>`,
          `<b class="patch-info">Information :</b>
          <ul>
            <li>So to help you better progress in my mod if you wish I put at disposal a book that summarizes (it's basically a wiki but in a book) most of the information you need to know to be able to progress and craft blocks or other things you want.</li>
            <li>Craft it with 8 paladium ingots and a book in the middle and right click on the book to get the book with the wiki then click on the different tabs like ore and then on one of the ores you want</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Correction of the appearance of the beach biome with palms and the tree</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.4.0',
      date: '2023-12-31',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout des éléments en amazonite</li>
            <li>Ajout du craft de la amaapple</li>
            <li>Ajout du purifieur et de la table de craft avancé</li>
            <li>Ajout de 2 nouveaux type de villageois le "Mineur" et le "Customer"</li>
            <li>Les blocs d'artisanat des villageois sont : 
              <ol>
                <li>Pour le mineur → le purifieur</li>
                <li>Pour le customer → la table de craft avancé</li>
              </ol>
            </li>
            <li>Ajout d'un biome plage avec palmier</li>
            <li>Ajout de la potion anti dégats</li>
            <li>Ajout d'un avancement "Plage paradisiaque"</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Texture des feuille de redwood refaite</li>
            <li>Arbre de palmier maintenant disponible avec les pousse de palmier</li>
          </ul>`,
          `<b class="patch-warn">Attention :</b>
          <ul>
            <li>Il y a divers problèmes avec la génération du palmier et de son biome</li>
            <li>La potion anti-dégats est en actuellement en phase de test</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition :</b>
          <ul>
            <li>Added elements in amazonite</li>
            <li>Added the craft of the amaapple</li>
            <li>Added the purifier and the advanced crafting table</li>
            <li>Added 2 new type of villagers the "Miner" and the "Customer"</li>
            <li>The crafting blocks of the villagers are :
              <ol>
                <li>For the miner → the purifier</li>
                <li>For the customer → the advanced crafting table</li>
              </ol>
            </li>
            <li>Added a beach biome with palm</li>
            <li>Added the anti-damage potion</li>
            <li>Added an advancement "Paradise Beach"</li> 
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Redwood leaf texture refactor</li>
            <li>The palm tree is now available with palm sapllings</li>
          </ul>`,
          `<b class="patch-warn">Warning :</b>
          <ul>
            <li>There are various problems with the palm tree and its biome</li>
            <li>The anti-damage potion is currently in test phase</li>
          </ul>`
        ]
      }
    },
     {
      version: '1.3.0',
      date: '2023-11-11',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout de l'armure de l'espace</li>
            <li>Ajout des blocs de béton de couleurs pour les escalier et les dalles</li>
            <li>Ajout d'un biome de grotte de glace</li>
            <li>Ajout du minerai de Chrome</li>
            <li>Ajout de la fleur de l'espace</li>
            <li>Ajout des blocs de palmier</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Correction du champignon fluorescent où les effets escompté n'apparaissait pas</li>
            <li>Ajustement des dégâts pour l'épée en multicolor qui passe de 38 point d'attaque à 44</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition :</b>
          <ul>
            <li>Added a space armor</li>
            <li>Added colored concrete blocks for stairs and slabs</li>
            <li>Added an ice cave biome</li>
            <li>Added Chrome ore</li>
            <li>Added the space flower</li>
            <li>Added palm tree blocks</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Fixed the fluorescent mushroom where the expected effects did not appear</li>
            <li>Adjusted the damage for the multicolor sword from 38 attack points to 44</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.2.0',
      date: '2023-10-10',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout d'un disque de musique</li>
            <li>Ajout d'un avancement avec le sable orange</li>
            <li>Ajout d'un champignon fluorescent</li>
            <li>Ajout de 3 crafts à base des colorants de fleur :
              <ol>
                <li>Colorant de feu → colorant rouge</li>
                <li>Colorant du ciel → colorant bleu clair</li>
                <li>Colorant du volcan → colorant orange</li>
              </ol>
            </li>
            <li>Ajout des dérivés des blocs de gilbre (escalier, dalle et muret )</li>
            <li>Ajout de la porte en redwood</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Changement des textures des blocs de "gilbre"</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition :</b>
          <ul>
            <li>Added a music disc</li>
            <li>Added an advancement with the orange sand</li>
            <li>Added a fluorescent mushroom</li>
            <li>Added 3 crafts based on flower dyes:
              <ol>
                <li>firedye → red dye</li>
                <li>skydye → light blue dye</li>
                <li>volcano → orange dye</li>
              </ol>
            </li>
            <li>Added derivatives of gilbre blocks (stairs, slabs, and walls)</li>
            <li>Added the redwood door</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Change of the textures of the "gilbre" blocks</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.1.1',
      date: '2023-09-18',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout d'un craft du blocs de red vers 9 lingot de red</li>
            <li>Ajout d'un avancement lorsque l'on obtient un fleur de feu</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Correction d'une faute d'orthographe dans l'un des avancements</li>
            <li>Traduction non effectuer sur l'un des avancements est désormais fixée pour la version française</li>
            <li>Changement du titre de l'avancement de "une plante dans les terres de volcans" modifiée en "une plante résistante à la lave"</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition :</b>
          <ul>
            <li>Added a craft for the red block into 9 red ingots</li>
            <li>Added an advancement when obtaining a fire flower</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Correction of a typo in one of the advancements</li>
            <li>Translation not done on one of the advancements is now fixed for the French version</li>
            <li>Change of the advancement title from "a plant in the volcanic lands" to "a lava-resistant plant"</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.1.0',
      date: '2023-09-16',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout de 2 nouveaux biome : la foret de redwood et la terre de volcan</li>
            <li>Ajout de 2 blocs de sable</li>
            <li>Ajout de blocs décoratif : le Gilbre</li>
            <li>Ajout de 6 nouveaux avancements</li>
            <li>Ajout de 2 nouvelle fleur : la fleur du ciel et la fleur des volans</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Réorganisation de l'inventaire créatif</li>
            <li>Modificatons de la texture du cave block et des block en redwood</li>
            <li>Changement du nom de Sayabiome a Saya forest</li>
            <li>Résolution de duplication avec les craft sur le nickel</li>
            <li>Modifications du nombre d'apparition d'abeille dans la foret de saya</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition :</b>
          <ul>
            <li>Added 2 new biomes: Redwood Forest and Volcano Land</li>
            <li>Added 2 new sand blocks</li>
            <li>Added decorative blocks: Gilbre</li>
            <li>Added 6 new advancements</li>
            <li>Added 2 new flowers: Sky Flower and Flying Flower</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Reorganization of the creative inventory</li>
            <li>Modifications of the texture of the cave block and the blocks in redwood</li>
            <li>Change of the name from Sayabiome to Saya forest</li>
            <li>Resolution of duplication with crafts on nickel</li>
            <li>Modifications of the number of bee appearances in the Saya forest</li>
          </ul>`
        ],
      }
    },
    {
      version: '1.0.0',
      date: '2023-08-30',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout d'un nouveau types d'arbres</li>
            <li>Ajout d'un nouveaux minerai le "Carmeltazite"</li>
            <li>Nouvelle item</li>
            <li>Nouveaux blocs craftable</li>
            <li>Nouvelle achievement</li>
            <li>Ajout d'un craft pour la selle</li>
            <li>Ajout du blocs de multicolore</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Correction sur certain minerai de la couche d'apparition par chunk et de sa forme d'apparition</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition :</b>
          <ul>
            <li>Added a new type of trees</li>
            <li>Added a new ore "Carmeltazite"</li>
            <li>New item</li>
            <li>New craftable blocks</li>
            <li>New achievement</li>
            <li>Added a craft for the saddle</li>
            <li>Added multicolored blocks</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Correction on certain ores of the layer of appearance by chunk and its shape of appearance</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.0.1',
      date: '2023-07-21',
      loader: 'Forge',
      mcVersion: '1.19.4',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout du blocs de multicolore</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Refonte des textures pour tout les élément en Multicolore</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition :</b>
          <ul>
            <li>Added multicolored blocks</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Redesign of textures for all elements in Multicolor</li>
          </ul>`
        ]
      }
    }, 
    {
      version: '1.2.0',
      date: '2023-07-21',
      loader: 'Forge',
      mcVersion: '1.19.2',
      type: 'release',
      changes: {
        fr: [],
        en: []
      }
    }
  ],
  chaosium: [
    {
      version: '1.0.0',
      date: '2026-02-26',
      loader: 'NeoForge',
      mcVersion: '1.21.4',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout du support 1.21.4</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition :</b>
          <ul>
            <li>Added support for 1.21.4</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.0.0',
      date: '2024-10-25',
      loader: 'Forge, NeoForge',
      mcVersion: '1.21.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout du support 1.21.1</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Addition :</b>
          <ul>
            <li>Added support for 1.21.1</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.0.0',
      date: '2024-10-22',
      loader: 'Forge, NeoForge',
      mcVersion: '1.20.6',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout des éléments en jaspe</li>
            <li>Ajout des éléments en warden</li>
            <li>Ajout de l'enderman stick</li>
            <li>Ajout de l'os chaos</li>
            <li>Ajout de la boule de slime chaos</li>
            <li>Ajout de la larme chaos</li>
            <li>Ajout de la poudre chaos</li>
            <li>Ajout du bloc de laine chaos</li>
            <li>Ajout de 9 créatures chaos : Axolotl, Poule, Vache, Araigné, Cochon, Slime, Ghast, Poisson d'argent, Mouton</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Reduction des dégâts du warden boss</li>
            <li>Ajout d'un son lorsque l'armure en dragon est équipée</li>
            <li>Ajout du support de la langue française</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Added:</b>
          <ul>
            <li>Added elements in jasper</li>
            <li>Added elements in warden</li>
            <li>Added the enderman stick</li>
            <li>Added the chaos bone</li>
            <li>Added the chaos slime ball</li>
            <li>Added the chaos tear</li>
            <li>Added the chaos powder</li>
            <li>Added the chaos wool block</li>
            <li>Added 9 chaos creatures : Axolotl, Chicken, Cow, Spider, Pig, Slime, Ghast, Silverfish, Sheep</li>
          </ul>`,
          `<b class="patch-fix">Changes:</b>
          <ul>
            <li>Reduced damage of the warden boss</li>
            <li>Added a sound when the dragon armor is equipped</li>
            <li>Added support for the French language</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.2.0',
      date: '2024-10-22',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout des éléments en jaspe</li>
            <li>Ajout des éléments en warden</li>
            <li>Ajout de l'enderman stick</li>
            <li>Ajout de l'os chaos</li>
            <li>Ajout de la boule de slime chaos</li>
            <li>Ajout de la larme chaos</li>
            <li>Ajout de la poudre chaos</li>
            <li>Ajout du bloc de laine chaos</li>
            <li>Ajout de 9 créatures chaos : Axolotl, Poule, Vache, Araigné, Cochon, Slime, Ghast, Poisson d'argent, Mouton</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Reduction des dégâts du warden boss</li>
            <li>Ajout d'un son lorsque l'armure en dragon est équipée</li>
            <li>Ajout du support de la langue française</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Added:</b>
          <ul>
            <li>Added elements in jasper</li>
            <li>Added elements in warden</li>
            <li>Added the enderman stick</li>
            <li>Added the chaos bone</li>
            <li>Added the chaos slime ball</li>
            <li>Added the chaos tear</li>
            <li>Added the chaos powder</li>
            <li>Added the chaos wool block</li>
            <li>Added 9 chaos creatures : Axolotl, Chicken, Cow, Spider, Pig, Slime, Ghast, Silverfish, Sheep</li>
          </ul>`,
          `<b class="patch-fix">Changes:</b>
          <ul>
            <li>Reduced damage of the warden boss</li>
            <li>Added a sound when the dragon armor is equipped</li>
            <li>Added support for the French language</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.1.1',
      date: '2024-08-26',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout du Withers skeleton</li>
            <li>Ajout du début du craft du jaspe</li>
          </ul>`,
          `<b class="patch-fix">Modification :</b>
          <ul>
            <li>Correction du bug concernant le spawn du lazurite</li>
            <li>Correction du bug sur la récolte du pyronis</li>
          </ul>`
        ],
        en: [
          `<b class="patch-add">Added:</b>
          <ul>
            <li>Added the Wither skeleton</li>
            <li>Added the start of jasper crafting</li>
          </ul>`,
          `<b class="patch-fix">Changes:</b>
          <ul>
            <li>Fixed a bug with lazurite spawning</li>
            <li>Fixed a bug with pyronis harvesting</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.1.0',
      date: '2024-08-22',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [`<b class="patch-add">Ajout :</b>
          <ul>
            <li>Ajout d'une nouvelle armure de dragon</li>
            <li>Ajout de nouvelles créatures: Squelette, Zombie, Warden, Enderman, Creeper</li>
          </ul>`
        ],
        en: [`<b class="patch-add">Added:</b>
          <ul>
            <li>Added a new dragon armor</li>
            <li>Added new creatures: Skeleton, Zombie, Warden, Enderman, Creeper</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.0.0',
      date: '2024-08-14',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'alpha',
      changes: {
        fr: [`<b class="patch-add">Ajout :</b>
          <ul>
            <li>Nouveau minerai : mélanterite, pyronis, lazurite</li>
            <li>Nouvelle dimension : Chaosium</li>
            <li>2 nouveaux blocs : sedium, un bloc de portail</li>
          </ul>`],
        en: [`<b class="patch-add">Added:</b>
          <ul>
            <li>New ore: melanterite, pyronis, lazurite</li>
            <li>New dimension: Chaosium</li>
            <li>2 new blocks: sedium, a portal block</li>
          </ul>`]
      }
    }
  ],
  'phax-sirens': [
    {
      version: '1.0.2',
      date: '2026-01-07',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [`<b class="patch-fix">Modification :</b>
          <ul>
            <li>Correction de la texture magenta de la sirène en position "off" qui ne s'affichait pas correctement</li>
          </ul>`
        ],
        en: [`<b class="patch-fix">Changes:</b>
          <ul>
            <li>Fixed the magenta texture of the siren in "off" position that was not displaying correctly</li>
          </ul>`
        ]
      }
    },
    {
      version: '1.0.1',
      date: '2025-12-27',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [`<b class="patch-fix">Modification :</b>
          <ul>
            <li>Correction d'un crash critique au démarrage (Minecraft 1.20.1)</li>
            <li>Amélioration de la compatibilité et de la stabilité du mod</li>
          </ul>`],
        en: [`<b class="patch-fix">Changes:</b>
          <ul>
            <li>Fixed a critical crash on startup (Minecraft 1.20.1)</li>
            <li>Improved mod compatibility and stability</li>
          </ul>`]
      }
    },
    {
      version: '1.0.0',
      date: '2025-12-26',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [
          `<b>🔧 Sirènes & Lampes configurables :</b>
          <ul>
            <li>⚙️ Blocs de sirènes et lampes entièrement configurables</li>
            <li>🔊 Volume du son réglable</li>
            <li>📏 Rayon du son réglable</li>
            <li>🔁 Boucle sonore optionnelle</li>
            <li>💡 Modes de lumière : On / Clignotant</li>
            <li>⚡ Vitesse de clignotement réglable</li>
            <li>🌟 Intensité lumineuse réglable (0-15)</li>
          </ul>`,
          `<b>🎨 Variantes de couleurs multiples :</b>
          <ul>
            <li>🖌️ Plusieurs sirènes et lampes colorées</li>
            <li>🧱 Chaque couleur a son propre bloc et texture</li>
            <li>🧪 Les recettes utilisent le verre coloré correspondant</li>
          </ul>`,
          `<b>🖥️ Configuration en jeu :</b>
          <ul>
            <li>🖱️ Interface graphique facile à utiliser en jeu</li>
            <li>💾 Les paramètres sont sauvegardés par bloc</li>
            <li>⚡ Retour visuel et sonore instantané lors du changement des valeurs</li>
          </ul>`
        ],
        en: [
          `<b>🔧 Configurable Sirens & Lamps:</b>
          <ul>
            <li>⚙️ Fully configurable siren and lamp blocks</li>
            <li>🔊 Adjustable sound volume</li>
            <li>📏 Adjustable sound radius</li>
            <li>🔁 Optional sound loop</li>
            <li>💡 Light modes: On / Blinking</li>
            <li>⚡ Adjustable blink speed</li>
            <li>🌟 Adjustable light intensity (0-15)</li>
          </ul>`,
          `<b>🎨 Multiple Color Variants:</b>
          <ul>
            <li>🖌️ Multiple colored sirens and lamps</li>
            <li>🧱 Each color has its own block & texture</li>
            <li>🧪 Recipes use matching colored glass</li>
          </ul>`,
          `<b>🖥️ In-Game Configuration:</b>
          <ul>
            <li>🖱️ Easy-to-use in-game GUI</li>
            <li>💾 Settings are saved per block</li>
            <li>⚡ Instant visual and sound feedback when changing values</li>
          </ul>`
        ]
      }
    }
  ],
  'potion-time-plus': [
    {
      version: '1.0.0',
      date: '2026-02-26',
      loader: 'NeoForge',
      mcVersion: '1.21.4',
      type: 'release',
      changes: {
        fr: ["Ceci est la première version, elle ajoute toutes les potions en 15 minutes, 30 minutes ou 1 heure. Certaines potions peuvent avoir une durée plus courte en raison de l'effet indiqué. Les potions ne sont pas autorisées à cette durée prolongée en raison de leur effet : chance, infestation, suintement, tissage, charge de vent, guérison, malédiction. Les potions renforcées comme Lenteur IV n'ont pas de durée augmentée pour le moment mais pourraient l'avoir plus tard."],
        en: ['This is the first version it adds all the potions in 15 minutes, 30 minutes or 1 hour. Certain potion may have a shorter duration due to the indicated effect. Potions are not allowed this increased duration due to their effect: luck, infestation, oozing, weaving, wind charging, healing, harming. Reinforced potions like Slowness IV do not have an increasing duration at the moment but may be later.']
      }
    }
  ]
};
