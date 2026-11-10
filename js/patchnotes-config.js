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
//   - changes  : contenu structure par langue
//
// Format structure prefere :
//   changes: {
//     fr: [
//       { type: 'add', heading: 'Ajout :', items: ['Premier ajout', 'Deuxieme ajout'] },
//       { type: 'fix', heading: 'Modification :', items: [
//         { text: 'Changement detaille :', childrenListType: 'ordered', children: ['Etape 1', 'Etape 2'] }
//       ] }
//     ],
//     en: [...]
//   }
//
// Types disponibles : add, fix, info, warn. Les sous-listes sont facultatives.
// Une langue absente utilise l'anglais ; gb partage le contenu en.
// Toutes les entrees utilisent le format structure.
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
      "version": "1.0.3",
      "date": "2026-09-16",
      "loader": "NeoForge",
      "mcVersion": "26.1.2",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "fix",
            "heading": "Changements & Corrections :",
            "items": [
              "Correction de la baie lyvorienne non stackable (ce correctif sera également intégré dans la prochaine version d'Acatar pour Minecraft 1.21.1)"
            ]
          }
        ],
        "en": [
          {
            "type": "fix",
            "heading": "Changes & Fixes:",
            "items": [
              "Fixed Lyvorian Berry stacking issue (this fix will also be included in the next Acatar version for Minecraft 1.21.1)"
            ]
          }
        ],
        "it": [{ "type": "fix", "heading": "Modifiche e correzioni:", "items": ["Risolto il problema di impilamento della Lyvorian Berry (la correzione sarà inclusa anche nella prossima versione di Acatar per Minecraft 1.21.1)."] }],
        "es": [{ "type": "fix", "heading": "Cambios y correcciones:", "items": ["Corregido el problema que impedía apilar la Lyvorian Berry (esta corrección también se incluirá en la próxima versión de Acatar para Minecraft 1.21.1)."] }],
        "de": [{ "type": "fix", "heading": "Änderungen und Fehlerbehebungen:", "items": ["Problem mit dem Stapeln der Lyvorian Berry behoben (diese Korrektur wird auch in der nächsten Acatar-Version für Minecraft 1.21.1 enthalten sein)."] }],
        "ja": [{ "type": "fix", "heading": "変更と修正:", "items": ["Lyvorian Berry をスタックできない問題を修正しました (この修正は Minecraft 1.21.1 向けの次回 Acatar バージョンにも含まれます)。"] }],
        "ko": [{ "type": "fix", "heading": "변경 및 수정:", "items": ["Lyvorian Berry가 중첩되지 않던 문제를 수정했습니다 (이 수정 사항은 Minecraft 1.21.1용 다음 Acatar 버전에도 포함됩니다)."] }],
        "pt-br": [{ "type": "fix", "heading": "Alterações e correções:", "items": ["Corrigido o problema que impedia o empilhamento da Lyvorian Berry (esta correção também será incluída na próxima versão do Acatar para Minecraft 1.21.1)."] }]
      }
    },
    {
      "version": "1.0.2",
      "date": "2026-09-15",
      "loader": "NeoForge",
      "mcVersion": "26.1.2",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "fix",
            "heading": "Changements & Corrections :",
            "items": [
              "Retour de la génération du biome « Forêt de Sakura »",
              "Correction du bug où le tapis de mousse sakura pouvait flotter dans les airs (ce correctif sera également intégré dans la prochaine version d'Acatar pour Minecraft 1.21.1)"
            ]
          }
        ],
        "en": [
          {
            "type": "fix",
            "heading": "Changes & Fixes:",
            "items": [
              "Restored generation for the “Sakura Forest” biome",
              "Fixed a bug causing the sakura moss carpet to float in the air (this fix will also be included in the next Acatar version for Minecraft 1.21.1)"
            ]
          }
        ],
        "it": [{ "type": "fix", "heading": "Modifiche e correzioni:", "items": ["Ripristinata la generazione del bioma “Sakura Forest”.", "Risolto un bug che faceva fluttuare in aria il tappeto di muschio sakura (la correzione sarà inclusa anche nella prossima versione di Acatar per Minecraft 1.21.1)."] }],
        "es": [{ "type": "fix", "heading": "Cambios y correcciones:", "items": ["Restaurada la generación del bioma «Sakura Forest».", "Corregido un error que hacía que la alfombra de musgo sakura flotara en el aire (esta corrección también se incluirá en la próxima versión de Acatar para Minecraft 1.21.1)."] }],
        "de": [{ "type": "fix", "heading": "Änderungen und Fehlerbehebungen:", "items": ["Generierung des Bioms „Sakura Forest“ wiederhergestellt.", "Fehler behoben, durch den der Sakura-Moosteppich in der Luft schwebte (diese Korrektur wird auch in der nächsten Acatar-Version für Minecraft 1.21.1 enthalten sein)."] }],
        "ja": [{ "type": "fix", "heading": "変更と修正:", "items": ["「Sakura Forest」バイオームの生成を復元しました。", "サクラの苔カーペットが空中に浮く問題を修正しました (この修正は Minecraft 1.21.1 向けの次回 Acatar バージョンにも含まれます)。"] }],
        "ko": [{ "type": "fix", "heading": "변경 및 수정:", "items": ["Sakura Forest 생물 군계의 생성을 복구했습니다.", "사쿠라 이끼 카펫이 공중에 떠 있던 문제를 수정했습니다 (이 수정 사항은 Minecraft 1.21.1용 다음 Acatar 버전에도 포함됩니다)."] }],
        "pt-br": [{ "type": "fix", "heading": "Alterações e correções:", "items": ["A geração do bioma “Sakura Forest” foi restaurada.", "Corrigido um erro que fazia o tapete de musgo sakura flutuar no ar (esta correção também será incluída na próxima versão do Acatar para Minecraft 1.21.1)."] }]
      }
    },
    {
      "version": "1.4.3",
      "date": "2026-09-14",
      "loader": "Neoforge",
      "mcVersion": "1.21.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "fix",
            "heading": "Changements & Corrections :",
            "items": [
              "Correction de plusieurs fautes d'orthographe et de traductions incorrectes",
              "Ajout d'un effet sonore lorsque le creeper céruléen prend des dégâts",
              "Modification de l'icône/objet de deux succès",
              "Suppression des recettes incompatibles (provenant de versions ultérieures/incompatibles) qui ne fonctionnaient pas"
            ]
          }
        ],
        "en": [
          {
            "type": "fix",
            "heading": "Changes & Fixes:",
            "items": [
              "Fixed several spelling mistakes and incorrect translations",
              "Added sound effects when the cerulean creeper takes damage",
              "updated the item icon for two achievements",
              "Removed incompatible recipes (from mismatched versions) that didn't work"
            ]
          }
        ],
        "it": [{ "type": "fix", "heading": "Modifiche e correzioni:", "items": ["Corrette diverse imprecisioni ortografiche e traduzioni errate.", "Aggiunti effetti sonori quando il Cerulean Creeper subisce danni.", "Aggiornata l’icona degli oggetti di due obiettivi.", "Rimosse le ricette incompatibili, provenienti da versioni diverse, che non funzionavano."] }],
        "es": [{ "type": "fix", "heading": "Cambios y correcciones:", "items": ["Corregidos varios errores ortográficos y traducciones incorrectas.", "Añadidos efectos de sonido cuando el Cerulean Creeper recibe daño.", "Actualizado el icono del objeto de dos logros.", "Eliminadas las recetas incompatibles de versiones distintas que no funcionaban."] }],
        "de": [{ "type": "fix", "heading": "Änderungen und Fehlerbehebungen:", "items": ["Mehrere Rechtschreibfehler und falsche Übersetzungen behoben.", "Soundeffekte hinzugefügt, wenn der Cerulean Creeper Schaden erleidet.", "Das Gegenstandssymbol für zwei Errungenschaften aktualisiert.", "Nicht funktionierende, inkompatible Rezepte aus abweichenden Versionen entfernt."] }],
        "ja": [{ "type": "fix", "heading": "変更と修正:", "items": ["複数の誤字と誤訳を修正しました。", "Cerulean Creeper がダメージを受けたときの効果音を追加しました。", "2つの進捗に関連するアイテムアイコンを更新しました。", "異なるバージョン由来の、動作しない互換性のないレシピを削除しました。"] }],
        "ko": [{ "type": "fix", "heading": "변경 및 수정:", "items": ["여러 맞춤법 오류와 잘못된 번역을 수정했습니다.", "Cerulean Creeper가 피해를 입을 때 재생되는 효과음을 추가했습니다.", "두 발전 과제의 아이템 아이콘을 업데이트했습니다.", "서로 다른 버전에서 가져와 작동하지 않던 호환되지 않는 제작법을 제거했습니다."] }],
        "pt-br": [{ "type": "fix", "heading": "Alterações e correções:", "items": ["Corrigidos vários erros de ortografia e traduções incorretas.", "Adicionados efeitos sonoros quando o Cerulean Creeper sofre dano.", "Atualizado o ícone do item de duas conquistas.", "Removidas receitas incompatíveis de versões diferentes que não funcionavam."] }]
      }
    },
    {
      "version": "1.0.1",
      "date": "2026-09-14",
      "loader": "Neoforge",
      "mcVersion": "26.1.2",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "fix",
            "heading": "Changements & Corrections :",
            "items": [
              "Correction de plusieurs fautes d'orthographe et de traductions incorrectes",
              "Le problème qui bloquait la création d'un monde à l'infini a été corrigé, mais en contrepartie, le biome « Forêt de sakura » ne se génère pas pour le moment en 26.1.2",
              "Modification de l'icône/objet de deux succès",
              "Ajout d'un effet sonore lorsque le creeper céruléen prend des dégâts"
            ]
          }
        ],
        "en": [
          {
            "type": "fix",
            "heading": "Changes & Fixes:",
            "items": [
              "Fixed several spelling mistakes and incorrect translations",
              "Fixed the issue causing infinite world creation, but as a trade-off, the “Sakura Forest” biome currently does not generate in 26.1.2",
              "updated the item icon for two achievements",
              "Added sound effects when the cerulean creeper takes damage"
            ]
          }
        ],
        "it": [{ "type": "fix", "heading": "Modifiche e correzioni:", "items": ["Corrette diverse imprecisioni ortografiche e traduzioni errate.", "Risolto il problema che causava la generazione infinita dei mondi; di conseguenza, al momento il bioma “Sakura Forest” non viene generato nella versione 26.1.2.", "Aggiornata l’icona degli oggetti di due obiettivi.", "Aggiunti effetti sonori quando il Cerulean Creeper subisce danni."] }],
        "es": [{ "type": "fix", "heading": "Cambios y correcciones:", "items": ["Corregidos varios errores ortográficos y traducciones incorrectas.", "Corregido el problema que provocaba la creación infinita de mundos; como consecuencia, el bioma «Sakura Forest» no se genera actualmente en la versión 26.1.2.", "Actualizado el icono del objeto de dos logros.", "Añadidos efectos de sonido cuando el Cerulean Creeper recibe daño."] }],
        "de": [{ "type": "fix", "heading": "Änderungen und Fehlerbehebungen:", "items": ["Mehrere Rechtschreibfehler und falsche Übersetzungen behoben.", "Problem mit der endlosen Welterstellung behoben; als Folge davon wird das Biom „Sakura Forest“ in Version 26.1.2 derzeit nicht generiert.", "Das Gegenstandssymbol für zwei Errungenschaften aktualisiert.", "Soundeffekte hinzugefügt, wenn der Cerulean Creeper Schaden erleidet."] }],
        "ja": [{ "type": "fix", "heading": "変更と修正:", "items": ["複数の誤字と誤訳を修正しました。", "ワールド作成が無限に続く問題を修正しました。その影響で、バージョン 26.1.2 では現在「Sakura Forest」バイオームが生成されません。", "2つの進捗に関連するアイテムアイコンを更新しました。", "Cerulean Creeper がダメージを受けたときの効果音を追加しました。"] }],
        "ko": [{ "type": "fix", "heading": "변경 및 수정:", "items": ["여러 맞춤법 오류와 잘못된 번역을 수정했습니다.", "월드가 무한히 생성되던 문제를 수정했습니다. 대신 현재 26.1.2에서는 Sakura Forest 생물 군계가 생성되지 않습니다.", "두 발전 과제의 아이템 아이콘을 업데이트했습니다.", "Cerulean Creeper가 피해를 입을 때 재생되는 효과음을 추가했습니다."] }],
        "pt-br": [{ "type": "fix", "heading": "Alterações e correções:", "items": ["Corrigidos vários erros de ortografia e traduções incorretas.", "Corrigido o problema que causava a criação infinita de mundos; como consequência, o bioma “Sakura Forest” não é gerado atualmente na versão 26.1.2.", "Atualizado o ícone do item de duas conquistas.", "Adicionados efeitos sonoros quando o Cerulean Creeper sofre dano."] }]
      }
    },
    {
      "version": "1.0.0",
      "date": "2026-09-13",
      "loader": "NeoForge",
      "mcVersion": "26.1.2",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Support de la version Minecraft 26.1.2",
              "Rebalancement complet des outils, minerais et blocs : Ajustement de tous les niveaux de récolte à travers tous les outils, minerais et blocs pour une progression plus fluide",
              "Nouvelles recettes d'artisanat : Ajout de recettes pour fabriquer l'Œuf d'Apparition du Nautilus et l'Œuf d'Apparition du desséché",
              "Ajout d'une nouvelle recette pour fabriquer de la poudre à canon à partir de poudre de souffre",
              "Ajout d'une recette pour l'armure pour cheval en cuivre",
              "Ajout du craft de l'oeuf d'apparition du loup lyvora"
            ]
          },
          {
            "type": "fix",
            "heading": "Changements & Corrections :",
            "items": [
              {
                "text": "Des changements concernants le disque de musique « Sweden » :",
                "childrenListType": "ordered",
                "children": [
                  "Le disque jouant Sweden déclenche désormais les musiques du tag [music.game]",
                  "Renommage du disque en « C418 — Musiques aléatoires de l'Overworld »",
                  "Mise à jour de la description du succès lié au disque"
                ]
              },
              "Ajout de la recette manquante de la pomme en dioptasium",
              "Ajout de la recette manquante pour decrafter un bloc de xenite",
              "Ajout de la recette manquante pour decrafter un bloc d'uranium",
              "Ajout de la recette manquante pour decrafter le bloc de crystal rouge",
              "La recette de la poudre de souffre est désormais en mode sans forme",
              "Modification de la recette de l'essence végétale pour remplacer les bouteilles incraftables par des items du tag 'vegetal'",
              "Modification du nombre de minerai de chrome échangé par le villageois mineur",
              "Suppression d'un échange non équitable avec le mineur",
              "Modification de la recette du gravier",
              "Modification de la recette du spawner en ajoutant l'éclat d'arcane",
              "Suppression de 2 recettes en doublon, d'œufs d'apparition de créatures",
              "Correction de certaines traductions incorrectes"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Added:",
            "items": [
              "Added support for Minecraft version 26.1.2",
              "Complete tool, ore, and block rebalancing: Adjusted all mining levels (harvest levels) across all tools, ores, and blocks for a smoother progression",
              "New crafting recipes: Added recipes to craft the Nautilus Spawn Egg and the Parched Spawn Egg",
              "Added a new recipe to craft gunpowder from sulfur powder",
              "Addition of a recipe for copper horse armor",
              "Addition of a recipe for the wolf lyvora's egg"
            ]
          },
          {
            "type": "fix",
            "heading": "Changes & Fixes:",
            "items": [
              {
                "text": "Changes related to the “Sweden” music disc:",
                "childrenListType": "ordered",
                "children": [
                  "The disc playing Sweden now triggers track events from the [music.game] tag",
                  "Renamed the disc to “C418 — Random Overworld Tracks”",
                  "Updated the description of the achievement linked to the disc"
                ]
              },
              "Fixed missing recipe for the Dioptasium Apple",
              "Fixed missing recipe to uncraft a Xenite Block",
              "Fixed missing recipe to uncraft an Uranium Block",
              "Fixed missing recipe to uncraft the Red Crystal Block",
              "The recipe for Sulfur Powder is now shapeless",
              "Modification of the recipe for vegetable essence to replace the uncraftable bottles with items from the 'vegetal' tag",
              "Modification of the number of chromium ore exchanged by the minor villager",
              "Suppression of an unfair exchange with the minor",
              "Modification of the recipe of gravel",
              "Modification of the recipe of spawner by adding arcane shard",
              "Deletion of 2 duplicate recipes, from creature spawn eggs",
              "Correction of some incorrect translations"
            ]
          }
        ],
        "it": [
          {
            "type": "add",
            "heading": "Aggiunto:",
            "items": [
              "Aggiunto il supporto per Minecraft 26.1.2.",
              "Ribilanciati completamente strumenti, minerali e blocchi: regolati tutti i livelli di estrazione per rendere la progressione più fluida.",
              "Aggiunte ricette per creare le uova di generazione del Nautilus e dell’Inaridito.",
              "Aggiunta una nuova ricetta per creare polvere da sparo usando polvere di zolfo.",
              "Aggiunta una ricetta per l’armatura di rame per cavalli.",
              "Aggiunta una ricetta per l’uovo del lupo Lyvora."
            ]
          },
          {
            "type": "fix",
            "heading": "Modifiche e correzioni:",
            "items": [
              {
                "text": "Modifiche al disco musicale “Sweden”:",
                "childrenListType": "ordered",
                "children": [
                  "Il disco che riproduce Sweden attiva ora gli eventi delle tracce dal tag [music.game].",
                  "Rinominato il disco in “C418 — Brani casuali dell’Overworld”.",
                  "Aggiornata la descrizione dell’obiettivo associato al disco."
                ]
              },
              "Aggiunta la ricetta mancante per la mela di dioptasio.",
              "Aggiunta la ricetta mancante per recuperare un blocco di xenite.",
              "Aggiunta la ricetta mancante per recuperare un blocco di uranio.",
              "Aggiunta la ricetta mancante per recuperare il blocco di cristallo rosso.",
              "La ricetta della polvere di zolfo ora non richiede una disposizione specifica.",
              "Modificata la ricetta dell’essenza vegetale: le bottiglie non utilizzabili sono state sostituite con oggetti del tag 'vegetal'.",
              "Modificata la quantità di minerale di cromo scambiata dal villico minatore.",
              "Rimosso uno scambio non equo con il minatore.",
              "Modificata la ricetta della ghiaia.",
              "Modificata la ricetta dello spawner aggiungendo una scheggia arcana.",
              "Rimosse 2 ricette duplicate per le uova di generazione delle creature.",
              "Corrette alcune traduzioni errate."
            ]
          }
        ],
        "es": [
          {
            "type": "add",
            "heading": "Añadido:",
            "items": [
              "Añadido el soporte para Minecraft 26.1.2.",
              "Reequilibrados por completo las herramientas, los minerales y los bloques: se ajustaron todos los niveles de minería para lograr una progresión más fluida.",
              "Añadidas recetas para fabricar los huevos generadores de Nautilus y del reseco.",
              "Añadida una nueva receta para fabricar pólvora a partir de polvo de azufre.",
              "Añadida una receta para la armadura de caballo de cobre.",
              "Añadida una receta para el huevo del lobo Lyvora."
            ]
          },
          {
            "type": "fix",
            "heading": "Cambios y correcciones:",
            "items": [
              {
                "text": "Cambios relacionados con el disco musical «Sweden»:",
                "childrenListType": "ordered",
                "children": [
                  "El disco que reproduce Sweden ahora activa los eventos de pistas de la etiqueta [music.game].",
                  "Renombrado el disco como «C418 — Temas aleatorios del Overworld».",
                  "Actualizada la descripción del logro asociado al disco."
                ]
              },
              "Añadida la receta que faltaba para la manzana de dioptasio.",
              "Añadida la receta que faltaba para recuperar un bloque de xenita.",
              "Añadida la receta que faltaba para recuperar un bloque de uranio.",
              "Añadida la receta que faltaba para recuperar el bloque de cristal rojo.",
              "La receta del polvo de azufre ahora no requiere una forma específica.",
              "Modificada la receta de esencia vegetal para sustituir las botellas imposibles de fabricar por objetos de la etiqueta 'vegetal'.",
              "Modificada la cantidad de mineral de cromo que intercambia el aldeano minero.",
              "Eliminado un intercambio injusto con el minero.",
              "Modificada la receta de la grava.",
              "Modificada la receta del generador añadiendo un fragmento arcano.",
              "Eliminadas 2 recetas duplicadas de huevos generadores de criaturas.",
              "Corregidas algunas traducciones incorrectas."
            ]
          }
        ],
        "de": [
          {
            "type": "add",
            "heading": "Hinzugefügt:",
            "items": [
              "Unterstützung für Minecraft 26.1.2 hinzugefügt.",
              "Werkzeuge, Erze und Blöcke vollständig neu ausbalanciert: Alle Abbaustufen wurden für einen flüssigeren Fortschritt angepasst.",
              "Rezepte für die Spawn-Eier von Nautilus und Dürrem hinzugefügt.",
              "Neues Rezept zur Herstellung von Schießpulver aus Schwefelpulver hinzugefügt.",
              "Rezept für eine Pferderüstung aus Kupfer hinzugefügt.",
              "Rezept für das Ei des Lyvora-Wolfs hinzugefügt."
            ]
          },
          {
            "type": "fix",
            "heading": "Änderungen und Fehlerbehebungen:",
            "items": [
              {
                "text": "Änderungen an der Musikdisc „Sweden“:",
                "childrenListType": "ordered",
                "children": [
                  "Die Disc mit Sweden löst jetzt Titelereignisse aus dem Tag [music.game] aus.",
                  "Disc in „C418 — Zufällige Overworld-Titel“ umbenannt.",
                  "Beschreibung der mit der Disc verbundenen Errungenschaft aktualisiert."
                ]
              },
              "Fehlendes Rezept für den Dioptasium-Apfel hinzugefügt.",
              "Fehlendes Rezept zum Zurückgewinnen eines Xenitblocks hinzugefügt.",
              "Fehlendes Rezept zum Zurückgewinnen eines Uranblocks hinzugefügt.",
              "Fehlendes Rezept zum Zurückgewinnen des Rotkristallblocks hinzugefügt.",
              "Das Rezept für Schwefelpulver ist jetzt formlos.",
              "Rezept für Pflanzenessenz geändert: nicht herstellbare Flaschen durch Gegenstände aus dem Tag 'vegetal' ersetzt.",
              "Anzahl des Chromerzes geändert, das der Bergmann-Dorfbewohner eintauscht.",
              "Einen unfairen Handel mit dem Bergmann entfernt.",
              "Kiesrezept geändert.",
              "Spawner-Rezept geändert und einen Arkanen Splitter hinzugefügt.",
              "2 doppelte Rezepte für Kreaturen-Spawn-Eier entfernt.",
              "Einige fehlerhafte Übersetzungen korrigiert."
            ]
          }
        ],
        "ja": [
          {
            "type": "add",
            "heading": "追加:",
            "items": [
              "Minecraft 26.1.2 に対応しました。",
              "ツール、鉱石、ブロック全体のバランスを見直し、すべての採掘レベルを調整して進行をよりスムーズにしました。",
              "オウムガイと乾燥体のスポーンエッグのクラフトレシピを追加しました。",
              "硫黄の粉から火薬を作る新しいレシピを追加しました。",
              "銅の馬鎧のレシピを追加しました。",
              "リヴォラウルフの卵のレシピを追加しました。"
            ]
          },
          {
            "type": "fix",
            "heading": "変更と修正:",
            "items": [
              {
                "text": "音楽ディスク「Sweden」に関する変更:",
                "childrenListType": "ordered",
                "children": [
                  "Sweden を再生するディスクが、[music.game] タグのトラックイベントを起動するようになりました。",
                  "ディスク名を「C418 — ランダムなオーバーワールドの曲」に変更しました。",
                  "ディスクに関連する進捗の説明を更新しました。"
                ]
              },
              "ディオプタシウムのリンゴの不足していたレシピを追加しました。",
              "ゼナイトブロックを分解するレシピを追加しました。",
              "ウランブロックを分解するレシピを追加しました。",
              "レッドクリスタルブロックを分解するレシピを追加しました。",
              "硫黄の粉のレシピを不定形レシピに変更しました。",
              "植物エッセンスのレシピを変更し、クラフトできない瓶を 'vegetal' タグのアイテムに置き換えました。",
              "鉱夫の村人が取引するクロム鉱石の数を変更しました。",
              "鉱夫との不公平な取引を削除しました。",
              "砂利のレシピを変更しました。",
              "スポナーのレシピを変更し、アーケインシャードを追加しました。",
              "クリーチャーのスポーンエッグに関する重複レシピを2つ削除しました。",
              "一部の誤訳を修正しました。"
            ]
          }
        ],
        "ko": [
          {
            "type": "add",
            "heading": "추가:",
            "items": [
              "Minecraft 26.1.2 지원을 추가했습니다.",
              "도구, 광석, 블록의 균형을 전면 조정하고 모든 채굴 단계를 조정하여 진행을 더 자연스럽게 만들었습니다.",
              "앵무조개와 바싹 마른 자의 생성 알 제작법을 추가했습니다.",
              "황 가루로 화약을 만드는 새로운 제작법을 추가했습니다.",
              "구리 말 갑옷 제작법을 추가했습니다.",
              "리보라 늑대 알 제작법을 추가했습니다."
            ]
          },
          {
            "type": "fix",
            "heading": "변경 및 수정:",
            "items": [
              {
                "text": "“Sweden” 음악 디스크 변경 사항:",
                "childrenListType": "ordered",
                "children": [
                  "Sweden을 재생하는 디스크가 이제 [music.game] 태그의 트랙 이벤트를 실행합니다.",
                  "디스크 이름을 “C418 — 오버월드 무작위 트랙”으로 변경했습니다.",
                  "디스크와 연결된 발전 과제의 설명을 업데이트했습니다."
                ]
              },
              "디오프타슘 사과의 누락된 제작법을 추가했습니다.",
              "제나이트 블록 분해 제작법을 추가했습니다.",
              "우라늄 블록 분해 제작법을 추가했습니다.",
              "붉은 수정 블록 분해 제작법을 추가했습니다.",
              "황 가루 제작법을 무형 제작법으로 변경했습니다.",
              "식물 정수 제작법에서 만들 수 없던 병을 'vegetal' 태그 아이템으로 교체했습니다.",
              "광부 주민이 거래하는 크롬 광석 수량을 변경했습니다.",
              "광부와의 불공정한 거래를 제거했습니다.",
              "자갈 제작법을 변경했습니다.",
              "스포너 제작법에 비전 파편을 추가했습니다.",
              "생물 생성 알의 중복 제작법 2개를 제거했습니다.",
              "일부 잘못된 번역을 수정했습니다."
            ]
          }
        ],
        "pt-br": [
          {
            "type": "add",
            "heading": "Adicionado:",
            "items": [
              "Adicionado suporte ao Minecraft 26.1.2.",
              "Ferramentas, minérios e blocos totalmente reequilibrados: todos os níveis de mineração foram ajustados para uma progressão mais fluida.",
              "Adicionadas receitas para fabricar os ovos geradores de Nautilus e do Ressecado.",
              "Adicionada uma nova receita para fabricar pólvora a partir de pó de enxofre.",
              "Adicionada uma receita para a armadura de cavalo de cobre.",
              "Adicionada uma receita para o ovo do lobo Lyvora."
            ]
          },
          {
            "type": "fix",
            "heading": "Alterações e correções:",
            "items": [
              {
                "text": "Alterações no disco musical “Sweden”:",
                "childrenListType": "ordered",
                "children": [
                  "O disco que toca Sweden agora aciona eventos de faixa da tag [music.game].",
                  "Disco renomeado para “C418 — Faixas aleatórias do Overworld”.",
                  "Descrição da conquista relacionada ao disco atualizada."
                ]
              },
              "Adicionada a receita que faltava para a maçã de dioptásio.",
              "Adicionada a receita que faltava para desmontar um bloco de xenita.",
              "Adicionada a receita que faltava para desmontar um bloco de urânio.",
              "Adicionada a receita que faltava para desmontar o bloco de cristal vermelho.",
              "A receita do pó de enxofre agora não exige um formato específico.",
              "Receita da essência vegetal alterada para substituir as garrafas impossíveis de fabricar por itens da tag 'vegetal'.",
              "Quantidade de minério de cromo trocada pelo aldeão mineiro alterada.",
              "Removida uma troca injusta com o mineiro.",
              "Receita do cascalho alterada.",
              "Receita do gerador alterada com a adição de um fragmento arcano.",
              "Removidas 2 receitas duplicadas de ovos geradores de criaturas.",
              "Corrigidas algumas traduções incorretas."
            ]
          }
        ]
      }
    },
    {
      "version": "1.4.2",
      "date": "2026-08-26",
      "loader": "NeoForge",
      "mcVersion": "1.21.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Rééquilibrage complet des outils, minerais et blocs : ajustement de tous les niveaux de récolte pour une progression plus fluide",
              "Ajout du craft de l'œuf d'apparition du loup lyvora"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              {
                "text": "Changements concernant le disque de musique « Sweden » :",
                "childrenListType": "ordered",
                "children": [
                  "Le disque jouant Sweden déclenche désormais les musiques du tag [music.game]",
                  "Renommage du disque en « C418 — Musiques aléatoires de l’Overworld »",
                  "Mise à jour de la description du succès lié au disque"
                ]
              },
              "Ajout de la recette manquante de la pomme en dioptasium",
              "Ajout de la recette manquante pour décrafter un bloc de xenite",
              "Ajout de la recette manquante pour décrafter un bloc d’uranium",
              "Ajout de la recette manquante pour décrafter le bloc de cristal rouge",
              "La recette de la poudre de soufre est désormais sans forme",
              "Modification de la recette de l’essence végétale pour remplacer les bouteilles incraftables par des items du tag « vegetal »",
              "Modification du nombre de minerais de chrome échangés par le villageois mineur",
              "Suppression d’un échange non équitable avec le mineur",
              "Modification de la recette du gravier",
              "Modification de la recette du spawner en ajoutant l’éclat d’arcane",
              "Suppression de 2 recettes en doublon d’œufs d’apparition de créatures",
              "Correction de certaines traductions incorrectes"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Added:",
            "items": [
              "Complete tool, ore, and block rebalancing: adjusted all harvest levels for smoother progression",
              "Added the crafting recipe for the Lyvora wolf spawn egg"
            ]
          },
          {
            "type": "fix",
            "heading": "Changes & Fixes:",
            "items": [
              {
                "text": "Changes related to the “Sweden” music disc:",
                "childrenListType": "ordered",
                "children": [
                  "The disc playing Sweden now triggers tracks from the [music.game] tag",
                  "Renamed the disc to “C418 — Random Overworld Tracks”",
                  "Updated the description of the achievement linked to the disc"
                ]
              },
              "Added the missing Dioptasium Apple recipe",
              "Added the missing recipe to uncraft a Xenite Block",
              "Added the missing recipe to uncraft a Uranium Block",
              "Added the missing recipe to uncraft the Red Crystal Block",
              "The Sulfur Powder recipe is now shapeless",
              "Changed the vegetable essence recipe to replace uncraftable bottles with items from the “vegetal” tag",
              "Changed the amount of Chromium Ore traded by the miner villager",
              "Removed an unfair trade with the miner",
              "Changed the gravel recipe",
              "Changed the spawner recipe to add an Arcane Shard",
              "Removed 2 duplicate recipes for creature spawn eggs",
              "Fixed some incorrect translations"
            ]
          }
        ],
        "it": [
          {
            "type": "add",
            "heading": "Aggiunte:",
            "items": [
              "Ribilanciamento completo di strumenti, minerali e blocchi: regolati tutti i livelli di raccolta per una progressione più fluida",
              "Aggiunta la ricetta per creare l’uovo generatore del lupo Lyvora"
            ]
          },
          {
            "type": "fix",
            "heading": "Modifiche e correzioni:",
            "items": [
              {
                "text": "Modifiche al disco musicale “Sweden”:",
                "childrenListType": "ordered",
                "children": [
                  "Il disco che riproduce Sweden attiva ora i brani del tag [music.game]",
                  "Il disco è stato rinominato “C418 — Brani casuali dell’Overworld”",
                  "Aggiornata la descrizione dell’obiettivo associato al disco"
                ]
              },
              "Aggiunta la ricetta mancante della mela di dioptasio",
              "Aggiunta la ricetta mancante per scomporre il blocco di xenite",
              "Aggiunta la ricetta mancante per scomporre il blocco di uranio",
              "Aggiunta la ricetta mancante per scomporre il blocco di cristallo rosso",
              "La ricetta della polvere di zolfo ora non richiede una disposizione precisa",
              "Modificata la ricetta dell’essenza vegetale sostituendo le bottiglie impossibili da recuperare con oggetti del tag “vegetal”",
              "Modificata la quantità di minerale di cromo scambiata dal villico minatore",
              "Rimosso uno scambio non equo con il minatore",
              "Modificata la ricetta della ghiaia",
              "Modificata la ricetta dello spawner aggiungendo una scheggia arcana",
              "Rimosse 2 ricette duplicate per le uova generatrici delle creature",
              "Corrette alcune traduzioni errate"
            ]
          }
        ],
        "es": [
          {
            "type": "add",
            "heading": "Añadido:",
            "items": [
              "Reequilibrio completo de herramientas, minerales y bloques: se ajustaron todos los niveles de recolección para lograr una progresión más fluida",
              "Añadida la receta del huevo generador del lobo Lyvora"
            ]
          },
          {
            "type": "fix",
            "heading": "Cambios y correcciones:",
            "items": [
              {
                "text": "Cambios relacionados con el disco de música «Sweden»:",
                "childrenListType": "ordered",
                "children": [
                  "El disco que reproduce Sweden ahora activa las pistas de la etiqueta [music.game]",
                  "El disco se renombró como «C418 — Música aleatoria del Overworld»",
                  "Se actualizó la descripción del logro relacionado con el disco"
                ]
              },
              "Añadida la receta que faltaba para la manzana de dioptasio",
              "Añadida la receta que faltaba para descomponer un bloque de xenita",
              "Añadida la receta que faltaba para descomponer un bloque de uranio",
              "Añadida la receta que faltaba para descomponer el bloque de cristal rojo",
              "La receta de la pólvora de azufre ahora no requiere una forma específica",
              "Modificada la receta de esencia vegetal para sustituir las botellas irrecuperables por objetos de la etiqueta «vegetal»",
              "Modificada la cantidad de mineral de cromo que intercambia el aldeano minero",
              "Eliminado un intercambio injusto con el minero",
              "Modificada la receta de la grava",
              "Modificada la receta del generador para añadir un fragmento arcano",
              "Eliminadas 2 recetas duplicadas de huevos generadores de criaturas",
              "Corregidas algunas traducciones incorrectas"
            ]
          }
        ],
        "de": [
          {
            "type": "add",
            "heading": "Hinzugefügt:",
            "items": [
              "Werkzeuge, Erze und Blöcke vollständig neu ausbalanciert: Alle Abbaustufen wurden für einen flüssigeren Fortschritt angepasst",
              "Rezept für das Lyvora-Wolf-Spawn-Ei hinzugefügt"
            ]
          },
          {
            "type": "fix",
            "heading": "Änderungen und Fehlerbehebungen:",
            "items": [
              {
                "text": "Änderungen an der Musik-CD „Sweden“:",
                "childrenListType": "ordered",
                "children": [
                  "Die CD mit Sweden löst jetzt Titel aus dem Tag [music.game] aus",
                  "Die CD wurde in „C418 — Zufällige Musik aus der Oberwelt“ umbenannt",
                  "Beschreibung des zugehörigen Erfolgs aktualisiert"
                ]
              },
              "Fehlendes Rezept für den Dioptasium-Apfel hinzugefügt",
              "Fehlendes Rezept zum Zerlegen eines Xenitblocks hinzugefügt",
              "Fehlendes Rezept zum Zerlegen eines Uranblocks hinzugefügt",
              "Fehlendes Rezept zum Zerlegen des Rotkristallblocks hinzugefügt",
              "Das Rezept für Schwefelpulver ist jetzt formlos",
              "Rezept für Pflanzenessenz geändert: Nicht rückgewinnbare Flaschen wurden durch Gegenstände aus dem Tag „vegetal“ ersetzt",
              "Menge des Chromerzes angepasst, das mit dem Bergmann-Dorfbewohner gehandelt wird",
              "Unfairen Handel mit dem Bergmann entfernt",
              "Kiesrezept geändert",
              "Spawner-Rezept geändert und um einen Arkanen Splitter ergänzt",
              "2 doppelte Rezepte für Kreaturen-Spawn-Eier entfernt",
              "Einige fehlerhafte Übersetzungen korrigiert"
            ]
          }
        ],
        "ja": [
          {
            "type": "add",
            "heading": "追加:",
            "items": [
              "道具、鉱石、ブロックを全面的に再調整し、採掘レベルを調整して進行をより滑らかにしました",
              "リヴォラウルフのスポーンエッグのクラフトレシピを追加しました"
            ]
          },
          {
            "type": "fix",
            "heading": "変更・修正:",
            "items": [
              {
                "text": "音楽ディスク「Sweden」に関する変更:",
                "childrenListType": "ordered",
                "children": [
                  "Swedenを再生するディスクが、[music.game]タグの曲を再生するようになりました",
                  "ディスク名を「C418 — オーバーワールドのランダムミュージック」に変更しました",
                  "ディスクに関連する進捗の説明を更新しました"
                ]
              },
              "ディオプタシウムのリンゴの不足していたレシピを追加しました",
              "ゼナイトブロックを分解するレシピを追加しました",
              "ウランブロックを分解するレシピを追加しました",
              "レッドクリスタルブロックを分解するレシピを追加しました",
              "硫黄の粉のレシピが不定形になりました",
              "作成できない瓶を「vegetal」タグのアイテムに置き換えるため、植物エッセンスのレシピを変更しました",
              "採掘者の村人とのクロム鉱石の交換数を変更しました",
              "採掘者との不公平な取引を削除しました",
              "砂利のレシピを変更しました",
              "秘術の欠片を追加するため、スポナーのレシピを変更しました",
              "クリーチャーのスポーンエッグに関する重複レシピを2つ削除しました",
              "一部の誤訳を修正しました"
            ]
          }
        ],
        "ko": [
          {
            "type": "add",
            "heading": "추가:",
            "items": [
              "도구, 광석, 블록을 전면 재조정하고 모든 채굴 등급을 조정해 더 원활한 진행을 제공합니다",
              "리보라 늑대 생성 알 제작법을 추가했습니다"
            ]
          },
          {
            "type": "fix",
            "heading": "변경 및 수정:",
            "items": [
              {
                "text": "음악 디스크 “Sweden” 관련 변경 사항:",
                "childrenListType": "ordered",
                "children": [
                  "Sweden을 재생하는 디스크가 이제 [music.game] 태그의 음악을 재생합니다",
                  "디스크 이름을 “C418 — 오버월드 무작위 음악”으로 변경했습니다",
                  "디스크 관련 발전 과제 설명을 업데이트했습니다"
                ]
              },
              "디오프타슘 사과의 누락된 제작법을 추가했습니다",
              "제나이트 블록 분해 제작법을 추가했습니다",
              "우라늄 블록 분해 제작법을 추가했습니다",
              "레드 크리스털 블록 분해 제작법을 추가했습니다",
              "황 가루 제작법이 무형식 제작법으로 변경되었습니다",
              "제작할 수 없는 병을 “vegetal” 태그 아이템으로 대체하도록 식물 정수 제작법을 변경했습니다",
              "광부 주민과 교환하는 크롬 광석 수량을 변경했습니다",
              "광부와의 불공정한 거래를 삭제했습니다",
              "자갈 제작법을 변경했습니다",
              "비전 파편을 추가하도록 생성기 제작법을 변경했습니다",
              "생물 생성 알의 중복 제작법 2개를 삭제했습니다",
              "일부 잘못된 번역을 수정했습니다"
            ]
          }
        ],
        "pt-br": [
          {
            "type": "add",
            "heading": "Adicionado:",
            "items": [
              "Rebalanceamento completo de ferramentas, minérios e blocos: todos os níveis de coleta foram ajustados para uma progressão mais fluida",
              "Adicionada a receita do ovo de geração do lobo Lyvora"
            ]
          },
          {
            "type": "fix",
            "heading": "Alterações e correções:",
            "items": [
              {
                "text": "Alterações relacionadas ao disco de música “Sweden”:",
                "childrenListType": "ordered",
                "children": [
                  "O disco que toca Sweden agora aciona as músicas da tag [music.game]",
                  "O disco foi renomeado para “C418 — Músicas aleatórias do Overworld”",
                  "A descrição da conquista relacionada ao disco foi atualizada"
                ]
              },
              "Adicionada a receita que faltava para a maçã de dioptásio",
              "Adicionada a receita que faltava para desmontar um bloco de xenita",
              "Adicionada a receita que faltava para desmontar um bloco de urânio",
              "Adicionada a receita que faltava para desmontar o bloco de cristal vermelho",
              "A receita da pólvora de enxofre agora não exige um formato específico",
              "Receita da essência vegetal alterada para substituir as garrafas impossíveis de recuperar por itens da tag “vegetal”",
              "Quantidade de minério de cromo trocada com o aldeão minerador alterada",
              "Uma troca injusta com o minerador foi removida",
              "Receita do cascalho alterada",
              "Receita do gerador alterada para adicionar um fragmento arcano",
              "2 receitas duplicadas de ovos geradores de criaturas foram removidas",
              "Algumas traduções incorretas foram corrigidas"
            ]
          }
        ]
      }
    },
    {
      "version": "1.0.0",
      "date": "2026-07-07",
      "loader": "NeoForge",
      "mcVersion": "1.21.8",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout d'une nouvelle recette d'artisanat pour l'Œuf d'Apparition de Tortue",
              "Ajout d'un nouveau commerce de niveau Maître au villageois Boucher pour obtenir le disque musical Lava Chicken"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Added:",
            "items": [
              "Added a new crafting recipe for the Turtle Spawn Egg",
              "Added a new Master level trade to the Butcher villager to obtain the Lava Chicken music disc"
            ]
          }
        ],
        "it": [{ "type": "add", "heading": "Aggiunto:", "items": ["Aggiunta una nuova ricetta per creare l’uovo di generazione della tartaruga.", "Aggiunto un nuovo scambio di livello Maestro per il Macellaio, che permette di ottenere il disco musicale Lava Chicken."] }],
        "es": [{ "type": "add", "heading": "Añadido:", "items": ["Añadida una nueva receta para fabricar el huevo generador de tortuga.", "Añadido un nuevo intercambio de nivel Maestro para el Carnicero, que permite obtener el disco musical Lava Chicken."] }],
        "de": [{ "type": "add", "heading": "Hinzugefügt:", "items": ["Ein neues Rezept für das Schildkröten-Spawn-Ei hinzugefügt.", "Ein neuer Handel auf Meister-Stufe beim Metzger hinzugefügt, über den die Lava-Chicken-Musikdisc erhältlich ist."] }],
        "ja": [{ "type": "add", "heading": "追加:", "items": ["カメのスポーンエッグの新しいクラフトレシピを追加しました。", "肉屋の村人に、Lava Chicken の音楽ディスクを入手できる達人レベルの取引を追加しました。"] }],
        "ko": [{ "type": "add", "heading": "추가:", "items": ["거북이 생성 알의 새로운 제작법을 추가했습니다.", "도살자 주민의 달인 레벨 거래에 Lava Chicken 음악 디스크를 추가했습니다."] }],
        "pt-br": [{ "type": "add", "heading": "Adicionado:", "items": ["Adicionada uma nova receita para fabricar o ovo gerador de tartaruga.", "Adicionada uma nova troca de nível Mestre ao Açougueiro, que permite obter o disco musical Lava Chicken."] }]
      }
    },
    {
      "version": "1.4.1",
      "date": "2025-12-29",
      "loader": "Forge, NeoForge",
      "mcVersion": "1.21.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "fix",
            "heading": "Corrections et nettoyage de compatibilité :",
            "items": [
              "Correction des tags et des references invalides",
              "Suppression des entrées legacy non supportées",
              "Correction et suppression des recettes invalides",
              "Suppression des recettes utilisant des éléments uniquement présents en Minecraft 1.21.4",
              "Suppression de la dépendance Curios",
              "Amélioration de la stabilité sur Minecraft 1.21.1"
            ]
          }
        ],
        "en": [
          {
            "type": "fix",
            "heading": "Bug fixes and compatibility cleanup:",
            "items": [
              "Fixed invalid tags and broken references",
              "Removed unsupported legacy entries",
              "Fixed and removed invalid recipes",
              "Removed recipes using Minecraft 1.21.4-only elements",
              "Removed the Curios dependency",
              "Improved stability on Minecraft 1.21.1"
            ]
          }
        ],
        "it": [{ "type": "fix", "heading": "Correzioni di bug e pulizia della compatibilità:", "items": ["Corretti tag non validi e riferimenti danneggiati.", "Rimosse le voci legacy non supportate.", "Corrette e rimosse le ricette non valide.", "Rimosse le ricette che usavano elementi disponibili solo in Minecraft 1.21.4.", "Rimossa la dipendenza da Curios.", "Migliorata la stabilità su Minecraft 1.21.1."] }],
        "es": [{ "type": "fix", "heading": "Correcciones de errores y limpieza de compatibilidad:", "items": ["Corregidas las etiquetas no válidas y las referencias rotas.", "Eliminadas las entradas antiguas no compatibles.", "Corregidas y eliminadas las recetas no válidas.", "Eliminadas las recetas que utilizaban elementos exclusivos de Minecraft 1.21.4.", "Eliminada la dependencia de Curios.", "Mejorada la estabilidad en Minecraft 1.21.1."] }],
        "de": [{ "type": "fix", "heading": "Fehlerbehebungen und Kompatibilitätsbereinigung:", "items": ["Ungültige Tags und fehlerhafte Verweise behoben.", "Nicht unterstützte Legacy-Einträge entfernt.", "Ungültige Rezepte korrigiert und entfernt.", "Rezepte mit Elementen entfernt, die nur in Minecraft 1.21.4 verfügbar sind.", "Curios-Abhängigkeit entfernt.", "Stabilität unter Minecraft 1.21.1 verbessert."] }],
        "ja": [{ "type": "fix", "heading": "バグ修正と互換性の整理:", "items": ["無効なタグと壊れた参照を修正しました。", "サポートされていない旧形式の項目を削除しました。", "無効なレシピを修正および削除しました。", "Minecraft 1.21.4 のみの要素を使用するレシピを削除しました。", "Curios の依存関係を削除しました。", "Minecraft 1.21.1 での安定性を改善しました。"] }],
        "ko": [{ "type": "fix", "heading": "버그 수정 및 호환성 정리:", "items": ["잘못된 태그와 손상된 참조를 수정했습니다.", "지원되지 않는 레거시 항목을 제거했습니다.", "잘못된 제작법을 수정하고 제거했습니다.", "Minecraft 1.21.4 전용 요소를 사용하는 제작법을 제거했습니다.", "Curios 의존성을 제거했습니다.", "Minecraft 1.21.1에서의 안정성을 개선했습니다."] }],
        "pt-br": [{ "type": "fix", "heading": "Correções de bugs e ajustes de compatibilidade:", "items": ["Corrigidas tags inválidas e referências quebradas.", "Removidas entradas antigas sem suporte.", "Corrigidas e removidas receitas inválidas.", "Removidas receitas que utilizavam elementos exclusivos do Minecraft 1.21.4.", "Removida a dependência do Curios.", "Estabilidade aprimorada no Minecraft 1.21.1."] }]
      }
    },
    {
      "version": "1.4.0",
      "date": "2025-10-20",
      "loader": "Forge, NeoForge",
      "mcVersion": "1.21.1",
      "type": "alpha",
      "changes": {
        "fr": [
          {
            "type": "warn",
            "heading": "Attention :",
            "items": [
              {
                "text": "⚠️ Version obsolète :",
                "childrenListType": "ordered",
                "children": [
                  "Cette version n'est plus maintenue.",
                  "Elle peut contenir des bugs et peut nécessiter des dépendances supplémentaires (comme Curios).",
                  "Veuillez utiliser Acatar 1.4.1 ou une version plus récente à la place."
                ]
              }
            ]
          },
          {
            "type": "info",
            "heading": "Information :",
            "items": [
              "Explorez la sérénité du Sakura et la puissance du Lyvora, dans une mise à jour où la vie et la lumière s'épanouissent jusque dans le Nether. ⚙️ Certaines fonctionnalités sont encore en phase de test — vos retours aideront à les peaufiner !"
            ]
          },
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Les armures du mod (sauf l'armure de l'espace) peuvent désormais avoir un modèle de forge (disponible uniquement avec les matériaux vanilla : diamant, émeraude, fer, or, redstone, etc.)",
              "Ajout de 2 crafts pour la potion de Mauvais Présage : un dans la table de craft (9 ingrédients) et un dans l'alambic 🧪",
              "Ajout de la pomme en dioptasium 🍏",
              "Ajout du soufre, craftable avec de la poudre de blaze 🔥",
              "Nouveau minerai : le plomb ⛏️",
              "Nouveau lingot : le Hazmium, obtenu avec du soufre, du plomb, de la poudre lumineuse et de l'or — utilisé pour l'armure Hazmat ⚗️",
              "L'armure Hazmat est désormais disponible en survie 🧍‍♂️",
              "Nouvel enchantement : Protection des radiations ☢️",
              "Ajout de 2 nouveaux avancements 🏆",
              "Ajout des racines sakura 🌸",
              "Ajout du tapis de mousse sakura 🌿",
              "Le champignon sakura apparaît désormais naturellement dans la forêt de sakura 🍄",
              "Nouvelle fleur mystique : Anthéria 🌺",
              "Nouvelle créature : le Loup Lyvora 🐺",
              "Nouvelle nourriture : la Baie Lyvorienne 🍇"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "💡 Légère réduction de la luminosité du lingot d'uranium",
              {
                "text": "☠️ Le minerai d'uranium applique désormais l'effet de poison si vous ne portez pas l'armure Hazmat ou une armure avec « Protection des radiations »",
                "childrenListType": "ordered",
                "children": [
                  "(⚠️ cette fonction est encore instable — privilégiez l'armure Hazmat pour le moment)"
                ]
              },
              "🔢 Changement de numéro dans les avancements 5 et 6, devenus 7 et 8",
              "🧱 Changement de l'icône de l'avancement « Qu'est-ce que c'est ? » (Carmeltazite)",
              "💣 [⚠️] La bombe nucléaire est toujours en phase de test",
              "🌾 Le champignon explosif peut désormais être placé sur la terre",
              "🐗 Réduction du taux d'apparition des Piglins, Hoglins et cochons-zombies dans le biome Sakura",
              "🌸 [⚠️] Le champignon Sakura ne pousse désormais qu'avec un cristal rouge ou de la poudre d'os",
              "🈁 Correction : « Sakura Wart Block » devient « Bloc de verrue Sakura »",
              "🌱 Le Nylium Sakura se propage désormais comme le Nylium carmin lorsqu'il est stimulé à la poudre d'os",
              "🔥 Le biome Sakura peut désormais générer des portails en ruine naturellement",
              "👁️ Augmentation de la portée de détection de l'Œil de Révélation"
            ]
          }
        ],
        "en": [
          {
            "type": "warn",
            "heading": "Attention :",
            "items": [
              {
                "text": "⚠️ Deprecated version :",
                "childrenListType": "ordered",
                "children": [
                  "This version is no longer maintained.",
                  "It may contain bugs and may require additional dependencies (such as Curios).",
                  "Please use Acatar 1.4.1 or newer instead."
                ]
              }
            ]
          },
          {
            "type": "info",
            "heading": "Information:",
            "items": [
              "Explore the serenity of Sakura and the power of Lyvora, in an update where life and light flourish even in the Nether. ⚙️ Some features are still in testing phase — your feedback will help refine them!"
            ]
          },
          {
            "type": "add",
            "heading": "Added:",
            "items": [
              "Mod armors (except space armor) can now have a forge model (available only with vanilla materials: diamond, emerald, iron, gold, redstone, etc.)",
              "Added 2 crafts for the Bad Omen potion: one in the crafting table (9 ingredients) and one in the brewing stand 🧪",
              "Added the dioptasium apple 🍏",
              "Added sulfur, craftable with blaze powder 🔥",
              "New ore: lead ⛏️",
              "New ingot: Hazmium, obtained with sulfur, lead, luminous powder and gold — used for Hazmat armor ⚗️",
              "Hazmat armor is now available in survival 🧍‍♂️",
              "New enchantment: Radiation Protection ☢️",
              "Add 2 new achievements 🏆",
              "Add sakura roots 🌸",
              "Add sakura carpet 🌿",
              "The sakura mushroom appears naturally in the sakura forest 🍄",
              "New mystical flower: Anthéria 🌺",
              "New creature: the Lyvora Wolf 🐺",
              "New food: the Lyvorian Berry 🍇"
            ]
          },
          {
            "type": "fix",
            "heading": "Fix:",
            "items": [
              "💡 Slight reduction of the uranium ingot's brightness",
              {
                "text": "☠️ The uranium ore now applies the poison effect if you are not wearing the Hazmat armor or an armor with “Radiation Protection”",
                "childrenListType": "ordered",
                "children": [
                  "(⚠️ this function is still unstable — prioritize Hazmat armor for now)"
                ]
              },
              "🔢 Change of number in achievements 5 and 6, now 7 and 8",
              "🧱 Change of icon for the achievement “What is this?” (Carmeltazite)",
              "💣 [⚠️] The nuclear bomb is still in testing phase",
              "🌾 The explosive mushroom can now be placed on dirt",
              "🐗 Reduction of the spawn rate of Piglins, Hoglins and zombified pigs in the Sakura biome",
              "🌸 [⚠️] The Sakura mushroom now only grows with a red crystal or bone meal",
              "🈁 Fix: “Sakura Wart Block” becomes “Sakura Wart Block”",
              "🌱 The Sakura Nylium now spreads like Crimson Nylium when stimulated with bone meal",
              "🔥 The Sakura biome can now naturally generate ruined portals",
              "👁️ Increased the detection range of the Eye of Revelation"
            ]
          }
        ],
        "it": [
          { "type": "warn", "heading": "Attenzione:", "items": [{ "text": "⚠️ Versione non più supportata:", "childrenListType": "ordered", "children": ["Questa versione non è più mantenuta.", "Potrebbe contenere bug e richiedere dipendenze aggiuntive, come Curios.", "Usa invece Acatar 1.4.1 o una versione più recente."] }] },
          { "type": "info", "heading": "Informazioni:", "items": ["Esplora la serenità di Sakura e la potenza di Lyvora, in un aggiornamento in cui la vita e la luce fioriscono persino nel Nether. ⚙️ Alcune funzionalità sono ancora in fase di test: il tuo feedback ci aiuterà a perfezionarle!"] },
          { "type": "add", "heading": "Aggiunto:", "items": ["Le armature della mod, tranne quella spaziale, possono ora avere un modello forge (disponibile solo con materiali vanilla: diamante, smeraldo, ferro, oro, redstone ecc.).", "Aggiunte 2 ricette per la pozione Cattivo Presagio: una al banco da lavoro (9 ingredienti) e una al supporto per pozioni 🧪.", "Aggiunta la Dioptasium Apple 🍏.", "Aggiunto zolfo, ottenibile con polvere di blaze 🔥.", "Nuovo minerale: piombo ⛏️.", "Nuovo lingotto: Hazmium, ottenuto con zolfo, piombo, polvere luminosa e oro; usato per l’armatura Hazmat ⚗️.", "L’armatura Hazmat è ora disponibile in modalità sopravvivenza 🧍‍♂️.", "Nuovo incantesimo: Radiation Protection ☢️.", "Aggiunti 2 nuovi obiettivi 🏆.", "Aggiunte Sakura Roots 🌸.", "Aggiunto Sakura Carpet 🌿.", "Il Sakura Mushroom ora compare naturalmente nella Sakura Forest 🍄.", "Nuovo fiore mistico: Anthéria 🌺.", "Nuova creatura: Lyvora Wolf 🐺.", "Nuovo cibo: Lyvorian Berry 🍇."] },
          { "type": "fix", "heading": "Correzioni:", "items": ["💡 Leggermente ridotta la luminosità del lingotto di uranio.", { "text": "☠️ Il minerale di uranio ora applica l’effetto veleno se non indossi l’armatura Hazmat o un’armatura con “Radiation Protection”.", "childrenListType": "ordered", "children": ["(⚠️ Questa funzione è ancora instabile: per ora è preferibile usare l’armatura Hazmat.)"] }, "🔢 Cambiata la numerazione degli obiettivi: i numeri 5 e 6 sono diventati 7 e 8.", "🧱 Cambiata l’icona dell’obiettivo “What is this?” (Carmeltazite).", "💣 [⚠️] La bomba nucleare è ancora in fase di test.", "🌾 Ora il fungo esplosivo può essere posizionato sulla terra.", "🐗 Ridotta la frequenza di comparsa di Piglins, Hoglins e maiali zombificati nel bioma Sakura.", "🌸 [⚠️] Il Sakura Mushroom ora cresce solo con un cristallo rosso o polvere d’ossa.", "🈁 Corretto: “Sakura Wart Block” ora è “Sakura Wart Block”.", "🌱 Sakura Nylium ora si diffonde come Crimson Nylium se stimolato con polvere d’ossa.", "🔥 Nel bioma Sakura ora possono generarsi naturalmente portali in rovina.", "👁️ Aumentato il raggio di rilevamento dell’Eye of Revelation."] }
        ],
        "es": [
          { "type": "warn", "heading": "Atención:", "items": [{ "text": "⚠️ Versión obsoleta:", "childrenListType": "ordered", "children": ["Esta versión ya no recibe mantenimiento.", "Puede contener errores y requerir dependencias adicionales, como Curios.", "Utiliza Acatar 1.4.1 o una versión más reciente."] }] },
          { "type": "info", "heading": "Información:", "items": ["Explora la serenidad de Sakura y el poder de Lyvora en una actualización donde la vida y la luz florecen incluso en el Nether. ⚙️ Algunas funciones aún están en pruebas; tus comentarios ayudarán a perfeccionarlas."] },
          { "type": "add", "heading": "Añadido:", "items": ["Las armaduras del mod, excepto la espacial, ahora pueden tener un modelo de forge (solo disponible con materiales vanilla: diamante, esmeralda, hierro, oro, redstone, etc.).", "Añadidas 2 recetas para la poción de Mal Presagio: una en la mesa de trabajo (9 ingredientes) y otra en el soporte para pociones 🧪.", "Añadida Dioptasium Apple 🍏.", "Añadido azufre, que se puede fabricar con polvo de blaze 🔥.", "Nuevo mineral: plomo ⛏️.", "Nuevo lingote: Hazmium, obtenido con azufre, plomo, polvo luminoso y oro; se utiliza para la armadura Hazmat ⚗️.", "La armadura Hazmat ya está disponible en supervivencia 🧍‍♂️.", "Nuevo encantamiento: Radiation Protection ☢️.", "Añadidos 2 logros nuevos 🏆.", "Añadidas Sakura Roots 🌸.", "Añadido Sakura Carpet 🌿.", "Sakura Mushroom ahora aparece de forma natural en Sakura Forest 🍄.", "Nueva flor mística: Anthéria 🌺.", "Nueva criatura: Lyvora Wolf 🐺.", "Nuevo alimento: Lyvorian Berry 🍇."] },
          { "type": "fix", "heading": "Correcciones:", "items": ["💡 Reducido ligeramente el brillo del lingote de uranio.", { "text": "☠️ El mineral de uranio ahora aplica el efecto de veneno si no llevas la armadura Hazmat o una armadura con “Radiation Protection”.", "childrenListType": "ordered", "children": ["(⚠️ Esta función aún es inestable; por ahora, se recomienda usar la armadura Hazmat.)"] }, "🔢 Cambiada la numeración de los logros 5 y 6: ahora son 7 y 8.", "🧱 Cambiado el icono del logro “What is this?” (Carmeltazite).", "💣 [⚠️] La bomba nuclear aún está en fase de pruebas.", "🌾 El hongo explosivo ahora se puede colocar sobre tierra.", "🐗 Reducida la frecuencia de aparición de Piglins, Hoglins y cerdos zombificados en el bioma Sakura.", "🌸 [⚠️] Sakura Mushroom ahora solo crece con un cristal rojo o polvo de hueso.", "🈁 Corregido: “Sakura Wart Block” pasa a llamarse “Sakura Wart Block”.", "🌱 Sakura Nylium ahora se propaga como Crimson Nylium al recibir polvo de hueso.", "🔥 El bioma Sakura ahora puede generar portales en ruinas de forma natural.", "👁️ Aumentado el alcance de detección de Eye of Revelation."] }
        ],
        "de": [
          { "type": "warn", "heading": "Achtung:", "items": [{ "text": "⚠️ Veraltete Version:", "childrenListType": "ordered", "children": ["Diese Version wird nicht mehr gepflegt.", "Sie kann Fehler enthalten und zusätzliche Abhängigkeiten wie Curios erfordern.", "Bitte verwende stattdessen Acatar 1.4.1 oder neuer."] }] },
          { "type": "info", "heading": "Information:", "items": ["Entdecke die Ruhe von Sakura und die Kraft von Lyvora – in einem Update, in dem Leben und Licht sogar im Nether gedeihen. ⚙️ Einige Funktionen werden noch getestet; dein Feedback hilft bei der Verbesserung!"] },
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Rüstungen der Mod (außer der Weltraumrüstung) können jetzt ein Forge-Modell haben (nur mit Vanilla-Materialien wie Diamant, Smaragd, Eisen, Gold, Redstone usw.).", "2 Rezepte für den Trank des Schlechten Omens hinzugefügt: eines am Werktisch (9 Zutaten) und eines am Braustand 🧪.", "Dioptasium Apple hinzugefügt 🍏.", "Schwefel hinzugefügt, herstellbar mit Blaze-Pulver 🔥.", "Neues Erz: Blei ⛏️.", "Neuer Barren: Hazmium, hergestellt aus Schwefel, Blei, Leuchtpulver und Gold – für die Hazmat-Rüstung ⚗️.", "Hazmat-Rüstung ist jetzt im Überlebensmodus verfügbar 🧍‍♂️.", "Neue Verzauberung: Radiation Protection ☢️.", "2 neue Errungenschaften hinzugefügt 🏆.", "Sakura Roots hinzugefügt 🌸.", "Sakura Carpet hinzugefügt 🌿.", "Sakura Mushroom erscheint jetzt natürlich im Biom Sakura Forest 🍄.", "Neue mystische Blume: Anthéria 🌺.", "Neue Kreatur: Lyvora Wolf 🐺.", "Neues Nahrungsmittel: Lyvorian Berry 🍇."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["💡 Helligkeit des Uranbarrens leicht reduziert.", { "text": "☠️ Uranerz verursacht jetzt den Vergiftungseffekt, wenn du keine Hazmat-Rüstung oder Rüstung mit „Radiation Protection“ trägst.", "childrenListType": "ordered", "children": ["(⚠️ Diese Funktion ist noch instabil – verwende vorerst bevorzugt die Hazmat-Rüstung.)"] }, "🔢 Nummerierung der Errungenschaften 5 und 6 geändert: Sie heißen jetzt 7 und 8.", "🧱 Symbol der Errungenschaft „What is this?“ (Carmeltazite) geändert.", "💣 [⚠️] Die Atombombe wird noch getestet.", "🌾 Der Explosionspilz kann jetzt auf Erde platziert werden.", "🐗 Spawnrate von Piglins, Hoglins und zombifizierten Schweinen im Biom Sakura verringert.", "🌸 [⚠️] Sakura Mushroom wächst jetzt nur noch mit einem Rotkristall oder Knochenmehl.", "🈁 Korrigiert: „Sakura Wart Block“ heißt jetzt „Sakura Wart Block“.", "🌱 Sakura Nylium breitet sich bei Verwendung von Knochenmehl jetzt wie Crimson Nylium aus.", "🔥 Im Biom Sakura können jetzt natürlich verfallene Portale entstehen.", "👁️ Erkennungsreichweite des Eye of Revelation erhöht."] }
        ],
        "ja": [
          { "type": "warn", "heading": "注意:", "items": [{ "text": "⚠️ サポート終了バージョン:", "childrenListType": "ordered", "children": ["このバージョンは今後メンテナンスされません。", "バグが含まれている場合や、Curios などの追加依存関係が必要になる場合があります。", "代わりに Acatar 1.4.1 以降を使用してください。"] }] },
          { "type": "info", "heading": "情報:", "items": ["Sakura の静けさと Lyvora の力を体験できるアップデートです。生命と光が Nether にまで広がります。⚙️ 一部の機能はまだテスト中です。改善のため、ぜひフィードバックをお寄せください。"] },
          { "type": "add", "heading": "追加:", "items": ["Mod の防具 (宇宙防具を除く) に Forge モデルを適用できるようになりました (ダイヤモンド、エメラルド、鉄、金、レッドストーンなど、バニラ素材のみ対応)。", "不吉な予感のポーションのレシピを2種類追加しました。作業台 (素材9個) と醸造台で作成できます 🧪。", "Dioptasium Apple を追加 🍏。", "ブレイズパウダーでクラフトできる硫黄を追加 🔥。", "新しい鉱石: 鉛 ⛏️。", "新しいインゴット: Hazmium。硫黄、鉛、発光する粉、金から作成でき、Hazmat Armor に使用します ⚗️。", "Hazmat Armor がサバイバルモードで使用可能になりました 🧍‍♂️。", "新しいエンチャント: Radiation Protection ☢️。", "新しい進捗を2つ追加 🏆。", "Sakura Roots を追加 🌸。", "Sakura Carpet を追加 🌿。", "Sakura Mushroom が Sakura Forest に自然生成するようになりました 🍄。", "新しい神秘の花: Anthéria 🌺。", "新しい生物: Lyvora Wolf 🐺。", "新しい食料: Lyvorian Berry 🍇。"] },
          { "type": "fix", "heading": "修正:", "items": ["💡 ウランインゴットの明るさをわずかに下げました。", { "text": "☠️ ウラン鉱石は、Hazmat Armor または “Radiation Protection” 付きの防具を着用していない場合に毒効果を与えるようになりました。", "childrenListType": "ordered", "children": ["(⚠️ この機能はまだ不安定なため、今は Hazmat Armor の使用を推奨します。)"] }, "🔢 進捗5と6の番号を7と8に変更しました。", "🧱 進捗 “What is this?” (Carmeltazite) のアイコンを変更しました。", "💣 [⚠️] 核爆弾はまだテスト中です。", "🌾 爆発キノコを土に設置できるようになりました。", "🐗 Sakura バイオームでの Piglin、Hoglin、ゾンビ化したブタの出現率を下げました。", "🌸 [⚠️] Sakura Mushroom はレッドクリスタルまたは骨粉でのみ成長するようになりました。", "🈁 修正: “Sakura Wart Block” の名称を “Sakura Wart Block” に変更しました。", "🌱 Sakura Nylium は骨粉を使用すると Crimson Nylium のように広がります。", "🔥 Sakura バイオームに荒廃したポータルが自然生成するようになりました。", "👁️ Eye of Revelation の検知範囲を拡大しました。"] }
        ],
        "ko": [
          { "type": "warn", "heading": "주의:", "items": [{ "text": "⚠️ 지원이 종료된 버전:", "childrenListType": "ordered", "children": ["이 버전은 더 이상 유지 관리되지 않습니다.", "버그가 포함되어 있거나 Curios와 같은 추가 의존성이 필요할 수 있습니다.", "대신 Acatar 1.4.1 이상을 사용하세요."] }] },
          { "type": "info", "heading": "정보:", "items": ["Sakura의 고요함과 Lyvora의 힘을 만나 보세요. 생명과 빛이 Nether까지 피어나는 업데이트입니다. ⚙️ 일부 기능은 아직 테스트 중이며, 여러분의 의견이 개선에 도움이 됩니다!"] },
          { "type": "add", "heading": "추가:", "items": ["우주 갑옷을 제외한 모드 갑옷에 Forge 모델을 적용할 수 있습니다 (다이아몬드, 에메랄드, 철, 금, 레드스톤 등 바닐라 재료만 지원).", "불길한 징조 물약 제작법 2개를 추가했습니다. 작업대(재료 9개)와 양조대에서 각각 제작할 수 있습니다 🧪.", "Dioptasium Apple 추가 🍏.", "블레이즈 가루로 제작할 수 있는 황 추가 🔥.", "새로운 광석: 납 ⛏️.", "새로운 주괴: Hazmium. 황, 납, 발광 가루, 금으로 만들며 Hazmat 갑옷에 사용됩니다 ⚗️.", "Hazmat 갑옷을 생존 모드에서 사용할 수 있습니다 🧍‍♂️.", "새로운 마법 부여: Radiation Protection ☢️.", "새로운 발전 과제 2개 추가 🏆.", "Sakura Roots 추가 🌸.", "Sakura Carpet 추가 🌿.", "Sakura Mushroom이 Sakura Forest에 자연 생성됩니다 🍄.", "새로운 신비한 꽃: Anthéria 🌺.", "새로운 생물: Lyvora Wolf 🐺.", "새로운 음식: Lyvorian Berry 🍇."] },
          { "type": "fix", "heading": "수정:", "items": ["💡 우라늄 주괴의 밝기를 약간 낮췄습니다.", { "text": "☠️ Hazmat 갑옷이나 “Radiation Protection”이 부여된 갑옷을 입지 않으면 우라늄 광석이 독 효과를 줍니다.", "childrenListType": "ordered", "children": ["(⚠️ 아직 불안정한 기능이므로 당분간 Hazmat 갑옷을 사용하는 것이 좋습니다.)"] }, "🔢 발전 과제 5와 6의 번호를 7과 8로 변경했습니다.", "🧱 “What is this?” (Carmeltazite) 발전 과제 아이콘을 변경했습니다.", "💣 [⚠️] 핵폭탄은 아직 테스트 중입니다.", "🌾 폭발 버섯을 흙에 설치할 수 있습니다.", "🐗 Sakura 생물 군계에서 Piglin, Hoglin, 좀비화된 돼지의 생성률을 낮췄습니다.", "🌸 [⚠️] Sakura Mushroom은 이제 붉은 수정이나 뼛가루로만 자랍니다.", "🈁 수정: “Sakura Wart Block”의 이름을 “Sakura Wart Block”으로 변경했습니다.", "🌱 Sakura Nylium은 뼛가루를 사용하면 Crimson Nylium처럼 퍼집니다.", "🔥 Sakura 생물 군계에서 폐허가 된 포털이 자연 생성됩니다.", "👁️ Eye of Revelation의 감지 범위를 늘렸습니다."] }
        ],
        "pt-br": [
          { "type": "warn", "heading": "Atenção:", "items": [{ "text": "⚠️ Versão descontinuada:", "childrenListType": "ordered", "children": ["Esta versão não recebe mais manutenção.", "Ela pode conter bugs e exigir dependências adicionais, como Curios.", "Use Acatar 1.4.1 ou uma versão mais recente."] }] },
          { "type": "info", "heading": "Informação:", "items": ["Explore a tranquilidade de Sakura e o poder de Lyvora em uma atualização na qual a vida e a luz florescem até no Nether. ⚙️ Alguns recursos ainda estão em fase de testes; seu feedback ajudará a aprimorá-los!"] },
          { "type": "add", "heading": "Adicionado:", "items": ["As armaduras do mod, exceto a armadura espacial, agora podem usar um modelo forge (disponível apenas com materiais vanilla: diamante, esmeralda, ferro, ouro, redstone etc.).", "Adicionadas 2 receitas para a poção de Mau Presságio: uma na bancada de trabalho (9 ingredientes) e outra no suporte de poções 🧪.", "Adicionada Dioptasium Apple 🍏.", "Adicionado enxofre, que pode ser fabricado com pó de blaze 🔥.", "Novo minério: chumbo ⛏️.", "Novo lingote: Hazmium, obtido com enxofre, chumbo, pó luminoso e ouro — usado na armadura Hazmat ⚗️.", "A armadura Hazmat agora está disponível no modo sobrevivência 🧍‍♂️.", "Novo encantamento: Radiation Protection ☢️.", "Adicionadas 2 novas conquistas 🏆.", "Adicionadas Sakura Roots 🌸.", "Adicionado Sakura Carpet 🌿.", "Sakura Mushroom agora aparece naturalmente em Sakura Forest 🍄.", "Nova flor mística: Anthéria 🌺.", "Nova criatura: Lyvora Wolf 🐺.", "Novo alimento: Lyvorian Berry 🍇."] },
          { "type": "fix", "heading": "Correções:", "items": ["💡 Brilho do lingote de urânio ligeiramente reduzido.", { "text": "☠️ O minério de urânio agora causa envenenamento se você não estiver usando a armadura Hazmat ou uma armadura com “Radiation Protection”.", "childrenListType": "ordered", "children": ["(⚠️ Este recurso ainda está instável — por enquanto, prefira usar a armadura Hazmat.)"] }, "🔢 Numeração das conquistas 5 e 6 alterada para 7 e 8.", "🧱 Ícone da conquista “What is this?” (Carmeltazite) alterado.", "💣 [⚠️] A bomba nuclear ainda está em fase de testes.", "🌾 O cogumelo explosivo agora pode ser colocado na terra.", "🐗 Taxa de surgimento de Piglins, Hoglins e porcos-zumbis reduzida no bioma Sakura.", "🌸 [⚠️] Sakura Mushroom agora só cresce com cristal vermelho ou pó de osso.", "🈁 Correção: “Sakura Wart Block” passa a se chamar “Sakura Wart Block”.", "🌱 Sakura Nylium agora se espalha como Crimson Nylium quando estimulado com pó de osso.", "🔥 O bioma Sakura agora pode gerar portais em ruínas naturalmente.", "👁️ Alcance de detecção do Eye of Revelation aumentado."] }
        ]
      }
    },
    {
      "version": "1.3.0",
      "date": "2025-10-20",
      "loader": "Forge, NeoForge",
      "mcVersion": "1.21.4",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "info",
            "heading": "Information :",
            "items": [
              "Explorez la sérénité du Sakura et la puissance du Lyvora, dans une mise à jour où la vie et la lumière s'épanouissent jusque dans le Nether. ⚙️ Certaines fonctionnalités sont encore en phase de test — vos retours aideront à les peaufiner !"
            ]
          },
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Les armures du mod (sauf l'armure de l'espace) peuvent désormais avoir un modèle de forge (disponible uniquement avec les matériaux vanilla : diamant, émeraude, fer, or, redstone, etc.)",
              "Ajout de 2 crafts pour la potion de Mauvais Présage : un dans la table de craft (9 ingrédients) et un dans l'alambic 🧪",
              "Ajout de la pomme en dioptasium 🍏",
              "Ajout du soufre, craftable avec de la poudre de blaze 🔥",
              "Nouveau minerai : le plomb ⛏️",
              "Nouveau lingot : le Hazmium, obtenu avec du soufre, du plomb, de la poudre lumineuse et de l'or — utilisé pour l'armure Hazmat ⚗️",
              "L'armure Hazmat est désormais disponible en survie 🧍‍♂️",
              "Nouvel enchantement : Protection des radiations ☢️",
              "Ajout de 2 nouveaux avancements 🏆",
              "Ajout des racines sakura 🌸",
              "Ajout du tapis de mousse sakura 🌿",
              "Le champignon sakura apparaît désormais naturellement dans la forêt de sakura 🍄",
              "Nouvelle fleur mystique : Anthéria 🌺",
              "Nouvelle créature : le Loup Lyvora 🐺",
              "Nouvelle nourriture : la Baie Lyvorienne 🍇"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "💡 Légère réduction de la luminosité du lingot d'uranium",
              {
                "text": "☠️ Le minerai d'uranium applique désormais l'effet de poison si vous ne portez pas l'armure Hazmat ou une armure avec « Protection des radiations »",
                "childrenListType": "ordered",
                "children": [
                  "(⚠️ cette fonction est encore instable — privilégiez l'armure Hazmat pour le moment)"
                ]
              },
              "🔢 Changement de numéro dans les avancements 5 et 6, devenus 7 et 8",
              "🧱 Changement de l'icône de l'avancement « Qu'est-ce que c'est ? » (Carmeltazite)",
              "💣 [⚠️] La bombe nucléaire est toujours en phase de test",
              "🌾 Le champignon explosif peut désormais être placé sur la terre",
              "🐗 Réduction du taux d'apparition des Piglins, Hoglins et cochons-zombies dans le biome Sakura",
              "🌸 [⚠️] Le champignon Sakura ne pousse désormais qu'avec un cristal rouge ou de la poudre d'os",
              "🈁 Correction : « Sakura Wart Block » devient « Bloc de verrue Sakura »",
              "🌱 Le Nylium Sakura se propage désormais comme le Nylium carmin lorsqu'il est stimulé à la poudre d'os",
              "🔥 Le biome Sakura peut désormais générer des portails en ruine naturellement",
              "👁️ Augmentation de la portée de détection de l'Œil de Révélation"
            ]
          }
        ],
        "en": [
          {
            "type": "info",
            "heading": "Information:",
            "items": [
              "Explore the serenity of Sakura and the power of Lyvora, in an update where life and light flourish even in the Nether. ⚙️ Some features are still in testing phase — your feedback will help refine them!"
            ]
          },
          {
            "type": "add",
            "heading": "Added:",
            "items": [
              "Mod armors (except space armor) can now have a forge model (available only with vanilla materials: diamond, emerald, iron, gold, redstone, etc.)",
              "Added 2 crafts for the Bad Omen potion: one in the crafting table (9 ingredients) and one in the brewing stand 🧪",
              "Added the dioptasium apple 🍏",
              "Added sulfur, craftable with blaze powder 🔥",
              "New ore: lead ⛏️",
              "New ingot: Hazmium, obtained with sulfur, lead, luminous powder and gold — used for Hazmat armor ⚗️",
              "Hazmat armor is now available in survival 🧍‍♂️",
              "New enchantment: Radiation Protection ☢️",
              "Add 2 new achievements 🏆",
              "Add sakura roots 🌸",
              "Add sakura carpet 🌿",
              "The sakura mushroom appears naturally in the sakura forest 🍄",
              "New mystical flower: Anthéria 🌺",
              "New creature: the Lyvora Wolf 🐺",
              "New food: the Lyvorian Berry 🍇"
            ]
          },
          {
            "type": "fix",
            "heading": "Fix:",
            "items": [
              "💡 Slight reduction of the uranium ingot's brightness",
              {
                "text": "☠️ The uranium ore now applies the poison effect if you are not wearing the Hazmat armor or an armor with “Radiation Protection”",
                "childrenListType": "ordered",
                "children": [
                  "(⚠️ this function is still unstable — prioritize Hazmat armor for now)"
                ]
              },
              "🔢 Change of number in achievements 5 and 6, now 7 and 8",
              "🧱 Change of icon for the achievement “What is this?” (Carmeltazite)",
              "💣 [⚠️] The nuclear bomb is still in testing phase",
              "🌾 The explosive mushroom can now be placed on dirt",
              "🐗 Reduction of the spawn rate of Piglins, Hoglins and zombified pigs in the Sakura biome",
              "🌸 [⚠️] The Sakura mushroom now only grows with a red crystal or bone meal",
              "🈁 Fix: “Sakura Wart Block” becomes “Sakura Wart Block”",
              "🌱 The Sakura Nylium now spreads like Crimson Nylium when stimulated with bone meal",
              "🔥 The Sakura biome can now naturally generate ruined portals",
              "👁️ Increased the detection range of the Eye of Revelation"
            ]
          }
        ],
        "it": [
          { "type": "info", "heading": "Informazioni:", "items": ["Esplora la serenità di Sakura e la potenza di Lyvora: un aggiornamento in cui la vita e la luce fioriscono persino nel Nether. ⚙️ Alcune funzionalità sono ancora in fase di test; il tuo feedback ci aiuterà a perfezionarle!"] },
          { "type": "add", "heading": "Aggiunto:", "items": ["Le armature della mod, tranne quella spaziale, possono ora avere un modello forge (solo con materiali vanilla: diamante, smeraldo, ferro, oro, redstone ecc.).", "Aggiunte 2 ricette per la pozione Cattivo Presagio: una al banco da lavoro (9 ingredienti) e una al supporto per pozioni 🧪.", "Aggiunta Dioptasium Apple 🍏.", "Aggiunto zolfo, creabile con polvere di blaze 🔥.", "Nuovo minerale: piombo ⛏️.", "Nuovo lingotto: Hazmium, ottenuto con zolfo, piombo, polvere luminosa e oro; usato per l’armatura Hazmat ⚗️.", "L’armatura Hazmat è ora disponibile in modalità sopravvivenza 🧍‍♂️.", "Nuovo incantesimo: Radiation Protection ☢️.", "Aggiunti 2 nuovi obiettivi 🏆.", "Aggiunte Sakura Roots 🌸.", "Aggiunto Sakura Carpet 🌿.", "Sakura Mushroom ora compare naturalmente in Sakura Forest 🍄.", "Nuovo fiore mistico: Anthéria 🌺.", "Nuova creatura: Lyvora Wolf 🐺.", "Nuovo cibo: Lyvorian Berry 🍇."] },
          { "type": "fix", "heading": "Correzioni:", "items": ["💡 Leggermente ridotta la luminosità del lingotto di uranio.", { "text": "☠️ Il minerale di uranio ora applica l’effetto veleno se non indossi l’armatura Hazmat o un’armatura con “Radiation Protection”.", "childrenListType": "ordered", "children": ["(⚠️ Funzione ancora instabile: per ora è preferibile usare l’armatura Hazmat.)"] }, "🔢 Cambiata la numerazione degli obiettivi 5 e 6: ora sono 7 e 8.", "🧱 Cambiata l’icona dell’obiettivo “What is this?” (Carmeltazite).", "💣 [⚠️] La bomba nucleare è ancora in fase di test.", "🌾 Il fungo esplosivo ora può essere posizionato sulla terra.", "🐗 Ridotta la comparsa di Piglins, Hoglins e maiali zombificati nel bioma Sakura.", "🌸 [⚠️] Sakura Mushroom ora cresce solo con un cristallo rosso o polvere d’ossa.", "🈁 Corretto: “Sakura Wart Block” diventa “Sakura Wart Block”.", "🌱 Sakura Nylium ora si diffonde come Crimson Nylium quando stimolato con polvere d’ossa.", "🔥 Il bioma Sakura ora può generare naturalmente portali in rovina.", "👁️ Aumentato il raggio di rilevamento dell’Eye of Revelation."] }
        ],
        "es": [
          { "type": "info", "heading": "Información:", "items": ["Explora la serenidad de Sakura y el poder de Lyvora en una actualización donde la vida y la luz florecen incluso en el Nether. ⚙️ Algunas funciones aún están en pruebas; tus comentarios ayudarán a perfeccionarlas."] },
          { "type": "add", "heading": "Añadido:", "items": ["Las armaduras del mod, excepto la espacial, ahora pueden tener un modelo forge (solo con materiales vanilla: diamante, esmeralda, hierro, oro, redstone, etc.).", "Añadidas 2 recetas para la poción de Mal Presagio: una en la mesa de trabajo (9 ingredientes) y otra en el soporte para pociones 🧪.", "Añadida Dioptasium Apple 🍏.", "Añadido azufre, que se puede fabricar con polvo de blaze 🔥.", "Nuevo mineral: plomo ⛏️.", "Nuevo lingote: Hazmium, obtenido con azufre, plomo, polvo luminoso y oro; se usa para la armadura Hazmat ⚗️.", "La armadura Hazmat ya está disponible en supervivencia 🧍‍♂️.", "Nuevo encantamiento: Radiation Protection ☢️.", "Añadidos 2 logros nuevos 🏆.", "Añadidas Sakura Roots 🌸.", "Añadido Sakura Carpet 🌿.", "Sakura Mushroom aparece de forma natural en Sakura Forest 🍄.", "Nueva flor mística: Anthéria 🌺.", "Nueva criatura: Lyvora Wolf 🐺.", "Nuevo alimento: Lyvorian Berry 🍇."] },
          { "type": "fix", "heading": "Correcciones:", "items": ["💡 Reducido ligeramente el brillo del lingote de uranio.", { "text": "☠️ El mineral de uranio ahora aplica veneno si no llevas la armadura Hazmat o una armadura con “Radiation Protection”.", "childrenListType": "ordered", "children": ["(⚠️ Esta función aún es inestable; por ahora, se recomienda usar la armadura Hazmat.)"] }, "🔢 Cambiada la numeración de los logros 5 y 6: ahora son 7 y 8.", "🧱 Cambiado el icono del logro “What is this?” (Carmeltazite).", "💣 [⚠️] La bomba nuclear aún está en pruebas.", "🌾 El hongo explosivo ahora se puede colocar sobre tierra.", "🐗 Reducida la aparición de Piglins, Hoglins y cerdos zombificados en el bioma Sakura.", "🌸 [⚠️] Sakura Mushroom ahora solo crece con cristal rojo o polvo de hueso.", "🈁 Corregido: “Sakura Wart Block” pasa a llamarse “Sakura Wart Block”.", "🌱 Sakura Nylium ahora se propaga como Crimson Nylium al usar polvo de hueso.", "🔥 El bioma Sakura ahora puede generar portales en ruinas de forma natural.", "👁️ Aumentado el alcance de detección de Eye of Revelation."] }
        ],
        "de": [
          { "type": "info", "heading": "Information:", "items": ["Entdecke die Ruhe von Sakura und die Kraft von Lyvora – in einem Update, in dem Leben und Licht sogar im Nether gedeihen. ⚙️ Einige Funktionen werden noch getestet; dein Feedback hilft bei der Verbesserung!"] },
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Rüstungen der Mod (außer der Weltraumrüstung) können jetzt ein Forge-Modell haben (nur mit Vanilla-Materialien wie Diamant, Smaragd, Eisen, Gold, Redstone usw.).", "2 Rezepte für den Trank des Schlechten Omens hinzugefügt: eines am Werktisch (9 Zutaten) und eines am Braustand 🧪.", "Dioptasium Apple hinzugefügt 🍏.", "Schwefel hinzugefügt, herstellbar mit Blaze-Pulver 🔥.", "Neues Erz: Blei ⛏️.", "Neuer Barren: Hazmium, hergestellt aus Schwefel, Blei, Leuchtpulver und Gold – für die Hazmat-Rüstung ⚗️.", "Hazmat-Rüstung ist jetzt im Überlebensmodus verfügbar 🧍‍♂️.", "Neue Verzauberung: Radiation Protection ☢️.", "2 neue Errungenschaften hinzugefügt 🏆.", "Sakura Roots hinzugefügt 🌸.", "Sakura Carpet hinzugefügt 🌿.", "Sakura Mushroom erscheint jetzt natürlich im Biom Sakura Forest 🍄.", "Neue mystische Blume: Anthéria 🌺.", "Neue Kreatur: Lyvora Wolf 🐺.", "Neues Nahrungsmittel: Lyvorian Berry 🍇."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["💡 Helligkeit des Uranbarrens leicht reduziert.", { "text": "☠️ Uranerz verursacht jetzt Vergiftung, wenn du keine Hazmat-Rüstung oder Rüstung mit „Radiation Protection“ trägst.", "childrenListType": "ordered", "children": ["(⚠️ Diese Funktion ist noch instabil – verwende vorerst bevorzugt die Hazmat-Rüstung.)"] }, "🔢 Nummerierung der Errungenschaften 5 und 6 auf 7 und 8 geändert.", "🧱 Symbol der Errungenschaft „What is this?“ (Carmeltazite) geändert.", "💣 [⚠️] Die Atombombe wird noch getestet.", "🌾 Explosionspilz kann jetzt auf Erde platziert werden.", "🐗 Spawnrate von Piglins, Hoglins und zombifizierten Schweinen im Biom Sakura verringert.", "🌸 [⚠️] Sakura Mushroom wächst jetzt nur noch mit Rotkristall oder Knochenmehl.", "🈁 Korrigiert: „Sakura Wart Block“ wird zu „Sakura Wart Block“.", "🌱 Sakura Nylium breitet sich mit Knochenmehl jetzt wie Crimson Nylium aus.", "🔥 Im Biom Sakura können jetzt natürlich verfallene Portale entstehen.", "👁️ Erkennungsreichweite des Eye of Revelation erhöht."] }
        ],
        "ja": [
          { "type": "info", "heading": "情報:", "items": ["Sakura の静けさと Lyvora の力を体験できるアップデートです。生命と光が Nether にまで広がります。⚙️ 一部の機能はまだテスト中です。改善のため、ぜひフィードバックをお寄せください。"] },
          { "type": "add", "heading": "追加:", "items": ["宇宙防具を除くMod防具にForgeモデルを適用できるようになりました (ダイヤモンド、エメラルド、鉄、金、レッドストーンなどバニラ素材のみ対応)。", "不吉な予感のポーションのレシピを2種類追加しました。作業台 (素材9個) と醸造台で作成できます 🧪。", "Dioptasium Apple を追加 🍏。", "ブレイズパウダーでクラフトできる硫黄を追加 🔥。", "新しい鉱石: 鉛 ⛏️。", "新しいインゴット: Hazmium。硫黄、鉛、発光する粉、金から作成でき、Hazmat Armor に使用します ⚗️。", "Hazmat Armor がサバイバルモードで使用可能になりました 🧍‍♂️。", "新しいエンチャント: Radiation Protection ☢️。", "新しい進捗を2つ追加 🏆。", "Sakura Roots を追加 🌸。", "Sakura Carpet を追加 🌿。", "Sakura Mushroom が Sakura Forest に自然生成するようになりました 🍄。", "新しい神秘の花: Anthéria 🌺。", "新しい生物: Lyvora Wolf 🐺。", "新しい食料: Lyvorian Berry 🍇。"] },
          { "type": "fix", "heading": "修正:", "items": ["💡 ウランインゴットの明るさをわずかに下げました。", { "text": "☠️ Hazmat Armor または “Radiation Protection” 付きの防具を着用していない場合、ウラン鉱石が毒効果を与えるようになりました。", "childrenListType": "ordered", "children": ["(⚠️ この機能はまだ不安定なため、今は Hazmat Armor の使用を推奨します。)"] }, "🔢 進捗5と6の番号を7と8に変更しました。", "🧱 進捗 “What is this?” (Carmeltazite) のアイコンを変更しました。", "💣 [⚠️] 核爆弾はまだテスト中です。", "🌾 爆発キノコを土に設置できるようになりました。", "🐗 Sakura バイオームでの Piglin、Hoglin、ゾンビ化したブタの出現率を下げました。", "🌸 [⚠️] Sakura Mushroom はレッドクリスタルまたは骨粉でのみ成長します。", "🈁 修正: “Sakura Wart Block” の名称を “Sakura Wart Block” に変更しました。", "🌱 Sakura Nylium は骨粉を使用すると Crimson Nylium のように広がります。", "🔥 Sakura バイオームに荒廃したポータルが自然生成するようになりました。", "👁️ Eye of Revelation の検知範囲を拡大しました。"] }
        ],
        "ko": [
          { "type": "info", "heading": "정보:", "items": ["Sakura의 고요함과 Lyvora의 힘을 만나 보세요. 생명과 빛이 Nether까지 피어나는 업데이트입니다. ⚙️ 일부 기능은 아직 테스트 중이며, 여러분의 의견이 개선에 도움이 됩니다!"] },
          { "type": "add", "heading": "추가:", "items": ["우주 갑옷을 제외한 모드 갑옷에 Forge 모델을 적용할 수 있습니다 (다이아몬드, 에메랄드, 철, 금, 레드스톤 등 바닐라 재료만 지원).", "불길한 징조 물약 제작법 2개를 추가했습니다. 작업대(재료 9개)와 양조대에서 각각 제작할 수 있습니다 🧪.", "Dioptasium Apple 추가 🍏.", "블레이즈 가루로 만들 수 있는 황 추가 🔥.", "새로운 광석: 납 ⛏️.", "새로운 주괴: Hazmium. 황, 납, 발광 가루, 금으로 만들며 Hazmat 갑옷에 사용됩니다 ⚗️.", "Hazmat 갑옷을 생존 모드에서 사용할 수 있습니다 🧍‍♂️.", "새로운 마법 부여: Radiation Protection ☢️.", "새로운 발전 과제 2개 추가 🏆.", "Sakura Roots 추가 🌸.", "Sakura Carpet 추가 🌿.", "Sakura Mushroom이 Sakura Forest에 자연 생성됩니다 🍄.", "새로운 신비한 꽃: Anthéria 🌺.", "새로운 생물: Lyvora Wolf 🐺.", "새로운 음식: Lyvorian Berry 🍇."] },
          { "type": "fix", "heading": "수정:", "items": ["💡 우라늄 주괴의 밝기를 약간 낮췄습니다.", { "text": "☠️ Hazmat 갑옷이나 “Radiation Protection”이 부여된 갑옷을 입지 않으면 우라늄 광석이 독 효과를 줍니다.", "childrenListType": "ordered", "children": ["(⚠️ 아직 불안정하므로 당분간 Hazmat 갑옷을 사용하는 것이 좋습니다.)"] }, "🔢 발전 과제 5와 6의 번호를 7과 8로 변경했습니다.", "🧱 “What is this?” (Carmeltazite) 발전 과제 아이콘을 변경했습니다.", "💣 [⚠️] 핵폭탄은 아직 테스트 중입니다.", "🌾 폭발 버섯을 흙에 설치할 수 있습니다.", "🐗 Sakura 생물 군계에서 Piglin, Hoglin, 좀비화된 돼지의 생성률을 낮췄습니다.", "🌸 [⚠️] Sakura Mushroom은 붉은 수정이나 뼛가루로만 자랍니다.", "🈁 수정: “Sakura Wart Block”의 이름을 “Sakura Wart Block”으로 변경했습니다.", "🌱 Sakura Nylium은 뼛가루를 사용하면 Crimson Nylium처럼 퍼집니다.", "🔥 Sakura 생물 군계에서 폐허가 된 포털이 자연 생성됩니다.", "👁️ Eye of Revelation의 감지 범위를 늘렸습니다."] }
        ],
        "pt-br": [
          { "type": "info", "heading": "Informação:", "items": ["Explore a tranquilidade de Sakura e o poder de Lyvora em uma atualização na qual a vida e a luz florescem até no Nether. ⚙️ Alguns recursos ainda estão em fase de testes; seu feedback ajudará a aprimorá-los!"] },
          { "type": "add", "heading": "Adicionado:", "items": ["As armaduras do mod, exceto a espacial, agora podem usar um modelo forge (somente com materiais vanilla: diamante, esmeralda, ferro, ouro, redstone etc.).", "Adicionadas 2 receitas para a poção de Mau Presságio: uma na bancada de trabalho (9 ingredientes) e outra no suporte de poções 🧪.", "Adicionada Dioptasium Apple 🍏.", "Adicionado enxofre, fabricável com pó de blaze 🔥.", "Novo minério: chumbo ⛏️.", "Novo lingote: Hazmium, obtido com enxofre, chumbo, pó luminoso e ouro — usado na armadura Hazmat ⚗️.", "A armadura Hazmat agora está disponível no modo sobrevivência 🧍‍♂️.", "Novo encantamento: Radiation Protection ☢️.", "Adicionadas 2 novas conquistas 🏆.", "Adicionadas Sakura Roots 🌸.", "Adicionado Sakura Carpet 🌿.", "Sakura Mushroom agora surge naturalmente em Sakura Forest 🍄.", "Nova flor mística: Anthéria 🌺.", "Nova criatura: Lyvora Wolf 🐺.", "Novo alimento: Lyvorian Berry 🍇."] },
          { "type": "fix", "heading": "Correções:", "items": ["💡 Brilho do lingote de urânio ligeiramente reduzido.", { "text": "☠️ O minério de urânio agora causa envenenamento se você não estiver usando a armadura Hazmat ou uma armadura com “Radiation Protection”.", "childrenListType": "ordered", "children": ["(⚠️ Este recurso ainda está instável — por enquanto, prefira usar a armadura Hazmat.)"] }, "🔢 Numeração das conquistas 5 e 6 alterada para 7 e 8.", "🧱 Ícone da conquista “What is this?” (Carmeltazite) alterado.", "💣 [⚠️] A bomba nuclear ainda está em fase de testes.", "🌾 O cogumelo explosivo agora pode ser colocado na terra.", "🐗 Taxa de surgimento de Piglins, Hoglins e porcos-zumbis reduzida no bioma Sakura.", "🌸 [⚠️] Sakura Mushroom agora só cresce com cristal vermelho ou pó de osso.", "🈁 Correção: “Sakura Wart Block” passa a se chamar “Sakura Wart Block”.", "🌱 Sakura Nylium agora se espalha como Crimson Nylium quando estimulado com pó de osso.", "🔥 O bioma Sakura agora pode gerar portais em ruínas naturalmente.", "👁️ Alcance de detecção do Eye of Revelation aumentado."] }
        ]
      }
    },
    {
      "version": "1.2.0",
      "date": "2025-06-30",
      "loader": "Forge, NeoForge",
      "mcVersion": "1.21.4",
      "type": "beta",
      "changes": {
        "fr": [
          {
            "type": "info",
            "heading": "Information :",
            "items": [
              "Merci de votre patience pour ce long moment sans mise à jour du mod, mais avant de publier une mise à jour définitive (non en beta) je voudrais que vous participiez à celle-ci donc si vous avez des idées concernant une mise à jour « Desert » je suis preneur, si vous voulez voir votre rêve ce réaliser vous savez où me trouvez"
            ]
          },
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout d'une bouteille d'xp condensée",
              "Ajout du noyau d'expérience",
              "Ajout du générateur d'xp",
              "Ajout du Sapling upgrade",
              "Nouvelle fonctionnalité pour le bloc de scierie (en test)",
              "Ajout d'une bombe nucleaire (en test)",
              "Ajout de variante de l'obsidienne en brique et en version normale",
              "Ajout de l'apparition du piglin, du piglin zombifié et du hoglin dans le biome de sakura"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "Les coffres dans l'arene d'Extermate donnera plus qu'un seul item",
              "Modification du nombre d'arbre de sakura dans la nether",
              "L'arene d'Extermate peut désormais apparaitre dans les terres désolées du nether",
              "L'apparition de l'arene d'Extermate apparait désormais plus souvent (demande plus de verifiaction, si vous voulez participer n'hésitez pas)"
            ]
          }
        ],
        "en": [
          {
            "type": "info",
            "heading": "Information:",
            "items": [
              "Thank you for your patience for this long moment without an update of the mod, but before publishing a definitive update (not in beta) I would like you to participate in it so if you have any ideas regarding a “Desert” update I am taking, if you want to see your dream come true you know where to find me"
            ]
          },
          {
            "type": "add",
            "heading": "Added:",
            "items": [
              "Added a condensed xp bottle",
              "Added the experience core",
              "Added the xp generator",
              "Added the Sapling upgrade",
              "New feature for the sawmill block (in test)",
              "Added a nuclear bomb (in test)",
              "Added a variant of obsidian in brick and in normal version",
              "Added the appearance of the piglin, the zombified piglin and the hoglin in the sakura biome"
            ]
          },
          {
            "type": "fix",
            "heading": "Fix:",
            "items": [
              "The chests in the Extermate arena will now give more than one item",
              "Modification of the number of sakura trees in the nether",
              "The Extermate arena can now appear in the desolate lands of the nether",
              "The appearance of the Extermate arena appears more often (requires more verification, if you want to participate do not hesitate)"
            ]
          }
        ],
        "it": [
          { "type": "info", "heading": "Informazioni:", "items": ["Grazie per la pazienza durante questo lungo periodo senza aggiornamenti. Prima di pubblicare una versione definitiva (non beta), vorrei coinvolgervi: se avete idee per un aggiornamento “Desert”, fatemelo sapere; se volete vedere realizzato il vostro sogno, sapete dove trovarmi."] },
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunta una bottiglia di XP condensata.", "Aggiunto l’Experience Core.", "Aggiunto l’XP Generator.", "Aggiunto il Sapling Upgrade.", "Nuova funzione per il blocco Sawmill (in fase di test).", "Aggiunta una bomba nucleare (in fase di test).", "Aggiunta una variante di ossidiana in mattoni e una variante normale.", "Aggiunta la comparsa di Piglin, Piglin zombificati e Hoglin nel bioma Sakura."] },
          { "type": "fix", "heading": "Correzioni:", "items": ["I bauli nell’arena di Extermate ora contengono più di un oggetto.", "Modificato il numero di alberi Sakura nel Nether.", "L’arena di Extermate può ora comparire nelle terre desolate del Nether.", "L’arena di Extermate compare più spesso (sono necessarie ulteriori verifiche; se vuoi partecipare, non esitare a farti avanti)."] }
        ],
        "es": [
          { "type": "info", "heading": "Información:", "items": ["Gracias por vuestra paciencia durante este largo periodo sin actualizaciones. Antes de publicar una versión definitiva (no beta), me gustaría que participarais: si tenéis ideas para una actualización “Desert”, contádmelas; si queréis ver vuestro sueño hecho realidad, ya sabéis dónde encontrarme."] },
          { "type": "add", "heading": "Añadido:", "items": ["Añadida una botella de XP condensada.", "Añadido el Experience Core.", "Añadido el XP Generator.", "Añadido el Sapling Upgrade.", "Nueva función para el bloque Sawmill (en pruebas).", "Añadida una bomba nuclear (en pruebas).", "Añadida una variante de obsidiana en ladrillo y otra normal.", "Añadida la aparición de Piglin, Piglin zombificados y Hoglin en el bioma Sakura."] },
          { "type": "fix", "heading": "Correcciones:", "items": ["Los cofres de la arena de Extermate ahora contienen más de un objeto.", "Modificada la cantidad de árboles Sakura en el Nether.", "La arena de Extermate ahora puede aparecer en las tierras desoladas del Nether.", "La arena de Extermate aparece con más frecuencia (aún requiere comprobaciones; si quieres participar, no dudes en hacerlo)."] }
        ],
        "de": [
          { "type": "info", "heading": "Information:", "items": ["Vielen Dank für eure Geduld während der langen Zeit ohne Update. Bevor ich eine endgültige Version (keine Beta) veröffentliche, möchte ich euch einbeziehen: Wenn ihr Ideen für ein „Desert“-Update habt, lasst es mich wissen. Wenn ihr euren Traum verwirklichen möchtet, wisst ihr, wo ihr mich findet."] },
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Kondensierte XP-Flasche hinzugefügt.", "Experience Core hinzugefügt.", "XP Generator hinzugefügt.", "Sapling Upgrade hinzugefügt.", "Neue Funktion für den Sawmill-Block (in der Testphase).", "Atombombe hinzugefügt (in der Testphase).", "Eine Ziegelvariante und eine normale Variante von Obsidian hinzugefügt.", "Piglin, zombifizierte Piglin und Hoglin erscheinen jetzt im Biom Sakura."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["Truhen in der Extermate-Arena enthalten jetzt mehr als einen Gegenstand.", "Anzahl der Sakura-Bäume im Nether geändert.", "Die Extermate-Arena kann jetzt in den Ödlanden des Nether erscheinen.", "Die Extermate-Arena erscheint jetzt häufiger (weitere Prüfungen sind erforderlich; wenn du mithelfen möchtest, melde dich gern)."] }
        ],
        "ja": [
          { "type": "info", "heading": "情報:", "items": ["長い間アップデートがなかったにもかかわらずお待ちいただき、ありがとうございます。正式版 (ベータではない版) を公開する前に、ぜひ皆さんにも参加してほしいと思っています。“Desert” アップデートのアイデアがあれば教えてください。夢を実現したい方は、連絡先をご存じのはずです。"] },
          { "type": "add", "heading": "追加:", "items": ["凝縮 XP ボトルを追加", "Experience Core を追加", "XP Generator を追加", "Sapling Upgrade を追加", "Sawmill ブロックに新機能を追加 (テスト中)", "核爆弾を追加 (テスト中)", "レンガ状の黒曜石と通常の黒曜石のバリエーションを追加", "Sakura バイオームに Piglin、ゾンビ化した Piglin、Hoglin が出現するように追加"] },
          { "type": "fix", "heading": "修正:", "items": ["Extermate のアリーナのチェストから複数のアイテムが出るようになりました。", "Nether の Sakura の木の数を変更しました。", "Extermate のアリーナが Nether の荒地に生成されるようになりました。", "Extermate のアリーナがより頻繁に生成されるようになりました (追加検証が必要です。参加したい方はぜひご協力ください)。"] }
        ],
        "ko": [
          { "type": "info", "heading": "정보:", "items": ["오랫동안 모드 업데이트가 없었는데 기다려 주셔서 감사합니다. 정식 버전(베타가 아닌 버전)을 공개하기 전에 여러분의 참여를 부탁드리고 싶습니다. “Desert” 업데이트 아이디어가 있다면 알려 주세요. 꿈을 실현하고 싶다면 어디서 저를 찾을 수 있는지 아실 겁니다."] },
          { "type": "add", "heading": "추가:", "items": ["응축 XP 병 추가", "Experience Core 추가", "XP Generator 추가", "Sapling Upgrade 추가", "Sawmill 블록의 새로운 기능 추가 (테스트 중)", "핵폭탄 추가 (테스트 중)", "벽돌 형태와 일반 형태의 흑요석 변형 추가", "Sakura 생물 군계에 Piglin, 좀비화된 Piglin, Hoglin이 생성되도록 추가"] },
          { "type": "fix", "heading": "수정:", "items": ["Extermate 투기장의 상자에서 이제 아이템을 여러 개 얻을 수 있습니다.", "Nether의 Sakura 나무 수를 변경했습니다.", "Extermate 투기장이 이제 Nether 황무지에도 생성될 수 있습니다.", "Extermate 투기장이 더 자주 생성됩니다 (추가 확인이 필요합니다. 참여하고 싶다면 언제든지 환영합니다)."] }
        ],
        "pt-br": [
          { "type": "info", "heading": "Informação:", "items": ["Obrigado pela paciência durante este longo período sem atualizações. Antes de publicar uma versão definitiva (não beta), gostaria que vocês participassem: se tiverem ideias para uma atualização “Desert”, contem para mim. Se quiserem ver seu sonho se tornar realidade, sabem onde me encontrar."] },
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionada uma garrafa de XP condensada.", "Adicionado o Experience Core.", "Adicionado o XP Generator.", "Adicionado o Sapling Upgrade.", "Novo recurso para o bloco Sawmill (em teste).", "Adicionada uma bomba nuclear (em teste).", "Adicionada uma variante de obsidiana em tijolos e outra normal.", "Adicionado o surgimento de Piglin, Piglin zumbificado e Hoglin no bioma Sakura."] },
          { "type": "fix", "heading": "Correções:", "items": ["Os baús na arena de Extermate agora fornecem mais de um item.", "Quantidade de árvores Sakura no Nether alterada.", "A arena de Extermate agora pode aparecer nas terras áridas do Nether.", "A arena de Extermate aparece com mais frequência (ainda precisa de mais verificações; se quiser participar, fique à vontade)."] }
        ]
      }
    },
    {
      "version": "1.3.0",
      "date": "2025-06-30",
      "loader": "Forge, NeoForge",
      "mcVersion": "1.21.1",
      "type": "beta",
      "changes": {
        "fr": [
          {
            "type": "info",
            "heading": "Information :",
            "items": [
              "Merci de votre patience pour ce long moment sans mise à jour du mod, mais avant de publier une mise à jour définitive (non en beta) je voudrais que vous participiez à celle-ci donc si vous avez des idées concernant une mise à jour « Desert » je suis preneur, si vous voulez voir votre rêve ce réaliser vous savez où me trouvez"
            ]
          },
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout d'une bouteille d'xp condensée",
              "Ajout du noyau d'expérience",
              "Ajout du générateur d'xp",
              "Ajout du Sapling upgrade",
              "Nouvelle fonctionnalité pour le bloc de scierie (en test)",
              "Ajout d'une bombe nucleaire (en test)",
              "Ajout de variante de l'obsidienne en brique et en version normale",
              "Ajout de l'apparition du piglin, du piglin zombifié et du hoglin dans le biome de sakura"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "Les coffres dans l'arene d'Extermate donnera plus qu'un seul item",
              "Modification du nombre d'arbre de sakura dans la nether",
              "L'arene d'Extermate peut désormais apparaitre dans les terres désolées du nether",
              "L'apparition de l'arene d'Extermate apparait désormais plus souvent (demande plus de verifiaction, si vous voulez participer n'hésitez pas)"
            ]
          }
        ],
        "en": [
          {
            "type": "info",
            "heading": "Information:",
            "items": [
              "Thank you for your patience for this long moment without an update of the mod, but before publishing a definitive update (not in beta) I would like you to participate in it so if you have any ideas regarding a “Desert” update I am taking, if you want to see your dream come true you know where to find me"
            ]
          },
          {
            "type": "add",
            "heading": "Added:",
            "items": [
              "Added a condensed xp bottle",
              "Added the experience core",
              "Added the xp generator",
              "Added the Sapling upgrade",
              "New feature for the sawmill block (in test)",
              "Added a nuclear bomb (in test)",
              "Added a variant of obsidian in brick and in normal version",
              "Added the appearance of the piglin, the zombified piglin and the hoglin in the sakura biome"
            ]
          },
          {
            "type": "fix",
            "heading": "Fix:",
            "items": [
              "The chests in the Extermate arena will now give more than one item",
              "Modification of the number of sakura trees in the nether",
              "The Extermate arena can now appear in the desolate lands of the nether",
              "The appearance of the Extermate arena appears more often (requires more verification, if you want to participate do not hesitate)"
            ]
          }
        ],
        "it": [
          { "type": "info", "heading": "Informazioni:", "items": ["Grazie per la pazienza durante questo lungo periodo senza aggiornamenti. Prima di pubblicare una versione definitiva (non beta), vorrei coinvolgervi: se avete idee per un aggiornamento “Desert”, fatemelo sapere; se volete vedere realizzato il vostro sogno, sapete dove trovarmi."] },
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunta una bottiglia di XP condensata.", "Aggiunto l’Experience Core.", "Aggiunto l’XP Generator.", "Aggiunto il Sapling Upgrade.", "Nuova funzione per il blocco Sawmill (in fase di test).", "Aggiunta una bomba nucleare (in fase di test).", "Aggiunta una variante di ossidiana in mattoni e una variante normale.", "Aggiunta la comparsa di Piglin, Piglin zombificati e Hoglin nel bioma Sakura."] },
          { "type": "fix", "heading": "Correzioni:", "items": ["I bauli nell’arena di Extermate ora contengono più di un oggetto.", "Modificato il numero di alberi Sakura nel Nether.", "L’arena di Extermate può ora comparire nelle terre desolate del Nether.", "L’arena di Extermate compare più spesso (sono necessarie ulteriori verifiche; se vuoi partecipare, non esitare a farti avanti)."] }
        ],
        "es": [
          { "type": "info", "heading": "Información:", "items": ["Gracias por vuestra paciencia durante este largo periodo sin actualizaciones. Antes de publicar una versión definitiva (no beta), me gustaría que participarais: si tenéis ideas para una actualización “Desert”, contádmelas; si queréis ver vuestro sueño hecho realidad, ya sabéis dónde encontrarme."] },
          { "type": "add", "heading": "Añadido:", "items": ["Añadida una botella de XP condensada.", "Añadido el Experience Core.", "Añadido el XP Generator.", "Añadido el Sapling Upgrade.", "Nueva función para el bloque Sawmill (en pruebas).", "Añadida una bomba nuclear (en pruebas).", "Añadida una variante de obsidiana en ladrillo y otra normal.", "Añadida la aparición de Piglin, Piglin zombificados y Hoglin en el bioma Sakura."] },
          { "type": "fix", "heading": "Correcciones:", "items": ["Los cofres de la arena de Extermate ahora contienen más de un objeto.", "Modificada la cantidad de árboles Sakura en el Nether.", "La arena de Extermate ahora puede aparecer en las tierras desoladas del Nether.", "La arena de Extermate aparece con más frecuencia (aún requiere comprobaciones; si quieres participar, no dudes en hacerlo)."] }
        ],
        "de": [
          { "type": "info", "heading": "Information:", "items": ["Vielen Dank für eure Geduld während der langen Zeit ohne Update. Bevor ich eine endgültige Version (keine Beta) veröffentliche, möchte ich euch einbeziehen: Wenn ihr Ideen für ein „Desert“-Update habt, lasst es mich wissen. Wenn ihr euren Traum verwirklichen möchtet, wisst ihr, wo ihr mich findet."] },
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Kondensierte XP-Flasche hinzugefügt.", "Experience Core hinzugefügt.", "XP Generator hinzugefügt.", "Sapling Upgrade hinzugefügt.", "Neue Funktion für den Sawmill-Block (in der Testphase).", "Atombombe hinzugefügt (in der Testphase).", "Eine Ziegelvariante und eine normale Variante von Obsidian hinzugefügt.", "Piglin, zombifizierte Piglin und Hoglin erscheinen jetzt im Biom Sakura."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["Truhen in der Extermate-Arena enthalten jetzt mehr als einen Gegenstand.", "Anzahl der Sakura-Bäume im Nether geändert.", "Die Extermate-Arena kann jetzt in den Ödlanden des Nether erscheinen.", "Die Extermate-Arena erscheint jetzt häufiger (weitere Prüfungen sind erforderlich; wenn du mithelfen möchtest, melde dich gern)."] }
        ],
        "ja": [
          { "type": "info", "heading": "情報:", "items": ["長い間アップデートがなかったにもかかわらずお待ちいただき、ありがとうございます。正式版 (ベータではない版) を公開する前に、ぜひ皆さんにも参加してほしいと思っています。“Desert” アップデートのアイデアがあれば教えてください。夢を実現したい方は、連絡先をご存じのはずです。"] },
          { "type": "add", "heading": "追加:", "items": ["凝縮 XP ボトルを追加", "Experience Core を追加", "XP Generator を追加", "Sapling Upgrade を追加", "Sawmill ブロックに新機能を追加 (テスト中)", "核爆弾を追加 (テスト中)", "レンガ状の黒曜石と通常の黒曜石のバリエーションを追加", "Sakura バイオームに Piglin、ゾンビ化した Piglin、Hoglin が出現するように追加"] },
          { "type": "fix", "heading": "修正:", "items": ["Extermate のアリーナのチェストから複数のアイテムが出るようになりました。", "Nether の Sakura の木の数を変更しました。", "Extermate のアリーナが Nether の荒地に生成されるようになりました。", "Extermate のアリーナがより頻繁に生成されるようになりました (追加検証が必要です。参加したい方はぜひご協力ください)。"] }
        ],
        "ko": [
          { "type": "info", "heading": "정보:", "items": ["오랫동안 모드 업데이트가 없었는데 기다려 주셔서 감사합니다. 정식 버전(베타가 아닌 버전)을 공개하기 전에 여러분의 참여를 부탁드리고 싶습니다. “Desert” 업데이트 아이디어가 있다면 알려 주세요. 꿈을 실현하고 싶다면 어디서 저를 찾을 수 있는지 아실 겁니다."] },
          { "type": "add", "heading": "추가:", "items": ["응축 XP 병 추가", "Experience Core 추가", "XP Generator 추가", "Sapling Upgrade 추가", "Sawmill 블록의 새로운 기능 추가 (테스트 중)", "핵폭탄 추가 (테스트 중)", "벽돌 형태와 일반 형태의 흑요석 변형 추가", "Sakura 생물 군계에 Piglin, 좀비화된 Piglin, Hoglin이 생성되도록 추가"] },
          { "type": "fix", "heading": "수정:", "items": ["Extermate 투기장의 상자에서 이제 아이템을 여러 개 얻을 수 있습니다.", "Nether의 Sakura 나무 수를 변경했습니다.", "Extermate 투기장이 이제 Nether 황무지에도 생성될 수 있습니다.", "Extermate 투기장이 더 자주 생성됩니다 (추가 확인이 필요합니다. 참여하고 싶다면 언제든지 환영합니다)."] }
        ],
        "pt-br": [
          { "type": "info", "heading": "Informação:", "items": ["Obrigado pela paciência durante este longo período sem atualizações. Antes de publicar uma versão definitiva (não beta), gostaria que vocês participassem: se tiverem ideias para uma atualização “Desert”, contem para mim. Se quiserem ver seu sonho se tornar realidade, sabem onde me encontrar."] },
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionada uma garrafa de XP condensada.", "Adicionado o Experience Core.", "Adicionado o XP Generator.", "Adicionado o Sapling Upgrade.", "Novo recurso para o bloco Sawmill (em teste).", "Adicionada uma bomba nuclear (em teste).", "Adicionada uma variante de obsidiana em tijolos e outra normal.", "Adicionado o surgimento de Piglin, Piglin zumbificado e Hoglin no bioma Sakura."] },
          { "type": "fix", "heading": "Correções:", "items": ["Os baús na arena de Extermate agora fornecem mais de um item.", "Quantidade de árvores Sakura no Nether alterada.", "A arena de Extermate agora pode aparecer nas terras áridas do Nether.", "A arena de Extermate aparece com mais frequência (ainda precisa de mais verificações; se quiser participar, fique à vontade)."] }
        ]
      }
    },
    {
      "version": "1.1.0",
      "date": "2025-04-14",
      "loader": "Forge, NeoForge",
      "mcVersion": "1.21.4",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout du lingot de scarlet (peut être crafter avec 9 lingots du mod)"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "Le casque de vision nocturne et de régénération peuvent être réparer avec le lingot de scarlet",
              "L'echange de tete de wither contre deux etoiles du nether est désormais au niveau master du miner",
              "Correction où le baton du creeper céruléen ne dropait pas"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Added :",
            "items": [
              "Added the scarlet ingot (can be crafted with 9 mod ingots)"
            ]
          },
          {
            "type": "fix",
            "heading": "Fix :",
            "items": [
              "The night vision and regeneration helmets can be repaired with the scarlet ingot",
              "The exchange of wither head for two nether stars is now at the master level of the miner",
              "Fix where the cerulean creeper stick was not dropping"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunto il lingotto Scarlet (si può fabbricare con 9 lingotti del mod)."] },
          { "type": "fix", "heading": "Correzioni:", "items": ["Gli elmi della visione notturna e della rigenerazione ora possono essere riparati con il lingotto Scarlet.", "Lo scambio della testa di Wither con due stelle del Nether è ora disponibile al livello maestro del minatore.", "Corretto il problema per cui il bastone del Cerulean Creeper non veniva rilasciato."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadido el lingote Scarlet (se puede fabricar con 9 lingotes del mod)."] },
          { "type": "fix", "heading": "Correcciones:", "items": ["Ahora se pueden reparar los cascos de visión nocturna y regeneración con el lingote Scarlet.", "El intercambio de una cabeza de Wither por dos estrellas del Nether ahora está disponible en el nivel maestro del minero.", "Corregido el problema por el que no se soltaba el bastón del Cerulean Creeper."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Scarlet-Barren hinzugefügt (aus 9 Mod-Barren herstellbar)."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["Helme der Nachtsicht und Regeneration können jetzt mit einem Scarlet-Barren repariert werden.", "Der Tausch eines Wither-Schädels gegen zwei Nethersterne ist jetzt auf der Meisterstufe des Miners verfügbar.", "Fehler behoben, durch den der Cerulean-Creeper-Stab nicht gedroppt wurde."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["Scarlet インゴットを追加 (Mod のインゴット 9 個でクラフト可能)。"] },
          { "type": "fix", "heading": "修正:", "items": ["暗視と再生のヘルメットを Scarlet インゴットで修理できるようになりました。", "Wither の頭を Nether Star 2 個と交換する取引が、鉱夫のマスターレベルで利用可能になりました。", "Cerulean Creeper の杖がドロップしない問題を修正しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["Scarlet 주괴 추가 (모드 주괴 9개로 제작 가능)."] },
          { "type": "fix", "heading": "수정:", "items": ["야간 투시 및 재생 투구를 이제 Scarlet 주괴로 수리할 수 있습니다.", "위더 머리를 네더의 별 2개와 교환하는 거래가 광부 마스터 레벨에서 가능해졌습니다.", "Cerulean Creeper 막대가 드롭되지 않던 문제를 수정했습니다."] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionado o lingote Scarlet (pode ser fabricado com 9 lingotes do mod)."] },
          { "type": "fix", "heading": "Correções:", "items": ["Os capacetes de visão noturna e regeneração agora podem ser reparados com o lingote Scarlet.", "A troca de uma cabeça de Wither por duas estrelas do Nether agora está disponível no nível mestre do minerador.", "Corrigido o problema que impedia o bastão do Cerulean Creeper de ser obtido como drop."] }
        ]
      }
    },
    {
      "version": "1.2.1",
      "date": "2025-04-14",
      "loader": "Forge, NeoForge",
      "mcVersion": "1.21.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout du lingot de scarlet (peut être crafter avec 9 lingots du mod)"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "Le casque de vision nocturne et de régénération peuvent être réparer avec le lingot de scarlet",
              "L'echange de tete de wither contre deux etoiles du nether est désormais au niveau master du miner",
              "Correction où le baton du creeper céruléen ne dropait pas"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Added :",
            "items": [
              "Added the scarlet ingot (can be crafted with 9 mod ingots)"
            ]
          },
          {
            "type": "fix",
            "heading": "Fix :",
            "items": [
              "The night vision and regeneration helmets can be repaired with the scarlet ingot",
              "The exchange of wither head for two nether stars is now at the master level of the miner",
              "Fix where the cerulean creeper stick was not dropping"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunto il lingotto Scarlet (si può fabbricare con 9 lingotti del mod)."] },
          { "type": "fix", "heading": "Correzioni:", "items": ["Gli elmi della visione notturna e della rigenerazione ora possono essere riparati con il lingotto Scarlet.", "Lo scambio della testa di Wither con due stelle del Nether è ora disponibile al livello maestro del minatore.", "Corretto il problema per cui il bastone del Cerulean Creeper non veniva rilasciato."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadido el lingote Scarlet (se puede fabricar con 9 lingotes del mod)."] },
          { "type": "fix", "heading": "Correcciones:", "items": ["Ahora se pueden reparar los cascos de visión nocturna y regeneración con el lingote Scarlet.", "El intercambio de una cabeza de Wither por dos estrellas del Nether ahora está disponible en el nivel maestro del minero.", "Corregido el problema por el que no se soltaba el bastón del Cerulean Creeper."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Scarlet-Barren hinzugefügt (aus 9 Mod-Barren herstellbar)."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["Helme der Nachtsicht und Regeneration können jetzt mit einem Scarlet-Barren repariert werden.", "Der Tausch eines Wither-Schädels gegen zwei Nethersterne ist jetzt auf der Meisterstufe des Miners verfügbar.", "Fehler behoben, durch den der Cerulean-Creeper-Stab nicht gedroppt wurde."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["Scarlet インゴットを追加 (Mod のインゴット 9 個でクラフト可能)。"] },
          { "type": "fix", "heading": "修正:", "items": ["暗視と再生のヘルメットを Scarlet インゴットで修理できるようになりました。", "Wither の頭を Nether Star 2 個と交換する取引が、鉱夫のマスターレベルで利用可能になりました。", "Cerulean Creeper の杖がドロップしない問題を修正しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["Scarlet 주괴 추가 (모드 주괴 9개로 제작 가능)."] },
          { "type": "fix", "heading": "수정:", "items": ["야간 투시 및 재생 투구를 이제 Scarlet 주괴로 수리할 수 있습니다.", "위더 머리를 네더의 별 2개와 교환하는 거래가 광부 마스터 레벨에서 가능해졌습니다.", "Cerulean Creeper 막대가 드롭되지 않던 문제를 수정했습니다."] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionado o lingote Scarlet (pode ser fabricado com 9 lingotes do mod)."] },
          { "type": "fix", "heading": "Correções:", "items": ["Os capacetes de visão noturna e regeneração agora podem ser reparados com o lingote Scarlet.", "A troca de uma cabeça de Wither por duas estrelas do Nether agora está disponível no nível mestre do minerador.", "Corrigido o problema que impedia o bastão do Cerulean Creeper de ser obtido como drop."] }
        ]
      }
    },
    {
      "version": "1.0.0",
      "date": "2025-04-08",
      "loader": "Forge, NeoForge",
      "mcVersion": "1.21.4",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout d'un craft pour le motif de bannière :Globe, piglin(groin), tourbillon et rafaleur",
              "Ajout d'un craft pour le trident",
              "Ajout d'un craft pour la tête de dragon",
              "Ajout du craft pour l'œuf du creaking",
              "Ajout de la cuisson de la cobblestone dans le haut fourneau(2s)",
              "Ajout d'un craft pour la netherite upgrade (netherrack + diamant )",
              "Ajout d'une croix sur l'interface du spawner de collosum",
              "Ajout d'une porte en résine",
              "Ajout d'une fleur (Ecliptia) (in mushroom fields)"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "Suppression du support du mod avec Jei",
              "Suppression du support des modèles de forge avec les armures",
              "Changement de « Purifieur » en « purificateur » dans la version française",
              "Restructuration de la langue française"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Added :",
            "items": [
              "Added a craft for the banner pattern :Globe, piglin(groin), flow and guster",
              "Added a craft for the trident",
              "Added a craft for the dragon head",
              "Added the craft for the creaking egg",
              "Added the cooking of cobblestone in the blast furnace (2s)",
              "Added a craft for the netherite upgrade (netherrack + diamond)",
              "Added a cross on the collosum spawner interface",
              "Added a door made of resin",
              "Added a flower (Ecliptia) (in mushroom fields)"
            ]
          },
          {
            "type": "fix",
            "heading": "Fix :",
            "items": [
              "Removed support for the mod with Jei",
              "Removed support for forge models with armors",
              "Changed “Purifieur” to “purificateur” in the French version",
              "Restructured the French language"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunta la ricetta per il modello di stendardo Globe, Snout, Flow e Guster.", "Aggiunta una ricetta per il tridente.", "Aggiunta una ricetta per la testa di drago.", "Aggiunta la ricetta per l’uovo di Creaking.", "Aggiunta la cottura della cobblestone nell’altoforno (2 s).", "Aggiunta una ricetta per il potenziamento della netherite (netherrack + diamante).", "Aggiunta una croce all’interfaccia dello spawner di Collosum.", "Aggiunta una porta di resina.", "Aggiunto il fiore Ecliptia (nei Mushroom Fields)."] },
          { "type": "fix", "heading": "Correzioni:", "items": ["Rimosso il supporto della mod per JEI.", "Rimosso il supporto dei modelli Forge per le armature.", "Modificato “Purifieur” in “purificateur” nella versione francese.", "Ristrutturata la lingua francese."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadida la receta del diseño de estandarte Globe, Snout, Flow y Guster.", "Añadida una receta para el tridente.", "Añadida una receta para la cabeza de dragón.", "Añadida la receta del huevo de Creaking.", "Añadida la cocción de cobblestone en el alto horno (2 s).", "Añadida una receta para la mejora de netherita (netherrack + diamante).", "Añadida una cruz a la interfaz del generador de Collosum.", "Añadida una puerta de resina.", "Añadida la flor Ecliptia (en Mushroom Fields)."] },
          { "type": "fix", "heading": "Correcciones:", "items": ["Eliminado el soporte del mod para JEI.", "Eliminado el soporte de modelos Forge para las armaduras.", "Cambiado «Purifieur» por «purificateur» en la versión francesa.", "Reestructurado el idioma francés."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Rezept für die Bannervorlagen Globe, Snout, Flow und Guster hinzugefügt.", "Rezept für den Dreizack hinzugefügt.", "Rezept für den Drachenkopf hinzugefügt.", "Rezept für das Creaking-Ei hinzugefügt.", "Cobblestone kann jetzt im Hochofen geschmolzen werden (2 s).", "Rezept für die Netherite-Aufrüstung hinzugefügt (Netherrack + Diamant).", "Ein Kreuz zur Collosum-Spawner-Oberfläche hinzugefügt.", "Harztür hinzugefügt.", "Blume Ecliptia hinzugefügt (in Mushroom Fields)."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["JEI-Unterstützung für die Mod entfernt.", "Unterstützung für Forge-Modelle bei Rüstungen entfernt.", "„Purifieur“ in der französischen Version zu „purificateur“ geändert.", "Französische Sprache überarbeitet."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["バナーパターン Globe、Snout、Flow、Guster のレシピを追加しました。", "トライデントのレシピを追加しました。", "ドラゴンの頭のレシピを追加しました。", "Creaking の卵のレシピを追加しました。", "丸石を溶鉱炉で焼けるようになりました (2 秒)。", "ネザライト強化のレシピを追加しました (ネザーラック + ダイヤモンド)。", "Collosum スポナーの画面に×ボタンを追加しました。", "樹脂のドアを追加しました。", "花 Ecliptia を追加しました (Mushroom Fields)。"] },
          { "type": "fix", "heading": "修正:", "items": ["JEI 向けの Mod サポートを削除しました。", "防具の Forge モデルサポートを削除しました。", "フランス語版で「Purifieur」を「purificateur」に変更しました。", "フランス語を再構成しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["배너 무늬 Globe, Snout, Flow, Guster의 제작법을 추가했습니다.", "삼지창 제작법을 추가했습니다.", "드래곤 머리 제작법을 추가했습니다.", "Creaking 알 제작법을 추가했습니다.", "용광로에서 조약돌을 구울 수 있게 했습니다 (2초).", "네더라이트 강화 제작법을 추가했습니다 (네더랙 + 다이아몬드).", "Collosum 생성기 인터페이스에 닫기 표시를 추가했습니다.", "수지 문을 추가했습니다.", "꽃 Ecliptia를 추가했습니다 (Mushroom Fields)."] },
          { "type": "fix", "heading": "수정:", "items": ["JEI용 모드 지원을 제거했습니다.", "방어구의 Forge 모델 지원을 제거했습니다.", "프랑스어 버전에서 “Purifieur”를 “purificateur”로 변경했습니다.", "프랑스어를 재구성했습니다."] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionada a receita dos estandartes Globe, Snout, Flow e Guster.", "Adicionada uma receita para o tridente.", "Adicionada uma receita para a cabeça de dragão.", "Adicionada a receita do ovo de Creaking.", "Adicionado o cozimento de cobblestone no alto-forno (2 s).", "Adicionada uma receita para o aprimoramento de netherita (netherrack + diamante).", "Adicionado um X à interface do gerador de Collosum.", "Adicionada uma porta de resina.", "Adicionada a flor Ecliptia (em Mushroom Fields)."] },
          { "type": "fix", "heading": "Correções:", "items": ["Removido o suporte do mod para JEI.", "Removido o suporte a modelos Forge para armaduras.", "“Purifieur” foi alterado para “purificateur” na versão francesa.", "Idioma francês reestruturado."] }
        ]
      }
    },
    {
      "version": "1.2.0",
      "date": "2025-04-08",
      "loader": "Forge, NeoForge",
      "mcVersion": "1.21.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout d'un craft pour le motif de bannière :Globe, piglin(groin), tourbillon et rafaleur",
              "Ajout d'un craft pour le trident",
              "Ajout d'un craft pour la tête de dragon",
              "Ajout du craft pour l'œuf du creaking (impossible de l'obtenir pour la 1.21.1 en survie et créatif)",
              "Ajout de la cuisson de la cobblestone dans le haut fourneau(2s)",
              "Ajout d'un craft pour la netherite upgrade (netherrack + diamant )",
              "Ajout d'une croix sur l'interface du spawner de collosum",
              "Ajout d'une porte en résine (impossible de l'obtenir en survie pour la 1.21.1)",
              "Ajout d'une fleur (Ecliptia) (in mushroom fields)"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "Suppression du support du mod avec Jei",
              "Suppression du support des modèles de forge avec les armures",
              "Changement de « Purifieur » en « purificateur » dans la version française",
              "Restructuration de la langue française"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Added :",
            "items": [
              "Added a craft for the banner pattern :Globe, piglin(groin), flow and guster",
              "Added a craft for the trident",
              "Added a craft for the dragon head",
              "Added the craft for the creaking egg (impossible to obtain it for 1.21.1 in survival and creative)",
              "Added the cooking of cobblestone in the blast furnace (2s)",
              "Added a craft for the netherite upgrade (netherrack + diamond)",
              "Added a cross on the collosum spawner interface",
              "Added a door made of resin (impossible to obtain it in survival for 1.21.1)",
              "Added a flower (Ecliptia) (in mushroom fields)"
            ]
          },
          {
            "type": "fix",
            "heading": "Fix :",
            "items": [
              "Removed support for the mod with Jei",
              "Removed support for forge models with armors",
              "Changed “Purifieur” to “purificateur” in the French version",
              "Restructured the French language"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunta la ricetta per il modello di stendardo Globe, Snout, Flow e Guster.", "Aggiunta una ricetta per il tridente.", "Aggiunta una ricetta per la testa di drago.", "Aggiunta la ricetta per l’uovo di Creaking (non ottenibile in modalità sopravvivenza o creativa nella versione 1.21.1).", "Aggiunta la cottura della cobblestone nell’altoforno (2 s).", "Aggiunta una ricetta per il potenziamento della netherite (netherrack + diamante).", "Aggiunta una croce all’interfaccia dello spawner di Collosum.", "Aggiunta una porta di resina (non ottenibile in modalità sopravvivenza nella versione 1.21.1).", "Aggiunto il fiore Ecliptia (nei Mushroom Fields)."] },
          { "type": "fix", "heading": "Correzioni:", "items": ["Rimosso il supporto della mod per JEI.", "Rimosso il supporto dei modelli Forge per le armature.", "Modificato “Purifieur” in “purificateur” nella versione francese.", "Ristrutturata la lingua francese."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadida la receta del diseño de estandarte Globe, Snout, Flow y Guster.", "Añadida una receta para el tridente.", "Añadida una receta para la cabeza de dragón.", "Añadida la receta del huevo de Creaking (no se puede obtener en supervivencia ni en creativo en la versión 1.21.1).", "Añadida la cocción de cobblestone en el alto horno (2 s).", "Añadida una receta para la mejora de netherita (netherrack + diamante).", "Añadida una cruz a la interfaz del generador de Collosum.", "Añadida una puerta de resina (no se puede obtener en supervivencia en la versión 1.21.1).", "Añadida la flor Ecliptia (en Mushroom Fields)."] },
          { "type": "fix", "heading": "Correcciones:", "items": ["Eliminado el soporte del mod para JEI.", "Eliminado el soporte de modelos Forge para las armaduras.", "Cambiado «Purifieur» por «purificateur» en la versión francesa.", "Reestructurado el idioma francés."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Rezept für die Bannervorlagen Globe, Snout, Flow und Guster hinzugefügt.", "Rezept für den Dreizack hinzugefügt.", "Rezept für den Drachenkopf hinzugefügt.", "Rezept für das Creaking-Ei hinzugefügt (in Version 1.21.1 weder im Überlebens- noch im Kreativmodus erhältlich).", "Cobblestone kann jetzt im Hochofen geschmolzen werden (2 s).", "Rezept für die Netherite-Aufrüstung hinzugefügt (Netherrack + Diamant).", "Ein Kreuz zur Collosum-Spawner-Oberfläche hinzugefügt.", "Harztür hinzugefügt (in Version 1.21.1 im Überlebensmodus nicht erhältlich).", "Blume Ecliptia hinzugefügt (in Mushroom Fields)."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["JEI-Unterstützung für die Mod entfernt.", "Unterstützung für Forge-Modelle bei Rüstungen entfernt.", "„Purifieur“ in der französischen Version zu „purificateur“ geändert.", "Französische Sprache überarbeitet."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["バナーパターン Globe、Snout、Flow、Guster のレシピを追加しました。", "トライデントのレシピを追加しました。", "ドラゴンの頭のレシピを追加しました。", "Creaking の卵のレシピを追加しました (バージョン 1.21.1 ではサバイバル・クリエイティブのどちらでも入手できません)。", "丸石を溶鉱炉で焼けるようになりました (2 秒)。", "ネザライト強化のレシピを追加しました (ネザーラック + ダイヤモンド)。", "Collosum スポナーの画面に×ボタンを追加しました。", "樹脂のドアを追加しました (バージョン 1.21.1 のサバイバルでは入手できません)。", "花 Ecliptia を追加しました (Mushroom Fields)。"] },
          { "type": "fix", "heading": "修正:", "items": ["JEI 向けの Mod サポートを削除しました。", "防具の Forge モデルサポートを削除しました。", "フランス語版で「Purifieur」を「purificateur」に変更しました。", "フランス語を再構成しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["배너 무늬 Globe, Snout, Flow, Guster의 제작법을 추가했습니다.", "삼지창 제작법을 추가했습니다.", "드래곤 머리 제작법을 추가했습니다.", "Creaking 알 제작법을 추가했습니다 (1.21.1에서는 서바이벌과 크리에이티브 모두에서 얻을 수 없습니다).", "용광로에서 조약돌을 구울 수 있게 했습니다 (2초).", "네더라이트 강화 제작법을 추가했습니다 (네더랙 + 다이아몬드).", "Collosum 생성기 인터페이스에 닫기 표시를 추가했습니다.", "수지 문을 추가했습니다 (1.21.1 서바이벌에서는 얻을 수 없습니다).", "꽃 Ecliptia를 추가했습니다 (Mushroom Fields)."] },
          { "type": "fix", "heading": "수정:", "items": ["JEI용 모드 지원을 제거했습니다.", "방어구의 Forge 모델 지원을 제거했습니다.", "프랑스어 버전에서 “Purifieur”를 “purificateur”로 변경했습니다.", "프랑스어를 재구성했습니다."] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionada a receita dos estandartes Globe, Snout, Flow e Guster.", "Adicionada uma receita para o tridente.", "Adicionada uma receita para a cabeça de dragão.", "Adicionada a receita do ovo de Creaking (não pode ser obtido nos modos sobrevivência ou criativo na versão 1.21.1).", "Adicionado o cozimento de cobblestone no alto-forno (2 s).", "Adicionada uma receita para o aprimoramento de netherita (netherrack + diamante).", "Adicionado um X à interface do gerador de Collosum.", "Adicionada uma porta de resina (não pode ser obtida no modo sobrevivência na versão 1.21.1).", "Adicionada a flor Ecliptia (em Mushroom Fields)."] },
          { "type": "fix", "heading": "Correções:", "items": ["Removido o suporte do mod para JEI.", "Removido o suporte a modelos Forge para armaduras.", "“Purifieur” foi alterado para “purificateur” na versão francesa.", "Idioma francês reestruturado."] }
        ]
      }
    },
    {
      "version": "1.1.1",
      "date": "2025-03-08",
      "loader": "Forge, NeoForge",
      "mcVersion": "1.21.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              {
                "text": "Ajout d'une rune des éléments",
                "childrenListType": "ordered",
                "children": [
                  "(amélioration en netherite + 8 colorants du mod)"
                ]
              },
              {
                "text": "Ajout du casque de vision nocturne",
                "childrenListType": "ordered",
                "children": [
                  "( dans la table de forge, rune des éléments + casque + colorant de l'espace )"
                ]
              },
              {
                "text": "Ajout du casque de regeneration",
                "childrenListType": "ordered",
                "children": [
                  "( dans la table de forge, rune des éléments + casque + sceau d'élixir de vie )"
                ]
              }
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "Correction des dégâts d'attaques de l'épée en dioptasium qui était trop faible",
              "Correction de la langue en anglais de l'armure en paladium, multicolor, space"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Added :",
            "items": [
              {
                "text": "Added an elemental rune",
                "childrenListType": "ordered",
                "children": [
                  "(netherite upgrade + 8 mod dyes)"
                ]
              },
              {
                "text": "Added the night vision helmet",
                "childrenListType": "ordered",
                "children": [
                  "(in the forge table, elemental rune + helmet + space dye)"
                ]
              },
              {
                "text": "Added the regeneration helmet",
                "childrenListType": "ordered",
                "children": [
                  "(in the forge table, elemental rune + helmet + elixir of life seal)"
                ]
              }
            ]
          },
          {
            "type": "fix",
            "heading": "Fix :",
            "items": [
              "Fixed the attack damage of the dioptasium sword which was too low",
              "Fixed the English language of the paladium, multicolor, space armor"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": [
            { "text": "Aggiunta una runa elementale", "childrenListType": "ordered", "children": ["(potenziamento della netherite + 8 coloranti del mod)"] },
            { "text": "Aggiunto l’elmo della visione notturna", "childrenListType": "ordered", "children": ["(al tavolo da forgiatura: runa elementale + elmo + colorante spaziale)"] },
            { "text": "Aggiunto l’elmo della rigenerazione", "childrenListType": "ordered", "children": ["(al tavolo da forgiatura: runa elementale + elmo + sigillo dell’Elisir di Vita)"] }
          ] },
          { "type": "fix", "heading": "Correzioni:", "items": ["Corretto il danno d’attacco della spada in Dioptasium, che era troppo basso.", "Corrette le traduzioni inglesi delle armature in Paladium, Multicolor e Space."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": [
            { "text": "Añadida una runa elemental", "childrenListType": "ordered", "children": ["(mejora de netherita + 8 tintes del mod)"] },
            { "text": "Añadido el casco de visión nocturna", "childrenListType": "ordered", "children": ["(en la mesa de herrería: runa elemental + casco + tinte espacial)"] },
            { "text": "Añadido el casco de regeneración", "childrenListType": "ordered", "children": ["(en la mesa de herrería: runa elemental + casco + sello del Elixir de vida)"] }
          ] },
          { "type": "fix", "heading": "Correcciones:", "items": ["Corregido el daño de ataque de la espada de Dioptasium, que era demasiado bajo.", "Corregidas las traducciones al inglés de las armaduras de Paladium, Multicolor y Space."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": [
            { "text": "Elementarrune hinzugefügt", "childrenListType": "ordered", "children": ["(Netherite-Aufrüstung + 8 Mod-Farbstoffe)"] },
            { "text": "Nachtsichthelm hinzugefügt", "childrenListType": "ordered", "children": ["(am Schmiedetisch: Elementarrune + Helm + Space-Farbstoff)"] },
            { "text": "Regenerationshelm hinzugefügt", "childrenListType": "ordered", "children": ["(am Schmiedetisch: Elementarrune + Helm + Siegel des Lebenselixiers)"] }
          ] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["Angriffsschaden des Dioptasium-Schwerts erhöht, der zuvor zu niedrig war.", "Englische Übersetzungen der Paladium-, Multicolor- und Space-Rüstungen korrigiert."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": [
            { "text": "元素のルーンを追加", "childrenListType": "ordered", "children": ["(ネザライト強化 + Mod の染料 8 個)"] },
            { "text": "暗視のヘルメットを追加", "childrenListType": "ordered", "children": ["(鍛冶台で、元素のルーン + ヘルメット + Space の染料)"] },
            { "text": "再生のヘルメットを追加", "childrenListType": "ordered", "children": ["(鍛冶台で、元素のルーン + ヘルメット + Elixir of Life の印章)"] }
          ] },
          { "type": "fix", "heading": "修正:", "items": ["Dioptasium の剣の攻撃ダメージが低すぎた問題を修正しました。", "Paladium、Multicolor、Space の防具の英語表記を修正しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": [
            { "text": "원소 룬 추가", "childrenListType": "ordered", "children": ["(네더라이트 강화 + 모드 염료 8개)"] },
            { "text": "야간 투시 투구 추가", "childrenListType": "ordered", "children": ["(대장장이 작업대에서 원소 룬 + 투구 + Space 염료)"] },
            { "text": "재생 투구 추가", "childrenListType": "ordered", "children": ["(대장장이 작업대에서 원소 룬 + 투구 + Elixir of Life 인장)"] }
          ] },
          { "type": "fix", "heading": "수정:", "items": ["Dioptasium 검의 공격 피해가 너무 낮던 문제를 수정했습니다.", "Paladium, Multicolor, Space 방어구의 영어 번역을 수정했습니다."] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": [
            { "text": "Adicionada uma runa elemental", "childrenListType": "ordered", "children": ["(aprimoramento de netherita + 8 corantes do mod)"] },
            { "text": "Adicionado o capacete de visão noturna", "childrenListType": "ordered", "children": ["(na mesa de ferraria: runa elemental + capacete + corante espacial)"] },
            { "text": "Adicionado o capacete de regeneração", "childrenListType": "ordered", "children": ["(na mesa de ferraria: runa elemental + capacete + selo do Elixir da Vida)"] }
          ] },
          { "type": "fix", "heading": "Correções:", "items": ["Corrigido o dano de ataque da espada de Dioptasium, que estava muito baixo.", "Corrigidas as traduções em inglês das armaduras de Paladium, Multicolor e Space."] }
        ]
      }
    },
    {
      "version": "1.1.0",
      "date": "2025-02-13",
      "loader": "Forge, NeoForge",
      "mcVersion": "1.21.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout du craft de 6 armors trims (bolt, flow, host, shaper, raiser, wayfinder)",
              "Ajout du craft du heavy core",
              "Ajout d'un nouveau minerai présent dans l'end la « nyxite »",
              "Ajout d'un nouveau type d'armure et d'outils en nyxite",
              "Ajout d'un bâton en auriacier (aurasteel) (alliage cuivre et nickel)",
              "Ajout de l'avancement « Jusqu'à la fin »"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "Modification de l'avancement « Découvertes géologiques » pour integrer le nyxite",
              "Modification de l'avancement « Jusqu'à la fin » pour intégrer le nyxite",
              "Changement de la recette du lingot en multicolor : remplacement du lingot en netherite pour celui de nyxite",
              "Désormais le ondegel prendra feu lorsqu'il fera jour (même sous un blocs)",
              "Changement du niveau d'outils pour récolter le minerai de paladium qui passe du fer à la pierre",
              "Changement du niveau d'outils pour récolter le minerai de red et du minerai de red du nether qui passe du diamant au fer",
              {
                "text": "Changement des vitesses d'attaques des épées :",
                "childrenListType": "ordered",
                "children": [
                  "Paladium : 1,7 → 1,7 ( Aucun changement )",
                  "Red : 1,7 → 1,9 ( Augmentation )",
                  "Amazonite : 4 → 2,2 ( Réduction )",
                  "Dioptasium : 2,0 → 3,5 ( Augmentation )",
                  "Multicolor : 2,0 → 7,0 ( Augmentation )"
                ]
              },
              {
                "text": "Changement des dégâts d'attaques des épées :",
                "childrenListType": "ordered",
                "children": [
                  "Paladium : ( Aucun changement )",
                  "Red : 8 → 9 ( Augmentation )",
                  "Amazonite : 15 → 22 ( Augmentation )",
                  "Dioptasium : 16 → 16 ( Aucun changement )",
                  "Multicolor : 42 → 42 ( Aucun changement )"
                ]
              },
              {
                "text": "Changement des vitesses d'attaque et des dégâts d'attaque des haches :",
                "childrenListType": "ordered",
                "children": [
                  "Paladium : 1 → 1 ( Aucun changement ) et 10 → 7 ( Réduction )",
                  "Red : 1 → 1 ( Aucun changement ) et 9 → 9 ( Aucun changement )",
                  "Amazonite : 4 → 1 ( Réduction ) et 16 → 10 ( Réduction )",
                  "Dioptasium : 1 → 1 ( Aucun changement ) et 9 → 12 ( Augmentation )",
                  "Multicolor : 1 → 1 ( Aucun changement ) et 20 → 20 ( Aucun changement )"
                ]
              },
              {
                "text": "Changement des vitesses d'attques et des degats d'attaques des pioches :",
                "childrenListType": "ordered",
                "children": [
                  "Paladium : 1 → 1,2 ( Augmentation ) et 2 → 2 ( Aucun changement )",
                  "Red : 1 → 1,2 ( Augmentation ) et 5 → 3 ( Réduction )",
                  "Amazonite : 4 → 1,2 ( Réduction ) et 6 → 4 ( Réduction )",
                  "Dioptasium : 1 → 1,2 ( Augmentation ) et 4 → 5 ( Augmentation )",
                  "Multicolor : 2 → 1,2 ( Réduction ) et 4 → 7 ( Augmentation )"
                ]
              },
              {
                "text": "Changement des vitesses d'attaques et des degats d'attaques des houes :",
                "childrenListType": "ordered",
                "children": [
                  "Paladium : 1 → 1 ( Aucun changement ) et 2 → 1 ( Réduction )",
                  "Red : 1 → 2 ( Augmentation ) et 5 → 1 ( Réduction )",
                  "Amazonite : 4 → 3 ( Réduction ) et 4 → 1 ( Réduction )",
                  "Dioptasium : 1 → 4 ( Augmentation ) et 4 → 1 ( Réduction )",
                  "Multicolor : 4 → 6 ( Augmentation ) et 1 → 1 ( Aucun changement )"
                ]
              },
              {
                "text": "Changement des vitesses d'attaques et des degats d'attaques des pelles :",
                "childrenListType": "ordered",
                "children": [
                  "Paladium : 1 → 1 ( Aucun changement ) et 2 → 3,5 ( Augmentation )",
                  "Red : 1 → 1 ( Aucun changement ) et 5 → 4,5 ( Réduction )",
                  "Amazonite : 4 → 1 ( Réduction ) et 4 → 5,5 ( Augmentation )",
                  "Dioptasium : 1 → 1 ( Aucun changement ) et 4 → 6,5 ( Augmentation )",
                  "Multicolor : 1 → 1 ( Aucun changement ) et 3,25 → 8,5 ( Augmentation )"
                ]
              },
              {
                "text": "Changement des vitesses d'attaques et des degats d'attaques des Hammer :",
                "childrenListType": "ordered",
                "children": [
                  "Paladium : 1 → 1 ( Aucun changement ) et 0 → 1 ( Augmentation )",
                  "Red : 1 → 1 ( Aucun changement ) et 2 → 1 ( Réduction )",
                  "Amazonite : 4 → 1 ( Réduction ) et 4 → 1 ( Réduction )",
                  "Dioptasium : 1 → 1 ( Aucun changement ) et 1 → 1 ( Aucun changement )",
                  "Multicolor : 1 → 1 ( Aucun changement ) et 4 → 1 ( Réduction )"
                ]
              }
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Add:",
            "items": [
              "Added the crafting of 6 armor trims (bolt, flow, host, shaper, raiser, wayfinder)",
              "Added the crafting of the heavy core",
              "Added a new ore present in the end called “nyxite”",
              "Added a new type of armor and tools made of nyxite",
              "Added a stick made of aurasteel (copper and nickel alloy)",
              "Added the advancement “To the end”"
            ]
          },
          {
            "type": "fix",
            "heading": "Fix:",
            "items": [
              "Modification of the advancement “Geological discoveries” to integrate the nyxite",
              "Modification of the advancement “To the end” to integrate the nyxite",
              "Change of the recipe for the multicolor ingot: replacement of the netherite ingot with the nyxite ingot",
              "Now the Wavegel will catch fire when it is day (even under a block)",
              "Change of the tool level to harvest the paladium ore which goes from iron to stone",
              "Change of the tool level to harvest the red ore and the nether red ore which goes from diamond to iron",
              {
                "text": "Change of the attack speeds of the swords:",
                "childrenListType": "ordered",
                "children": [
                  "Paladium: 1.7 → 1.7 (No change)",
                  "Red: 1.7 → 1.9 (Increase)",
                  "Amazonite: 1.7 → 1.7 (No change)",
                  "Dioptasium: 2.0 → 3.5 (Increase)",
                  "Multicolor: 2.0 → 7.0 (Increase)"
                ]
              },
              {
                "text": "Change of the attack damage of the swords:",
                "childrenListType": "ordered",
                "children": [
                  "Paladium: 8 → 8 (No change)",
                  "Red: 8 → 9 (Increase)",
                  "Amazonite: 15 → 22 (Increase)",
                  "Dioptasium: 16 → 16 (No change)",
                  "Multicolor: 42 → 42 (No change)"
                ]
              },
              {
                "text": "Change of the attack speeds and attack damage of the axes:",
                "childrenListType": "ordered",
                "children": [
                  "Paladium: 1 → 1 (No change) and 10 → 7 (Decrease)",
                  "Red: 1 → 1 (No change) and 9 → 9 (No change)",
                  "Amazonite: 4 → 1 (Decrease) and 16 → 10 (Decrease)",
                  "Dioptasium: 1 → 1 (No change) and 9 → 12 (Increase)",
                  "Multicolor: 1 → 1 (No change) and 20 → 20 (No change)"
                ]
              },
              {
                "text": "Change of the attack speeds and attack damage of the pickaxes:",
                "childrenListType": "ordered",
                "children": [
                  "Paladium: 1 → 1.2 (Increase) and 2 → 2 (No change)",
                  "Red: 1 → 1.2 (Increase) and 5 → 3 (Decrease)",
                  "Amazonite: 4 → 1.2 (Decrease) and 6 → 4 (Decrease)",
                  "Dioptasium: 1 → 1.2 (Increase) and 4 → 5 (Increase)",
                  "Multicolor: 2 → 1.2 (Decrease) and 4 → 7 (Increase)"
                ]
              },
              {
                "text": "Change of the attack speeds and attack damage of the hoes:",
                "childrenListType": "ordered",
                "children": [
                  "Paladium: 1 → 1 (No change) and 2 → 1 (Decrease)",
                  "Red: 1 → 2 (Increase) and 5 → 1 (Decrease)",
                  "Amazonite: 4 → 3 (Decrease) and 4 → 1 (Decrease)",
                  "Dioptasium: 1 → 4 (Increase) and 4 → 1 (Decrease)",
                  "Multicolor: 4 → 6 (Increase) and 1 → 1 (No change)"
                ]
              },
              {
                "text": "Change of the attack speeds and attack damage of the shovels:",
                "childrenListType": "ordered",
                "children": [
                  "Paladium: 1 → 1 (No change) and 2 → 3.5 (Increase)",
                  "Red: 1 → 1 (No change) and 5 → 4.5 (Decrease)",
                  "Amazonite: 4 → 1 (Decrease) and 4 → 5.5 (Increase)",
                  "Dioptasium: 1 → 1 (No change) and 4 → 6.5 (Increase)",
                  "Multicolor: 1 → 1 (No change) and 3.25 → 8.5 (Increase)"
                ]
              },
              {
                "text": "Change of the attack speeds and attack damage of the hammers:",
                "childrenListType": "ordered",
                "children": [
                  "Paladium: 1 → 1 (No change) and 0 → 1 (Increase)",
                  "Red: 1 → 1 (No change) and 2 → 1 (Decrease)",
                  "Amazonite: 4 → 1 (Decrease) and 4 → 1 (Decrease)",
                  "Dioptasium: 1 → 1 (No change) and 1 → 1 (No change)",
                  "Multicolor: 1 → 1 (No change) and 4 → 1 (Decrease)"
                ]
              }
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunta la ricetta per 6 armor trim (Bolt, Flow, Host, Shaper, Raiser, Wayfinder).", "Aggiunta la ricetta per l’Heavy Core.", "Aggiunto un nuovo minerale chiamato “Nyxite”, presente nell’End.", "Aggiunti una nuova armatura e nuovi strumenti in Nyxite.", "Aggiunto un bastone in Aurasteel (lega di rame e nichel).", "Aggiunto l’avanzamento “To the end”."] },
          { "type": "fix", "heading": "Correzioni:", "items": [
            "Modificato l’avanzamento “Geological discoveries” per includere la Nyxite.",
            "Modificato l’avanzamento “To the end” per includere la Nyxite.",
            "Modificata la ricetta del lingotto Multicolor: il lingotto di netherite è stato sostituito con quello di Nyxite.",
            "Ora il Wavegel prende fuoco durante il giorno, anche sotto un blocco.",
            "Modificato il livello dello strumento necessario per estrarre il minerale di Paladium: da ferro a pietra.",
            "Modificato il livello dello strumento necessario per estrarre il minerale Red e il minerale Red del Nether: da diamante a ferro.",
            { "text": "Modificate le velocità d’attacco delle spade:", "childrenListType": "ordered", "children": ["Paladium: 1.7 → 1.7 (nessuna modifica)", "Red: 1.7 → 1.9 (aumento)", "Amazonite: 1.7 → 1.7 (nessuna modifica)", "Dioptasium: 2.0 → 3.5 (aumento)", "Multicolor: 2.0 → 7.0 (aumento)"] },
            { "text": "Modificato il danno d’attacco delle spade:", "childrenListType": "ordered", "children": ["Paladium: 8 → 8 (nessuna modifica)", "Red: 8 → 9 (aumento)", "Amazonite: 15 → 22 (aumento)", "Dioptasium: 16 → 16 (nessuna modifica)", "Multicolor: 42 → 42 (nessuna modifica)"] },
            { "text": "Modificate le velocità d’attacco e il danno d’attacco delle asce:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (nessuna modifica) e 10 → 7 (riduzione)", "Red: 1 → 1 (nessuna modifica) e 9 → 9 (nessuna modifica)", "Amazonite: 4 → 1 (riduzione) e 16 → 10 (riduzione)", "Dioptasium: 1 → 1 (nessuna modifica) e 9 → 12 (aumento)", "Multicolor: 1 → 1 (nessuna modifica) e 20 → 20 (nessuna modifica)"] },
            { "text": "Modificate le velocità d’attacco e il danno d’attacco dei picconi:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1.2 (aumento) e 2 → 2 (nessuna modifica)", "Red: 1 → 1.2 (aumento) e 5 → 3 (riduzione)", "Amazonite: 4 → 1.2 (riduzione) e 6 → 4 (riduzione)", "Dioptasium: 1 → 1.2 (aumento) e 4 → 5 (aumento)", "Multicolor: 2 → 1.2 (riduzione) e 4 → 7 (aumento)"] },
            { "text": "Modificate le velocità d’attacco e il danno d’attacco delle zappe:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (nessuna modifica) e 2 → 1 (riduzione)", "Red: 1 → 2 (aumento) e 5 → 1 (riduzione)", "Amazonite: 4 → 3 (riduzione) e 4 → 1 (riduzione)", "Dioptasium: 1 → 4 (aumento) e 4 → 1 (riduzione)", "Multicolor: 4 → 6 (aumento) e 1 → 1 (nessuna modifica)"] },
            { "text": "Modificate le velocità d’attacco e il danno d’attacco delle pale:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (nessuna modifica) e 2 → 3.5 (aumento)", "Red: 1 → 1 (nessuna modifica) e 5 → 4.5 (riduzione)", "Amazonite: 4 → 1 (riduzione) e 4 → 5.5 (aumento)", "Dioptasium: 1 → 1 (nessuna modifica) e 4 → 6.5 (aumento)", "Multicolor: 1 → 1 (nessuna modifica) e 3.25 → 8.5 (aumento)"] },
            { "text": "Modificate le velocità d’attacco e il danno d’attacco dei martelli:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (nessuna modifica) e 0 → 1 (aumento)", "Red: 1 → 1 (nessuna modifica) e 2 → 1 (riduzione)", "Amazonite: 4 → 1 (riduzione) e 4 → 1 (riduzione)", "Dioptasium: 1 → 1 (nessuna modifica) e 1 → 1 (nessuna modifica)", "Multicolor: 1 → 1 (nessuna modifica) e 4 → 1 (riduzione)"] }
          ] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadida la receta de 6 adornos de armadura (Bolt, Flow, Host, Shaper, Raiser y Wayfinder).", "Añadida la receta del Heavy Core.", "Añadido un nuevo mineral llamado «Nyxite», presente en el End.", "Añadidos un nuevo tipo de armadura y herramientas de Nyxite.", "Añadido un bastón de Aurasteel (aleación de cobre y níquel).", "Añadido el progreso «To the end»."] },
          { "type": "fix", "heading": "Correcciones:", "items": [
            "Modificado el progreso «Geological discoveries» para incluir Nyxite.",
            "Modificado el progreso «To the end» para incluir Nyxite.",
            "Cambiada la receta del lingote Multicolor: el lingote de netherita se sustituye por uno de Nyxite.",
            "Ahora Wavegel se incendia durante el día, incluso debajo de un bloque.",
            "Cambiado de hierro a piedra el nivel de herramienta necesario para extraer el mineral de Paladium.",
            "Cambiado de diamante a hierro el nivel de herramienta necesario para extraer el mineral Red y el mineral Red del Nether.",
            { "text": "Cambios en la velocidad de ataque de las espadas:", "childrenListType": "ordered", "children": ["Paladium: 1.7 → 1.7 (sin cambios)", "Red: 1.7 → 1.9 (aumento)", "Amazonite: 1.7 → 1.7 (sin cambios)", "Dioptasium: 2.0 → 3.5 (aumento)", "Multicolor: 2.0 → 7.0 (aumento)"] },
            { "text": "Cambios en el daño de ataque de las espadas:", "childrenListType": "ordered", "children": ["Paladium: 8 → 8 (sin cambios)", "Red: 8 → 9 (aumento)", "Amazonite: 15 → 22 (aumento)", "Dioptasium: 16 → 16 (sin cambios)", "Multicolor: 42 → 42 (sin cambios)"] },
            { "text": "Cambios en la velocidad y el daño de ataque de las hachas:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (sin cambios) y 10 → 7 (reducción)", "Red: 1 → 1 (sin cambios) y 9 → 9 (sin cambios)", "Amazonite: 4 → 1 (reducción) y 16 → 10 (reducción)", "Dioptasium: 1 → 1 (sin cambios) y 9 → 12 (aumento)", "Multicolor: 1 → 1 (sin cambios) y 20 → 20 (sin cambios)"] },
            { "text": "Cambios en la velocidad y el daño de ataque de los picos:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1.2 (aumento) y 2 → 2 (sin cambios)", "Red: 1 → 1.2 (aumento) y 5 → 3 (reducción)", "Amazonite: 4 → 1.2 (reducción) y 6 → 4 (reducción)", "Dioptasium: 1 → 1.2 (aumento) y 4 → 5 (aumento)", "Multicolor: 2 → 1.2 (reducción) y 4 → 7 (aumento)"] },
            { "text": "Cambios en la velocidad y el daño de ataque de las azadas:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (sin cambios) y 2 → 1 (reducción)", "Red: 1 → 2 (aumento) y 5 → 1 (reducción)", "Amazonite: 4 → 3 (reducción) y 4 → 1 (reducción)", "Dioptasium: 1 → 4 (aumento) y 4 → 1 (reducción)", "Multicolor: 4 → 6 (aumento) y 1 → 1 (sin cambios)"] },
            { "text": "Cambios en la velocidad y el daño de ataque de las palas:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (sin cambios) y 2 → 3.5 (aumento)", "Red: 1 → 1 (sin cambios) y 5 → 4.5 (reducción)", "Amazonite: 4 → 1 (reducción) y 4 → 5.5 (aumento)", "Dioptasium: 1 → 1 (sin cambios) y 4 → 6.5 (aumento)", "Multicolor: 1 → 1 (sin cambios) y 3.25 → 8.5 (aumento)"] },
            { "text": "Cambios en la velocidad y el daño de ataque de los martillos:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (sin cambios) y 0 → 1 (aumento)", "Red: 1 → 1 (sin cambios) y 2 → 1 (reducción)", "Amazonite: 4 → 1 (reducción) y 4 → 1 (reducción)", "Dioptasium: 1 → 1 (sin cambios) y 1 → 1 (sin cambios)", "Multicolor: 1 → 1 (sin cambios) y 4 → 1 (reducción)"] }
          ] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Rezept für 6 Rüstungsverzierungen hinzugefügt (Bolt, Flow, Host, Shaper, Raiser und Wayfinder).", "Rezept für den Heavy Core hinzugefügt.", "Neues Erz namens „Nyxite“ im End hinzugefügt.", "Neue Rüstung und Werkzeuge aus Nyxite hinzugefügt.", "Stab aus Aurasteel hinzugefügt (Kupfer-Nickel-Legierung).", "Fortschritt „To the end“ hinzugefügt."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": [
            "Fortschritt „Geological discoveries“ um Nyxite erweitert.",
            "Fortschritt „To the end“ um Nyxite erweitert.",
            "Rezept für den Multicolor-Barren geändert: Netherite-Barren durch Nyxite-Barren ersetzt.",
            "Wavegel fängt jetzt tagsüber Feuer, auch unter einem Block.",
            "Abbaustufe für Paladium-Erz von Eisen auf Stein geändert.",
            "Abbaustufe für Red-Erz und Nether-Red-Erz von Diamant auf Eisen geändert.",
            { "text": "Angriffsgeschwindigkeit der Schwerter geändert:", "childrenListType": "ordered", "children": ["Paladium: 1.7 → 1.7 (keine Änderung)", "Red: 1.7 → 1.9 (Erhöhung)", "Amazonite: 1.7 → 1.7 (keine Änderung)", "Dioptasium: 2.0 → 3.5 (Erhöhung)", "Multicolor: 2.0 → 7.0 (Erhöhung)"] },
            { "text": "Angriffsschaden der Schwerter geändert:", "childrenListType": "ordered", "children": ["Paladium: 8 → 8 (keine Änderung)", "Red: 8 → 9 (Erhöhung)", "Amazonite: 15 → 22 (Erhöhung)", "Dioptasium: 16 → 16 (keine Änderung)", "Multicolor: 42 → 42 (keine Änderung)"] },
            { "text": "Angriffsgeschwindigkeit und -schaden der Äxte geändert:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (keine Änderung) und 10 → 7 (Verringerung)", "Red: 1 → 1 (keine Änderung) und 9 → 9 (keine Änderung)", "Amazonite: 4 → 1 (Verringerung) und 16 → 10 (Verringerung)", "Dioptasium: 1 → 1 (keine Änderung) und 9 → 12 (Erhöhung)", "Multicolor: 1 → 1 (keine Änderung) und 20 → 20 (keine Änderung)"] },
            { "text": "Angriffsgeschwindigkeit und -schaden der Spitzhacken geändert:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1.2 (Erhöhung) und 2 → 2 (keine Änderung)", "Red: 1 → 1.2 (Erhöhung) und 5 → 3 (Verringerung)", "Amazonite: 4 → 1.2 (Verringerung) und 6 → 4 (Verringerung)", "Dioptasium: 1 → 1.2 (Erhöhung) und 4 → 5 (Erhöhung)", "Multicolor: 2 → 1.2 (Verringerung) und 4 → 7 (Erhöhung)"] },
            { "text": "Angriffsgeschwindigkeit und -schaden der Hacken geändert:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (keine Änderung) und 2 → 1 (Verringerung)", "Red: 1 → 2 (Erhöhung) und 5 → 1 (Verringerung)", "Amazonite: 4 → 3 (Verringerung) und 4 → 1 (Verringerung)", "Dioptasium: 1 → 4 (Erhöhung) und 4 → 1 (Verringerung)", "Multicolor: 4 → 6 (Erhöhung) und 1 → 1 (keine Änderung)"] },
            { "text": "Angriffsgeschwindigkeit und -schaden der Schaufeln geändert:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (keine Änderung) und 2 → 3.5 (Erhöhung)", "Red: 1 → 1 (keine Änderung) und 5 → 4.5 (Verringerung)", "Amazonite: 4 → 1 (Verringerung) und 4 → 5.5 (Erhöhung)", "Dioptasium: 1 → 1 (keine Änderung) und 4 → 6.5 (Erhöhung)", "Multicolor: 1 → 1 (keine Änderung) und 3.25 → 8.5 (Erhöhung)"] },
            { "text": "Angriffsgeschwindigkeit und -schaden der Hämmer geändert:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (keine Änderung) und 0 → 1 (Erhöhung)", "Red: 1 → 1 (keine Änderung) und 2 → 1 (Verringerung)", "Amazonite: 4 → 1 (Verringerung) und 4 → 1 (Verringerung)", "Dioptasium: 1 → 1 (keine Änderung) und 1 → 1 (keine Änderung)", "Multicolor: 1 → 1 (keine Änderung) und 4 → 1 (Verringerung)"] }
          ] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["6 種類の防具トリム (Bolt、Flow、Host、Shaper、Raiser、Wayfinder) のレシピを追加しました。", "Heavy Core のレシピを追加しました。", "新しい鉱石 Nyxite を追加しました (End に生成)。", "Nyxite 製の新しい防具とツールを追加しました。", "銅とニッケルの合金 Aurasteel 製の杖を追加しました。", "進捗「To the end」を追加しました。"] },
          { "type": "fix", "heading": "修正:", "items": [
            "進捗「Geological discoveries」に Nyxite を追加しました。",
            "進捗「To the end」に Nyxite を追加しました。",
            "Multicolor インゴットのレシピを変更し、ネザライトインゴットを Nyxite インゴットに置き換えました。",
            "Wavegel が昼間にブロックの下にいても燃えるようになりました。",
            "Paladium 鉱石の採掘に必要なツールレベルを鉄から石に変更しました。",
            "Red 鉱石と Nether Red 鉱石の採掘に必要なツールレベルをダイヤモンドから鉄に変更しました。",
            { "text": "剣の攻撃速度を変更しました:", "childrenListType": "ordered", "children": ["Paladium: 1.7 → 1.7 (変更なし)", "Red: 1.7 → 1.9 (増加)", "Amazonite: 1.7 → 1.7 (変更なし)", "Dioptasium: 2.0 → 3.5 (増加)", "Multicolor: 2.0 → 7.0 (増加)"] },
            { "text": "剣の攻撃ダメージを変更しました:", "childrenListType": "ordered", "children": ["Paladium: 8 → 8 (変更なし)", "Red: 8 → 9 (増加)", "Amazonite: 15 → 22 (増加)", "Dioptasium: 16 → 16 (変更なし)", "Multicolor: 42 → 42 (変更なし)"] },
            { "text": "斧の攻撃速度と攻撃ダメージを変更しました:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (変更なし)、10 → 7 (減少)", "Red: 1 → 1 (変更なし)、9 → 9 (変更なし)", "Amazonite: 4 → 1 (減少)、16 → 10 (減少)", "Dioptasium: 1 → 1 (変更なし)、9 → 12 (増加)", "Multicolor: 1 → 1 (変更なし)、20 → 20 (変更なし)"] },
            { "text": "ツルハシの攻撃速度と攻撃ダメージを変更しました:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1.2 (増加)、2 → 2 (変更なし)", "Red: 1 → 1.2 (増加)、5 → 3 (減少)", "Amazonite: 4 → 1.2 (減少)、6 → 4 (減少)", "Dioptasium: 1 → 1.2 (増加)、4 → 5 (増加)", "Multicolor: 2 → 1.2 (減少)、4 → 7 (増加)"] },
            { "text": "クワの攻撃速度と攻撃ダメージを変更しました:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (変更なし)、2 → 1 (減少)", "Red: 1 → 2 (増加)、5 → 1 (減少)", "Amazonite: 4 → 3 (減少)、4 → 1 (減少)", "Dioptasium: 1 → 4 (増加)、4 → 1 (減少)", "Multicolor: 4 → 6 (増加)、1 → 1 (変更なし)"] },
            { "text": "シャベルの攻撃速度と攻撃ダメージを変更しました:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (変更なし)、2 → 3.5 (増加)", "Red: 1 → 1 (変更なし)、5 → 4.5 (減少)", "Amazonite: 4 → 1 (減少)、4 → 5.5 (増加)", "Dioptasium: 1 → 1 (変更なし)、4 → 6.5 (増加)", "Multicolor: 1 → 1 (変更なし)、3.25 → 8.5 (増加)"] },
            { "text": "ハンマーの攻撃速度と攻撃ダメージを変更しました:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (変更なし)、0 → 1 (増加)", "Red: 1 → 1 (変更なし)、2 → 1 (減少)", "Amazonite: 4 → 1 (減少)、4 → 1 (減少)", "Dioptasium: 1 → 1 (変更なし)、1 → 1 (変更なし)", "Multicolor: 1 → 1 (変更なし)、4 → 1 (減少)"] }
          ] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["6종의 방어구 장식(Bolt, Flow, Host, Shaper, Raiser, Wayfinder) 제작법 추가", "Heavy Core 제작법 추가", "End에서 생성되는 신규 광석 Nyxite 추가", "Nyxite 방어구와 도구 추가", "구리와 니켈 합금인 Aurasteel 막대 추가", "“To the end” 발전 과제 추가"] },
          { "type": "fix", "heading": "수정:", "items": [
            "“Geological discoveries” 발전 과제에 Nyxite를 반영했습니다.",
            "“To the end” 발전 과제에 Nyxite를 반영했습니다.",
            "Multicolor 주괴 제작법에서 네더라이트 주괴를 Nyxite 주괴로 교체했습니다.",
            "Wavegel이 낮 동안 블록 아래에 있어도 불이 붙도록 변경했습니다.",
            "Paladium 광석 채굴에 필요한 도구 등급을 철에서 돌로 변경했습니다.",
            "Red 광석과 Nether Red 광석 채굴에 필요한 도구 등급을 다이아몬드에서 철로 변경했습니다.",
            { "text": "검의 공격 속도 변경:", "childrenListType": "ordered", "children": ["Paladium: 1.7 → 1.7 (변경 없음)", "Red: 1.7 → 1.9 (증가)", "Amazonite: 1.7 → 1.7 (변경 없음)", "Dioptasium: 2.0 → 3.5 (증가)", "Multicolor: 2.0 → 7.0 (증가)"] },
            { "text": "검의 공격 피해 변경:", "childrenListType": "ordered", "children": ["Paladium: 8 → 8 (변경 없음)", "Red: 8 → 9 (증가)", "Amazonite: 15 → 22 (증가)", "Dioptasium: 16 → 16 (변경 없음)", "Multicolor: 42 → 42 (변경 없음)"] },
            { "text": "도끼의 공격 속도와 공격 피해 변경:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (변경 없음), 10 → 7 (감소)", "Red: 1 → 1 (변경 없음), 9 → 9 (변경 없음)", "Amazonite: 4 → 1 (감소), 16 → 10 (감소)", "Dioptasium: 1 → 1 (변경 없음), 9 → 12 (증가)", "Multicolor: 1 → 1 (변경 없음), 20 → 20 (변경 없음)"] },
            { "text": "곡괭이의 공격 속도와 공격 피해 변경:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1.2 (증가), 2 → 2 (변경 없음)", "Red: 1 → 1.2 (증가), 5 → 3 (감소)", "Amazonite: 4 → 1.2 (감소), 6 → 4 (감소)", "Dioptasium: 1 → 1.2 (증가), 4 → 5 (증가)", "Multicolor: 2 → 1.2 (감소), 4 → 7 (증가)"] },
            { "text": "괭이의 공격 속도와 공격 피해 변경:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (변경 없음), 2 → 1 (감소)", "Red: 1 → 2 (증가), 5 → 1 (감소)", "Amazonite: 4 → 3 (감소), 4 → 1 (감소)", "Dioptasium: 1 → 4 (증가), 4 → 1 (감소)", "Multicolor: 4 → 6 (증가), 1 → 1 (변경 없음)"] },
            { "text": "삽의 공격 속도와 공격 피해 변경:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (변경 없음), 2 → 3.5 (증가)", "Red: 1 → 1 (변경 없음), 5 → 4.5 (감소)", "Amazonite: 4 → 1 (감소), 4 → 5.5 (증가)", "Dioptasium: 1 → 1 (변경 없음), 4 → 6.5 (증가)", "Multicolor: 1 → 1 (변경 없음), 3.25 → 8.5 (증가)"] },
            { "text": "망치의 공격 속도와 공격 피해 변경:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (변경 없음), 0 → 1 (증가)", "Red: 1 → 1 (변경 없음), 2 → 1 (감소)", "Amazonite: 4 → 1 (감소), 4 → 1 (감소)", "Dioptasium: 1 → 1 (변경 없음), 1 → 1 (변경 없음)", "Multicolor: 1 → 1 (변경 없음), 4 → 1 (감소)"] }
          ] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionada a receita de 6 moldes de armadura (Bolt, Flow, Host, Shaper, Raiser e Wayfinder).", "Adicionada a receita do Heavy Core.", "Adicionado um novo minério chamado Nyxite, encontrado no End.", "Adicionadas armaduras e ferramentas de Nyxite.", "Adicionado um bastão de Aurasteel (liga de cobre e níquel).", "Adicionado o avanço “To the end”."] },
          { "type": "fix", "heading": "Correções:", "items": [
            "Avanço “Geological discoveries” atualizado para incluir Nyxite.",
            "Avanço “To the end” atualizado para incluir Nyxite.",
            "Receita do lingote Multicolor alterada: o lingote de netherita foi substituído pelo de Nyxite.",
            "Wavegel agora pega fogo durante o dia, mesmo sob um bloco.",
            "Nível da ferramenta para minerar o minério de Paladium alterado de ferro para pedra.",
            "Nível da ferramenta para minerar os minérios Red e Nether Red alterado de diamante para ferro.",
            { "text": "Velocidade de ataque das espadas alterada:", "childrenListType": "ordered", "children": ["Paladium: 1.7 → 1.7 (sem alteração)", "Red: 1.7 → 1.9 (aumento)", "Amazonite: 1.7 → 1.7 (sem alteração)", "Dioptasium: 2.0 → 3.5 (aumento)", "Multicolor: 2.0 → 7.0 (aumento)"] },
            { "text": "Dano de ataque das espadas alterado:", "childrenListType": "ordered", "children": ["Paladium: 8 → 8 (sem alteração)", "Red: 8 → 9 (aumento)", "Amazonite: 15 → 22 (aumento)", "Dioptasium: 16 → 16 (sem alteração)", "Multicolor: 42 → 42 (sem alteração)"] },
            { "text": "Velocidade e dano de ataque dos machados alterados:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (sem alteração) e 10 → 7 (redução)", "Red: 1 → 1 (sem alteração) e 9 → 9 (sem alteração)", "Amazonite: 4 → 1 (redução) e 16 → 10 (redução)", "Dioptasium: 1 → 1 (sem alteração) e 9 → 12 (aumento)", "Multicolor: 1 → 1 (sem alteração) e 20 → 20 (sem alteração)"] },
            { "text": "Velocidade e dano de ataque das picaretas alterados:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1.2 (aumento) e 2 → 2 (sem alteração)", "Red: 1 → 1.2 (aumento) e 5 → 3 (redução)", "Amazonite: 4 → 1.2 (redução) e 6 → 4 (redução)", "Dioptasium: 1 → 1.2 (aumento) e 4 → 5 (aumento)", "Multicolor: 2 → 1.2 (redução) e 4 → 7 (aumento)"] },
            { "text": "Velocidade e dano de ataque das enxadas alterados:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (sem alteração) e 2 → 1 (redução)", "Red: 1 → 2 (aumento) e 5 → 1 (redução)", "Amazonite: 4 → 3 (redução) e 4 → 1 (redução)", "Dioptasium: 1 → 4 (aumento) e 4 → 1 (redução)", "Multicolor: 4 → 6 (aumento) e 1 → 1 (sem alteração)"] },
            { "text": "Velocidade e dano de ataque das pás alterados:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (sem alteração) e 2 → 3.5 (aumento)", "Red: 1 → 1 (sem alteração) e 5 → 4.5 (redução)", "Amazonite: 4 → 1 (redução) e 4 → 5.5 (aumento)", "Dioptasium: 1 → 1 (sem alteração) e 4 → 6.5 (aumento)", "Multicolor: 1 → 1 (sem alteração) e 3.25 → 8.5 (aumento)"] },
            { "text": "Velocidade e dano de ataque dos martelos alterados:", "childrenListType": "ordered", "children": ["Paladium: 1 → 1 (sem alteração) e 0 → 1 (aumento)", "Red: 1 → 1 (sem alteração) e 2 → 1 (redução)", "Amazonite: 4 → 1 (redução) e 4 → 1 (redução)", "Dioptasium: 1 → 1 (sem alteração) e 1 → 1 (sem alteração)", "Multicolor: 1 → 1 (sem alteração) e 4 → 1 (redução)"] }
          ] }
        ]
      }
    },
    {
      "version": "1.0.0",
      "date": "2025-01-03",
      "loader": "Forge, NeoForge",
      "mcVersion": "1.21.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Support de Minecraft 1.21.1",
              "Ajout du craft de l'œuf du breeze, de l'embourbé (bogged) et du tatou",
              "Ajout des armors trims tourbillon et des boulons au Customer",
              "Ajout d'un brouillard dans l'élixir de vie et dans l'eau empoisonnée"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "Modification de la potion de l'être suprême (potion of blueness of the supreme being) pour avoir les nouveaux effets de la 1.21.1",
              "La porte en verre ignore désormais les pistons",
              "Réduction des prix du Customer pour être plus raisonnable",
              "Augmentation de l'xp donné lors d'un échange avec le Customer"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Add:",
            "items": [
              "Support for Minecraft 1.21.1",
              "Added crafting for the breeze egg, the bogged egg, and the armadillo egg",
              "Added armor trims whirlwind and bolts to the Customer",
              "Added fog in the elixir of life and in the poisoned water"
            ]
          },
          {
            "type": "fix",
            "heading": "Fix:",
            "items": [
              "Modified the potion of the supreme being to have the new effects of 1.21.1",
              "The glass door now ignores pistons",
              "Reduced the prices of the Customer to be more reasonable",
              "Increased the XP given when trading with the Customer"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunto il supporto per Minecraft 1.21.1.", "Aggiunta la ricetta per le uova di Breeze, Bogged e Armadillo.", "Aggiunti i trim Whirlwind e Bolt al Customer.", "Aggiunta la nebbia all’Elisir di Vita e all’Acqua Avvelenata."] },
          { "type": "fix", "heading": "Correzioni:", "items": ["Modificata la Potion of the Supreme Being per includere i nuovi effetti della versione 1.21.1.", "La porta di vetro ora ignora i pistoni.", "Ridotti i prezzi del Customer per renderli più ragionevoli.", "Aumentata l’XP ottenuta dagli scambi con il Customer."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadido el soporte para Minecraft 1.21.1.", "Añadidas recetas para los huevos de Breeze, Bogged y Armadillo.", "Añadidos los adornos Whirlwind y Bolt al Customer.", "Añadida niebla al Elixir of Life y al Poisoned Water."] },
          { "type": "fix", "heading": "Correcciones:", "items": ["Modificada la Potion of the Supreme Being para incluir los nuevos efectos de la versión 1.21.1.", "La puerta de cristal ahora ignora los pistones.", "Reducidos los precios del Customer para que sean más razonables.", "Aumentada la XP obtenida al comerciar con el Customer."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Unterstützung für Minecraft 1.21.1 hinzugefügt.", "Rezepte für Breeze-, Bogged- und Gürteltier-Eier hinzugefügt.", "Whirlwind- und Bolt-Verzierungen beim Customer hinzugefügt.", "Elixir of Life und Poisoned Water mit Nebel versehen."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["Potion of the Supreme Being angepasst, damit sie die neuen Effekte aus Version 1.21.1 enthält.", "Die Glastür ignoriert jetzt Kolben.", "Preise des Customer gesenkt, damit sie angemessener sind.", "Die durch Handel mit dem Customer erhaltene XP erhöht."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["Minecraft 1.21.1 に対応しました。", "Breeze、Bogged、アルマジロのスポーンエッグのレシピを追加しました。", "Customer に Whirlwind と Bolt のトリムを追加しました。", "Elixir of Life と Poisoned Water に霧を追加しました。"] },
          { "type": "fix", "heading": "修正:", "items": ["Potion of the Supreme Being を変更し、バージョン 1.21.1 の新しい効果に対応しました。", "ガラスのドアがピストンの影響を受けなくなりました。", "Customer の価格をより妥当な額に引き下げました。", "Customer との取引で得られる XP を増やしました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["Minecraft 1.21.1 지원 추가", "Breeze, Bogged, 아르마딜로 생성 알 제작법 추가", "Customer에 Whirlwind 및 Bolt 장식 추가", "Elixir of Life와 Poisoned Water에 안개 추가"] },
          { "type": "fix", "heading": "수정:", "items": ["Potion of the Supreme Being을 수정해 1.21.1의 새로운 효과를 반영했습니다.", "유리 문이 피스톤의 영향을 받지 않도록 수정했습니다.", "Customer의 가격을 더 합리적으로 낮췄습니다.", "Customer와 거래할 때 얻는 XP를 늘렸습니다."] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionado suporte para Minecraft 1.21.1.", "Adicionadas receitas para os ovos de Breeze, Bogged e tatu.", "Adicionados os adornos Whirlwind e Bolt ao Customer.", "Adicionada névoa ao Elixir of Life e à Poisoned Water."] },
          { "type": "fix", "heading": "Correções:", "items": ["Potion of the Supreme Being alterada para incluir os novos efeitos da versão 1.21.1.", "A porta de vidro agora ignora pistões.", "Preços do Customer reduzidos para ficarem mais razoáveis.", "Aumentada a XP recebida ao negociar com o Customer."] }
        ]
      }
    },
    {
      "version": "1.16.0",
      "date": "2024-12-20",
      "loader": "Forge",
      "mcVersion": "1.20.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout d'un nouveau type de bois le « Opaline »",
              "Ajout du craft de l'œufs du creeper curuléen et du ondegel",
              "Ajout d'un craft pour l'éponge",
              "Ajout de l'armure hazmat",
              "(expérimentale) lorsque vous êtes proche du bloc de minerai d'uranium sans l'armure hazmat vous prenez des dégats",
              "Ajouts de 4 blocs de brique de glace et ces dérivées",
              "Ajout de la potion qui permet d'avoir le succès « Mélanges dangereux » avec une poudre du creeper céruléen"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "Correction d'une erreur de traduction sur l'épée en multicolor",
              "Refonte des textures de tout le pack d'armure en red",
              "Refonte des textures de tout le pack d'armure en paladium",
              "Le bloc de multicolor ne fait désormais plus de lumière",
              "Changement de texture du lingot de dioptasium",
              "Changement de la langue sur l'œil de révélation et de la perle ténébreuse",
              {
                "text": "Changement au niveau du ondegel :",
                "childrenListType": "ordered",
                "children": [
                  "Réduction de sa vitesse : 0,3 → 0,25",
                  "Réduction de la plage de suivi : 16 → 8",
                  "Réduction de la force d'attaque : 7 → 4"
                ]
              }
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Add:",
            "items": [
              "Added a new type of wood “Opaline”",
              "Added the craft of the eggs of the cerulean creeper and the Wavegel",
              "Added a craft for the sponge",
              "Added the hazmat armor",
              "(experimental) when you are close to the uranium ore block without the hazmat armor you take damage",
              "Added 4 blocks of ice brick and their derivatives",
              "Added the potion that allows you to have the achievement “Dangerous Mixes” with a powder of the cerulean creeper"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction:",
            "items": [
              "Correction of a translation error on the sword in multicolor",
              "Redesign of the textures of the whole armor pack in red",
              "Redesign of the textures of the whole armor pack in paladium",
              "The multicolor block no longer emits light",
              "Texture change of the dioptasium ingot",
              "Change of the language on the eye of revelation and the dark pearl",
              {
                "text": "Change on the Wavegel:",
                "childrenListType": "ordered",
                "children": [
                  "Reduction of its speed: 0.3 → 0.25",
                  "Reduction of the tracking range: 16 → 8",
                  "Reduction of the attack strength: 7 → 4"
                ]
              }
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunto un nuovo tipo di legno: Opaline.", "Aggiunta la ricetta per le uova di Cerulean Creeper e Wavegel.", "Aggiunta una ricetta per la spugna.", "Aggiunta l’armatura Hazmat.", "Funzione sperimentale: subisci danni se ti avvicini al minerale di uranio senza indossare l’armatura Hazmat.", "Aggiunti 4 blocchi di mattoni di ghiaccio e le relative varianti.", "Aggiunta la pozione per ottenere l’avanzamento “Dangerous Mixes” usando la polvere di Cerulean Creeper."] },
          { "type": "fix", "heading": "Correzioni:", "items": ["Corretto un errore di traduzione della spada Multicolor.", "Rinnovate le texture dell’intero set di armature Red.", "Rinnovate le texture dell’intero set di armature Paladium.", "Il blocco Multicolor non emette più luce.", "Modificata la texture del lingotto di Dioptasium.", "Modificata la lingua dell’Eye of Revelation e della Dark Pearl.", { "text": "Modifiche al Wavegel:", "childrenListType": "ordered", "children": ["Velocità ridotta: 0.3 → 0.25", "Raggio di inseguimento ridotto: 16 → 8", "Forza d’attacco ridotta: 7 → 4"] }] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadido un nuevo tipo de madera: Opaline.", "Añadidas recetas para los huevos de Cerulean Creeper y Wavegel.", "Añadida una receta para la esponja.", "Añadida la armadura Hazmat.", "Función experimental: recibes daño al acercarte al mineral de uranio sin llevar la armadura Hazmat.", "Añadidos 4 bloques de ladrillos de hielo y sus variantes.", "Añadida la poción que permite obtener el progreso «Dangerous Mixes» usando polvo de Cerulean Creeper."] },
          { "type": "fix", "heading": "Correcciones:", "items": ["Corregido un error de traducción en la espada Multicolor.", "Rediseñadas las texturas de todo el conjunto de armadura Red.", "Rediseñadas las texturas de todo el conjunto de armadura Paladium.", "El bloque Multicolor ya no emite luz.", "Cambiada la textura del lingote de Dioptasium.", "Cambiado el idioma del Eye of Revelation y la Dark Pearl.", { "text": "Cambios en Wavegel:", "childrenListType": "ordered", "children": ["Velocidad reducida: 0.3 → 0.25", "Alcance de seguimiento reducido: 16 → 8", "Fuerza de ataque reducida: 7 → 4"] }] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Neue Holzart Opaline hinzugefügt.", "Rezepte für die Eier des Cerulean Creeper und des Wavegel hinzugefügt.", "Rezept für einen Schwamm hinzugefügt.", "Hazmat-Rüstung hinzugefügt.", "Experimentelle Funktion: In der Nähe von Uranerz erleidest du ohne Hazmat-Rüstung Schaden.", "4 Eisziegelblöcke und ihre Varianten hinzugefügt.", "Trank hinzugefügt, mit dem sich der Fortschritt „Dangerous Mixes“ mithilfe von Cerulean-Creeper-Pulver erhalten lässt."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["Übersetzungsfehler beim Multicolor-Schwert behoben.", "Texturen des gesamten Red-Rüstungssets überarbeitet.", "Texturen des gesamten Paladium-Rüstungssets überarbeitet.", "Der Multicolor-Block leuchtet nicht mehr.", "Textur des Dioptasium-Barrens geändert.", "Sprache von Eye of Revelation und Dark Pearl geändert.", { "text": "Wavegel angepasst:", "childrenListType": "ordered", "children": ["Geschwindigkeit verringert: 0.3 → 0.25", "Verfolgungsreichweite verringert: 16 → 8", "Angriffsstärke verringert: 7 → 4"] }] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["新しい木材 Opaline を追加しました。", "Cerulean Creeper と Wavegel のスポーンエッグのレシピを追加しました。", "スポンジのレシピを追加しました。", "Hazmat Armor を追加しました。", "実験的機能: Hazmat Armor を装備せずにウラン鉱石の近くにいるとダメージを受けます。", "氷レンガブロック 4 種とその派生ブロックを追加しました。", "Cerulean Creeper の粉を使って進捗「Dangerous Mixes」を達成できるポーションを追加しました。"] },
          { "type": "fix", "heading": "修正:", "items": ["Multicolor の剣の翻訳ミスを修正しました。", "Red 防具一式のテクスチャを刷新しました。", "Paladium 防具一式のテクスチャを刷新しました。", "Multicolor ブロックが発光しなくなりました。", "Dioptasium インゴットのテクスチャを変更しました。", "Eye of Revelation と Dark Pearl の言語表記を変更しました。", { "text": "Wavegel を調整しました:", "childrenListType": "ordered", "children": ["速度を低下: 0.3 → 0.25", "追跡範囲を縮小: 16 → 8", "攻撃力を低下: 7 → 4"] }] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["새로운 목재 Opaline 추가", "Cerulean Creeper와 Wavegel 생성 알 제작법 추가", "스펀지 제작법 추가", "Hazmat 방어구 추가", "실험적 기능: Hazmat 방어구 없이 우라늄 광석 블록 가까이에 있으면 피해를 받습니다.", "얼음 벽돌 블록 4종과 파생 블록 추가", "Cerulean Creeper 가루로 “Dangerous Mixes” 발전 과제를 달성할 수 있는 물약 추가"] },
          { "type": "fix", "heading": "수정:", "items": ["Multicolor 검의 번역 오류 수정", "Red 방어구 세트 전체의 텍스처 개편", "Paladium 방어구 세트 전체의 텍스처 개편", "Multicolor 블록이 더 이상 빛을 내지 않도록 수정", "Dioptasium 주괴 텍스처 변경", "Eye of Revelation과 Dark Pearl의 언어 변경", { "text": "Wavegel 변경:", "childrenListType": "ordered", "children": ["속도 감소: 0.3 → 0.25", "추적 범위 감소: 16 → 8", "공격력 감소: 7 → 4"] }] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionado um novo tipo de madeira: Opaline.", "Adicionadas receitas para os ovos de Cerulean Creeper e Wavegel.", "Adicionada uma receita para a esponja.", "Adicionada a armadura Hazmat.", "Recurso experimental: você sofre dano ao se aproximar do minério de urânio sem a armadura Hazmat.", "Adicionados 4 blocos de tijolos de gelo e suas variantes.", "Adicionada a poção que permite obter o avanço “Dangerous Mixes” usando pó de Cerulean Creeper."] },
          { "type": "fix", "heading": "Correções:", "items": ["Corrigido um erro de tradução na espada Multicolor.", "Texturas de todo o conjunto de armadura Red reformuladas.", "Texturas de todo o conjunto de armadura Paladium reformuladas.", "O bloco Multicolor não emite mais luz.", "Textura do lingote de Dioptasium alterada.", "Idioma do Eye of Revelation e da Dark Pearl alterado.", { "text": "Alterações no Wavegel:", "childrenListType": "ordered", "children": ["Velocidade reduzida: 0.3 → 0.25", "Alcance de perseguição reduzido: 16 → 8", "Força de ataque reduzida: 7 → 4"] }] }
        ]
      }
    },
    {
      "version": "1.5.0",
      "date": "2024-09-27",
      "loader": "NeoForge",
      "mcVersion": "1.20.6",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout de l'œil de révelation - Stack par 6",
              "Ajout de la perle ténébreuse - Stack par 12",
              "Ajout de la roche volcanique (se craft avec bloc de magma et de la glace) et apparait dans le nether également",
              "Ajout du creeper céruléen ( apparait dans les plaines et les différentes forêts )",
              "Ajout du baton de creeper céruléen et de la poudre de creeper ceruléen"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "suppression du slot de collier supplémentaire",
              "Changement léger de la texture du bloc de multicolor",
              "Changement de la texture du lingot de dioptasium",
              "Changement de texture pour la boule anti dégats",
              "Les noyés ne drop désormais plus de aquatique slime",
              "Les Wavegel (ondegel) n'apparaisent plus dans le nether",
              "Reduction des dégats infligés par le Wavegel (ondegel) passant de 13 à 7",
              "Changement du nom en jeu pour l'anglais sur le disque « Sunchine voyage »",
              "Changement de la description et du nom en jeu pour le Français"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Add:",
            "items": [
              "Added the eye of revelation - Stack by 6",
              "Added the dark pearl - Stack by 12",
              "Added the volcanic rock (craft with magma block and ice) and also appears in the nether also",
              "Added the cerulean creeper (appears in plains and different forests)",
              "Added the cerulean creeper stick and the cerulean creeper powder"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction:",
            "items": [
              "Removed the additional collar slot",
              "Minor texture change for the multicolor block",
              "Texture change for the dioptasium ingot",
              "Texture change for the damage prevention orb",
              "Drowned no longer drop aquatic slime",
              "Wavegel (ondegel) no longer appears in the nether",
              "Reduced damage dealt by Wavegel (ondegel) from 13 to 7",
              "Changed in-game name for English on the “Sunshine Voyage” disc",
              "Changed description and in-game name for French"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunto l’Eye of Revelation (impilabile fino a 6).", "Aggiunta la Dark Pearl (impilabile fino a 12).", "Aggiunta la roccia vulcanica, fabbricabile con un blocco di magma e del ghiaccio e presente anche nel Nether.", "Aggiunto il Cerulean Creeper, che compare nelle pianure e in diverse foreste.", "Aggiunti il bastone e la polvere del Cerulean Creeper."] },
          { "type": "fix", "heading": "Correzioni:", "items": ["Rimosso lo slot aggiuntivo per la collana.", "Leggermente modificata la texture del blocco Multicolor.", "Modificata la texture del lingotto di Dioptasium.", "Modificata la texture della sfera di prevenzione dei danni.", "Gli annegati non rilasciano più Aquatic Slime.", "Il Wavegel non compare più nel Nether.", "Danni inflitti dal Wavegel ridotti da 13 a 7.", "Modificato il nome in gioco in inglese del disco “Sunshine Voyage”.", "Modificati la descrizione e il nome in gioco in francese."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadido el Eye of Revelation (se puede apilar hasta 6).", "Añadida la Dark Pearl (se puede apilar hasta 12).", "Añadida la roca volcánica, que se fabrica con un bloque de magma y hielo y también aparece en el Nether.", "Añadido el Cerulean Creeper, que aparece en las llanuras y en distintos bosques.", "Añadidos el bastón y el polvo del Cerulean Creeper."] },
          { "type": "fix", "heading": "Correcciones:", "items": ["Eliminado el espacio adicional para collares.", "Retocada ligeramente la textura del bloque Multicolor.", "Cambiada la textura del lingote de Dioptasium.", "Cambiada la textura del orbe de prevención de daño.", "Los ahogados ya no sueltan Aquatic Slime.", "Wavegel ya no aparece en el Nether.", "Daño infligido por Wavegel reducido de 13 a 7.", "Cambiado el nombre en el juego en inglés del disco «Sunshine Voyage».", "Cambiados la descripción y el nombre en el juego en francés."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Eye of Revelation hinzugefügt (bis zu 6 stapelbar).", "Dark Pearl hinzugefügt (bis zu 12 stapelbar).", "Vulkanstein hinzugefügt, herstellbar aus einem Magmablock und Eis und auch im Nether zu finden.", "Cerulean Creeper hinzugefügt; erscheint in Ebenen und verschiedenen Wäldern.", "Stab und Pulver des Cerulean Creeper hinzugefügt."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["Zusätzlichen Halsketten-Slot entfernt.", "Textur des Multicolor-Blocks leicht geändert.", "Textur des Dioptasium-Barrens geändert.", "Textur der Schadensschutzkugel geändert.", "Ertrunkene droppen keine Aquatic Slime mehr.", "Wavegel erscheint nicht mehr im Nether.", "Vom Wavegel verursachter Schaden von 13 auf 7 reduziert.", "Ingame-Namen der „Sunshine Voyage“-Schallplatte für Englisch geändert.", "Beschreibung und Ingame-Namen für Französisch geändert."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["Eye of Revelation を追加 (最大 6 個までスタック可能)。", "Dark Pearl を追加 (最大 12 個までスタック可能)。", "火山岩を追加しました (マグマブロックと氷でクラフトでき、Nether にも生成されます)。", "Cerulean Creeper を追加しました (平原や各種の森に出現)。", "Cerulean Creeper の杖と粉を追加しました。"] },
          { "type": "fix", "heading": "修正:", "items": ["追加のネックレススロットを削除しました。", "Multicolor ブロックのテクスチャを少し変更しました。", "Dioptasium インゴットのテクスチャを変更しました。", "ダメージ防止オーブのテクスチャを変更しました。", "ドラウンドが Aquatic Slime をドロップしなくなりました。", "Wavegel が Nether に出現しなくなりました。", "Wavegel のダメージを 13 から 7 に減らしました。", "ディスク「Sunshine Voyage」の英語版ゲーム内名を変更しました。", "フランス語版の説明とゲーム内名を変更しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["Eye of Revelation 추가 (최대 6개까지 중첩 가능)", "Dark Pearl 추가 (최대 12개까지 중첩 가능)", "화산암 추가 (마그마 블록과 얼음으로 제작하며 Nether에도 생성)", "Cerulean Creeper 추가 (평원과 여러 숲에 생성)", "Cerulean Creeper 막대와 가루 추가"] },
          { "type": "fix", "heading": "수정:", "items": ["추가 목걸이 슬롯 제거", "Multicolor 블록 텍스처를 약간 변경", "Dioptasium 주괴 텍스처 변경", "피해 방지 구체 텍스처 변경", "드라운드가 더 이상 Aquatic Slime을 드롭하지 않음", "Wavegel이 Nether에 더 이상 생성되지 않음", "Wavegel의 피해량을 13에서 7로 감소", "“Sunshine Voyage” 음반의 영어 게임 내 이름 변경", "프랑스어 설명과 게임 내 이름 변경"] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionado o Eye of Revelation (empilhável até 6).", "Adicionada a Dark Pearl (empilhável até 12).", "Adicionada a rocha vulcânica, fabricável com bloco de magma e gelo e que também aparece no Nether.", "Adicionado o Cerulean Creeper, que aparece em planícies e diferentes florestas.", "Adicionados o bastão e o pó do Cerulean Creeper."] },
          { "type": "fix", "heading": "Correções:", "items": ["Removido o espaço adicional para colar.", "Textura do bloco Multicolor ligeiramente alterada.", "Textura do lingote de Dioptasium alterada.", "Textura do orbe de prevenção de dano alterada.", "Afogados não deixam mais Aquatic Slime como item.", "Wavegel não aparece mais no Nether.", "Dano causado por Wavegel reduzido de 13 para 7.", "Nome em jogo em inglês do disco “Sunshine Voyage” alterado.", "Descrição e nome em jogo em francês alterados."] }
        ]
      }
    },
    {
      "version": "1.15.0",
      "date": "2024-09-27",
      "loader": "Forge",
      "mcVersion": "1.20.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout de l'œil de révelation - Stack par 6",
              "Ajout de la perle ténébreuse - Stack par 12",
              "Ajout de la roche volcanique (se craft avec bloc de magma et de la glace) et apparait dans le nether également",
              "Ajout du creeper céruléen ( apparait dans les plaines et les différentes forêts )",
              "Ajout du baton de creeper céruléen et de la poudre de creeper ceruléen"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "suppression du slot de collier supplémentaire",
              "Changement léger de la texture du bloc de multicolor",
              "Changement de la texture du lingot de dioptasium",
              "Changement de texture pour la boule anti dégats",
              "Les noyés ne drop désormais plus de aquatique slime",
              "Les Wavegel (ondegel) n'apparaisent plus dans le nether",
              "Reduction des dégats infligés par le Wavegel (ondegel) passant de 13 à 7",
              "Changement du nom en jeu pour l'anglais sur le disque « Sunchine voyage »",
              "Changement de la description et du nom en jeu pour le Français"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Add:",
            "items": [
              "Added the eye of revelation - Stack by 6",
              "Added the dark pearl - Stack by 12",
              "Added the volcanic rock (craft with magma block and ice) and also appears in the nether also",
              "Added the cerulean creeper (appears in plains and different forests)",
              "Added the cerulean creeper stick and the cerulean creeper powder"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction:",
            "items": [
              "Removed the additional collar slot",
              "Minor texture change for the multicolor block",
              "Texture change for the dioptasium ingot",
              "Texture change for the damage prevention orb",
              "Drowned no longer drop aquatic slime",
              "Wavegel (ondegel) no longer appears in the nether",
              "Reduced damage dealt by Wavegel (ondegel) from 13 to 7",
              "Changed in-game name for English on the “Sunshine Voyage” disc",
              "Changed description and in-game name for French"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunto l’Eye of Revelation (impilabile fino a 6).", "Aggiunta la Dark Pearl (impilabile fino a 12).", "Aggiunta la roccia vulcanica, fabbricabile con un blocco di magma e del ghiaccio e presente anche nel Nether.", "Aggiunto il Cerulean Creeper, che compare nelle pianure e in diverse foreste.", "Aggiunti il bastone e la polvere del Cerulean Creeper."] },
          { "type": "fix", "heading": "Correzioni:", "items": ["Rimosso lo slot aggiuntivo per la collana.", "Leggermente modificata la texture del blocco Multicolor.", "Modificata la texture del lingotto di Dioptasium.", "Modificata la texture della sfera di prevenzione dei danni.", "Gli annegati non rilasciano più Aquatic Slime.", "Il Wavegel non compare più nel Nether.", "Danni inflitti dal Wavegel ridotti da 13 a 7.", "Modificato il nome in gioco in inglese del disco “Sunshine Voyage”.", "Modificati la descrizione e il nome in gioco in francese."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadido el Eye of Revelation (se puede apilar hasta 6).", "Añadida la Dark Pearl (se puede apilar hasta 12).", "Añadida la roca volcánica, que se fabrica con un bloque de magma y hielo y también aparece en el Nether.", "Añadido el Cerulean Creeper, que aparece en las llanuras y en distintos bosques.", "Añadidos el bastón y el polvo del Cerulean Creeper."] },
          { "type": "fix", "heading": "Correcciones:", "items": ["Eliminado el espacio adicional para collares.", "Retocada ligeramente la textura del bloque Multicolor.", "Cambiada la textura del lingote de Dioptasium.", "Cambiada la textura del orbe de prevención de daño.", "Los ahogados ya no sueltan Aquatic Slime.", "Wavegel ya no aparece en el Nether.", "Daño infligido por Wavegel reducido de 13 a 7.", "Cambiado el nombre en el juego en inglés del disco «Sunshine Voyage».", "Cambiados la descripción y el nombre en el juego en francés."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Eye of Revelation hinzugefügt (bis zu 6 stapelbar).", "Dark Pearl hinzugefügt (bis zu 12 stapelbar).", "Vulkanstein hinzugefügt, herstellbar aus einem Magmablock und Eis und auch im Nether zu finden.", "Cerulean Creeper hinzugefügt; erscheint in Ebenen und verschiedenen Wäldern.", "Stab und Pulver des Cerulean Creeper hinzugefügt."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["Zusätzlichen Halsketten-Slot entfernt.", "Textur des Multicolor-Blocks leicht geändert.", "Textur des Dioptasium-Barrens geändert.", "Textur der Schadensschutzkugel geändert.", "Ertrunkene droppen keine Aquatic Slime mehr.", "Wavegel erscheint nicht mehr im Nether.", "Vom Wavegel verursachter Schaden von 13 auf 7 reduziert.", "Ingame-Namen der „Sunshine Voyage“-Schallplatte für Englisch geändert.", "Beschreibung und Ingame-Namen für Französisch geändert."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["Eye of Revelation を追加 (最大 6 個までスタック可能)。", "Dark Pearl を追加 (最大 12 個までスタック可能)。", "火山岩を追加しました (マグマブロックと氷でクラフトでき、Nether にも生成されます)。", "Cerulean Creeper を追加しました (平原や各種の森に出現)。", "Cerulean Creeper の杖と粉を追加しました。"] },
          { "type": "fix", "heading": "修正:", "items": ["追加のネックレススロットを削除しました。", "Multicolor ブロックのテクスチャを少し変更しました。", "Dioptasium インゴットのテクスチャを変更しました。", "ダメージ防止オーブのテクスチャを変更しました。", "ドラウンドが Aquatic Slime をドロップしなくなりました。", "Wavegel が Nether に出現しなくなりました。", "Wavegel のダメージを 13 から 7 に減らしました。", "ディスク「Sunshine Voyage」の英語版ゲーム内名を変更しました。", "フランス語版の説明とゲーム内名を変更しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["Eye of Revelation 추가 (최대 6개까지 중첩 가능)", "Dark Pearl 추가 (최대 12개까지 중첩 가능)", "화산암 추가 (마그마 블록과 얼음으로 제작하며 Nether에도 생성)", "Cerulean Creeper 추가 (평원과 여러 숲에 생성)", "Cerulean Creeper 막대와 가루 추가"] },
          { "type": "fix", "heading": "수정:", "items": ["추가 목걸이 슬롯 제거", "Multicolor 블록 텍스처를 약간 변경", "Dioptasium 주괴 텍스처 변경", "피해 방지 구체 텍스처 변경", "드라운드가 더 이상 Aquatic Slime을 드롭하지 않음", "Wavegel이 Nether에 더 이상 생성되지 않음", "Wavegel의 피해량을 13에서 7로 감소", "“Sunshine Voyage” 음반의 영어 게임 내 이름 변경", "프랑스어 설명과 게임 내 이름 변경"] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionado o Eye of Revelation (empilhável até 6).", "Adicionada a Dark Pearl (empilhável até 12).", "Adicionada a rocha vulcânica, fabricável com bloco de magma e gelo e que também aparece no Nether.", "Adicionado o Cerulean Creeper, que aparece em planícies e diferentes florestas.", "Adicionados o bastão e o pó do Cerulean Creeper."] },
          { "type": "fix", "heading": "Correções:", "items": ["Removido o espaço adicional para colar.", "Textura do bloco Multicolor ligeiramente alterada.", "Textura do lingote de Dioptasium alterada.", "Textura do orbe de prevenção de dano alterada.", "Afogados não deixam mais Aquatic Slime como item.", "Wavegel não aparece mais no Nether.", "Dano causado por Wavegel reduzido de 13 para 7.", "Nome em jogo em inglês do disco “Sunshine Voyage” alterado.", "Descrição e nome em jogo em francês alterados."] }
        ]
      }
    },
    {
      "version": "1.14.0",
      "date": "2024-09-11",
      "loader": "Forge",
      "mcVersion": "1.20.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout des colliers de régénération, vision nocturne et fire resistance et une base de collier (à mettre dans le slot collier)",
              "Ajout du ondegel (Wavegel)",
              "Ajout d'un craft pour les fioles de fire resistance avec le colorant de feu",
              "ajout de la possibilité d'utiliser les minerais de mod avec les trim de Minecraft (paladium, red, amazonite, dioptasium, chrome, fluorite, xenite, igniera)",
              "Ajout du lingot de xenite et de la recette",
              "Ajout d'un slot supplémentaire de collier si curios est installé",
              "Ajout d'un craft pour le totem d'immortalité",
              "Ajout d'une recette pour chaque froglight"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "Mise à jour de la texture du minerai de paladium",
              "Modification du nom de la space armor trim en space armor upgrade",
              "Le block de xenite se craft désormais avec des lingot de xenite",
              "Modification des valeurs d'attaque des outils en amazonite",
              "L'aquatic slime ne drop désormais plus dans le sable, elle drop désormais sur les ondegel (Wavegel)"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Add:",
            "items": [
              "Added the regeneration, night vision and fire resistance necklaces and a necklace base (to be placed in the necklace slot)",
              "Added the Wavegel",
              "Added a craft for fire resistance bottles with the fire dye",
              "Added the possibility to use mod ores with Minecraft trims (paladium, red, amazonite, dioptasium, chrome, fluorite, xenite, igniera)",
              "Added the xenite ingot and the recipe",
              "Added an additional necklace slot if curios is installed",
              "Added a craft for the totem of immortality",
              "Added a recipe for each froglight"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction:",
            "items": [
              "Updated the texture of the paladium ore",
              "Renamed the space armor trim to space armor upgrade",
              "The xenite block now crafts with xenite ingots",
              "Modified the attack values of tools made from amazonite",
              "The aquatic slime no longer drops in sand, it now drops on Wavegel"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunti i collari della rigenerazione, della visione notturna e della resistenza al fuoco, oltre a una base per collare da inserire nell’apposito slot.", "Aggiunto il Wavegel.", "Aggiunta una ricetta per le pozioni di resistenza al fuoco usando il colorante del fuoco.", "Aggiunta la possibilità di usare i minerali del mod con i trim di Minecraft (Paladium, Red, Amazonite, Dioptasium, Chrome, Fluorite, Xenite, Igniera).", "Aggiunti il lingotto di Xenite e la relativa ricetta.", "Aggiunto uno slot per collana se è installato Curios.", "Aggiunta una ricetta per il Totem of Undying.", "Aggiunta una ricetta per ogni Froglight."] },
          { "type": "fix", "heading": "Correzioni:", "items": ["Aggiornata la texture del minerale di Paladium.", "Rinominato il trim Space Armor in Space Armor Upgrade.", "Il blocco di Xenite ora si fabbrica con lingotti di Xenite.", "Modificati i valori d’attacco degli strumenti in Amazonite.", "Aquatic Slime non compare più nella sabbia: ora viene rilasciata dal Wavegel."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadidos los collares de regeneración, visión nocturna y resistencia al fuego, además de una base para colocar en el espacio de collar.", "Añadido Wavegel.", "Añadida una receta para las pociones de resistencia al fuego usando el tinte de fuego.", "Añadida la posibilidad de usar minerales del mod con los adornos de Minecraft (Paladium, Red, Amazonite, Dioptasium, Chrome, Fluorite, Xenite, Igniera).", "Añadidos el lingote de Xenite y su receta.", "Añadido un espacio adicional para collar si está instalado Curios.", "Añadida una receta para el Totem of Undying.", "Añadida una receta para cada Froglight."] },
          { "type": "fix", "heading": "Correcciones:", "items": ["Actualizada la textura del mineral de Paladium.", "Cambiado el nombre del adorno Space Armor Trim a Space Armor Upgrade.", "El bloque de Xenite ahora se fabrica con lingotes de Xenite.", "Modificados los valores de ataque de las herramientas de Amazonite.", "Aquatic Slime ya no aparece en la arena; ahora la suelta Wavegel."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Regenerations-, Nachtsicht- und Feuerresistenz-Halsketten sowie eine Halskettenbasis für den Halsketten-Slot hinzugefügt.", "Wavegel hinzugefügt.", "Rezept für Feuerresistenztränke mit Feuerfarbstoff hinzugefügt.", "Mod-Erze können jetzt mit Minecraft-Rüstungsverzierungen verwendet werden (Paladium, Red, Amazonite, Dioptasium, Chrome, Fluorite, Xenite, Igniera).", "Xenite-Barren und das zugehörige Rezept hinzugefügt.", "Zusätzlichen Halsketten-Slot hinzugefügt, wenn Curios installiert ist.", "Rezept für das Totem of Undying hinzugefügt.", "Rezept für jede Froglight hinzugefügt."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["Textur des Paladium-Erzes aktualisiert.", "Space Armor Trim in Space Armor Upgrade umbenannt.", "Der Xenite-Block wird jetzt aus Xenite-Barren hergestellt.", "Angriffswerte der Werkzeuge aus Amazonite geändert.", "Aquatic Slime erscheint nicht mehr im Sand, sondern wird jetzt von Wavegel gedroppt."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["再生、暗視、火炎耐性のネックレスと、ネックレススロットに装備するネックレスベースを追加しました。", "Wavegel を追加しました。", "火の染料を使った火炎耐性のポーションのレシピを追加しました。", "Mod の鉱石 (Paladium、Red、Amazonite、Dioptasium、Chrome、Fluorite、Xenite、Igniera) を Minecraft の防具トリムに使えるようにしました。", "Xenite インゴットとそのレシピを追加しました。", "Curios が導入されている場合にネックレススロットを追加しました。", "不死のトーテムのレシピを追加しました。", "各 Froglight のレシピを追加しました。"] },
          { "type": "fix", "heading": "修正:", "items": ["Paladium 鉱石のテクスチャを更新しました。", "Space Armor Trim を Space Armor Upgrade に改名しました。", "Xenite ブロックを Xenite インゴットから作れるようになりました。", "Amazonite 製ツールの攻撃値を変更しました。", "Aquatic Slime が砂から出現しなくなり、Wavegel からドロップするようになりました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["재생, 야간 투시, 화염 저항 목걸이와 목걸이 슬롯에 장착할 목걸이 받침 추가", "Wavegel 추가", "화염 염료로 화염 저항 물약을 만드는 제작법 추가", "모드 광석(Paladium, Red, Amazonite, Dioptasium, Chrome, Fluorite, Xenite, Igniera)을 Minecraft 장식과 함께 사용할 수 있도록 추가", "Xenite 주괴와 제작법 추가", "Curios 설치 시 추가 목걸이 슬롯 추가", "불사의 토템 제작법 추가", "각 Froglight 제작법 추가"] },
          { "type": "fix", "heading": "수정:", "items": ["Paladium 광석 텍스처 업데이트", "Space Armor Trim을 Space Armor Upgrade로 이름 변경", "이제 Xenite 블록을 Xenite 주괴로 제작 가능", "Amazonite 도구의 공격 수치 변경", "Aquatic Slime이 모래에서 더 이상 나오지 않고 Wavegel에서 드롭되도록 변경"] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionados colares de regeneração, visão noturna e resistência ao fogo, além de uma base para o espaço de colar.", "Adicionado o Wavegel.", "Adicionada uma receita para poções de resistência ao fogo usando o corante de fogo.", "Adicionada a possibilidade de usar minérios do mod com os adornos do Minecraft (Paladium, Red, Amazonite, Dioptasium, Chrome, Fluorite, Xenite, Igniera).", "Adicionados o lingote de Xenite e sua receita.", "Adicionado um espaço extra para colar quando Curios estiver instalado.", "Adicionada uma receita para o Totem of Undying.", "Adicionada uma receita para cada Froglight."] },
          { "type": "fix", "heading": "Correções:", "items": ["Textura do minério de Paladium atualizada.", "Space Armor Trim renomeado para Space Armor Upgrade.", "O bloco de Xenite agora é fabricado com lingotes de Xenite.", "Valores de ataque das ferramentas de Amazonite alterados.", "Aquatic Slime não aparece mais na areia e agora é dropado por Wavegel."] }
        ]
      }
    },
    {
      "version": "1.4.0",
      "date": "2024-09-11",
      "loader": "Forge, NeoForge",
      "mcVersion": "1.20.6",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout des colliers de régénération, vision nocturne et fire resistance et une base de collier (à mettre dans le slot collier)",
              "Ajout du ondegel (Wavegel)",
              "Ajout d'un craft pour les fioles de fire resistance avec le colorant de feu",
              "ajout de la possibilité d'utiliser les minerais de mod avec les trim de Minecraft (paladium, red, amazonite, dioptasium, chrome, fluorite, xenite, igniera)",
              "Ajout du lingot de xenite et de la recette",
              "Ajout d'un slot supplémentaire de collier si curios est installé",
              "Ajout d'un craft pour le totem d'immortalité",
              "Ajout d'une recette pour chaque froglight"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "Mise à jour de la texture du minerai de paladium",
              "Modification du nom de la space armor trim en space armor upgrade",
              "Le block de xenite se craft désormais avec des lingot de xenite",
              "Modification des valeurs d'attaque des outils en amazonite",
              "L'aquatic slime ne drop désormais plus dans le sable, elle drop désormais sur les ondegel (Wavegel)"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Add:",
            "items": [
              "Added the regeneration, night vision and fire resistance necklaces and a necklace base (to be placed in the necklace slot)",
              "Added the Wavegel",
              "Added a craft for fire resistance bottles with the fire dye",
              "Added the possibility to use mod ores with Minecraft trims (paladium, red, amazonite, dioptasium, chrome, fluorite, xenite, igniera)",
              "Added the xenite ingot and the recipe",
              "Added an additional necklace slot if curios is installed",
              "Added a craft for the totem of immortality",
              "Added a recipe for each froglight"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction:",
            "items": [
              "Updated the texture of the paladium ore",
              "Renamed the space armor trim to space armor upgrade",
              "The xenite block now crafts with xenite ingots",
              "Modified the attack values of tools made from amazonite",
              "The aquatic slime no longer drops in sand, it now drops on Wavegel"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunti i collari della rigenerazione, della visione notturna e della resistenza al fuoco, oltre a una base per collare da inserire nell’apposito slot.", "Aggiunto il Wavegel.", "Aggiunta una ricetta per le pozioni di resistenza al fuoco usando il colorante del fuoco.", "Aggiunta la possibilità di usare i minerali del mod con i trim di Minecraft (Paladium, Red, Amazonite, Dioptasium, Chrome, Fluorite, Xenite, Igniera).", "Aggiunti il lingotto di Xenite e la relativa ricetta.", "Aggiunto uno slot per collana se è installato Curios.", "Aggiunta una ricetta per il Totem of Undying.", "Aggiunta una ricetta per ogni Froglight."] },
          { "type": "fix", "heading": "Correzioni:", "items": ["Aggiornata la texture del minerale di Paladium.", "Rinominato il trim Space Armor in Space Armor Upgrade.", "Il blocco di Xenite ora si fabbrica con lingotti di Xenite.", "Modificati i valori d’attacco degli strumenti in Amazonite.", "Aquatic Slime non compare più nella sabbia: ora viene rilasciata dal Wavegel."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadidos los collares de regeneración, visión nocturna y resistencia al fuego, además de una base para colocar en el espacio de collar.", "Añadido Wavegel.", "Añadida una receta para las pociones de resistencia al fuego usando el tinte de fuego.", "Añadida la posibilidad de usar minerales del mod con los adornos de Minecraft (Paladium, Red, Amazonite, Dioptasium, Chrome, Fluorite, Xenite, Igniera).", "Añadidos el lingote de Xenite y su receta.", "Añadido un espacio adicional para collar si está instalado Curios.", "Añadida una receta para el Totem of Undying.", "Añadida una receta para cada Froglight."] },
          { "type": "fix", "heading": "Correcciones:", "items": ["Actualizada la textura del mineral de Paladium.", "Cambiado el nombre del adorno Space Armor Trim a Space Armor Upgrade.", "El bloque de Xenite ahora se fabrica con lingotes de Xenite.", "Modificados los valores de ataque de las herramientas de Amazonite.", "Aquatic Slime ya no aparece en la arena; ahora la suelta Wavegel."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Regenerations-, Nachtsicht- und Feuerresistenz-Halsketten sowie eine Halskettenbasis für den Halsketten-Slot hinzugefügt.", "Wavegel hinzugefügt.", "Rezept für Feuerresistenztränke mit Feuerfarbstoff hinzugefügt.", "Mod-Erze können jetzt mit Minecraft-Rüstungsverzierungen verwendet werden (Paladium, Red, Amazonite, Dioptasium, Chrome, Fluorite, Xenite, Igniera).", "Xenite-Barren und das zugehörige Rezept hinzugefügt.", "Zusätzlichen Halsketten-Slot hinzugefügt, wenn Curios installiert ist.", "Rezept für das Totem of Undying hinzugefügt.", "Rezept für jede Froglight hinzugefügt."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["Textur des Paladium-Erzes aktualisiert.", "Space Armor Trim in Space Armor Upgrade umbenannt.", "Der Xenite-Block wird jetzt aus Xenite-Barren hergestellt.", "Angriffswerte der Werkzeuge aus Amazonite geändert.", "Aquatic Slime erscheint nicht mehr im Sand, sondern wird jetzt von Wavegel gedroppt."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["再生、暗視、火炎耐性のネックレスと、ネックレススロットに装備するネックレスベースを追加しました。", "Wavegel を追加しました。", "火の染料を使った火炎耐性のポーションのレシピを追加しました。", "Mod の鉱石 (Paladium、Red、Amazonite、Dioptasium、Chrome、Fluorite、Xenite、Igniera) を Minecraft の防具トリムに使えるようにしました。", "Xenite インゴットとそのレシピを追加しました。", "Curios が導入されている場合にネックレススロットを追加しました。", "不死のトーテムのレシピを追加しました。", "各 Froglight のレシピを追加しました。"] },
          { "type": "fix", "heading": "修正:", "items": ["Paladium 鉱石のテクスチャを更新しました。", "Space Armor Trim を Space Armor Upgrade に改名しました。", "Xenite ブロックを Xenite インゴットから作れるようになりました。", "Amazonite 製ツールの攻撃値を変更しました。", "Aquatic Slime が砂から出現しなくなり、Wavegel からドロップするようになりました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["재생, 야간 투시, 화염 저항 목걸이와 목걸이 슬롯에 장착할 목걸이 받침 추가", "Wavegel 추가", "화염 염료로 화염 저항 물약을 만드는 제작법 추가", "모드 광석(Paladium, Red, Amazonite, Dioptasium, Chrome, Fluorite, Xenite, Igniera)을 Minecraft 장식과 함께 사용할 수 있도록 추가", "Xenite 주괴와 제작법 추가", "Curios 설치 시 추가 목걸이 슬롯 추가", "불사의 토템 제작법 추가", "각 Froglight 제작법 추가"] },
          { "type": "fix", "heading": "수정:", "items": ["Paladium 광석 텍스처 업데이트", "Space Armor Trim을 Space Armor Upgrade로 이름 변경", "이제 Xenite 블록을 Xenite 주괴로 제작 가능", "Amazonite 도구의 공격 수치 변경", "Aquatic Slime이 모래에서 더 이상 나오지 않고 Wavegel에서 드롭되도록 변경"] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionados colares de regeneração, visão noturna e resistência ao fogo, além de uma base para o espaço de colar.", "Adicionado o Wavegel.", "Adicionada uma receita para poções de resistência ao fogo usando o corante de fogo.", "Adicionada a possibilidade de usar minérios do mod com os adornos do Minecraft (Paladium, Red, Amazonite, Dioptasium, Chrome, Fluorite, Xenite, Igniera).", "Adicionados o lingote de Xenite e sua receita.", "Adicionado um espaço extra para colar quando Curios estiver instalado.", "Adicionada uma receita para o Totem of Undying.", "Adicionada uma receita para cada Froglight."] },
          { "type": "fix", "heading": "Correções:", "items": ["Textura do minério de Paladium atualizada.", "Space Armor Trim renomeado para Space Armor Upgrade.", "O bloco de Xenite agora é fabricado com lingotes de Xenite.", "Valores de ataque das ferramentas de Amazonite alterados.", "Aquatic Slime não aparece mais na areia e agora é dropado por Wavegel."] }
        ]
      }
    },
    {
      "version": "1.3.1",
      "date": "2024-08-26",
      "loader": "Forge, NeoForge",
      "mcVersion": "1.20.6",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "Correction de certaine traduction qui n'était pas présente en Français",
              "Texture du disque « Sweden » modifié",
              "Le sable noir se génère désormais naturellement entre la couche 0 et -64",
              "Modification du craft du purifier",
              "Suppression des biomes de restrictions pour le spawn du minerai d'amazonite",
              {
                "text": "Les efficacités des pioches en paladium, red, multicolor, amazonite, dioptasium ont été modifié passant de :",
                "childrenListType": "ordered",
                "children": [
                  "Paladium : 8 → 8 ( Aucun changement )",
                  "Red : 8 → 9 ( Augmentation )",
                  "Multicolor : 20 → 20 ( Aucun changement )",
                  "Amazonite : 7 → 12 ( Augmentation )",
                  "Dioptasium : 6 → 16 ( Augmentation )"
                ]
              },
              {
                "text": "La durabilité des outils ( hors Hammer ) ont été revus :",
                "childrenListType": "ordered",
                "children": [
                  "Paladium : 1200 → 900 ( Réduction )",
                  "Red : 1800 → 1200 ( Réduction )",
                  "Multicolor : 3000 → 3000 ( Aucun changement )",
                  "Amazonite : 1400 → 1800 ( Augmentation )",
                  "Dioptasium : 1700 → 2400 ( Augmentation )"
                ]
              }
            ]
          }
        ],
        "en": [
          {
            "type": "fix",
            "heading": "Correction:",
            "items": [
              "Correction of certain translations that were not present in French",
              "Texture of the “Sweden” disk modified",
              "Black sand now generates naturally between layer 0 and -64",
              "Modification of the purifier craft",
              "Removal of biome restrictions for the spawn of amazonite ore",
              {
                "text": "The efficiencies of the pickaxes in paladium, red, multicolor, amazonite, dioptasium have been modified from:",
                "childrenListType": "ordered",
                "children": [
                  "Paladium: 8 → 8 (No change)",
                  "Red: 8 → 9 (Increase)",
                  "Multicolor: 20 → 20 (No change)",
                  "Amazonite: 7 → 12 (Increase)",
                  "Dioptasium: 6 → 16 (Increase)"
                ]
              },
              {
                "text": "The durability of the tools (except Hammer) have been reviewed:",
                "childrenListType": "ordered",
                "children": [
                  "Paladium: 1200 → 900 (Reduction)",
                  "Red: 1800 → 1200 (Reduction)",
                  "Multicolor: 3000 → 3000 (No change)",
                  "Amazonite: 1400 → 1800 (Increase)",
                  "Dioptasium: 1700 → 2400 (Increase)"
                ]
              }
            ]
          }
        ],
        "it": [{ "type": "fix", "heading": "Correzioni:", "items": ["Corrette alcune traduzioni mancanti in francese.", "Modificata la texture del disco “Sweden”.", "La sabbia nera ora si genera naturalmente tra i livelli 0 e -64.", "Modificata la ricetta del Purifier.", "Rimosse le restrizioni dei biomi per la generazione del minerale di Amazonite.", { "text": "Modificata l’efficienza dei picconi in Paladium, Red, Multicolor, Amazonite e Dioptasium:", "childrenListType": "ordered", "children": ["Paladium: 8 → 8 (nessuna modifica)", "Red: 8 → 9 (aumento)", "Multicolor: 20 → 20 (nessuna modifica)", "Amazonite: 7 → 12 (aumento)", "Dioptasium: 6 → 16 (aumento)"] }, { "text": "Rivista la durabilità degli strumenti (escluso Hammer):", "childrenListType": "ordered", "children": ["Paladium: 1200 → 900 (riduzione)", "Red: 1800 → 1200 (riduzione)", "Multicolor: 3000 → 3000 (nessuna modifica)", "Amazonite: 1400 → 1800 (aumento)", "Dioptasium: 1700 → 2400 (aumento)"] }] }],
        "es": [{ "type": "fix", "heading": "Correcciones:", "items": ["Corregidas algunas traducciones que faltaban en francés.", "Cambiada la textura del disco «Sweden».", "La arena negra ahora se genera de forma natural entre las capas 0 y -64.", "Modificada la receta del Purifier.", "Eliminadas las restricciones de bioma para la generación del mineral de Amazonite.", { "text": "Modificada la eficiencia de los picos de Paladium, Red, Multicolor, Amazonite y Dioptasium:", "childrenListType": "ordered", "children": ["Paladium: 8 → 8 (sin cambios)", "Red: 8 → 9 (aumento)", "Multicolor: 20 → 20 (sin cambios)", "Amazonite: 7 → 12 (aumento)", "Dioptasium: 6 → 16 (aumento)"] }, { "text": "Revisada la durabilidad de las herramientas (excepto Hammer):", "childrenListType": "ordered", "children": ["Paladium: 1200 → 900 (reducción)", "Red: 1800 → 1200 (reducción)", "Multicolor: 3000 → 3000 (sin cambios)", "Amazonite: 1400 → 1800 (aumento)", "Dioptasium: 1700 → 2400 (aumento)"] }] }],
        "de": [{ "type": "fix", "heading": "Fehlerbehebungen:", "items": ["Fehlende französische Übersetzungen korrigiert.", "Textur der „Sweden“-Schallplatte geändert.", "Schwarzer Sand generiert jetzt natürlich zwischen Höhe 0 und -64.", "Rezept des Purifier geändert.", "Biombeschränkungen für das Erscheinen von Amazonite-Erz entfernt.", { "text": "Abbaueffizienz der Spitzhacken aus Paladium, Red, Multicolor, Amazonite und Dioptasium geändert:", "childrenListType": "ordered", "children": ["Paladium: 8 → 8 (keine Änderung)", "Red: 8 → 9 (Erhöhung)", "Multicolor: 20 → 20 (keine Änderung)", "Amazonite: 7 → 12 (Erhöhung)", "Dioptasium: 6 → 16 (Erhöhung)"] }, { "text": "Haltbarkeit der Werkzeuge überarbeitet (außer Hammer):", "childrenListType": "ordered", "children": ["Paladium: 1200 → 900 (Verringerung)", "Red: 1800 → 1200 (Verringerung)", "Multicolor: 3000 → 3000 (keine Änderung)", "Amazonite: 1400 → 1800 (Erhöhung)", "Dioptasium: 1700 → 2400 (Erhöhung)"] }] }],
        "ja": [{ "type": "fix", "heading": "修正:", "items": ["フランス語に存在しなかった一部の翻訳を修正しました。", "ディスク「Sweden」のテクスチャを変更しました。", "黒い砂が高さ 0 から -64 の間に自然生成されるようになりました。", "Purifier のレシピを変更しました。", "Amazonite 鉱石の生成に関するバイオーム制限を削除しました。", { "text": "Paladium、Red、Multicolor、Amazonite、Dioptasium のツルハシの採掘速度を変更しました:", "childrenListType": "ordered", "children": ["Paladium: 8 → 8 (変更なし)", "Red: 8 → 9 (増加)", "Multicolor: 20 → 20 (変更なし)", "Amazonite: 7 → 12 (増加)", "Dioptasium: 6 → 16 (増加)"] }, { "text": "Hammer 以外のツールの耐久値を調整しました:", "childrenListType": "ordered", "children": ["Paladium: 1200 → 900 (減少)", "Red: 1800 → 1200 (減少)", "Multicolor: 3000 → 3000 (変更なし)", "Amazonite: 1400 → 1800 (増加)", "Dioptasium: 1700 → 2400 (増加)"] }] }],
        "ko": [{ "type": "fix", "heading": "수정:", "items": ["프랑스어에 없던 일부 번역 수정", "“Sweden” 음반 텍스처 변경", "검은 모래가 높이 0부터 -64 사이에 자연 생성되도록 변경", "Purifier 제작법 변경", "Amazonite 광석 생성의 생물 군계 제한 제거", { "text": "Paladium, Red, Multicolor, Amazonite, Dioptasium 곡괭이의 채굴 효율 변경:", "childrenListType": "ordered", "children": ["Paladium: 8 → 8 (변경 없음)", "Red: 8 → 9 (증가)", "Multicolor: 20 → 20 (변경 없음)", "Amazonite: 7 → 12 (증가)", "Dioptasium: 6 → 16 (증가)"] }, { "text": "Hammer를 제외한 도구 내구도 조정:", "childrenListType": "ordered", "children": ["Paladium: 1200 → 900 (감소)", "Red: 1800 → 1200 (감소)", "Multicolor: 3000 → 3000 (변경 없음)", "Amazonite: 1400 → 1800 (증가)", "Dioptasium: 1700 → 2400 (증가)"] }] }],
        "pt-br": [{ "type": "fix", "heading": "Correções:", "items": ["Corrigidas algumas traduções que não estavam presentes em francês.", "Textura do disco “Sweden” alterada.", "A areia preta agora é gerada naturalmente entre as camadas 0 e -64.", "Receita do Purifier alterada.", "Removidas as restrições de bioma para a geração do minério de Amazonite.", { "text": "Eficiência das picaretas de Paladium, Red, Multicolor, Amazonite e Dioptasium alterada:", "childrenListType": "ordered", "children": ["Paladium: 8 → 8 (sem alteração)", "Red: 8 → 9 (aumento)", "Multicolor: 20 → 20 (sem alteração)", "Amazonite: 7 → 12 (aumento)", "Dioptasium: 6 → 16 (aumento)"] }, { "text": "Durabilidade das ferramentas revisada (exceto Hammer):", "childrenListType": "ordered", "children": ["Paladium: 1200 → 900 (redução)", "Red: 1800 → 1200 (redução)", "Multicolor: 3000 → 3000 (sem alteração)", "Amazonite: 1400 → 1800 (aumento)", "Dioptasium: 1700 → 2400 (aumento)"] }] }]
      }
    },
    {
      "version": "1.13.1",
      "date": "2024-08-26",
      "loader": "Forge",
      "mcVersion": "1.20.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "Correction de certaine traduction qui n'était pas présente en Français",
              "Texture du disque « Sweden » modifié",
              "Le sable noir se génère désormais naturellement entre la couche 0 et -64",
              "Modification du craft du purifier",
              "Suppression des biomes de restrictions pour le spawn du minerai d'amazonite",
              {
                "text": "Les efficacités des pioches en paladium, red, multicolor, amazonite, dioptasium ont été modifié passant de :",
                "childrenListType": "ordered",
                "children": [
                  "Paladium : 8 → 8 ( Aucun changement )",
                  "Red : 8 → 9 ( Augmentation )",
                  "Multicolor : 20 → 20 ( Aucun changement )",
                  "Amazonite : 7 → 12 ( Augmentation )",
                  "Dioptasium : 6 → 16 ( Augmentation )"
                ]
              },
              {
                "text": "La durabilité des outils ( hors Hammer ) ont été revus :",
                "childrenListType": "ordered",
                "children": [
                  "Paladium : 1200 → 900 ( Réduction )",
                  "Red : 1800 → 1200 ( Réduction )",
                  "Multicolor : 3000 → 3000 ( Aucun changement )",
                  "Amazonite : 1400 → 1800 ( Augmentation )",
                  "Dioptasium : 1700 → 2400 ( Augmentation )"
                ]
              }
            ]
          }
        ],
        "en": [
          {
            "type": "fix",
            "heading": "Correction:",
            "items": [
              "Correction of certain translations that were not present in French",
              "Texture of the “Sweden” disk modified",
              "Black sand now generates naturally between layer 0 and -64",
              "Modification of the purifier craft",
              "Removal of biome restrictions for the spawn of amazonite ore",
              {
                "text": "The efficiencies of the pickaxes in paladium, red, multicolor, amazonite, dioptasium have been modified from:",
                "childrenListType": "ordered",
                "children": [
                  "Paladium: 8 → 8 (No change)",
                  "Red: 8 → 9 (Increase)",
                  "Multicolor: 20 → 20 (No change)",
                  "Amazonite: 7 → 12 (Increase)",
                  "Dioptasium: 6 → 16 (Increase)"
                ]
              },
              {
                "text": "The durability of the tools (except Hammer) have been reviewed:",
                "childrenListType": "ordered",
                "children": [
                  "Paladium: 1200 → 900 (Reduction)",
                  "Red: 1800 → 1200 (Reduction)",
                  "Multicolor: 3000 → 3000 (No change)",
                  "Amazonite: 1400 → 1800 (Increase)",
                  "Dioptasium: 1700 → 2400 (Increase)"
                ]
              }
            ]
          }
        ],
        "it": [{ "type": "fix", "heading": "Correzioni:", "items": ["Corrette alcune traduzioni mancanti in francese.", "Modificata la texture del disco “Sweden”.", "La sabbia nera ora si genera naturalmente tra i livelli 0 e -64.", "Modificata la ricetta del Purifier.", "Rimosse le restrizioni dei biomi per la generazione del minerale di Amazonite.", { "text": "Modificata l’efficienza dei picconi in Paladium, Red, Multicolor, Amazonite e Dioptasium:", "childrenListType": "ordered", "children": ["Paladium: 8 → 8 (nessuna modifica)", "Red: 8 → 9 (aumento)", "Multicolor: 20 → 20 (nessuna modifica)", "Amazonite: 7 → 12 (aumento)", "Dioptasium: 6 → 16 (aumento)"] }, { "text": "Rivista la durabilità degli strumenti (escluso Hammer):", "childrenListType": "ordered", "children": ["Paladium: 1200 → 900 (riduzione)", "Red: 1800 → 1200 (riduzione)", "Multicolor: 3000 → 3000 (nessuna modifica)", "Amazonite: 1400 → 1800 (aumento)", "Dioptasium: 1700 → 2400 (aumento)"] }] }],
        "es": [{ "type": "fix", "heading": "Correcciones:", "items": ["Corregidas algunas traducciones que faltaban en francés.", "Cambiada la textura del disco «Sweden».", "La arena negra ahora se genera de forma natural entre las capas 0 y -64.", "Modificada la receta del Purifier.", "Eliminadas las restricciones de bioma para la generación del mineral de Amazonite.", { "text": "Modificada la eficiencia de los picos de Paladium, Red, Multicolor, Amazonite y Dioptasium:", "childrenListType": "ordered", "children": ["Paladium: 8 → 8 (sin cambios)", "Red: 8 → 9 (aumento)", "Multicolor: 20 → 20 (sin cambios)", "Amazonite: 7 → 12 (aumento)", "Dioptasium: 6 → 16 (aumento)"] }, { "text": "Revisada la durabilidad de las herramientas (excepto Hammer):", "childrenListType": "ordered", "children": ["Paladium: 1200 → 900 (reducción)", "Red: 1800 → 1200 (reducción)", "Multicolor: 3000 → 3000 (sin cambios)", "Amazonite: 1400 → 1800 (aumento)", "Dioptasium: 1700 → 2400 (aumento)"] }] }],
        "de": [{ "type": "fix", "heading": "Fehlerbehebungen:", "items": ["Fehlende französische Übersetzungen korrigiert.", "Textur der „Sweden“-Schallplatte geändert.", "Schwarzer Sand generiert jetzt natürlich zwischen Höhe 0 und -64.", "Rezept des Purifier geändert.", "Biombeschränkungen für das Erscheinen von Amazonite-Erz entfernt.", { "text": "Abbaueffizienz der Spitzhacken aus Paladium, Red, Multicolor, Amazonite und Dioptasium geändert:", "childrenListType": "ordered", "children": ["Paladium: 8 → 8 (keine Änderung)", "Red: 8 → 9 (Erhöhung)", "Multicolor: 20 → 20 (keine Änderung)", "Amazonite: 7 → 12 (Erhöhung)", "Dioptasium: 6 → 16 (Erhöhung)"] }, { "text": "Haltbarkeit der Werkzeuge überarbeitet (außer Hammer):", "childrenListType": "ordered", "children": ["Paladium: 1200 → 900 (Verringerung)", "Red: 1800 → 1200 (Verringerung)", "Multicolor: 3000 → 3000 (keine Änderung)", "Amazonite: 1400 → 1800 (Erhöhung)", "Dioptasium: 1700 → 2400 (Erhöhung)"] }] }],
        "ja": [{ "type": "fix", "heading": "修正:", "items": ["フランス語に存在しなかった一部の翻訳を修正しました。", "ディスク「Sweden」のテクスチャを変更しました。", "黒い砂が高さ 0 から -64 の間に自然生成されるようになりました。", "Purifier のレシピを変更しました。", "Amazonite 鉱石の生成に関するバイオーム制限を削除しました。", { "text": "Paladium、Red、Multicolor、Amazonite、Dioptasium のツルハシの採掘速度を変更しました:", "childrenListType": "ordered", "children": ["Paladium: 8 → 8 (変更なし)", "Red: 8 → 9 (増加)", "Multicolor: 20 → 20 (変更なし)", "Amazonite: 7 → 12 (増加)", "Dioptasium: 6 → 16 (増加)"] }, { "text": "Hammer 以外のツールの耐久値を調整しました:", "childrenListType": "ordered", "children": ["Paladium: 1200 → 900 (減少)", "Red: 1800 → 1200 (減少)", "Multicolor: 3000 → 3000 (変更なし)", "Amazonite: 1400 → 1800 (増加)", "Dioptasium: 1700 → 2400 (増加)"] }] }],
        "ko": [{ "type": "fix", "heading": "수정:", "items": ["프랑스어에 없던 일부 번역 수정", "“Sweden” 음반 텍스처 변경", "검은 모래가 높이 0부터 -64 사이에 자연 생성되도록 변경", "Purifier 제작법 변경", "Amazonite 광석 생성의 생물 군계 제한 제거", { "text": "Paladium, Red, Multicolor, Amazonite, Dioptasium 곡괭이의 채굴 효율 변경:", "childrenListType": "ordered", "children": ["Paladium: 8 → 8 (변경 없음)", "Red: 8 → 9 (증가)", "Multicolor: 20 → 20 (변경 없음)", "Amazonite: 7 → 12 (증가)", "Dioptasium: 6 → 16 (증가)"] }, { "text": "Hammer를 제외한 도구 내구도 조정:", "childrenListType": "ordered", "children": ["Paladium: 1200 → 900 (감소)", "Red: 1800 → 1200 (감소)", "Multicolor: 3000 → 3000 (변경 없음)", "Amazonite: 1400 → 1800 (증가)", "Dioptasium: 1700 → 2400 (증가)"] }] }],
        "pt-br": [{ "type": "fix", "heading": "Correções:", "items": ["Corrigidas algumas traduções que não estavam presentes em francês.", "Textura do disco “Sweden” alterada.", "A areia preta agora é gerada naturalmente entre as camadas 0 e -64.", "Receita do Purifier alterada.", "Removidas as restrições de bioma para a geração do minério de Amazonite.", { "text": "Eficiência das picaretas de Paladium, Red, Multicolor, Amazonite e Dioptasium alterada:", "childrenListType": "ordered", "children": ["Paladium: 8 → 8 (sem alteração)", "Red: 8 → 9 (aumento)", "Multicolor: 20 → 20 (sem alteração)", "Amazonite: 7 → 12 (aumento)", "Dioptasium: 6 → 16 (aumento)"] }, { "text": "Durabilidade das ferramentas revisada (exceto Hammer):", "childrenListType": "ordered", "children": ["Paladium: 1200 → 900 (redução)", "Red: 1800 → 1200 (redução)", "Multicolor: 3000 → 3000 (sem alteração)", "Amazonite: 1400 → 1800 (aumento)", "Dioptasium: 1700 → 2400 (aumento)"] }] }]
      }
    },
    {
      "version": "1.3.0",
      "date": "2024-08-23",
      "loader": "Forge, NeoForge",
      "mcVersion": "1.20.6",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout du craft du mob spawner",
              {
                "text": "Ajout de la recette de chaque œuf de spawn",
                "childrenListType": "ordered",
                "children": [
                  "Sauf pour le sniffer, la poule chevauché, le cavalier squelette, l'araignée chevauchée, la vex, le zoglin, le breeze, l'embourbé"
                ]
              },
              "Ajout du disque de musique avec la musique de C418 sweden",
              "Ajout d'un nouveau boss « Extermate » ( warden ) et d'un avancement",
              "Ajout également de la structure pour aller battre le boss extermate dans le biome sakura, Crimson, warped et soul sand valley"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "Ajout de l'effet regeneration, instant health, resistance, et health boost lorsque la pomme multicolor est utilisé",
              "Diminution des loot des agricultures (nether star et netherite)",
              "Mise à jour des traduction françaises",
              "Mise à jour de la traduction du liquide « elixir of life » en français",
              "Ajout d'un affichage du prix pour modifier le temps et la météo dans le chrononimbus",
              "Ajout d'un son lorsque l'armure en amazonite et space est équipée",
              {
                "text": "Modification du son lorsque l'armure est équipée",
                "childrenListType": "ordered",
                "children": [
                  "Paladium → son de fer au lieu du diamant",
                  "Red → son de l'or au lieu du diamant",
                  "Dioptasium → son de netherite au lieu du diamant"
                ]
              },
              "Modification de la texture de l'armure en amazonite",
              "Modification de la texture du lingot et du bloc en chrome",
              "Modification de la durablité des outils passant de 700 à 1700 et de 1000 à 1400 pour le Hammer en dioptasium",
              "Modification de la texture du lingot et du bloc de chrome",
              {
                "text": "Modification de la durabilité de l'armure en amazonite, en dioptasium, en multicolor, et en space",
                "childrenListType": "ordered",
                "children": [
                  "Amazonite : 30 → 100",
                  "Dioptasium : 15 → 150",
                  "Multicolor : 100 → 187",
                  "Space : 25 → 34"
                ]
              }
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition:",
            "items": [
              "Added the mob spawner recipe",
              {
                "text": "Added the recipe for each spawn egg",
                "childrenListType": "ordered",
                "children": [
                  "Except for the sniffer, the ridden chicken, the skeleton rider, the ridden spider, the vex, the zoglin, the breeze, the swamped"
                ]
              },
              "Added the music disc with the music of C418 sweden",
              "Added a new boss “Extermate” (warden) and an advancement",
              "Added also the structure to go fight the extermate boss in the sakura, crimson, warped and soul sand valley biomes"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction:",
            "items": [
              "Added the regeneration, instant health, resistance, and health boost effect when the multicolor apple is used",
              "Decreased the loot of the agricultures (nether star and netherite)",
              "Updated the french translations",
              "Updated the translation of the “elixir of life” liquid in french",
              "Added a display of the price to change the time and weather in the chrononimbus",
              "Added a sound when the armor in amazonite and space is equipped",
              {
                "text": "Modification of the sound when the armor is equipped",
                "childrenListType": "ordered",
                "children": [
                  "Paladium → iron sound instead of diamond",
                  "Red → gold sound instead of diamond",
                  "Dioptasium → netherite sound instead of diamond"
                ]
              },
              "Modification of the texture of the armor in amazonite",
              "Modification of the texture of the ingot and block in chrome",
              "Modification of the durability of the tools from 700 to 1700 and from 1000 to 1400 for the Hammer in dioptasium",
              "Modification of the texture of the ingot and block of chrome",
              {
                "text": "Modification of the durability of the armor in amazonite, dioptasium, multicolor, and space",
                "childrenListType": "ordered",
                "children": [
                  "Amazonite : 30 → 100",
                  "Dioptasium : 15 → 150",
                  "Multicolor : 100 → 187",
                  "Space : 25 → 34"
                ]
              }
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunta la ricetta dello spawner.", { "text": "Aggiunta la ricetta per ogni uovo generabile", "childrenListType": "ordered", "children": ["Tranne Sniffer, Chicken Jockey, Skeleton Horseman, Spider Jockey, Vex, Zoglin, Breeze e Bogged"] }, "Aggiunto il disco con la musica “Sweden” di C418.", "Aggiunto il nuovo boss Extermate (Warden) e un avanzamento.", "Aggiunta la struttura per affrontare Extermate nei biomi Sakura, Crimson Forest, Warped Forest e Soul Sand Valley."] },
          { "type": "fix", "heading": "Correzioni:", "items": ["La Multicolor Apple ora applica gli effetti di rigenerazione, salute istantanea, resistenza e aumento della salute.", "Ridotti i bottini delle colture (Nether Star e Netherite).", "Aggiornate le traduzioni francesi.", "Aggiornata la traduzione francese del liquido “Elixir of Life”.", "Aggiunta la visualizzazione del prezzo per modificare ora e meteo con il Chrononimbus.", "Aggiunto un suono quando si indossano le armature Amazonite e Space.", { "text": "Modificati i suoni quando si indossano le armature:", "childrenListType": "ordered", "children": ["Paladium → suono del ferro invece del diamante", "Red → suono dell’oro invece del diamante", "Dioptasium → suono della netherite invece del diamante"] }, "Modificata la texture dell’armatura Amazonite.", "Modificate le texture del lingotto e del blocco Chrome.", "Durabilità degli strumenti modificata da 700 a 1700 e da 1000 a 1400 per l’Hammer in Dioptasium.", "Modificata la texture del lingotto e del blocco Chrome.", { "text": "Durabilità delle armature Amazonite, Dioptasium, Multicolor e Space modificata:", "childrenListType": "ordered", "children": ["Amazonite: 30 → 100", "Dioptasium: 15 → 150", "Multicolor: 100 → 187", "Space: 25 → 34"] }] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadida la receta del generador de criaturas.", { "text": "Añadida la receta de cada huevo de aparición", "childrenListType": "ordered", "children": ["Excepto Sniffer, Chicken Jockey, Skeleton Horseman, Spider Jockey, Vex, Zoglin, Breeze y Bogged"] }, "Añadido el disco con la música «Sweden» de C418.", "Añadidos el nuevo jefe Extermate (Warden) y un progreso.", "Añadida la estructura para luchar contra Extermate en los biomas Sakura, Crimson Forest, Warped Forest y Soul Sand Valley."] },
          { "type": "fix", "heading": "Correcciones:", "items": ["La Multicolor Apple ahora aplica los efectos de regeneración, salud instantánea, resistencia y aumento de salud.", "Reducido el botín de los cultivos (Nether Star y Netherite).", "Actualizadas las traducciones al francés.", "Actualizada la traducción al francés del líquido «Elixir of Life».", "Añadida la visualización del precio para cambiar la hora y el clima con el Chrononimbus.", "Añadido un sonido al equipar las armaduras de Amazonite y Space.", { "text": "Cambiados los sonidos al equipar las armaduras:", "childrenListType": "ordered", "children": ["Paladium → sonido de hierro en lugar de diamante", "Red → sonido de oro en lugar de diamante", "Dioptasium → sonido de netherita en lugar de diamante"] }, "Cambiada la textura de la armadura de Amazonite.", "Cambiadas las texturas del lingote y el bloque de Chrome.", "Durabilidad de las herramientas cambiada de 700 a 1700 y de 1000 a 1400 para el Hammer de Dioptasium.", "Cambiada la textura del lingote y el bloque de Chrome.", { "text": "Durabilidad de las armaduras de Amazonite, Dioptasium, Multicolor y Space modificada:", "childrenListType": "ordered", "children": ["Amazonite: 30 → 100", "Dioptasium: 15 → 150", "Multicolor: 100 → 187", "Space: 25 → 34"] }] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Rezept für den Mob-Spawner hinzugefügt.", { "text": "Rezept für jedes Spawn-Ei hinzugefügt", "childrenListType": "ordered", "children": ["Außer für Sniffer, Chicken Jockey, Skeleton Horseman, Spider Jockey, Vex, Zoglin, Breeze und Bogged"] }, "Musikdisc mit C418s Musikstück „Sweden“ hinzugefügt.", "Neuen Boss Extermate (Warden) und einen Fortschritt hinzugefügt.", "Struktur zum Kampf gegen Extermate in den Biomen Sakura, Crimson Forest, Warped Forest und Soul Sand Valley hinzugefügt."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["Multicolor Apple verleiht jetzt Regeneration, Sofortheilung, Resistenz und erhöhte Gesundheit.", "Beute aus der Landwirtschaft (Nether Star und Netherite) verringert.", "Französische Übersetzungen aktualisiert.", "Französische Übersetzung der Flüssigkeit „Elixir of Life“ aktualisiert.", "Preisanzeige zum Ändern von Zeit und Wetter mit dem Chrononimbus hinzugefügt.", "Ton beim Ausrüsten der Amazonite- und Space-Rüstung hinzugefügt.", { "text": "Ausrüstungstöne der Rüstungen geändert:", "childrenListType": "ordered", "children": ["Paladium → Eisengeräusch statt Diamant", "Red → Goldgeräusch statt Diamant", "Dioptasium → Netherite-Geräusch statt Diamant"] }, "Textur der Amazonite-Rüstung geändert.", "Texturen des Chrome-Barrens und -Blocks geändert.", "Werkzeughaltbarkeit von 700 auf 1700 und für den Dioptasium-Hammer von 1000 auf 1400 geändert.", "Textur des Chrome-Barrens und -Blocks geändert.", { "text": "Haltbarkeit der Rüstungen aus Amazonite, Dioptasium, Multicolor und Space geändert:", "childrenListType": "ordered", "children": ["Amazonite: 30 → 100", "Dioptasium: 15 → 150", "Multicolor: 100 → 187", "Space: 25 → 34"] }] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["モブスポナーのレシピを追加しました。", { "text": "各スポーンエッグのレシピを追加しました", "childrenListType": "ordered", "children": ["Sniffer、Chicken Jockey、Skeleton Horseman、Spider Jockey、Vex、Zoglin、Breeze、Bogged を除く"] }, "C418 の「Sweden」を収録した音楽ディスクを追加しました。", "新しいボス Extermate (Warden) と進捗を追加しました。", "Sakura、Crimson Forest、Warped Forest、Soul Sand Valley に Extermate と戦うための構造物を追加しました。"] },
          { "type": "fix", "heading": "修正:", "items": ["Multicolor Apple 使用時に再生、即時回復、耐性、体力増加の効果が付与されるようになりました。", "作物から得られる戦利品 (Nether Star と Netherite) を減らしました。", "フランス語訳を更新しました。", "液体「Elixir of Life」のフランス語訳を更新しました。", "Chrononimbus で時間や天候を変更する際の価格表示を追加しました。", "Amazonite と Space の防具を装備した際の音を追加しました。", { "text": "防具を装備した際の音を変更しました:", "childrenListType": "ordered", "children": ["Paladium → ダイヤモンド音から鉄音に変更", "Red → ダイヤモンド音から金音に変更", "Dioptasium → ダイヤモンド音からネザライト音に変更"] }, "Amazonite 防具のテクスチャを変更しました。", "Chrome インゴットとブロックのテクスチャを変更しました。", "ツールの耐久値を 700 から 1700 に、Dioptasium Hammer の耐久値を 1000 から 1400 に変更しました。", "Chrome インゴットとブロックのテクスチャを変更しました。", { "text": "Amazonite、Dioptasium、Multicolor、Space 防具の耐久値を変更しました:", "childrenListType": "ordered", "children": ["Amazonite: 30 → 100", "Dioptasium: 15 → 150", "Multicolor: 100 → 187", "Space: 25 → 34"] }] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["몹 생성기 제작법 추가", { "text": "각 생성 알의 제작법 추가", "childrenListType": "ordered", "children": ["Sniffer, Chicken Jockey, Skeleton Horseman, Spider Jockey, Vex, Zoglin, Breeze, Bogged 제외"] }, "C418의 “Sweden” 음악이 담긴 음반 추가", "신규 보스 Extermate(Warden)와 발전 과제 추가", "Sakura, Crimson Forest, Warped Forest, Soul Sand Valley 생물 군계에 Extermate 보스 전투 구조물 추가"] },
          { "type": "fix", "heading": "수정:", "items": ["Multicolor Apple 사용 시 재생, 즉시 치유, 저항, 최대 체력 증가 효과 적용", "농작물 전리품(Nether Star 및 Netherite) 감소", "프랑스어 번역 업데이트", "“Elixir of Life” 액체의 프랑스어 번역 업데이트", "Chrononimbus에서 시간과 날씨를 변경할 때 가격 표시 추가", "Amazonite 및 Space 방어구 착용 시 소리 추가", { "text": "방어구 착용 소리 변경:", "childrenListType": "ordered", "children": ["Paladium → 다이아몬드 대신 철 소리", "Red → 다이아몬드 대신 금 소리", "Dioptasium → 다이아몬드 대신 네더라이트 소리"] }, "Amazonite 방어구 텍스처 변경", "Chrome 주괴와 블록 텍스처 변경", "도구 내구도를 700에서 1700으로, Dioptasium Hammer 내구도를 1000에서 1400으로 변경", "Chrome 주괴와 블록 텍스처 변경", { "text": "Amazonite, Dioptasium, Multicolor, Space 방어구 내구도 변경:", "childrenListType": "ordered", "children": ["Amazonite: 30 → 100", "Dioptasium: 15 → 150", "Multicolor: 100 → 187", "Space: 25 → 34"] }] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionada a receita do gerador de criaturas.", { "text": "Adicionada a receita de cada ovo de criatura", "childrenListType": "ordered", "children": ["Exceto para Sniffer, Chicken Jockey, Skeleton Horseman, Spider Jockey, Vex, Zoglin, Breeze e Bogged"] }, "Adicionado o disco com a música “Sweden”, de C418.", "Adicionados o novo chefe Extermate (Warden) e um avanço.", "Adicionada a estrutura para enfrentar Extermate nos biomas Sakura, Crimson Forest, Warped Forest e Soul Sand Valley."] },
          { "type": "fix", "heading": "Correções:", "items": ["Multicolor Apple agora concede regeneração, cura instantânea, resistência e aumento de vida.", "Reduzidos os saques das plantações (Nether Star e Netherite).", "Traduções para francês atualizadas.", "Tradução para francês do líquido “Elixir of Life” atualizada.", "Adicionada a exibição do preço para alterar o horário e o clima com o Chrononimbus.", "Adicionado um som ao equipar as armaduras Amazonite e Space.", { "text": "Sons ao equipar armaduras alterados:", "childrenListType": "ordered", "children": ["Paladium → som de ferro em vez de diamante", "Red → som de ouro em vez de diamante", "Dioptasium → som de netherita em vez de diamante"] }, "Textura da armadura Amazonite alterada.", "Texturas do lingote e do bloco de Chrome alteradas.", "Durabilidade das ferramentas alterada de 700 para 1700 e, para o Hammer de Dioptasium, de 1000 para 1400.", "Textura do lingote e do bloco de Chrome alterada.", { "text": "Durabilidade das armaduras Amazonite, Dioptasium, Multicolor e Space alterada:", "childrenListType": "ordered", "children": ["Amazonite: 30 → 100", "Dioptasium: 15 → 150", "Multicolor: 100 → 187", "Space: 25 → 34"] }] }
        ]
      }
    },
    {
      "version": "1.13.0",
      "date": "2024-08-23",
      "loader": "Forge",
      "mcVersion": "1.20.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout du craft du mob spawner",
              {
                "text": "Ajout de la recette de chaque œuf de spawn",
                "childrenListType": "ordered",
                "children": [
                  "Sauf pour le sniffer, la poule chevauché, le cavalier squelette, l'araignée chevauchée, la vex, le zoglin, le breeze, l'embourbé"
                ]
              },
              "Ajout du disque de musique avec la musique de C418 sweden",
              "Ajout d'un nouveau boss « Extermate » ( warden ) et d'un avancement",
              "Ajout également de la structure pour aller battre le boss extermate dans le biome sakura, Crimson, warped et soul sand valley"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "Ajout de l'effet regeneration, instant health, resistance, et health boost lorsque la pomme multicolor est utilisé",
              "Diminution des loot des agricultures (nether star et netherite)",
              "Mise à jour des traduction françaises",
              "Mise à jour de la traduction du liquide « elixir of life » en français",
              "Ajout d'un affichage du prix pour modifier le temps et la météo dans le chrononimbus",
              "Ajout d'un son lorsque l'armure en amazonite et space est équipée",
              {
                "text": "Modification du son lorsque l'armure est équipée",
                "childrenListType": "ordered",
                "children": [
                  "Paladium → son de fer au lieu du diamant",
                  "Red → son de l'or au lieu du diamant",
                  "Dioptasium → son de netherite au lieu du diamant"
                ]
              },
              "Modification de la texture de l'armure en amazonite",
              "Modification de la texture du lingot et du bloc en chrome",
              "Modification de la durablité des outils passant de 700 à 1700 et de 1000 à 1400 pour le Hammer en dioptasium",
              "Modification de la texture du lingot et du bloc de chrome",
              {
                "text": "Modification de la durabilité de l'armure en amazonite, en dioptasium, en multicolor, et en space",
                "childrenListType": "ordered",
                "children": [
                  "Amazonite : 30 → 100",
                  "Dioptasium : 15 → 150",
                  "Multicolor : 100 → 187",
                  "Space : 25 → 34"
                ]
              }
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition:",
            "items": [
              "Added the mob spawner recipe",
              {
                "text": "Added the recipe for each spawn egg",
                "childrenListType": "ordered",
                "children": [
                  "Except for the sniffer, the ridden chicken, the skeleton rider, the ridden spider, the vex, the zoglin, the breeze, the swamped"
                ]
              },
              "Added the music disc with the music of C418 sweden",
              "Added a new boss “Extermate” (warden) and an advancement",
              "Added also the structure to go fight the extermate boss in the sakura, crimson, warped and soul sand valley biomes"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction:",
            "items": [
              "Added the regeneration, instant health, resistance, and health boost effect when the multicolor apple is used",
              "Decreased the loot of the agricultures (nether star and netherite)",
              "Updated the french translations",
              "Updated the translation of the “elixir of life” liquid in french",
              "Added a display of the price to change the time and weather in the chrononimbus",
              "Added a sound when the armor in amazonite and space is equipped",
              {
                "text": "Modification of the sound when the armor is equipped",
                "childrenListType": "ordered",
                "children": [
                  "Paladium → iron sound instead of diamond",
                  "Red → gold sound instead of diamond",
                  "Dioptasium → netherite sound instead of diamond"
                ]
              },
              "Modification of the texture of the armor in amazonite",
              "Modification of the texture of the ingot and block in chrome",
              "Modification of the durability of the tools from 700 to 1700 and from 1000 to 1400 for the Hammer in dioptasium",
              "Modification of the texture of the ingot and block of chrome",
              {
                "text": "Modification of the durability of the armor in amazonite, dioptasium, multicolor, and space",
                "childrenListType": "ordered",
                "children": [
                  "Amazonite : 30 → 100",
                  "Dioptasium : 15 → 150",
                  "Multicolor : 100 → 187",
                  "Space : 25 → 34"
                ]
              }
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunta la ricetta dello spawner.", { "text": "Aggiunta la ricetta per ogni uovo generabile", "childrenListType": "ordered", "children": ["Tranne Sniffer, Chicken Jockey, Skeleton Horseman, Spider Jockey, Vex, Zoglin, Breeze e Bogged"] }, "Aggiunto il disco con la musica “Sweden” di C418.", "Aggiunto il nuovo boss Extermate (Warden) e un avanzamento.", "Aggiunta la struttura per affrontare Extermate nei biomi Sakura, Crimson Forest, Warped Forest e Soul Sand Valley."] },
          { "type": "fix", "heading": "Correzioni:", "items": ["La Multicolor Apple ora applica gli effetti di rigenerazione, salute istantanea, resistenza e aumento della salute.", "Ridotti i bottini delle colture (Nether Star e Netherite).", "Aggiornate le traduzioni francesi.", "Aggiornata la traduzione francese del liquido “Elixir of Life”.", "Aggiunta la visualizzazione del prezzo per modificare ora e meteo con il Chrononimbus.", "Aggiunto un suono quando si indossano le armature Amazonite e Space.", { "text": "Modificati i suoni quando si indossano le armature:", "childrenListType": "ordered", "children": ["Paladium → suono del ferro invece del diamante", "Red → suono dell’oro invece del diamante", "Dioptasium → suono della netherite invece del diamante"] }, "Modificata la texture dell’armatura Amazonite.", "Modificate le texture del lingotto e del blocco Chrome.", "Durabilità degli strumenti modificata da 700 a 1700 e da 1000 a 1400 per l’Hammer in Dioptasium.", "Modificata la texture del lingotto e del blocco Chrome.", { "text": "Durabilità delle armature Amazonite, Dioptasium, Multicolor e Space modificata:", "childrenListType": "ordered", "children": ["Amazonite: 30 → 100", "Dioptasium: 15 → 150", "Multicolor: 100 → 187", "Space: 25 → 34"] }] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadida la receta del generador de criaturas.", { "text": "Añadida la receta de cada huevo de aparición", "childrenListType": "ordered", "children": ["Excepto Sniffer, Chicken Jockey, Skeleton Horseman, Spider Jockey, Vex, Zoglin, Breeze y Bogged"] }, "Añadido el disco con la música «Sweden» de C418.", "Añadidos el nuevo jefe Extermate (Warden) y un progreso.", "Añadida la estructura para luchar contra Extermate en los biomas Sakura, Crimson Forest, Warped Forest y Soul Sand Valley."] },
          { "type": "fix", "heading": "Correcciones:", "items": ["La Multicolor Apple ahora aplica los efectos de regeneración, salud instantánea, resistencia y aumento de salud.", "Reducido el botín de los cultivos (Nether Star y Netherite).", "Actualizadas las traducciones al francés.", "Actualizada la traducción al francés del líquido «Elixir of Life».", "Añadida la visualización del precio para cambiar la hora y el clima con el Chrononimbus.", "Añadido un sonido al equipar las armaduras de Amazonite y Space.", { "text": "Cambiados los sonidos al equipar las armaduras:", "childrenListType": "ordered", "children": ["Paladium → sonido de hierro en lugar de diamante", "Red → sonido de oro en lugar de diamante", "Dioptasium → sonido de netherita en lugar de diamante"] }, "Cambiada la textura de la armadura de Amazonite.", "Cambiadas las texturas del lingote y el bloque de Chrome.", "Durabilidad de las herramientas cambiada de 700 a 1700 y de 1000 a 1400 para el Hammer de Dioptasium.", "Cambiada la textura del lingote y el bloque de Chrome.", { "text": "Durabilidad de las armaduras de Amazonite, Dioptasium, Multicolor y Space modificada:", "childrenListType": "ordered", "children": ["Amazonite: 30 → 100", "Dioptasium: 15 → 150", "Multicolor: 100 → 187", "Space: 25 → 34"] }] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Rezept für den Mob-Spawner hinzugefügt.", { "text": "Rezept für jedes Spawn-Ei hinzugefügt", "childrenListType": "ordered", "children": ["Außer für Sniffer, Chicken Jockey, Skeleton Horseman, Spider Jockey, Vex, Zoglin, Breeze und Bogged"] }, "Musikdisc mit C418s Musikstück „Sweden“ hinzugefügt.", "Neuen Boss Extermate (Warden) und einen Fortschritt hinzugefügt.", "Struktur zum Kampf gegen Extermate in den Biomen Sakura, Crimson Forest, Warped Forest und Soul Sand Valley hinzugefügt."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["Multicolor Apple verleiht jetzt Regeneration, Sofortheilung, Resistenz und erhöhte Gesundheit.", "Beute aus der Landwirtschaft (Nether Star und Netherite) verringert.", "Französische Übersetzungen aktualisiert.", "Französische Übersetzung der Flüssigkeit „Elixir of Life“ aktualisiert.", "Preisanzeige zum Ändern von Zeit und Wetter mit dem Chrononimbus hinzugefügt.", "Ton beim Ausrüsten der Amazonite- und Space-Rüstung hinzugefügt.", { "text": "Ausrüstungstöne der Rüstungen geändert:", "childrenListType": "ordered", "children": ["Paladium → Eisengeräusch statt Diamant", "Red → Goldgeräusch statt Diamant", "Dioptasium → Netherite-Geräusch statt Diamant"] }, "Textur der Amazonite-Rüstung geändert.", "Texturen des Chrome-Barrens und -Blocks geändert.", "Werkzeughaltbarkeit von 700 auf 1700 und für den Dioptasium-Hammer von 1000 auf 1400 geändert.", "Textur des Chrome-Barrens und -Blocks geändert.", { "text": "Haltbarkeit der Rüstungen aus Amazonite, Dioptasium, Multicolor und Space geändert:", "childrenListType": "ordered", "children": ["Amazonite: 30 → 100", "Dioptasium: 15 → 150", "Multicolor: 100 → 187", "Space: 25 → 34"] }] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["モブスポナーのレシピを追加しました。", { "text": "各スポーンエッグのレシピを追加しました", "childrenListType": "ordered", "children": ["Sniffer、Chicken Jockey、Skeleton Horseman、Spider Jockey、Vex、Zoglin、Breeze、Bogged を除く"] }, "C418 の「Sweden」を収録した音楽ディスクを追加しました。", "新しいボス Extermate (Warden) と進捗を追加しました。", "Sakura、Crimson Forest、Warped Forest、Soul Sand Valley に Extermate と戦うための構造物を追加しました。"] },
          { "type": "fix", "heading": "修正:", "items": ["Multicolor Apple 使用時に再生、即時回復、耐性、体力増加の効果が付与されるようになりました。", "作物から得られる戦利品 (Nether Star と Netherite) を減らしました。", "フランス語訳を更新しました。", "液体「Elixir of Life」のフランス語訳を更新しました。", "Chrononimbus で時間や天候を変更する際の価格表示を追加しました。", "Amazonite と Space の防具を装備した際の音を追加しました。", { "text": "防具を装備した際の音を変更しました:", "childrenListType": "ordered", "children": ["Paladium → ダイヤモンド音から鉄音に変更", "Red → ダイヤモンド音から金音に変更", "Dioptasium → ダイヤモンド音からネザライト音に変更"] }, "Amazonite 防具のテクスチャを変更しました。", "Chrome インゴットとブロックのテクスチャを変更しました。", "ツールの耐久値を 700 から 1700 に、Dioptasium Hammer の耐久値を 1000 から 1400 に変更しました。", "Chrome インゴットとブロックのテクスチャを変更しました。", { "text": "Amazonite、Dioptasium、Multicolor、Space 防具の耐久値を変更しました:", "childrenListType": "ordered", "children": ["Amazonite: 30 → 100", "Dioptasium: 15 → 150", "Multicolor: 100 → 187", "Space: 25 → 34"] }] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["몹 생성기 제작법 추가", { "text": "각 생성 알의 제작법 추가", "childrenListType": "ordered", "children": ["Sniffer, Chicken Jockey, Skeleton Horseman, Spider Jockey, Vex, Zoglin, Breeze, Bogged 제외"] }, "C418의 “Sweden” 음악이 담긴 음반 추가", "신규 보스 Extermate(Warden)와 발전 과제 추가", "Sakura, Crimson Forest, Warped Forest, Soul Sand Valley 생물 군계에 Extermate 보스 전투 구조물 추가"] },
          { "type": "fix", "heading": "수정:", "items": ["Multicolor Apple 사용 시 재생, 즉시 치유, 저항, 최대 체력 증가 효과 적용", "농작물 전리품(Nether Star 및 Netherite) 감소", "프랑스어 번역 업데이트", "“Elixir of Life” 액체의 프랑스어 번역 업데이트", "Chrononimbus에서 시간과 날씨를 변경할 때 가격 표시 추가", "Amazonite 및 Space 방어구 착용 시 소리 추가", { "text": "방어구 착용 소리 변경:", "childrenListType": "ordered", "children": ["Paladium → 다이아몬드 대신 철 소리", "Red → 다이아몬드 대신 금 소리", "Dioptasium → 다이아몬드 대신 네더라이트 소리"] }, "Amazonite 방어구 텍스처 변경", "Chrome 주괴와 블록 텍스처 변경", "도구 내구도를 700에서 1700으로, Dioptasium Hammer 내구도를 1000에서 1400으로 변경", "Chrome 주괴와 블록 텍스처 변경", { "text": "Amazonite, Dioptasium, Multicolor, Space 방어구 내구도 변경:", "childrenListType": "ordered", "children": ["Amazonite: 30 → 100", "Dioptasium: 15 → 150", "Multicolor: 100 → 187", "Space: 25 → 34"] }] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionada a receita do gerador de criaturas.", { "text": "Adicionada a receita de cada ovo de criatura", "childrenListType": "ordered", "children": ["Exceto para Sniffer, Chicken Jockey, Skeleton Horseman, Spider Jockey, Vex, Zoglin, Breeze e Bogged"] }, "Adicionado o disco com a música “Sweden”, de C418.", "Adicionados o novo chefe Extermate (Warden) e um avanço.", "Adicionada a estrutura para enfrentar Extermate nos biomas Sakura, Crimson Forest, Warped Forest e Soul Sand Valley."] },
          { "type": "fix", "heading": "Correções:", "items": ["Multicolor Apple agora concede regeneração, cura instantânea, resistência e aumento de vida.", "Reduzidos os saques das plantações (Nether Star e Netherite).", "Traduções para francês atualizadas.", "Tradução para francês do líquido “Elixir of Life” atualizada.", "Adicionada a exibição do preço para alterar o horário e o clima com o Chrononimbus.", "Adicionado um som ao equipar as armaduras Amazonite e Space.", { "text": "Sons ao equipar armaduras alterados:", "childrenListType": "ordered", "children": ["Paladium → som de ferro em vez de diamante", "Red → som de ouro em vez de diamante", "Dioptasium → som de netherita em vez de diamante"] }, "Textura da armadura Amazonite alterada.", "Texturas do lingote e do bloco de Chrome alteradas.", "Durabilidade das ferramentas alterada de 700 para 1700 e, para o Hammer de Dioptasium, de 1000 para 1400.", "Textura do lingote e do bloco de Chrome alterada.", { "text": "Durabilidade das armaduras Amazonite, Dioptasium, Multicolor e Space alterada:", "childrenListType": "ordered", "children": ["Amazonite: 30 → 100", "Dioptasium: 15 → 150", "Multicolor: 100 → 187", "Space: 25 → 34"] }] }
        ]
      }
    },
    {
      "version": "1.2.0",
      "date": "2024-08-17",
      "loader": "Forge, NeoForge",
      "mcVersion": "1.20.6",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout des 9 autres arbres",
              {
                "text": "Ajout des pousses dans le forestier ( metier de villageois forestier)",
                "childrenListType": "ordered",
                "children": [
                  "Des pousses sont aux niveaux master comme la pousse de sakura, d'enderwood, de silverwood, de prismwood, de phylotas s'échangent avec des lingot d'igniera"
                ]
              },
              "Ajout du craft de sable avec 4 grain de sable et du carft du gravier avec 4 poudre a canon"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "Ajout de la traduction du minerai igniera",
              "La pomme red drop désormais sur les feuilles de redwood",
              "refonte de la texture du lingot red",
              "refonte de la texture du bois redwood"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition:",
            "items": [
              "Added the 9 other trees",
              {
                "text": "Added saplings in the forestry (villager profession: forester)",
                "childrenListType": "ordered",
                "children": [
                  "Saplings are at master levels like the sakura sapling, enderwood, silverwood, prismwood, phylotas saplings exchangeable with igniera ingots"
                ]
              },
              "Added crafting of sand with 4 sand grains and crafting of gravel with 4 gunpowder"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction:",
            "items": [
              "Added translation of the igniera ore",
              "The red apple now drops on redwood leaves",
              "Redesign of the texture of the red ingot",
              "Redesign of the texture of the redwood wood"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunti gli altri 9 alberi.", { "text": "Aggiunte le piantine al commercio del Forestiere", "childrenListType": "ordered", "children": ["Le piantine Sakura, Enderwood, Silverwood, Prismwood e Phylotas sono disponibili al livello maestro in cambio di lingotti Igniera."] }, "Aggiunta la ricetta della sabbia con 4 granelli e quella della ghiaia con 4 polveri da sparo."] },
          { "type": "fix", "heading": "Correzioni:", "items": ["Aggiunta la traduzione del minerale Igniera.", "La Red Apple ora viene rilasciata dalle foglie di Redwood.", "Rinnovata la texture del lingotto Red.", "Rinnovata la texture del legno Redwood."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadidos:", "items": ["Añadidos los otros 9 árboles.", { "text": "Añadidos los plantones a los intercambios del Forestero", "childrenListType": "ordered", "children": ["Los plantones de Sakura, Enderwood, Silverwood, Prismwood y Phylotas están disponibles en el nivel maestro a cambio de lingotes de Igniera."] }, "Añadida la receta de arena con 4 granos y la de grava con 4 pólvoras."] },
          { "type": "fix", "heading": "Correcciones:", "items": ["Añadida la traducción del mineral Igniera.", "La Red Apple ahora aparece al romper hojas de Redwood.", "Rediseñada la textura del lingote Red.", "Rediseñada la textura de la madera Redwood."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Die übrigen 9 Baumarten hinzugefügt.", { "text": "Setzlinge zum Handel des Försters hinzugefügt", "childrenListType": "ordered", "children": ["Sakura-, Enderwood-, Silverwood-, Prismwood- und Phylotas-Setzlinge sind auf Meisterstufe gegen Igniera-Barren erhältlich."] }, "Rezept für Sand aus 4 Sandkörnern und für Kies aus 4 Schießpulvern hinzugefügt."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["Übersetzung des Igniera-Erzes hinzugefügt.", "Red Apple droppen jetzt von Redwood-Blättern.", "Textur des Red-Barrens überarbeitet.", "Textur des Redwood-Holzes überarbeitet."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["残り 9 種類の木を追加しました。", { "text": "林業家の取引に苗木を追加しました", "childrenListType": "ordered", "children": ["Sakura、Enderwood、Silverwood、Prismwood、Phylotas の苗木は、マスターレベルで Igniera インゴットと交換できます。"] }, "砂粒 4 個から砂を、火薬 4 個から砂利を作るレシピを追加しました。"] },
          { "type": "fix", "heading": "修正:", "items": ["Igniera 鉱石の翻訳を追加しました。", "Red Apple が Redwood の葉からドロップするようになりました。", "Red インゴットのテクスチャを刷新しました。", "Redwood の木材テクスチャを刷新しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["나머지 나무 9종 추가", { "text": "산림업자 주민 거래에 묘목 추가", "childrenListType": "ordered", "children": ["Sakura, Enderwood, Silverwood, Prismwood, Phylotas 묘목은 마스터 레벨에서 Igniera 주괴와 교환할 수 있습니다."] }, "모래 알갱이 4개로 모래를, 화약 4개로 자갈을 만드는 제작법 추가"] },
          { "type": "fix", "heading": "수정:", "items": ["Igniera 광석 번역 추가", "Red Apple이 이제 Redwood 잎에서 드롭됩니다.", "Red 주괴 텍스처 개편", "Redwood 목재 텍스처 개편"] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionadas as outras 9 árvores.", { "text": "Adicionadas mudas às trocas do Silvicultor", "childrenListType": "ordered", "children": ["Mudas de Sakura, Enderwood, Silverwood, Prismwood e Phylotas ficam disponíveis no nível mestre em troca de lingotes de Igniera."] }, "Adicionada a receita de areia com 4 grãos e a de cascalho com 4 pólvoras."] },
          { "type": "fix", "heading": "Correções:", "items": ["Adicionada a tradução do minério Igniera.", "A Red Apple agora é obtida das folhas de Redwood.", "Textura do lingote Red reformulada.", "Textura da madeira Redwood reformulada."] }
        ]
      }
    },
    {
      "version": "1.12.0",
      "date": "2024-08-17",
      "loader": "Forge",
      "mcVersion": "1.20.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout des 9 autres arbres",
              {
                "text": "Ajout des pousses dans le forestier ( metier de villageois forestier)",
                "childrenListType": "ordered",
                "children": [
                  "Des pousses sont aux niveaux master comme la pousse de sakura, d'enderwood, de silverwood, de prismwood, de phylotas s'échangent avec des lingot d'igniera"
                ]
              },
              "Ajout du craft de sable avec 4 grain de sable et du carft du gravier avec 4 poudre a canon"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "Ajout de la traduction du minerai igniera",
              "La pomme red drop désormais sur les feuilles de redwood",
              "refonte de la texture du lingot red",
              "refonte de la texture du bois redwood"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition:",
            "items": [
              "Added the 9 other trees",
              {
                "text": "Added saplings in the forestry (villager profession: forester)",
                "childrenListType": "ordered",
                "children": [
                  "Saplings are at master levels like the sakura sapling, enderwood, silverwood, prismwood, phylotas saplings exchangeable with igniera ingots"
                ]
              },
              "Added crafting of sand with 4 sand grains and crafting of gravel with 4 gunpowder"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction:",
            "items": [
              "Added translation of the igniera ore",
              "The red apple now drops on redwood leaves",
              "Redesign of the texture of the red ingot",
              "Redesign of the texture of the redwood wood"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunti gli altri 9 alberi.", { "text": "Aggiunte le piantine al commercio del Forestiere", "childrenListType": "ordered", "children": ["Le piantine Sakura, Enderwood, Silverwood, Prismwood e Phylotas sono disponibili al livello maestro in cambio di lingotti Igniera."] }, "Aggiunta la ricetta della sabbia con 4 granelli e quella della ghiaia con 4 polveri da sparo."] },
          { "type": "fix", "heading": "Correzioni:", "items": ["Aggiunta la traduzione del minerale Igniera.", "La Red Apple ora viene rilasciata dalle foglie di Redwood.", "Rinnovata la texture del lingotto Red.", "Rinnovata la texture del legno Redwood."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadidos:", "items": ["Añadidos los otros 9 árboles.", { "text": "Añadidos los plantones a los intercambios del Forestero", "childrenListType": "ordered", "children": ["Los plantones de Sakura, Enderwood, Silverwood, Prismwood y Phylotas están disponibles en el nivel maestro a cambio de lingotes de Igniera."] }, "Añadida la receta de arena con 4 granos y la de grava con 4 pólvoras."] },
          { "type": "fix", "heading": "Correcciones:", "items": ["Añadida la traducción del mineral Igniera.", "La Red Apple ahora aparece al romper hojas de Redwood.", "Rediseñada la textura del lingote Red.", "Rediseñada la textura de la madera Redwood."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Die übrigen 9 Baumarten hinzugefügt.", { "text": "Setzlinge zum Handel des Försters hinzugefügt", "childrenListType": "ordered", "children": ["Sakura-, Enderwood-, Silverwood-, Prismwood- und Phylotas-Setzlinge sind auf Meisterstufe gegen Igniera-Barren erhältlich."] }, "Rezept für Sand aus 4 Sandkörnern und für Kies aus 4 Schießpulvern hinzugefügt."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["Übersetzung des Igniera-Erzes hinzugefügt.", "Red Apple droppen jetzt von Redwood-Blättern.", "Textur des Red-Barrens überarbeitet.", "Textur des Redwood-Holzes überarbeitet."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["残り 9 種類の木を追加しました。", { "text": "林業家の取引に苗木を追加しました", "childrenListType": "ordered", "children": ["Sakura、Enderwood、Silverwood、Prismwood、Phylotas の苗木は、マスターレベルで Igniera インゴットと交換できます。"] }, "砂粒 4 個から砂を、火薬 4 個から砂利を作るレシピを追加しました。"] },
          { "type": "fix", "heading": "修正:", "items": ["Igniera 鉱石の翻訳を追加しました。", "Red Apple が Redwood の葉からドロップするようになりました。", "Red インゴットのテクスチャを刷新しました。", "Redwood の木材テクスチャを刷新しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["나머지 나무 9종 추가", { "text": "산림업자 주민 거래에 묘목 추가", "childrenListType": "ordered", "children": ["Sakura, Enderwood, Silverwood, Prismwood, Phylotas 묘목은 마스터 레벨에서 Igniera 주괴와 교환할 수 있습니다."] }, "모래 알갱이 4개로 모래를, 화약 4개로 자갈을 만드는 제작법 추가"] },
          { "type": "fix", "heading": "수정:", "items": ["Igniera 광석 번역 추가", "Red Apple이 이제 Redwood 잎에서 드롭됩니다.", "Red 주괴 텍스처 개편", "Redwood 목재 텍스처 개편"] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionadas as outras 9 árvores.", { "text": "Adicionadas mudas às trocas do Silvicultor", "childrenListType": "ordered", "children": ["Mudas de Sakura, Enderwood, Silverwood, Prismwood e Phylotas ficam disponíveis no nível mestre em troca de lingotes de Igniera."] }, "Adicionada a receita de areia com 4 grãos e a de cascalho com 4 pólvoras."] },
          { "type": "fix", "heading": "Correções:", "items": ["Adicionada a tradução do minério Igniera.", "A Red Apple agora é obtida das folhas de Redwood.", "Textura do lingote Red reformulada.", "Textura da madeira Redwood reformulada."] }
        ]
      }
    },
    {
      "version": "1.1.0",
      "date": "2024-08-12",
      "loader": "Forge, NeoForge",
      "mcVersion": "1.20.6",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Nouveau type d'arbres : Sakura avec son arbre et la pousse pour le faire grandir",
              "Nouveau biome : Forêt de sakura",
              "Ajout du lac d'elixir de vie dans le biome de sakura dans le nether souvent caché",
              "Nouveau bloc de barrier en fer et porte en verre",
              "Nouveau minerai : igniera ( aucune utilisation pour le moment, c'est pour bientôt)",
              "Ajout du craft du cobweb avec 5 ficelle",
              "Ajout d'une recette de la deepslate à partir de cobbled deepslate dans le haut fourneau (Blast furnace)"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "Refonte de la texture du lingot et du bloc red"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition:",
            "items": [
              "New tree type: Sakura with its tree and the sapling to grow it",
              "New biome: Sakura Forest",
              "Added the Life Elixir Lake in the Sakura biome in the Nether, often hidden",
              "New iron barrier block and glass door",
              "New ore: Igniera (no use for now, coming soon)",
              "Added crafting of cobweb with 5 string",
              "Added a recipe for deepslate from cobbled deepslate in the blast furnace"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction:",
            "items": [
              "Redesign of the texture of the red ingot and block"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Nuovo tipo di albero: Sakura, con il relativo albero e una piantina per farlo crescere.", "Nuovo bioma: Sakura Forest.", "Aggiunto il lago dell’Elixir of Life nel bioma Sakura del Nether, spesso nascosto.", "Aggiunti una barriera di ferro e una porta di vetro.", "Nuovo minerale: Igniera (per ora senza utilizzo, in arrivo).", "Aggiunta la ricetta per fabbricare cobweb con 5 fili.", "Aggiunta una ricetta per ottenere deepslate da cobbled deepslate nell’altoforno."] },
          { "type": "fix", "heading": "Correzioni:", "items": ["Rinnovate le texture del lingotto e del blocco Red."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Nuevo tipo de árbol: Sakura, con su árbol y un plantón para cultivarlo.", "Nuevo bioma: Sakura Forest.", "Añadido el lago de Elixir of Life en el bioma Sakura del Nether, a menudo oculto.", "Añadidos un bloque de barrera de hierro y una puerta de cristal.", "Nuevo mineral: Igniera (todavía sin uso; llegará próximamente).", "Añadida la receta para fabricar cobweb con 5 hilos.", "Añadida una receta para obtener deepslate a partir de cobbled deepslate en el alto horno."] },
          { "type": "fix", "heading": "Correcciones:", "items": ["Rediseñadas las texturas del lingote y el bloque Red."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Neue Baumart Sakura mit Baum und Setzling zum Anpflanzen hinzugefügt.", "Neues Biom: Sakura Forest.", "See des Elixir of Life im Sakura-Biom des Nether hinzugefügt, oft verborgen.", "Eisenbarriere und Glastür hinzugefügt.", "Neues Erz: Igniera (derzeit ohne Verwendung, kommt bald).", "Rezept für Cobweb aus 5 Fäden hinzugefügt.", "Rezept hinzugefügt, um Deepslate aus Cobbled Deepslate im Hochofen herzustellen."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["Texturen des Red-Barrens und -Blocks überarbeitet."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["Sakura の木と育てるための苗木を追加しました。", "新しいバイオーム: Sakura Forest。", "Nether の Sakura バイオームに Elixir of Life の湖を追加しました (隠れていることが多いです)。", "鉄のバリアブロックとガラスのドアを追加しました。", "新しい鉱石 Igniera を追加しました (現在は用途なし、近日対応予定)。", "糸 5 個から Cobweb を作るレシピを追加しました。", "溶鉱炉で Cobbled Deepslate から Deepslate を作るレシピを追加しました。"] },
          { "type": "fix", "heading": "修正:", "items": ["Red インゴットとブロックのテクスチャを刷新しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["나무와 성장용 묘목이 있는 신규 Sakura 나무 유형 추가", "신규 생물 군계: Sakura Forest", "Nether의 Sakura 생물 군계에 Elixir of Life 호수 추가 (대개 숨겨져 있음)", "철 장벽 블록과 유리 문 추가", "신규 광석 Igniera 추가 (현재 용도는 없으며 추후 추가 예정)", "실 5개로 Cobweb을 만드는 제작법 추가", "용광로에서 Cobbled Deepslate로 Deepslate를 만드는 제작법 추가"] },
          { "type": "fix", "heading": "수정:", "items": ["Red 주괴와 블록 텍스처 개편"] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Novo tipo de árvore: Sakura, com sua árvore e uma muda para cultivá-la.", "Novo bioma: Sakura Forest.", "Adicionado o lago de Elixir of Life no bioma Sakura do Nether, geralmente escondido.", "Adicionados um bloco de barreira de ferro e uma porta de vidro.", "Novo minério: Igniera (ainda sem uso; em breve).", "Adicionada a receita de Cobweb com 5 linhas.", "Adicionada uma receita para obter Deepslate a partir de Cobbled Deepslate no alto-forno."] },
          { "type": "fix", "heading": "Correções:", "items": ["Texturas do lingote e do bloco Red reformuladas."] }
        ]
      }
    },
    {
      "version": "1.11.0",
      "date": "2024-08-12",
      "loader": "Forge, NeoForge",
      "mcVersion": "1.20.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Nouveau type d'arbres : Sakura avec son arbre et la pousse pour le faire grandir",
              "Nouveau biome : Forêt de sakura",
              "Ajout du lac d'elixir de vie dans le biome de sakura dans le nether souvent caché",
              "Nouveau bloc de barrier en fer et porte en verre",
              "Nouveau minerai : igniera ( aucune utilisation pour le moment, c'est pour bientôt)",
              "Ajout du craft du cobweb avec 5 ficelle",
              "Ajout d'une recette de la deepslate à partir de cobbled deepslate dans le haut fourneau (Blast furnace)"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "Refonte de la texture du lingot et du bloc red"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition:",
            "items": [
              "New tree type: Sakura with its tree and the sapling to grow it",
              "New biome: Sakura Forest",
              "Added the Life Elixir Lake in the Sakura biome in the Nether, often hidden",
              "New iron barrier block and glass door",
              "New ore: Igniera (no use for now, coming soon)",
              "Added crafting of cobweb with 5 string",
              "Added a recipe for deepslate from cobbled deepslate in the blast furnace"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction:",
            "items": [
              "Redesign of the texture of the red ingot and block"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Nuovo tipo di albero: Sakura, con il relativo albero e una piantina per farlo crescere.", "Nuovo bioma: Sakura Forest.", "Aggiunto il lago dell’Elixir of Life nel bioma Sakura del Nether, spesso nascosto.", "Aggiunti una barriera di ferro e una porta di vetro.", "Nuovo minerale: Igniera (per ora senza utilizzo, in arrivo).", "Aggiunta la ricetta per fabbricare cobweb con 5 fili.", "Aggiunta una ricetta per ottenere deepslate da cobbled deepslate nell’altoforno."] },
          { "type": "fix", "heading": "Correzioni:", "items": ["Rinnovate le texture del lingotto e del blocco Red."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Nuevo tipo de árbol: Sakura, con su árbol y un plantón para cultivarlo.", "Nuevo bioma: Sakura Forest.", "Añadido el lago de Elixir of Life en el bioma Sakura del Nether, a menudo oculto.", "Añadidos un bloque de barrera de hierro y una puerta de cristal.", "Nuevo mineral: Igniera (todavía sin uso; llegará próximamente).", "Añadida la receta para fabricar cobweb con 5 hilos.", "Añadida una receta para obtener deepslate a partir de cobbled deepslate en el alto horno."] },
          { "type": "fix", "heading": "Correcciones:", "items": ["Rediseñadas las texturas del lingote y el bloque Red."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Neue Baumart Sakura mit Baum und Setzling zum Anpflanzen hinzugefügt.", "Neues Biom: Sakura Forest.", "See des Elixir of Life im Sakura-Biom des Nether hinzugefügt, oft verborgen.", "Eisenbarriere und Glastür hinzugefügt.", "Neues Erz: Igniera (derzeit ohne Verwendung, kommt bald).", "Rezept für Cobweb aus 5 Fäden hinzugefügt.", "Rezept hinzugefügt, um Deepslate aus Cobbled Deepslate im Hochofen herzustellen."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["Texturen des Red-Barrens und -Blocks überarbeitet."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["Sakura の木と育てるための苗木を追加しました。", "新しいバイオーム: Sakura Forest。", "Nether の Sakura バイオームに Elixir of Life の湖を追加しました (隠れていることが多いです)。", "鉄のバリアブロックとガラスのドアを追加しました。", "新しい鉱石 Igniera を追加しました (現在は用途なし、近日対応予定)。", "糸 5 個から Cobweb を作るレシピを追加しました。", "溶鉱炉で Cobbled Deepslate から Deepslate を作るレシピを追加しました。"] },
          { "type": "fix", "heading": "修正:", "items": ["Red インゴットとブロックのテクスチャを刷新しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["나무와 성장용 묘목이 있는 신규 Sakura 나무 유형 추가", "신규 생물 군계: Sakura Forest", "Nether의 Sakura 생물 군계에 Elixir of Life 호수 추가 (대개 숨겨져 있음)", "철 장벽 블록과 유리 문 추가", "신규 광석 Igniera 추가 (현재 용도는 없으며 추후 추가 예정)", "실 5개로 Cobweb을 만드는 제작법 추가", "용광로에서 Cobbled Deepslate로 Deepslate를 만드는 제작법 추가"] },
          { "type": "fix", "heading": "수정:", "items": ["Red 주괴와 블록 텍스처 개편"] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Novo tipo de árvore: Sakura, com sua árvore e uma muda para cultivá-la.", "Novo bioma: Sakura Forest.", "Adicionado o lago de Elixir of Life no bioma Sakura do Nether, geralmente escondido.", "Adicionados um bloco de barreira de ferro e uma porta de vidro.", "Novo minério: Igniera (ainda sem uso; em breve).", "Adicionada a receita de Cobweb com 5 linhas.", "Adicionada uma receita para obter Deepslate a partir de Cobbled Deepslate no alto-forno."] },
          { "type": "fix", "heading": "Correções:", "items": ["Texturas do lingote e do bloco Red reformuladas."] }
        ]
      }
    },
    {
      "version": "1.0.0",
      "date": "2024-08-06",
      "loader": "Forge, NeoForge",
      "mcVersion": "1.20.6",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout du support de la 1.20.6"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition:",
            "items": [
              "Added support for version 1.20.6"
            ]
          }
        ],
        "it": [{ "type": "add", "heading": "Aggiunto:", "items": ["Aggiunto il supporto per la versione 1.20.6."] }],
        "es": [{ "type": "add", "heading": "Añadido:", "items": ["Añadido el soporte para la versión 1.20.6."] }],
        "de": [{ "type": "add", "heading": "Hinzugefügt:", "items": ["Unterstützung für Version 1.20.6 hinzugefügt."] }],
        "ja": [{ "type": "add", "heading": "追加:", "items": ["Version 1.20.6 に対応しました。"] }],
        "ko": [{ "type": "add", "heading": "추가:", "items": ["1.20.6 버전 지원 추가"] }],
        "pt-br": [{ "type": "add", "heading": "Adicionado:", "items": ["Adicionado suporte para a versão 1.20.6."] }]
      }
    },
    {
      "version": "1.0.0",
      "date": "2024-06-18",
      "loader": "Forge, NeoForge",
      "mcVersion": "1.20.4",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout du support de la 1.20.4"
            ]
          },
          {
            "type": "warn",
            "heading": "Important :",
            "items": [
              "Il n'y a pas de différence majeure entre forge et neoforge, les deux modloaders sont compatibles entre eux"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition:",
            "items": [
              "Added support for version 1.20.4"
            ]
          },
          {
            "type": "warn",
            "heading": "Important:",
            "items": [
              "There is no major difference between forge and neoforge, the two modloaders are compatible with each other"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunto il supporto per la versione 1.20.4."] },
          { "type": "warn", "heading": "Importante:", "items": ["Non ci sono differenze sostanziali tra Forge e NeoForge; i due mod loader sono compatibili tra loro."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadido el soporte para la versión 1.20.4."] },
          { "type": "warn", "heading": "Importante:", "items": ["No hay diferencias importantes entre Forge y NeoForge; ambos cargadores de mods son compatibles entre sí."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Unterstützung für Version 1.20.4 hinzugefügt."] },
          { "type": "warn", "heading": "Wichtig:", "items": ["Es gibt keinen wesentlichen Unterschied zwischen Forge und NeoForge; beide Mod-Loader sind miteinander kompatibel."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["バージョン 1.20.4 に対応しました。"] },
          { "type": "warn", "heading": "重要:", "items": ["Forge と NeoForge に大きな違いはなく、両方の Mod ローダーには互換性があります。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["1.20.4 버전 지원 추가"] },
          { "type": "warn", "heading": "중요:", "items": ["Forge와 NeoForge 사이에 큰 차이는 없으며 두 모드 로더는 서로 호환됩니다."] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionado suporte para a versão 1.20.4."] },
          { "type": "warn", "heading": "Importante:", "items": ["Não há diferenças importantes entre Forge e NeoForge; os dois carregadores de mods são compatíveis entre si."] }
        ]
      }
    },
    {
      "version": "1.10.0",
      "date": "2024-06-15",
      "loader": "Forge",
      "mcVersion": "1.20.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              {
                "text": "Ajout de la noix de coco",
                "childrenListType": "ordered",
                "children": [
                  "Obtenable dans les feuilles de palmier"
                ]
              },
              "Ajout de la demi noix de coco",
              "Ajout du lait de coco",
              "Ajout d'un couteau de cuisine",
              "Ajout d'une lumière spectrale",
              "Ajout de 3 blocs venant d'un autre mod « Blockus » par brandcraft sur fabric ( avec credit sur le bloc )",
              "Ajout d'un nouveau liquide « L''elixir de vie »"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "Correction des traduction de l'ancienne versions",
              "Changement de nom pour la version française de la fleur d'eau en Aqualo, de la fleur du ciel en Cielyna et de la fleur de lumière en Lumieros",
              "Correction de la traduction du sel en francais qui affichait « Salt »",
              "Diminution des drops lâchés lorsque qu'un bloc de palmier est cassé",
              "Changement léger de la texture de la bûche de bois prismatique"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition:",
            "items": [
              {
                "text": "Added the coconut",
                "childrenListType": "ordered",
                "children": [
                  "Obtainable in palm leaves"
                ]
              },
              "Added the half coconut",
              "Added the coconut milk",
              "Added a kitchen knife",
              "Added a spectral light",
              "Added 3 blocks from another mod “Blockus” by brandcraft on fabric (with credit on the block)",
              "Added a new liquid “Elixir of Life”"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction:",
            "items": [
              "Correction of the translations of the old versions",
              "Change the name for the french version of the water flower to Aqualo, the sky flower to Cielyna and the light flower to Lumieros",
              "Correction of the translation of salt in french which displayed “Salt”",
              "Diminished drops thrown when a palm tree block is broken",
              "Change a little the texture of the wooden bucket prismatique"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": [
            { "text": "Aggiunta la noce di cocco", "childrenListType": "ordered", "children": ["Si trova tra le foglie di palma."] },
            "Aggiunta la mezza noce di cocco.",
            "Aggiunto il latte di cocco.",
            "Aggiunto un coltello da cucina.",
            "Aggiunta una luce spettrale.",
            "Aggiunti 3 blocchi della mod Blockus di brandcraft per Fabric (con credito sul blocco).",
            "Aggiunto un nuovo liquido: “Elixir of Life”."
          ] },
          { "type": "fix", "heading": "Correzioni:", "items": ["Corrette le traduzioni delle versioni precedenti.", "Nella versione francese, rinominati Water Flower in Aqualo, Sky Flower in Cielyna e Light Flower in Lumieros.", "Corretta la traduzione francese del sale, che mostrava “Salt”.", "Ridotti gli oggetti rilasciati rompendo un blocco di palma.", "Leggermente modificata la texture del tronco Prismwood."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": [
            { "text": "Añadido el coco", "childrenListType": "ordered", "children": ["Se obtiene de las hojas de palmera."] },
            "Añadida la mitad de un coco.",
            "Añadida la leche de coco.",
            "Añadido un cuchillo de cocina.",
            "Añadida una luz espectral.",
            "Añadidos 3 bloques del mod Blockus de brandcraft para Fabric (con el crédito en el bloque).",
            "Añadido un nuevo líquido: «Elixir of Life»."
          ] },
          { "type": "fix", "heading": "Correcciones:", "items": ["Corregidas las traducciones de las versiones anteriores.", "En francés, se cambiaron los nombres de Water Flower a Aqualo, Sky Flower a Cielyna y Light Flower a Lumieros.", "Corregida la traducción al francés de la sal, que mostraba «Salt».", "Reducidos los objetos que sueltan los bloques de palmera al romperse.", "Retocada ligeramente la textura del tronco Prismwood."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": [
            { "text": "Kokosnuss hinzugefügt", "childrenListType": "ordered", "children": ["Aus Palmblättern erhältlich."] },
            "Halbe Kokosnuss hinzugefügt.",
            "Kokosmilch hinzugefügt.",
            "Küchenmesser hinzugefügt.",
            "Spektrallicht hinzugefügt.",
            "3 Blöcke aus der Mod Blockus von brandcraft für Fabric hinzugefügt (mit Namensnennung am Block).",
            "Neue Flüssigkeit „Elixir of Life“ hinzugefügt."
          ] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["Übersetzungen älterer Versionen korrigiert.", "Die französischen Namen der Water Flower, Sky Flower und Light Flower in Aqualo, Cielyna und Lumieros geändert.", "Französische Übersetzung von Salz korrigiert, die zuvor „Salt“ anzeigte.", "Drops beim Abbau eines Palmenblocks verringert.", "Textur des Prismwood-Stamms leicht geändert."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": [
            { "text": "ココナッツを追加", "childrenListType": "ordered", "children": ["ヤシの葉から入手できます。"] },
            "半分のココナッツを追加しました。",
            "ココナッツミルクを追加しました。",
            "料理用ナイフを追加しました。",
            "スペクトルライトを追加しました。",
            "brandcraft による Fabric 用 Mod「Blockus」のブロックを 3 種追加しました (ブロックにクレジット表記あり)。",
            "新しい液体「Elixir of Life」を追加しました。"
          ] },
          { "type": "fix", "heading": "修正:", "items": ["旧バージョンの翻訳を修正しました。", "フランス語版で Water Flower を Aqualo、Sky Flower を Cielyna、Light Flower を Lumieros に改名しました。", "フランス語版で「Salt」と表示されていた塩の翻訳を修正しました。", "ヤシのブロックを壊したときのドロップ数を減らしました。", "Prismwood の原木テクスチャを少し変更しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": [
            { "text": "코코넛 추가", "childrenListType": "ordered", "children": ["야자나무 잎에서 얻을 수 있습니다."] },
            "반쪽 코코넛 추가",
            "코코넛 우유 추가",
            "요리용 칼 추가",
            "스펙트럼 빛 추가",
            "Fabric용 brandcraft의 다른 모드 “Blockus” 블록 3종 추가 (블록에 출처 표기)",
            "새로운 액체 “Elixir of Life” 추가"
          ] },
          { "type": "fix", "heading": "수정:", "items": ["이전 버전의 번역 수정", "프랑스어 버전에서 Water Flower를 Aqualo, Sky Flower를 Cielyna, Light Flower를 Lumieros로 이름 변경", "프랑스어에서 “Salt”로 표시되던 소금 번역 수정", "야자나무 블록을 부술 때 나오는 아이템 수 감소", "Prismwood 원목 텍스처를 약간 변경"] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": [
            { "text": "Adicionado o coco", "childrenListType": "ordered", "children": ["Pode ser obtido nas folhas de palmeira."] },
            "Adicionada a metade de coco.",
            "Adicionado o leite de coco.",
            "Adicionada uma faca de cozinha.",
            "Adicionada uma luz espectral.",
            "Adicionados 3 blocos do mod Blockus, de brandcraft para Fabric (com crédito no bloco).",
            "Adicionado um novo líquido: “Elixir of Life”."
          ] },
          { "type": "fix", "heading": "Correções:", "items": ["Corrigidas as traduções das versões antigas.", "Na versão francesa, Water Flower foi renomeada para Aqualo, Sky Flower para Cielyna e Light Flower para Lumieros.", "Corrigida a tradução francesa de sal, que exibia “Salt”.", "Reduzidos os itens obtidos ao quebrar um bloco de palmeira.", "Textura do tronco Prismwood ligeiramente alterada."] }
        ]
      }
    },
    {
      "version": "1.9.2",
      "date": "2024-06-08",
      "loader": "Forge",
      "mcVersion": "1.20.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout du craft de chaque armure de cheval (or,diamant, fer et cuir )",
              "Ajout du craft de la ficelle a partir de toile d'araignée",
              "Ajout du craft du colorant vert dans le founeau",
              "Ajout de la fleur « lightos » et du colorant désormais craftable",
              "Ajout du craft de la glowstone avec 2 grain de sable et 2 colorant de lumières",
              "Ajout de 16 couleur de lampe à partir du block de Minecraft [ bulb ]",
              "Ajout de nombreux avancements",
              "Ajout d'un avancements pour rejoindre notre serveur discord"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "changement léger de la texture du hammer en dioptasium",
              "Changement également de la texture du block de chrome"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition:",
            "items": [
              "Added the craft of each horse armor (gold, diamond, iron and leather)",
              "Added the craft of the thread from spider silk",
              "Added the craft of the green dye in the furnace",
              "Added the “lightos” flower and the dye now craftable",
              "Added the craft of glowstone with 2 sand grains and 2 light dyes",
              "Added 16 color of lamp from the Minecraft block [ bulb ]",
              "Added many advancements",
              "Added an advancement to join our discord server"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction:",
            "items": [
              "Changed the texture of the hammer in dioptasium",
              "Changed also the texture of the chrome block"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunte le ricette per ogni armatura da cavallo (oro, diamante, ferro e cuoio).", "Aggiunta la ricetta per ottenere filo dalla ragnatela.", "Aggiunta la ricetta per il colorante verde nella fornace.", "Aggiunto il fiore Lightos e resa fabbricabile la tintura.", "Aggiunta la ricetta per la glowstone con 2 granelli di sabbia e 2 coloranti luminosi.", "Aggiunte 16 lampade colorate usando il blocco Bulb di Minecraft.", "Aggiunti numerosi avanzamenti.", "Aggiunto un avanzamento per unirsi al nostro server Discord."] },
          { "type": "fix", "heading": "Correzioni:", "items": ["Leggermente modificata la texture dell’Hammer in Dioptasium.", "Modificata anche la texture del blocco Chrome."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadidas recetas para todas las armaduras de caballo (oro, diamante, hierro y cuero).", "Añadida la receta para obtener hilo a partir de una telaraña.", "Añadida la receta del tinte verde en el horno.", "Añadida la flor Lightos y su tinte ahora se puede fabricar.", "Añadida la receta de glowstone con 2 granos de arena y 2 tintes de luz.", "Añadidas 16 lámparas de colores usando el bloque Bulb de Minecraft.", "Añadidos numerosos progresos.", "Añadido un progreso para unirse a nuestro servidor de Discord."] },
          { "type": "fix", "heading": "Correcciones:", "items": ["Retocada ligeramente la textura del Hammer de Dioptasium.", "También se cambió la textura del bloque Chrome."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Rezepte für alle Pferderüstungen hinzugefügt (Gold, Diamant, Eisen und Leder).", "Rezept für Faden aus Spinnennetz hinzugefügt.", "Rezept für grünen Farbstoff im Ofen hinzugefügt.", "Blume Lightos hinzugefügt; der Farbstoff ist jetzt herstellbar.", "Rezept für Glowstone aus 2 Sandkörnern und 2 Lichtfarbstoffen hinzugefügt.", "16 farbige Lampen aus dem Minecraft-Block Bulb hinzugefügt.", "Zahlreiche Fortschritte hinzugefügt.", "Fortschritt zum Beitritt zu unserem Discord-Server hinzugefügt."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["Textur des Dioptasium-Hammers leicht geändert.", "Auch die Textur des Chrome-Blocks geändert."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["馬 armor のレシピを追加しました (金、ダイヤモンド、鉄、革)。", "クモの巣から糸を作るレシピを追加しました。", "かまどで緑色の染料を作るレシピを追加しました。", "花 Lightos を追加し、染料をクラフト可能にしました。", "砂粒 2 個と光の染料 2 個から Glowstone を作るレシピを追加しました。", "Minecraft の Bulb ブロックから 16 色のランプを追加しました。", "多数の進捗を追加しました。", "Discord サーバーに参加するための進捗を追加しました。"] },
          { "type": "fix", "heading": "修正:", "items": ["Dioptasium Hammer のテクスチャを少し変更しました。", "Chrome ブロックのテクスチャも変更しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["말 갑옷(금, 다이아몬드, 철, 가죽) 제작법 추가", "거미줄로 실을 만드는 제작법 추가", "화로에서 초록색 염료를 만드는 제작법 추가", "꽃 Lightos와 제작 가능한 염료 추가", "모래 알갱이 2개와 빛 염료 2개로 발광석을 만드는 제작법 추가", "Minecraft Bulb 블록으로 16색 램프 추가", "다수의 발전 과제 추가", "Discord 서버에 참여하기 위한 발전 과제 추가"] },
          { "type": "fix", "heading": "수정:", "items": ["Dioptasium 망치 텍스처를 약간 변경", "Chrome 블록 텍스처도 변경"] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionadas receitas para todas as armaduras de cavalo (ouro, diamante, ferro e couro).", "Adicionada a receita para obter linha a partir de teia de aranha.", "Adicionada a receita de corante verde na fornalha.", "Adicionada a flor Lightos e seu corante agora pode ser fabricado.", "Adicionada a receita de glowstone com 2 grãos de areia e 2 corantes de luz.", "Adicionadas 16 lâmpadas coloridas usando o bloco Bulb do Minecraft.", "Adicionadas várias conquistas.", "Adicionada uma conquista para entrar no nosso servidor do Discord."] },
          { "type": "fix", "heading": "Correções:", "items": ["Textura do Hammer de Dioptasium ligeiramente alterada.", "Textura do bloco Chrome também alterada."] }
        ]
      }
    },
    {
      "version": "1.9.1",
      "date": "2024-05-20",
      "loader": "Forge",
      "mcVersion": "1.20.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "la graine de fleur de netherite et de netherstar peut désormais être composté avec une chance de 85%",
              "La graine de blé marine peut également être composté avec une chance de 50%"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction :",
            "items": [
              "Changement de la texture du lingot de fluorite et du block",
              "Reduction des drops de poudre de netherite et de la graine",
              "La graine de netherite et la poudre de netherite ne sont plus affecté par l'enchantement fortune",
              "Changement de la texture de l'épée et de la hache red"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition:",
            "items": [
              "The netherite flower and netherstar seed can now be composted with an 85% chance",
              "The sea wheat seed can also be composted with a 50% chance"
            ]
          },
          {
            "type": "fix",
            "heading": "Correction:",
            "items": [
              "Changed the texture of the fluorite ingot and block",
              "Reduced the drops of netherite powder and seed",
              "The netherite seed and powder are no longer affected by the Fortune enchantment",
              "Changed the texture of the red sword and axe"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["I semi dei fiori di Netherite e Nether Star ora possono essere compostati con una probabilità dell’85%.", "Anche i semi di Sea Wheat possono essere compostati, con una probabilità del 50%."] },
          { "type": "fix", "heading": "Correzioni:", "items": ["Modificata la texture del lingotto e del blocco Fluorite.", "Ridotti i drop di polvere e semi di Netherite.", "I semi e la polvere di Netherite non sono più influenzati dall’incantesimo Fortune.", "Modificate le texture della spada e dell’ascia Red."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Las semillas de las flores de Netherite y Nether Star ahora se pueden compostar con un 85 % de probabilidad.", "Las semillas de Sea Wheat también se pueden compostar, con un 50 % de probabilidad."] },
          { "type": "fix", "heading": "Correcciones:", "items": ["Cambiada la textura del lingote y el bloque de Fluorite.", "Reducidos los drops de polvo y semillas de Netherite.", "Las semillas y el polvo de Netherite ya no se ven afectados por el encantamiento Fortune.", "Cambiadas las texturas de la espada y el hacha Red."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Netherite-Flower- und Netherstar-Samen können jetzt mit einer Wahrscheinlichkeit von 85 % kompostiert werden.", "Sea-Wheat-Samen können ebenfalls mit einer Wahrscheinlichkeit von 50 % kompostiert werden."] },
          { "type": "fix", "heading": "Fehlerbehebungen:", "items": ["Textur des Fluorite-Barrens und -Blocks geändert.", "Drops von Netherite-Pulver und -Samen verringert.", "Netherite-Samen und -Pulver werden nicht mehr von der Verzauberung Fortune beeinflusst.", "Texturen des Red-Schwerts und der Red-Axt geändert."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["Netherite Flower と Nether Star の種を、85% の確率でコンポスターに入れられるようになりました。", "Sea Wheat の種も 50% の確率でコンポスターに入れられるようになりました。"] },
          { "type": "fix", "heading": "修正:", "items": ["Fluorite インゴットとブロックのテクスチャを変更しました。", "Netherite の粉と種のドロップ数を減らしました。", "Netherite の種と粉が Fortune のエンチャントの影響を受けなくなりました。", "Red の剣と斧のテクスチャを変更しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["Netherite Flower와 Nether Star 씨앗을 85% 확률로 퇴비화할 수 있습니다.", "Sea Wheat 씨앗도 50% 확률로 퇴비화할 수 있습니다."] },
          { "type": "fix", "heading": "수정:", "items": ["Fluorite 주괴와 블록 텍스처 변경", "Netherite 가루와 씨앗 드롭 감소", "Netherite 씨앗과 가루가 더 이상 Fortune 마법 부여의 영향을 받지 않음", "Red 검과 도끼 텍스처 변경"] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["As sementes de Netherite Flower e Nether Star agora podem ser compostadas com 85% de chance.", "As sementes de Sea Wheat também podem ser compostadas, com 50% de chance."] },
          { "type": "fix", "heading": "Correções:", "items": ["Textura do lingote e do bloco de Fluorite alterada.", "Drops de pó e sementes de Netherite reduzidos.", "As sementes e o pó de Netherite não são mais afetados pelo encantamento Fortune.", "Texturas da espada e do machado Red alteradas."] }
        ]
      }
    },
    {
      "version": "1.9.0",
      "date": "2024-05-17",
      "loader": "Forge",
      "mcVersion": "1.20.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout du grain de sable",
              "Ajout du forge élément",
              "Ajout des craft de chaque model d'armure ( armor trims)",
              "Ajout du craft du gilded blackstone",
              "Ajout d'une nouvelle culture « graine de netherite » craftable dans le feu de camp avec une fire flower ou une graine de torche-fleur entouré de netherrack",
              "Ajout de la poudre de netherite permet de crafter avec 9 poudre un fragment de netherite",
              "Ajout de la boule de slime aquatique obtenable sur les noyé ( drowned )"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              "Changement de la texture du lingot en paladium et de la pioche",
              "Changement de la texture du sable orange ( moins agressif )"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition :",
            "items": [
              "Added the sand grain",
              "Added the forge element",
              "Added the crafts for each armor trim",
              "Added the craft of gilded blackstone",
              "Added a new crop “netherite seed” craftable in the campfire with a fire flower or a torch-flower seed surrounded by netherrack",
              "Added netherite powder that can be crafted with 9 powder to make a netherite fragment",
              "Added the aquatic slime ball obtainable on drowned"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              "Changed the texture of the paladium ingot and pickaxe",
              "Changed the texture of the orange sand (less aggressive)"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunto il granello di sabbia.", "Aggiunto il Forge Element.", "Aggiunte le ricette per tutti i modelli di armatura (armor trims).", "Aggiunta la ricetta per la Gilded Blackstone.", "Aggiunta la nuova coltura “Netherite Seed”, ottenibile al falò con una Fire Flower o un seme di Torchflower circondato da netherrack.", "Aggiunta la polvere di Netherite: 9 unità possono essere usate per fabbricare un frammento di Netherite.", "Aggiunta la palla di Aquatic Slime, ottenibile dai Drowned."] },
          { "type": "fix", "heading": "Modifiche:", "items": ["Modificate le texture del lingotto e del piccone in Paladium.", "Modificata la texture della sabbia arancione (ora meno intensa)."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadido el grano de arena.", "Añadido el Forge Element.", "Añadidas recetas para todos los adornos de armadura (armor trims).", "Añadida la receta de Gilded Blackstone.", "Añadido el nuevo cultivo «Netherite Seed», que se obtiene en una hoguera con una Fire Flower o una semilla de Torchflower rodeada de netherrack.", "Añadido polvo de Netherite: se pueden fabricar fragmentos de Netherite con 9 unidades.", "Añadida la bola de Aquatic Slime, que se obtiene de los Drowned."] },
          { "type": "fix", "heading": "Modificaciones:", "items": ["Cambiadas las texturas del lingote y el pico de Paladium.", "Cambiada la textura de la arena naranja (menos intensa)."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Sandkorn hinzugefügt.", "Forge Element hinzugefügt.", "Rezepte für alle Rüstungsverzierungen hinzugefügt.", "Rezept für Gilded Blackstone hinzugefügt.", "Neue Nutzpflanze „Netherite Seed“ hinzugefügt, am Lagerfeuer aus einer Fire Flower oder einem Torchflower-Samen mit umgebendem Netherrack herstellbar.", "Netherite-Pulver hinzugefügt: Aus 9 Pulvern lässt sich ein Netherite-Fragment herstellen.", "Aquatic-Slime-Kugel hinzugefügt, erhältlich von Drowned."] },
          { "type": "fix", "heading": "Änderungen:", "items": ["Texturen des Paladium-Barrens und der Spitzhacke geändert.", "Textur des orangenen Sands geändert (weniger grell)."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["砂粒を追加しました。", "Forge Element を追加しました。", "すべての防具トリムのレシピを追加しました。", "Gilded Blackstone のレシピを追加しました。", "新しい作物 Netherite Seed を追加しました (Fire Flower または Torchflower の種をネザーラックで囲み、焚き火で作成)。", "ネザライトの粉を追加しました。粉 9 個からネザライトの欠片を作れます。", "ドラウンドから入手できる Aquatic Slime のボールを追加しました。"] },
          { "type": "fix", "heading": "変更:", "items": ["Paladium インゴットとツルハシのテクスチャを変更しました。", "オレンジ色の砂のテクスチャを変更しました (刺激を弱めました)。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["모래 알갱이 추가", "Forge Element 추가", "모든 방어구 장식(armor trims) 제작법 추가", "Gilded Blackstone 제작법 추가", "모닥불에서 Fire Flower 또는 Torchflower 씨앗을 네더랙으로 둘러 Netherite Seed 작물을 만들 수 있도록 추가", "Netherite 가루 추가 (가루 9개로 Netherite 조각 제작 가능)", "Drowned에게서 얻을 수 있는 Aquatic Slime 공 추가"] },
          { "type": "fix", "heading": "변경:", "items": ["Paladium 주괴와 곡괭이 텍스처 변경", "주황색 모래 텍스처 변경 (덜 자극적으로 조정)"] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionado o grão de areia.", "Adicionado o Forge Element.", "Adicionadas receitas para todos os adornos de armadura (armor trims).", "Adicionada a receita de Gilded Blackstone.", "Adicionada a nova plantação Netherite Seed, fabricável na fogueira com uma Fire Flower ou uma semente de Torchflower cercada por netherrack.", "Adicionado pó de Netherite: 9 pós podem ser usados para fabricar um fragmento de Netherite.", "Adicionada a bola de Aquatic Slime, obtida de Drowned."] },
          { "type": "fix", "heading": "Modificações:", "items": ["Texturas do lingote e da picareta de Paladium alteradas.", "Textura da areia laranja alterada (menos intensa)."] }
        ]
      }
    },
    {
      "version": "1.8.0",
      "date": "2024-05-02",
      "loader": "Forge",
      "mcVersion": "1.20.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout d'un nouveau type de minerai le « Dioptasium » dont les outils ont un niveau de 4",
              {
                "text": "Ajout d'un champignon explosif",
                "childrenListType": "ordered",
                "children": [
                  "Trouvable dans les forêts, jungles et jungles clairsemée"
                ]
              },
              "Ajout d'un nouvel onglet créatif avec tout les minerai et outils",
              {
                "text": "Ajout d'un nouveau liquide « eau empoisonnée »",
                "childrenListType": "ordered",
                "children": [
                  "Trouvable dans les marais et les mangroves"
                ]
              },
              "Ajout d'informations sur les minerai, pioche et outil grâce à Jei",
              "Ajout de l'apparition du champignon fluorescent dans les biomes marais et mangroves en plus des lush caves",
              "Ajout des escalier, dalle et muret de crystal d'azur et phoriste"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              "Changement de la texture de l'épée en paladium",
              "Correction du hammer en amazonite dont lequel il ne minai pas en 3*3 comme les autres hammer",
              "Correction du hammer en amazonite qui avait un niveau de minage de 3 au lieu de 2",
              "Ajustement du spawn du champignons fluorescent",
              "Correction du temps de minage du minerai d'amazonite"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition :",
            "items": [
              "Added a new type of mineral called “Dioptasium” with tools having a level of 4",
              {
                "text": "Added an explosive mushroom",
                "childrenListType": "ordered",
                "children": [
                  "Found in forests, jungles and clear jungles"
                ]
              },
              "Added a new creative tab with all the minerals and tools",
              {
                "text": "Added a new liquid called “poisonous water”",
                "childrenListType": "ordered",
                "children": [
                  "Found in swamps and mangroves"
                ]
              },
              "Added information on minerals, pickaxe and tool thanks to Jei",
              "Added the appearance of fluorescent mushroom in swamps and mangroves as well as lush caves",
              "Added stairs, slabs and wall of crystal azur and phoriste"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              "Changed the texture of the sword to paladium",
              "Correction of the hammer in amazonite which did not mine in 3*3 like the other hammers",
              "Correction of the hammer in amazonite which had a mining level of 3 instead of 2",
              "Adjustment of the spawn of the fluorescent mushroom",
              "Correction of the mining time of the amazonite mineral"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunto un nuovo minerale, Dioptasium, con strumenti di livello 4.", { "text": "Aggiunto un fungo esplosivo", "childrenListType": "ordered", "children": ["Si trova nelle foreste, nelle giungle e nelle giungle rade."] }, "Aggiunta una nuova scheda creativa con tutti i minerali e gli strumenti.", { "text": "Aggiunto un nuovo liquido, l’acqua velenosa", "childrenListType": "ordered", "children": ["Si trova nelle paludi e nelle mangrovie."] }, "Aggiunte informazioni su minerali, picconi e strumenti tramite JEI.", "Aggiunta la generazione del fungo fluorescente nelle paludi e nelle mangrovie, oltre che nelle Lush Caves.", "Aggiunte scale, lastre e muretti di cristallo Azur e Phoriste."] },
          { "type": "fix", "heading": "Modifiche:", "items": ["Modificata la texture della spada in Paladium.", "Corretto l’Hammer in Amazonite, che non scavava in un’area 3×3 come gli altri martelli.", "Corretto il livello di estrazione dell’Hammer in Amazonite, che era 3 anziché 2.", "Regolata la generazione del fungo fluorescente.", "Corretto il tempo di estrazione del minerale di Amazonite."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadido un nuevo mineral, Dioptasium, con herramientas de nivel 4.", { "text": "Añadido un hongo explosivo", "childrenListType": "ordered", "children": ["Se encuentra en bosques, junglas y junglas dispersas."] }, "Añadida una nueva pestaña creativa con todos los minerales y herramientas.", { "text": "Añadido un nuevo líquido: agua venenosa", "childrenListType": "ordered", "children": ["Se encuentra en pantanos y manglares."] }, "Añadida información sobre minerales, picos y herramientas mediante JEI.", "Añadida la aparición del hongo fluorescente en pantanos y manglares, además de Lush Caves.", "Añadidas escaleras, losas y muretes de cristal Azur y Phoriste."] },
          { "type": "fix", "heading": "Modificaciones:", "items": ["Cambiada la textura de la espada de Paladium.", "Corregido el Hammer de Amazonite, que no minaba en un área de 3×3 como los demás martillos.", "Corregido el nivel de minería del Hammer de Amazonite, que era 3 en vez de 2.", "Ajustada la aparición del hongo fluorescente.", "Corregido el tiempo de minería del mineral de Amazonite."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Neues Erz Dioptasium hinzugefügt; Werkzeuge daraus haben Stufe 4.", { "text": "Explosiven Pilz hinzugefügt", "childrenListType": "ordered", "children": ["In Wäldern, Dschungeln und lichten Dschungeln zu finden."] }, "Neuen Kreativ-Tab mit allen Erzen und Werkzeugen hinzugefügt.", { "text": "Neue Flüssigkeit „Poisonous Water“ hinzugefügt", "childrenListType": "ordered", "children": ["In Sümpfen und Mangroven zu finden."] }, "Informationen zu Erzen, Spitzhacken und Werkzeugen über JEI hinzugefügt.", "Fluoreszierenden Pilz auch in Sümpfen und Mangroven neben Lush Caves generiert.", "Treppen, Platten und Mauern aus Azur- und Phoriste-Kristall hinzugefügt."] },
          { "type": "fix", "heading": "Änderungen:", "items": ["Textur des Paladium-Schwerts geändert.", "Amazonite-Hammer korrigiert, der wie die anderen Hämmer nicht in einem 3×3-Bereich abbaute.", "Abbaustufe des Amazonite-Hammers von 3 auf 2 korrigiert.", "Generierung des fluoreszierenden Pilzes angepasst.", "Abbauzeit des Amazonite-Erzes korrigiert."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["新しい鉱石 Dioptasium を追加しました。ツールレベルは 4 です。", { "text": "爆発するキノコを追加しました", "childrenListType": "ordered", "children": ["森林、ジャングル、まばらなジャングルで見つかります。"] }, "すべての鉱石とツールを含む新しいクリエイティブタブを追加しました。", { "text": "新しい液体「Poisonous Water」を追加しました", "childrenListType": "ordered", "children": ["沼地やマングローブで見つかります。"] }, "JEI で鉱石、ツルハシ、ツールの情報を表示するようにしました。", "Lush Caves に加えて、沼地とマングローブにも蛍光キノコが生成されるようになりました。", "Azur と Phoriste の水晶ブロックに階段、ハーフブロック、塀を追加しました。"] },
          { "type": "fix", "heading": "変更:", "items": ["Paladium の剣のテクスチャを変更しました。", "他のハンマーのように 3×3 範囲を採掘できなかった Amazonite Hammer を修正しました。", "Amazonite Hammer の採掘レベルが 2 ではなく 3 だった問題を修正しました。", "蛍光キノコの生成を調整しました。", "Amazonite 鉱石の採掘時間を修正しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["도구 등급이 4인 신규 광석 Dioptasium 추가", { "text": "폭발 버섯 추가", "childrenListType": "ordered", "children": ["숲, 정글, 드문드문한 정글에서 발견됩니다."] }, "모든 광석과 도구가 포함된 새로운 크리에이티브 탭 추가", { "text": "신규 액체 Poisonous Water 추가", "childrenListType": "ordered", "children": ["늪과 맹그로브에서 발견됩니다."] }, "JEI를 통해 광석, 곡괭이, 도구 정보 추가", "Lush Caves뿐 아니라 늪과 맹그로브에도 형광 버섯 생성 추가", "Azur 및 Phoriste 수정 계단, 반 블록, 담장 추가"] },
          { "type": "fix", "heading": "변경:", "items": ["Paladium 검 텍스처 변경", "다른 망치처럼 3×3 범위를 채굴하지 못하던 Amazonite Hammer 수정", "Amazonite Hammer의 채굴 등급이 2가 아닌 3이던 문제 수정", "형광 버섯 생성 조정", "Amazonite 광석 채굴 시간 수정"] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionado o novo minério Dioptasium, cujas ferramentas têm nível 4.", { "text": "Adicionado um cogumelo explosivo", "childrenListType": "ordered", "children": ["Encontrado em florestas, selvas e selvas esparsas."] }, "Adicionada uma nova aba criativa com todos os minérios e ferramentas.", { "text": "Adicionado um novo líquido, Poisonous Water", "childrenListType": "ordered", "children": ["Encontrado em pântanos e manguezais."] }, "Adicionadas informações sobre minérios, picaretas e ferramentas pelo JEI.", "Adicionada a geração do cogumelo fluorescente em pântanos e manguezais, além das Lush Caves.", "Adicionadas escadas, lajes e muros de cristal Azur e Phoriste."] },
          { "type": "fix", "heading": "Modificações:", "items": ["Textura da espada de Paladium alterada.", "Corrigido o Hammer de Amazonite, que não minerava em uma área 3×3 como os outros martelos.", "Corrigido o nível de mineração do Hammer de Amazonite, que era 3 em vez de 2.", "Ajustada a geração do cogumelo fluorescente.", "Corrigido o tempo de mineração do minério de Amazonite."] }
        ]
      }
    },
    {
      "version": "1.7.1",
      "date": "2024-04-21",
      "loader": "Forge",
      "mcVersion": "1.20.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              {
                "text": "Ajout de la fleur de la mer* et du craft pour le colorant de la mer",
                "childrenListType": "ordered",
                "children": [
                  "*Fleur obtenable sur la plage"
                ]
              },
              {
                "text": "Ajout d'une nouvelle culture de la « nether star flower* »",
                "childrenListType": "ordered",
                "children": [
                  "*Culture obtenable a partir d'une graine de torche fleur et d'une nether star"
                ]
              },
              {
                "text": "Ajout d'un second craft pour la graine de blé marin*",
                "childrenListType": "ordered",
                "children": [
                  "*obtenable à partir d'une graine de blé, de sel, et du colorant de la mer"
                ]
              },
              "Ajout de la structure du premier boss Colossum"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              "Diminution de la protection de l'armure en red",
              "Ajout de la traduction en francais sur la derniere mise à jour"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition :",
            "items": [
              {
                "text": "Added a mer flower* and a craft for the mer colorant",
                "childrenListType": "ordered",
                "children": [
                  "*Mer flower obtainable on the beach"
                ]
              },
              {
                "text": "Added a new culture of the “nether star flower*”",
                "childrenListType": "ordered",
                "children": [
                  "*Culture obtainable from a torch flower seed and a nether star"
                ]
              },
              {
                "text": "Added a second craft for the marin ble seed*",
                "childrenListType": "ordered",
                "children": [
                  "*obtainable from a ble seed, salt, and mer colorant"
                ]
              },
              "Added the structure of the first boss Colossum"
            ]
          },
          {
            "type": "fix",
            "heading": "Changes :",
            "items": [
              "Red armor protection reduced",
              "Added the last update translation in french"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": [
            { "text": "Aggiunti il fiore Mer* e la ricetta per il colorante Mer", "childrenListType": "ordered", "children": ["*Il fiore Mer si trova sulle spiagge."] },
            { "text": "Aggiunta una nuova coltura: “Nether Star Flower*”", "childrenListType": "ordered", "children": ["*Coltivabile usando un seme di Torchflower e una Nether Star."] },
            { "text": "Aggiunta una seconda ricetta per il seme di Marin Ble*", "childrenListType": "ordered", "children": ["*Ottenibile da un seme di grano, sale e colorante Mer."] },
            "Aggiunta la struttura del primo boss, Colossum."
          ] },
          { "type": "fix", "heading": "Modifiche:", "items": ["Ridotta la protezione dell’armatura Red.", "Aggiunta la traduzione francese dell’ultimo aggiornamento."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": [
            { "text": "Añadidas la flor Mer* y la receta del tinte Mer", "childrenListType": "ordered", "children": ["*La flor Mer se puede encontrar en la playa."] },
            { "text": "Añadido un nuevo cultivo: «Nether Star Flower*»", "childrenListType": "ordered", "children": ["*Se cultiva con una semilla de Torchflower y una Nether Star."] },
            { "text": "Añadida una segunda receta para la semilla de Marin Ble*", "childrenListType": "ordered", "children": ["*Se obtiene con una semilla de trigo, sal y tinte Mer."] },
            "Añadida la estructura del primer jefe, Colossum."
          ] },
          { "type": "fix", "heading": "Modificaciones:", "items": ["Reducida la protección de la armadura Red.", "Añadida la traducción al francés de la última actualización."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": [
            { "text": "Mer-Blume* und Rezept für Mer-Farbstoff hinzugefügt", "childrenListType": "ordered", "children": ["*Die Mer-Blume ist am Strand erhältlich."] },
            { "text": "Neue Nutzpflanze „Nether Star Flower*“ hinzugefügt", "childrenListType": "ordered", "children": ["*Anbaubar mit einem Torchflower-Samen und einem Nether Star."] },
            { "text": "Zweites Rezept für Marin-Ble-Samen* hinzugefügt", "childrenListType": "ordered", "children": ["*Aus Weizensamen, Salz und Mer-Farbstoff erhältlich."] },
            "Struktur des ersten Bosses Colossum hinzugefügt."
          ] },
          { "type": "fix", "heading": "Änderungen:", "items": ["Schutz der Red-Rüstung verringert.", "Französische Übersetzung des letzten Updates hinzugefügt."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": [
            { "text": "Mer Flower* と Mer の染料のレシピを追加しました", "childrenListType": "ordered", "children": ["*Mer Flower は海岸で入手できます。"] },
            { "text": "新しい作物「Nether Star Flower*」を追加しました", "childrenListType": "ordered", "children": ["*Torchflower の種と Nether Star から栽培できます。"] },
            { "text": "Marin Ble の種*の2つ目のレシピを追加しました", "childrenListType": "ordered", "children": ["*小麦の種、塩、Mer の染料から入手できます。"] },
            "最初のボス Colossum の構造物を追加しました。"
          ] },
          { "type": "fix", "heading": "変更:", "items": ["Red 防具の防御力を下げました。", "最新アップデートのフランス語訳を追加しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": [
            { "text": "Mer 꽃*과 Mer 염료 제작법 추가", "childrenListType": "ordered", "children": ["*Mer 꽃은 해변에서 얻을 수 있습니다."] },
            { "text": "신규 작물 “Nether Star Flower*” 추가", "childrenListType": "ordered", "children": ["*Torchflower 씨앗과 Nether Star로 재배할 수 있습니다."] },
            { "text": "Marin Ble 씨앗*의 두 번째 제작법 추가", "childrenListType": "ordered", "children": ["*밀 씨앗, 소금, Mer 염료로 얻을 수 있습니다."] },
            "첫 번째 보스 Colossum의 구조물 추가"
          ] },
          { "type": "fix", "heading": "변경:", "items": ["Red 방어구의 보호 수치 감소", "최신 업데이트의 프랑스어 번역 추가"] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": [
            { "text": "Adicionadas a flor Mer* e a receita do corante Mer", "childrenListType": "ordered", "children": ["*A flor Mer pode ser encontrada na praia."] },
            { "text": "Adicionada uma nova plantação: “Nether Star Flower*”", "childrenListType": "ordered", "children": ["*Pode ser cultivada com uma semente de Torchflower e uma Nether Star."] },
            { "text": "Adicionada uma segunda receita para a semente Marin Ble*", "childrenListType": "ordered", "children": ["*Obtida com uma semente de trigo, sal e corante Mer."] },
            "Adicionada a estrutura do primeiro chefe, Colossum."
          ] },
          { "type": "fix", "heading": "Alterações:", "items": ["Proteção da armadura Red reduzida.", "Adicionada a tradução para francês da última atualização."] }
        ]
      }
    },
    {
      "version": "1.7.0",
      "date": "2024-04-17",
      "loader": "Forge",
      "mcVersion": "1.20.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              {
                "text": "Ajout du crystal rouge, du bloc de crystal rouge et de l'amas de crystal rouge.",
                "childrenListType": "ordered",
                "children": [
                  "le crystal rouge peut faire grandir les cultures du mod au niveau maximum et augmenter d'une ou plusieurs étape de culture minecraft",
                  "Se craft pour le bloc avec un bloc d'amethyste et un colorant de feu et pour le crystal rouge il faut un colorant de feu entouré d'éclat d'amethyste"
                ]
              },
              "Nouveau bloc de culture : fertile soil",
              "Ajout du bloc de sel obtenable dans les océans couche 0 à 64",
              "Ajout du bloc de bouton en roche interstellaire",
              "Ajout des recettes pour les blocs de mur, dalle, escalirer en roche interstellaire",
              "Les blocs de minerai peuvent être utilisé pour la base de beacon (Paladium, red, multicolor, carmeltazite, fluorite, chrome, amazonite, xenite,nickel)"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              {
                "text": "Refonte du systeme pour la blue sea weed qui devient une culture comme le blé la « blue sea wheat »",
                "childrenListType": "ordered",
                "children": [
                  "La graine peut être obtenu en cuisant de l'herbe marine sur un feu de camp"
                ]
              },
              "Les outils en amazonite ont maintenant leurs fonctionnalités respectives",
              "Chrononimbus peut être utilisé en créatif sans à avoir de la poudre de redstone dans son inventaire"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition :",
            "items": [
              {
                "text": "Added the red crystal, the red crystal block and the red crystal cluster.",
                "childrenListType": "ordered",
                "children": [
                  "The red crystal can make the mod's crops grow to the maximum level and increase one or more stages of Minecraft crops",
                  "Crafting for the block with an amethyst block and a fire dye, and for the red crystal, a fire dye surrounded by amethyst shards"
                ]
              },
              "New crop block: fertile soil",
              "New block of salt obtainable in oceans from 0 to 64",
              "New block of button in interstellar rock",
              "New recipes for the blocks of wall, floor, stairs in interstellar rock",
              "The mining blocks can be used to make the base of the beacon (Paladium, red, multicolor, carmeltazite, fluorite, chrome, amazonite, xenite,nickel)"
            ]
          },
          {
            "type": "fix",
            "heading": "Changes :",
            "items": [
              {
                "text": "Redesign of the system for the blue sea weed which becomes a crop like wheat the “blue sea wheat”",
                "childrenListType": "ordered",
                "children": [
                  "The seed can be obtained by cooking marine grass on a campfire"
                ]
              },
              "The tools in amazonite now have their respective functions",
              "Chrononimbus can be used in creative without having redstone powder in its inventory"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": [
            { "text": "Aggiunti il cristallo rosso, il blocco di cristallo rosso e il cluster di cristallo rosso.", "childrenListType": "ordered", "children": ["Il cristallo rosso porta al livello massimo le colture del mod e fa avanzare di una o più fasi le colture di Minecraft.", "Il blocco si fabbrica con un blocco di ametista e un colorante del fuoco; il cristallo rosso si fabbrica circondando frammenti di ametista con un colorante del fuoco."] },
            "Nuovo blocco agricolo: Fertile Soil.",
            "Aggiunto il blocco di sale, ottenibile negli oceani tra i livelli 0 e 64.",
            "Aggiunto un pulsante in roccia interstellare.",
            "Aggiunte ricette per muri, lastre e scale in roccia interstellare.",
            "I blocchi di minerale possono essere usati come base per un beacon (Paladium, Red, Multicolor, Carmeltazite, Fluorite, Chrome, Amazonite, Xenite e Nickel)."
          ] },
          { "type": "fix", "heading": "Modifiche:", "items": [
            { "text": "Rifatto il sistema della Blue Sea Weed, trasformandola in una coltura simile al grano chiamata “Blue Sea Wheat”.", "childrenListType": "ordered", "children": ["Il seme si ottiene cuocendo erba marina su un falò."] },
            "Gli strumenti in Amazonite ora hanno le rispettive funzionalità.",
            "Chrononimbus può essere usato in modalità creativa senza avere polvere di redstone nell’inventario."
          ] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": [
            { "text": "Añadidos el cristal rojo, el bloque de cristal rojo y el cúmulo de cristal rojo.", "childrenListType": "ordered", "children": ["El cristal rojo hace crecer los cultivos del mod hasta su nivel máximo y puede avanzar una o varias etapas de los cultivos de Minecraft.", "El bloque se fabrica con un bloque de amatista y tinte de fuego; el cristal rojo se fabrica rodeando fragmentos de amatista con tinte de fuego."] },
            "Nuevo bloque de cultivo: Fertile Soil.",
            "Añadido el bloque de sal, que se obtiene en los océanos entre las capas 0 y 64.",
            "Añadido un botón de roca interestelar.",
            "Añadidas recetas para muros, losas y escaleras de roca interestelar.",
            "Los bloques de mineral se pueden usar como base para una baliza (Paladium, Red, Multicolor, Carmeltazite, Fluorite, Chrome, Amazonite, Xenite y Nickel)."
          ] },
          { "type": "fix", "heading": "Modificaciones:", "items": [
            { "text": "Rediseñado el sistema de Blue Sea Weed, que ahora es un cultivo similar al trigo llamado «Blue Sea Wheat».", "childrenListType": "ordered", "children": ["La semilla se obtiene cocinando algas marinas en una hoguera."] },
            "Las herramientas de Amazonite ahora tienen sus funciones correspondientes.",
            "Chrononimbus se puede usar en creativo sin tener polvo de redstone en el inventario."
          ] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": [
            { "text": "Roten Kristall, roten Kristallblock und roten Kristallcluster hinzugefügt.", "childrenListType": "ordered", "children": ["Der rote Kristall lässt Mod-Pflanzen auf die höchste Stufe wachsen und kann Minecraft-Pflanzen um eine oder mehrere Wachstumsstufen voranbringen.", "Der Block wird aus einem Amethystblock und Feuerfarbstoff hergestellt; der rote Kristall aus Feuerfarbstoff, der von Amethystsplittern umgeben ist."] },
            "Neuer Anbaublock: Fertile Soil.",
            "Salzblock hinzugefügt, der in Ozeanen zwischen Höhe 0 und 64 vorkommt.",
            "Knopf aus interstellar-gestein hinzugefügt.",
            "Rezepte für Mauern, Platten und Treppen aus interstellar-gestein hinzugefügt.",
            "Erzblöcke können als Basis für ein Leuchtfeuer verwendet werden (Paladium, Red, Multicolor, Carmeltazite, Fluorite, Chrome, Amazonite, Xenite und Nickel)."
          ] },
          { "type": "fix", "heading": "Änderungen:", "items": [
            { "text": "System der Blue Sea Weed überarbeitet: Sie wächst jetzt wie Weizen als Nutzpflanze „Blue Sea Wheat“.", "childrenListType": "ordered", "children": ["Der Samen ist durch das Garen von Seegras auf einem Lagerfeuer erhältlich."] },
            "Amazonite-Werkzeuge verfügen jetzt über ihre jeweiligen Funktionen.",
            "Chrononimbus kann im Kreativmodus verwendet werden, ohne Redstone-Pulver im Inventar zu haben."
          ] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": [
            { "text": "赤いクリスタル、赤いクリスタルブロック、赤いクリスタルクラスターを追加しました。", "childrenListType": "ordered", "children": ["赤いクリスタルは Mod の作物を最大段階まで成長させ、Minecraft の作物を1段階以上成長させます。", "ブロックはアメジストブロックと火の染料で作成できます。赤いクリスタルはアメジストの欠片を火の染料で囲んで作成します。"] },
            "新しい作物ブロック: Fertile Soil。",
            "レベル 0～64 の海洋で入手できる塩ブロックを追加しました。",
            "インターステラーロックのボタンを追加しました。",
            "インターステラーロックの塀、ハーフブロック、階段のレシピを追加しました。",
            "鉱石ブロックをビーコンの土台に使用できるようになりました (Paladium、Red、Multicolor、Carmeltazite、Fluorite、Chrome、Amazonite、Xenite、Nickel)。"
          ] },
          { "type": "fix", "heading": "変更:", "items": [
            { "text": "Blue Sea Weed の仕組みを作り直し、小麦のように育つ作物「Blue Sea Wheat」にしました。", "childrenListType": "ordered", "children": ["海草を焚き火で焼くと種を入手できます。"] },
            "Amazonite 製ツールにそれぞれの機能が追加されました。",
            "Chrononimbus を、レッドストーンパウダーを持たずにクリエイティブで使えるようになりました。"
          ] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": [
            { "text": "빨간 수정, 빨간 수정 블록, 빨간 수정 군집 추가", "childrenListType": "ordered", "children": ["빨간 수정은 모드 작물을 최대 단계까지 자라게 하고 Minecraft 작물의 성장 단계를 하나 이상 올릴 수 있습니다.", "블록은 자수정 블록과 화염 염료로 제작하며, 빨간 수정은 화염 염료를 자수정 조각으로 둘러 제작합니다."] },
            "신규 작물 블록: Fertile Soil",
            "바다의 높이 0~64에서 얻을 수 있는 소금 블록 추가",
            "성간 암석 버튼 블록 추가",
            "성간 암석 벽, 반 블록, 계단 제작법 추가",
            "광석 블록을 신호기의 기반으로 사용할 수 있습니다 (Paladium, Red, Multicolor, Carmeltazite, Fluorite, Chrome, Amazonite, Xenite, Nickel)."
          ] },
          { "type": "fix", "heading": "변경:", "items": [
            { "text": "Blue Sea Weed 시스템을 개편해 밀처럼 재배하는 “Blue Sea Wheat”로 변경", "childrenListType": "ordered", "children": ["해초를 모닥불에서 구워 씨앗을 얻을 수 있습니다."] },
            "Amazonite 도구가 이제 각자의 기능을 갖습니다.",
            "크리에이티브에서 인벤토리에 레드스톤 가루가 없어도 Chrononimbus를 사용할 수 있습니다."
          ] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": [
            { "text": "Adicionados o cristal vermelho, o bloco de cristal vermelho e o aglomerado de cristal vermelho.", "childrenListType": "ordered", "children": ["O cristal vermelho faz as plantações do mod crescerem até o nível máximo e pode avançar uma ou mais etapas das plantações do Minecraft.", "O bloco é fabricado com um bloco de ametista e corante de fogo; o cristal vermelho é fabricado cercando fragmentos de ametista com corante de fogo."] },
            "Novo bloco de plantação: Fertile Soil.",
            "Adicionado o bloco de sal, encontrado nos oceanos entre as camadas 0 e 64.",
            "Adicionado um botão de rocha interestelar.",
            "Adicionadas receitas de muros, lajes e escadas de rocha interestelar.",
            "Blocos de minério podem ser usados como base de sinalizador (Paladium, Red, Multicolor, Carmeltazite, Fluorite, Chrome, Amazonite, Xenite e Nickel)."
          ] },
          { "type": "fix", "heading": "Alterações:", "items": [
            { "text": "Sistema da Blue Sea Weed reformulado: agora é uma plantação como o trigo, chamada “Blue Sea Wheat”.", "childrenListType": "ordered", "children": ["A semente pode ser obtida assando grama marinha em uma fogueira."] },
            "As ferramentas de Amazonite agora têm suas respectivas funções.",
            "Chrononimbus pode ser usado no criativo sem pó de redstone no inventário."
          ] }
        ]
      }
    },
    {
      "version": "1.6.0",
      "date": "2024-03-04",
      "loader": "Forge",
      "mcVersion": "1.20.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              {
                "text": "4 nouveaux types de bois :",
                "childrenListType": "ordered",
                "children": [
                  "le bois de l'end",
                  "Yophylys",
                  "Luminapin",
                  "Noctacacia"
                ]
              },
              {
                "text": "3 nouveaux coffres :",
                "childrenListType": "ordered",
                "children": [
                  "En Xenite",
                  "En Paladium",
                  "En Multicolore"
                ]
              },
              "Nouvelle roche disponible dans l'end : Interstellar rock",
              "Possibilité de cuire 500 objets avec le fragment de xenite",
              "Ajout d'une nouvelle profession de villageois « le forestier » avec un nouveau bloc d'artisanat :le bloc de scierie",
              "Ajout du craft de fragment de xenite dans un haut fourneau",
              "Ajout d'une alarme",
              "Ajout d'une fonctionnalité de vol avec l'armure de l'espace",
              "Ajout du modele de l'armure spatial"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              {
                "text": "Correction de faute d'orthographe dans des avancements :",
                "childrenListType": "ordered",
                "children": [
                  "« an incredible music disk ! » Disc > Disk",
                  "dans la creation du lingot de multicolore Multicolored > Multicolor"
                ]
              },
              "Suppression de tout les biomes crées jusque là et de leurs avancements",
              "Suppression du craft de la potion anti dégâts et du spawner de colossum"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition :",
            "items": [
              {
                "text": "4 new types of wood :",
                "childrenListType": "ordered",
                "children": [
                  "Enderwood",
                  "Yophylys",
                  "Luminapin",
                  "Noctacacia"
                ]
              },
              {
                "text": "3 new chests :",
                "childrenListType": "ordered",
                "children": [
                  "In Xenite",
                  "In Paladium",
                  "In Multicolor"
                ]
              },
              "New rock available in the end : Interstellar rock",
              "Ability to smelt 500 items with the xenite fragment",
              "Add a new profession of villagers “the forester” with a new artisan block : the sawmill block",
              "Add the craft of the xenite fragment in a furnace",
              "Add an alarm",
              "Add a function of flying with the space armor",
              "Add the model of the space armor"
            ]
          },
          {
            "type": "fix",
            "heading": "Changes :",
            "items": [
              {
                "text": "Correction of typos in advancements :",
                "childrenListType": "ordered",
                "children": [
                  "“an incredible music disk ! ” Disc > Disk",
                  "in the creation of the multicolor ingot Multicolored > Multicolor"
                ]
              },
              "Removal of all the biomes created so far and their advancements",
              "Removal of the craft of the anti-damage potion and the colossus spawner"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": [
            { "text": "4 nuovi tipi di legno:", "childrenListType": "ordered", "children": ["Enderwood", "Yophylys", "Luminapin", "Noctacacia"] },
            { "text": "3 nuovi bauli:", "childrenListType": "ordered", "children": ["in Xenite", "in Paladium", "in Multicolor"] },
            "Nuova roccia disponibile nell’End: Interstellar Rock.",
            "Possibilità di fondere 500 oggetti usando il frammento di Xenite.",
            "Aggiunta la professione del villager Forestiere con un nuovo blocco da lavoro: la segheria.",
            "Aggiunta la ricetta per il frammento di Xenite in una fornace.",
            "Aggiunto un allarme.",
            "Aggiunta la possibilità di volare con l’armatura Space.",
            "Aggiunto il modello dell’armatura Space."
          ] },
          { "type": "fix", "heading": "Modifiche:", "items": [
            { "text": "Corrette le ortografie di alcuni avanzamenti:", "childrenListType": "ordered", "children": ["“an incredible music disk ! ” Disc > Disk", "Nella creazione del lingotto Multicolor: Multicolored > Multicolor"] },
            "Rimossi tutti i biomi creati fino a quel momento e i relativi avanzamenti.",
            "Rimosse le ricette della pozione anti-danno e dello spawner di Colossum."
          ] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": [
            { "text": "4 nuevos tipos de madera:", "childrenListType": "ordered", "children": ["Enderwood", "Yophylys", "Luminapin", "Noctacacia"] },
            { "text": "3 nuevos cofres:", "childrenListType": "ordered", "children": ["de Xenite", "de Paladium", "de Multicolor"] },
            "Nueva roca disponible en el End: Interstellar Rock.",
            "Posibilidad de fundir 500 objetos con el fragmento de Xenite.",
            "Añadida la profesión de aldeano Forestero con un nuevo bloque de trabajo: el aserradero.",
            "Añadida la receta del fragmento de Xenite en un horno.",
            "Añadida una alarma.",
            "Añadida la posibilidad de volar con la armadura Space.",
            "Añadido el modelo de la armadura Space."
          ] },
          { "type": "fix", "heading": "Modificaciones:", "items": [
            { "text": "Corregida la ortografía de algunos progresos:", "childrenListType": "ordered", "children": ["«an incredible music disk ! » Disc > Disk", "En la creación del lingote Multicolor: Multicolored > Multicolor"] },
            "Eliminados todos los biomas creados hasta entonces y sus progresos.",
            "Eliminadas las recetas de la poción antid daño y del generador de Colossum."
          ] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": [
            { "text": "4 neue Holzarten:", "childrenListType": "ordered", "children": ["Enderwood", "Yophylys", "Luminapin", "Noctacacia"] },
            { "text": "3 neue Truhen:", "childrenListType": "ordered", "children": ["aus Xenite", "aus Paladium", "aus Multicolor"] },
            "Neues Gestein im End: Interstellar Rock.",
            "Mit einem Xenite-Fragment können 500 Gegenstände geschmolzen werden.",
            "Beruf des Dorfbewohners Förster mit neuem Arbeitsblock, dem Sägewerk, hinzugefügt.",
            "Rezept für Xenite-Fragmente im Ofen hinzugefügt.",
            "Alarm hinzugefügt.",
            "Flugfunktion für die Space-Rüstung hinzugefügt.",
            "Modell der Space-Rüstung hinzugefügt."
          ] },
          { "type": "fix", "heading": "Änderungen:", "items": [
            { "text": "Rechtschreibfehler in Fortschritten korrigiert:", "childrenListType": "ordered", "children": ["„an incredible music disk ! ” Disc > Disk", "Bei der Herstellung des Multicolor-Barrens: Multicolored > Multicolor"] },
            "Alle bis dahin erstellten Biome und ihre Fortschritte entfernt.",
            "Rezepte für den Anti-Schaden-Trank und den Colossum-Spawner entfernt."
          ] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": [
            { "text": "4 種類の新しい木材:", "childrenListType": "ordered", "children": ["Enderwood", "Yophylys", "Luminapin", "Noctacacia"] },
            { "text": "3 種類の新しいチェスト:", "childrenListType": "ordered", "children": ["Xenite 製", "Paladium 製", "Multicolor 製"] },
            "End に新しい岩石 Interstellar Rock を追加しました。",
            "Xenite の欠片で 500 個のアイテムを精錬できるようになりました。",
            "新しい職業ブロック「製材所」と村人の職業「Forester」を追加しました。",
            "かまどで Xenite の欠片を作るレシピを追加しました。",
            "警報を追加しました。",
            "Space Armor で飛行できる機能を追加しました。",
            "Space Armor のモデルを追加しました。"
          ] },
          { "type": "fix", "heading": "変更:", "items": [
            { "text": "進捗の誤字を修正しました:", "childrenListType": "ordered", "children": ["「an incredible music disk ! 」Disc > Disk", "Multicolor インゴットの作成時: Multicolored > Multicolor"] },
            "それまでに作成されたすべてのバイオームと進捗を削除しました。",
            "ダメージ防止ポーションと Colossum スポナーのレシピを削除しました。"
          ] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": [
            { "text": "신규 목재 4종:", "childrenListType": "ordered", "children": ["Enderwood", "Yophylys", "Luminapin", "Noctacacia"] },
            { "text": "신규 상자 3종:", "childrenListType": "ordered", "children": ["Xenite", "Paladium", "Multicolor"] },
            "End에서 얻을 수 있는 신규 암석 Interstellar Rock 추가",
            "Xenite 조각으로 아이템 500개를 제련할 수 있도록 추가",
            "새 작업 블록 제재소와 주민 직업 산림업자 추가",
            "화로에서 Xenite 조각을 만드는 제작법 추가",
            "경보 장치 추가",
            "Space 방어구 비행 기능 추가",
            "Space 방어구 모델 추가"
          ] },
          { "type": "fix", "heading": "변경:", "items": [
            { "text": "발전 과제의 오타 수정:", "childrenListType": "ordered", "children": ["“an incredible music disk ! ” Disc > Disk", "Multicolor 주괴 제작 시 Multicolored > Multicolor"] },
            "그동안 추가된 모든 생물 군계와 해당 발전 과제 제거",
            "피해 방지 물약과 Colossum 생성기 제작법 제거"
          ] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": [
            { "text": "4 novos tipos de madeira:", "childrenListType": "ordered", "children": ["Enderwood", "Yophylys", "Luminapin", "Noctacacia"] },
            { "text": "3 novos baús:", "childrenListType": "ordered", "children": ["de Xenite", "de Paladium", "de Multicolor"] },
            "Nova rocha disponível no End: Interstellar Rock.",
            "Possibilidade de fundir 500 itens usando o fragmento de Xenite.",
            "Adicionada a profissão de aldeão Silvicultor com um novo bloco de trabalho: a serraria.",
            "Adicionada a receita do fragmento de Xenite na fornalha.",
            "Adicionado um alarme.",
            "Adicionada a função de voo da armadura Space.",
            "Adicionado o modelo da armadura Space."
          ] },
          { "type": "fix", "heading": "Alterações:", "items": [
            { "text": "Corrigidos erros de ortografia em avanços:", "childrenListType": "ordered", "children": ["“an incredible music disk ! ” Disc > Disk", "Na criação do lingote Multicolor: Multicolored > Multicolor"] },
            "Removidos todos os biomas criados até então e seus avanços.",
            "Removidas as receitas da poção ant dano e do gerador de Colossum."
          ] }
        ]
      }
    },
    {
      "version": "1.4.1",
      "date": "2024-01-03",
      "loader": "Forge",
      "mcVersion": "1.20.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Acatar book"
            ]
          },
          {
            "type": "info",
            "heading": "Information :",
            "items": [
              "alors pour vous aider a mieux avancé dans mon mod si vous le souhaiter je mais a disposition un livre qui résume ( c'est en gros un wiki mais dans un livre ) la majorité des informations que vous devez savoir pour pouvoir avancé et crafter des blocs ou autre que vous voulez.",
              "Crafter le avec 8 lingot de paladium et un livre au milieu et faite un clic droit sur le livre pour obtenir le livre avec le wiki puis cliquer sur les different onglet comme minerai puis sur l'un des minerai que vous desirez"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              "Correction de l'apparition du biome plage avec palmiers et de l'arbre"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition :",
            "items": [
              "Acatar book"
            ]
          },
          {
            "type": "info",
            "heading": "Information :",
            "items": [
              "So to help you better progress in my mod if you wish I put at disposal a book that summarizes (it's basically a wiki but in a book) most of the information you need to know to be able to progress and craft blocks or other things you want.",
              "Craft it with 8 paladium ingots and a book in the middle and right click on the book to get the book with the wiki then click on the different tabs like ore and then on one of the ores you want"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              "Correction of the appearance of the beach biome with palms and the tree"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Acatar Book."] },
          { "type": "info", "heading": "Informazioni:", "items": ["Per aiutarti a progredire nel mod, è disponibile un libro che riassume la maggior parte delle informazioni necessarie: è praticamente una wiki all’interno di un libro e ti aiuta a progredire e a creare gli oggetti che desideri.", "Fabbricalo con 8 lingotti di Paladium e un libro al centro. Fai clic destro sul libro per aprire la wiki, poi scegli una scheda, ad esempio quella dei minerali, e seleziona il minerale desiderato."] },
          { "type": "fix", "heading": "Modifiche:", "items": ["Corretta la generazione del bioma della spiaggia con palme e dei relativi alberi."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Acatar Book."] },
          { "type": "info", "heading": "Información:", "items": ["Para ayudarte a progresar en el mod, tienes disponible un libro que resume la mayoría de la información necesaria; básicamente, es una wiki dentro de un libro que te permite avanzar y fabricar los bloques y otros objetos que quieras.", "Fabrícalo con 8 lingotes de Paladium y un libro en el centro. Haz clic derecho en el libro para abrir la wiki; después, selecciona una pestaña, como la de minerales, y el mineral que quieras consultar."] },
          { "type": "fix", "heading": "Modificaciones:", "items": ["Corregida la generación del bioma de playa con palmeras y de sus árboles."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Acatar Book."] },
          { "type": "info", "heading": "Information:", "items": ["Um dir den Fortschritt in der Mod zu erleichtern, gibt es ein Buch mit den wichtigsten Informationen – praktisch ein Wiki in Buchform, das dir beim Vorankommen und Herstellen gewünschter Blöcke und anderer Gegenstände hilft.", "Stelle es aus 8 Paladium-Barren und einem Buch in der Mitte her. Rechtsklicke auf das Buch, um das Wiki zu öffnen, wähle dann eine Registerkarte wie Erze und anschließend das gewünschte Erz."] },
          { "type": "fix", "heading": "Änderungen:", "items": ["Generierung des Strandbioms mit Palmen und der zugehörigen Bäume korrigiert."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["Acatar Book を追加しました。"] },
          { "type": "info", "heading": "情報:", "items": ["Mod の進行を助ける本を用意しました。これは本の中の Wiki のようなもので、ゲームを進めたり、ブロックなどをクラフトしたりするために必要な情報の大半をまとめています。", "Paladium インゴット 8 個と本 1 冊を中央に置いてクラフトします。本を右クリックすると Wiki が開きます。鉱石などのタブを選び、知りたい鉱石をクリックしてください。"] },
          { "type": "fix", "heading": "変更:", "items": ["ヤシの木のある海岸バイオームと木の生成を修正しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["Acatar Book 추가"] },
          { "type": "info", "heading": "정보:", "items": ["모드 진행을 돕기 위해 필요한 정보 대부분을 요약한 책을 준비했습니다. 책 속의 위키처럼 모드 진행과 원하는 블록 및 아이템 제작에 필요한 내용을 확인할 수 있습니다.", "Paladium 주괴 8개와 가운데 책 1개로 제작하세요. 책을 우클릭하면 위키가 열립니다. 광석 탭 등 원하는 탭을 누른 뒤 확인할 광석을 선택하세요."] },
          { "type": "fix", "heading": "변경:", "items": ["야자나무 해변 생물 군계와 나무 생성 수정"] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Acatar Book."] },
          { "type": "info", "heading": "Informação:", "items": ["Para ajudar você a progredir no mod, há um livro que resume a maioria das informações necessárias — basicamente, uma wiki dentro de um livro para ajudar a avançar e fabricar os blocos e outros itens desejados.", "Fabrique-o com 8 lingotes de Paladium e um livro no centro. Clique com o botão direito no livro para abrir a wiki; depois escolha uma aba, como a de minérios, e selecione o minério desejado."] },
          { "type": "fix", "heading": "Alterações:", "items": ["Corrigida a geração do bioma de praia com palmeiras e das árvores."] }
        ]
      }
    },
    {
      "version": "1.4.0",
      "date": "2023-12-31",
      "loader": "Forge",
      "mcVersion": "1.20.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout des éléments en amazonite",
              "Ajout du craft de la amaapple",
              "Ajout du purifieur et de la table de craft avancé",
              "Ajout de 2 nouveaux type de villageois le « Mineur » et le « Customer »",
              {
                "text": "Les blocs d'artisanat des villageois sont :",
                "childrenListType": "ordered",
                "children": [
                  "Pour le mineur → le purifieur",
                  "Pour le customer → la table de craft avancé"
                ]
              },
              "Ajout d'un biome plage avec palmier",
              "Ajout de la potion anti dégats",
              "Ajout d'un avancement « Plage paradisiaque »"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              "Texture des feuille de redwood refaite",
              "Arbre de palmier maintenant disponible avec les pousse de palmier"
            ]
          },
          {
            "type": "warn",
            "heading": "Attention :",
            "items": [
              "Il y a divers problèmes avec la génération du palmier et de son biome",
              "La potion anti-dégats est en actuellement en phase de test"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition :",
            "items": [
              "Added elements in amazonite",
              "Added the craft of the amaapple",
              "Added the purifier and the advanced crafting table",
              "Added 2 new type of villagers the “Miner” and the “Customer”",
              {
                "text": "The crafting blocks of the villagers are :",
                "childrenListType": "ordered",
                "children": [
                  "For the miner → the purifier",
                  "For the customer → the advanced crafting table"
                ]
              },
              "Added a beach biome with palm",
              "Added the anti-damage potion",
              "Added an advancement “Paradise Beach”"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              "Redwood leaf texture refactor",
              "The palm tree is now available with palm sapllings"
            ]
          },
          {
            "type": "warn",
            "heading": "Warning :",
            "items": [
              "There are various problems with the palm tree and its biome",
              "The anti-damage potion is currently in test phase"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunti gli elementi in Amazonite.", "Aggiunta la ricetta per l’Amaapple.", "Aggiunti il Purifier e il tavolo di creazione avanzato.", "Aggiunti 2 nuovi tipi di villager: Miner e Customer.", { "text": "Blocchi da lavoro dei villager:", "childrenListType": "ordered", "children": ["Per il Miner → Purifier", "Per il Customer → tavolo di creazione avanzato"] }, "Aggiunto un bioma di spiaggia con palme.", "Aggiunta la pozione anti-danno.", "Aggiunto l’avanzamento “Paradise Beach”."] },
          { "type": "fix", "heading": "Modifiche:", "items": ["Rifatta la texture delle foglie di Redwood.", "Ora la palma può crescere dai germogli di palma."] },
          { "type": "warn", "heading": "Attenzione:", "items": ["La generazione delle palme e del relativo bioma presenta alcuni problemi.", "La pozione anti-danno è attualmente in fase di test."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadidos los elementos de Amazonite.", "Añadida la receta de Amaapple.", "Añadidos el Purifier y la mesa de fabricación avanzada.", "Añadidos 2 nuevos tipos de aldeanos: Miner y Customer.", { "text": "Bloques de trabajo de los aldeanos:", "childrenListType": "ordered", "children": ["Para el Miner → Purifier", "Para el Customer → mesa de fabricación avanzada"] }, "Añadido un bioma de playa con palmeras.", "Añadida la poción antidamage.", "Añadido el progreso «Paradise Beach»."] },
          { "type": "fix", "heading": "Modificaciones:", "items": ["Rediseñada la textura de las hojas de Redwood.", "Ahora se pueden cultivar palmeras con sus plantones."] },
          { "type": "warn", "heading": "Atención:", "items": ["Hay varios problemas con la generación de las palmeras y su bioma.", "La poción antidamage está actualmente en fase de pruebas."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Elemente aus Amazonite hinzugefügt.", "Rezept für Amaapple hinzugefügt.", "Purifier und erweiterten Werktisch hinzugefügt.", "2 neue Dorfbewohnertypen hinzugefügt: Miner und Customer.", { "text": "Arbeitsblöcke der Dorfbewohner:", "childrenListType": "ordered", "children": ["Für den Miner → Purifier", "Für den Customer → erweiterter Werktisch"] }, "Strandbiom mit Palmen hinzugefügt.", "Anti-Schaden-Trank hinzugefügt.", "Fortschritt „Paradise Beach“ hinzugefügt."] },
          { "type": "fix", "heading": "Änderungen:", "items": ["Textur der Redwood-Blätter überarbeitet.", "Palmen können jetzt aus Palmensetzlingen wachsen."] },
          { "type": "warn", "heading": "Achtung:", "items": ["Bei der Generierung der Palmen und ihres Bioms gibt es verschiedene Probleme.", "Der Anti-Schaden-Trank befindet sich derzeit in der Testphase."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["Amazonite の要素を追加しました。", "Amaapple のレシピを追加しました。", "Purifier と高度な作業台を追加しました。", "新しい村人の職業 Miner と Customer を追加しました。", { "text": "村人の職業ブロック:", "childrenListType": "ordered", "children": ["Miner → Purifier", "Customer → 高度な作業台"] }, "ヤシのある海岸バイオームを追加しました。", "ダメージ防止ポーションを追加しました。", "進捗「Paradise Beach」を追加しました。"] },
          { "type": "fix", "heading": "変更:", "items": ["Redwood の葉のテクスチャを作り直しました。", "ヤシの苗木からヤシの木を育てられるようになりました。"] },
          { "type": "warn", "heading": "注意:", "items": ["ヤシの木とそのバイオームの生成にはいくつか問題があります。", "ダメージ防止ポーションは現在テスト中です。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["Amazonite 요소 추가", "Amaapple 제작법 추가", "Purifier와 고급 제작대 추가", "신규 주민 직업 Miner와 Customer 2종 추가", { "text": "주민 작업 블록:", "childrenListType": "ordered", "children": ["Miner → Purifier", "Customer → 고급 제작대"] }, "야자나무가 있는 해변 생물 군계 추가", "피해 방지 물약 추가", "“Paradise Beach” 발전 과제 추가"] },
          { "type": "fix", "heading": "변경:", "items": ["Redwood 잎 텍스처 개편", "야자나무 묘목으로 야자나무를 키울 수 있도록 변경"] },
          { "type": "warn", "heading": "주의:", "items": ["야자나무와 해당 생물 군계 생성에 여러 문제가 있습니다.", "피해 방지 물약은 현재 테스트 중입니다."] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionados os elementos de Amazonite.", "Adicionada a receita da Amaapple.", "Adicionados o Purifier e a mesa de criação avançada.", "Adicionados 2 novos tipos de aldeões: Miner e Customer.", { "text": "Blocos de trabalho dos aldeões:", "childrenListType": "ordered", "children": ["Para o Miner → Purifier", "Para o Customer → mesa de criação avançada"] }, "Adicionado um bioma de praia com palmeiras.", "Adicionada a poção ant dano.", "Adicionado o avanço “Paradise Beach”."] },
          { "type": "fix", "heading": "Alterações:", "items": ["Textura das folhas de Redwood refeita.", "Agora é possível cultivar palmeiras com mudas de palmeira."] },
          { "type": "warn", "heading": "Atenção:", "items": ["Há vários problemas com a geração das palmeiras e do bioma.", "A poção ant dano está atualmente em fase de testes."] }
        ]
      }
    },
    {
      "version": "1.3.0",
      "date": "2023-11-11",
      "loader": "Forge",
      "mcVersion": "1.20.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout de l'armure de l'espace",
              "Ajout des blocs de béton de couleurs pour les escalier et les dalles",
              "Ajout d'un biome de grotte de glace",
              "Ajout du minerai de Chrome",
              "Ajout de la fleur de l'espace",
              "Ajout des blocs de palmier"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              "Correction du champignon fluorescent où les effets escompté n'apparaissait pas",
              "Ajustement des dégâts pour l'épée en multicolor qui passe de 38 point d'attaque à 44"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition :",
            "items": [
              "Added a space armor",
              "Added colored concrete blocks for stairs and slabs",
              "Added an ice cave biome",
              "Added Chrome ore",
              "Added the space flower",
              "Added palm tree blocks"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              "Fixed the fluorescent mushroom where the expected effects did not appear",
              "Adjusted the damage for the multicolor sword from 38 attack points to 44"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunta l’armatura Space.", "Aggiunti blocchi di cemento colorato per scale e lastre.", "Aggiunto un bioma di grotte di ghiaccio.", "Aggiunto il minerale Chrome.", "Aggiunto il fiore Space.", "Aggiunti blocchi di palma."] },
          { "type": "fix", "heading": "Modifiche:", "items": ["Corretto il fungo fluorescente, i cui effetti previsti non apparivano.", "Danni della spada Multicolor modificati da 38 a 44 punti d’attacco."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadida la armadura Space.", "Añadidos bloques de hormigón de colores para escaleras y losas.", "Añadido un bioma de cuevas de hielo.", "Añadido el mineral Chrome.", "Añadida la flor Space.", "Añadidos bloques de palmera."] },
          { "type": "fix", "heading": "Modificaciones:", "items": ["Corregido el hongo fluorescente, cuyos efectos esperados no aparecían.", "Daño de la espada Multicolor ajustado de 38 a 44 puntos de ataque."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Space-Rüstung hinzugefügt.", "Farbige Betonblöcke für Treppen und Platten hinzugefügt.", "Eisgrottenbiom hinzugefügt.", "Chrome-Erz hinzugefügt.", "Space-Blume hinzugefügt.", "Palmenblöcke hinzugefügt."] },
          { "type": "fix", "heading": "Änderungen:", "items": ["Fluoreszierenden Pilz korrigiert, dessen erwartete Effekte nicht auftraten.", "Schaden des Multicolor-Schwerts von 38 auf 44 Angriffspunkte angepasst."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["Space Armor を追加しました。", "階段やハーフブロック用の色付きコンクリートブロックを追加しました。", "氷の洞窟バイオームを追加しました。", "Chrome 鉱石を追加しました。", "Space Flower を追加しました。", "ヤシのブロックを追加しました。"] },
          { "type": "fix", "heading": "変更:", "items": ["期待した効果が発生しなかった蛍光キノコを修正しました。", "Multicolor の剣の攻撃力を 38 から 44 に調整しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["Space 방어구 추가", "계단과 반 블록용 색상 콘크리트 블록 추가", "얼음 동굴 생물 군계 추가", "Chrome 광석 추가", "Space 꽃 추가", "야자나무 블록 추가"] },
          { "type": "fix", "heading": "변경:", "items": ["기대했던 효과가 나타나지 않던 형광 버섯 수정", "Multicolor 검의 공격력을 38에서 44로 조정"] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionada a armadura Space.", "Adicionados blocos de concreto colorido para escadas e lajes.", "Adicionado um bioma de cavernas de gelo.", "Adicionado o minério Chrome.", "Adicionada a flor Space.", "Adicionados blocos de palmeira."] },
          { "type": "fix", "heading": "Alterações:", "items": ["Corrigido o cogumelo fluorescente, cujos efeitos esperados não apareciam.", "Dano da espada Multicolor ajustado de 38 para 44 pontos de ataque."] }
        ]
      }
    },
    {
      "version": "1.2.0",
      "date": "2023-10-10",
      "loader": "Forge",
      "mcVersion": "1.20.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout d'un disque de musique",
              "Ajout d'un avancement avec le sable orange",
              "Ajout d'un champignon fluorescent",
              {
                "text": "Ajout de 3 crafts à base des colorants de fleur :",
                "childrenListType": "ordered",
                "children": [
                  "Colorant de feu → colorant rouge",
                  "Colorant du ciel → colorant bleu clair",
                  "Colorant du volcan → colorant orange"
                ]
              },
              "Ajout des dérivés des blocs de gilbre (escalier, dalle et muret )",
              "Ajout de la porte en redwood"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              "Changement des textures des blocs de « gilbre »"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition :",
            "items": [
              "Added a music disc",
              "Added an advancement with the orange sand",
              "Added a fluorescent mushroom",
              {
                "text": "Added 3 crafts based on flower dyes:",
                "childrenListType": "ordered",
                "children": [
                  "firedye → red dye",
                  "skydye → light blue dye",
                  "volcano → orange dye"
                ]
              },
              "Added derivatives of gilbre blocks (stairs, slabs, and walls)",
              "Added the redwood door"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              "Change of the textures of the “gilbre” blocks"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunto un disco musicale.", "Aggiunto un avanzamento legato alla sabbia arancione.", "Aggiunto un fungo fluorescente.", { "text": "Aggiunte 3 ricette basate sui coloranti dei fiori:", "childrenListType": "ordered", "children": ["Colorante del fuoco → colorante rosso", "Colorante del cielo → colorante azzurro", "Colorante del vulcano → colorante arancione"] }, "Aggiunti scale, lastre e muretti per i blocchi Gilbre.", "Aggiunta la porta Redwood."] },
          { "type": "fix", "heading": "Modifiche:", "items": ["Modificate le texture dei blocchi Gilbre."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadido un disco de música.", "Añadido un progreso relacionado con la arena naranja.", "Añadido un hongo fluorescente.", { "text": "Añadidas 3 recetas basadas en tintes de flores:", "childrenListType": "ordered", "children": ["Tinte de fuego → tinte rojo", "Tinte del cielo → tinte azul claro", "Tinte del volcán → tinte naranja"] }, "Añadidos derivados de los bloques Gilbre (escaleras, losas y muros).", "Añadida la puerta Redwood."] },
          { "type": "fix", "heading": "Modificaciones:", "items": ["Cambiadas las texturas de los bloques Gilbre."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Musikdisc hinzugefügt.", "Fortschritt für orangenen Sand hinzugefügt.", "Fluoreszierenden Pilz hinzugefügt.", { "text": "3 Rezepte mit Blumenfarbstoffen hinzugefügt:", "childrenListType": "ordered", "children": ["Feuerfarbstoff → roter Farbstoff", "Himmelsfarbstoff → hellblauer Farbstoff", "Vulkanfarbstoff → orangener Farbstoff"] }, "Treppen, Platten und Mauern aus Gilbre hinzugefügt.", "Redwood-Tür hinzugefügt."] },
          { "type": "fix", "heading": "Änderungen:", "items": ["Texturen der Gilbre-Blöcke geändert."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["音楽ディスクを追加しました。", "オレンジ色の砂に関する進捗を追加しました。", "蛍光キノコを追加しました。", { "text": "花の染料を使った3つのレシピを追加しました:", "childrenListType": "ordered", "children": ["火の染料 → 赤色の染料", "空の染料 → 水色の染料", "火山の染料 → オレンジ色の染料"] }, "Gilbre ブロックの階段、ハーフブロック、塀を追加しました。", "Redwood のドアを追加しました。"] },
          { "type": "fix", "heading": "変更:", "items": ["Gilbre ブロックのテクスチャを変更しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["음악 음반 추가", "주황색 모래 관련 발전 과제 추가", "형광 버섯 추가", { "text": "꽃 염료를 사용하는 제작법 3종 추가:", "childrenListType": "ordered", "children": ["불 염료 → 빨간색 염료", "하늘 염료 → 하늘색 염료", "화산 염료 → 주황색 염료"] }, "Gilbre 블록 파생형(계단, 반 블록, 담장) 추가", "Redwood 문 추가"] },
          { "type": "fix", "heading": "변경:", "items": ["Gilbre 블록 텍스처 변경"] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionado um disco de música.", "Adicionado um avanço relacionado à areia laranja.", "Adicionado um cogumelo fluorescente.", { "text": "Adicionadas 3 receitas com corantes de flores:", "childrenListType": "ordered", "children": ["Corante de fogo → corante vermelho", "Corante do céu → corante azul-claro", "Corante do vulcão → corante laranja"] }, "Adicionadas escadas, lajes e muros derivados dos blocos Gilbre.", "Adicionada a porta Redwood."] },
          { "type": "fix", "heading": "Alterações:", "items": ["Texturas dos blocos Gilbre alteradas."] }
        ]
      }
    },
    {
      "version": "1.1.1",
      "date": "2023-09-18",
      "loader": "Forge",
      "mcVersion": "1.20.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout d'un craft du blocs de red vers 9 lingot de red",
              "Ajout d'un avancement lorsque l'on obtient un fleur de feu"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              "Correction d'une faute d'orthographe dans l'un des avancements",
              "Traduction non effectuer sur l'un des avancements est désormais fixée pour la version française",
              "Changement du titre de l'avancement de « une plante dans les terres de volcans » modifiée en « une plante résistante à la lave »"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition :",
            "items": [
              "Added a craft for the red block into 9 red ingots",
              "Added an advancement when obtaining a fire flower"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              "Correction of a typo in one of the advancements",
              "Translation not done on one of the advancements is now fixed for the French version",
              "Change of the advancement title from “a plant in the volcanic lands” to “a lava-resistant plant”"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunta la ricetta per ottenere un blocco Red da 9 lingotti Red.", "Aggiunto un avanzamento per aver ottenuto una Fire Flower."] },
          { "type": "fix", "heading": "Modifiche:", "items": ["Corretto un errore ortografico in uno degli avanzamenti.", "Corretta nella versione francese la traduzione mancante di uno degli avanzamenti.", "Titolo dell’avanzamento modificato da “a plant in the volcanic lands” a “a lava-resistant plant”."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadida una receta para fabricar un bloque Red con 9 lingotes Red.", "Añadido un progreso al obtener una Fire Flower."] },
          { "type": "fix", "heading": "Modificaciones:", "items": ["Corregido un error ortográfico en uno de los progresos.", "Corregida en la versión francesa la traducción que faltaba en uno de los progresos.", "Título del progreso cambiado de «a plant in the volcanic lands» a «a lava-resistant plant»."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Rezept zur Herstellung eines Red-Blocks aus 9 Red-Barren hinzugefügt.", "Fortschritt für den Erhalt einer Fire Flower hinzugefügt."] },
          { "type": "fix", "heading": "Änderungen:", "items": ["Rechtschreibfehler in einem Fortschritt korrigiert.", "Fehlende Übersetzung eines Fortschritts in der französischen Version ergänzt.", "Titel des Fortschritts von „a plant in the volcanic lands“ in „a lava-resistant plant“ geändert."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["Red インゴット 9 個から Red ブロックを作るレシピを追加しました。", "Fire Flower を入手すると達成できる進捗を追加しました。"] },
          { "type": "fix", "heading": "変更:", "items": ["進捗の誤字を修正しました。", "フランス語版で進捗の未翻訳箇所を修正しました。", "進捗名を「a plant in the volcanic lands」から「a lava-resistant plant」に変更しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["Red 주괴 9개로 Red 블록을 만드는 제작법 추가", "Fire Flower를 얻으면 달성하는 발전 과제 추가"] },
          { "type": "fix", "heading": "변경:", "items": ["발전 과제 중 하나의 오타 수정", "프랑스어 버전의 발전 과제에 누락된 번역 수정", "발전 과제 제목을 “a plant in the volcanic lands”에서 “a lava-resistant plant”로 변경"] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionada uma receita para fabricar um bloco Red com 9 lingotes Red.", "Adicionado um avanço ao obter uma Fire Flower."] },
          { "type": "fix", "heading": "Alterações:", "items": ["Corrigido um erro de ortografia em um dos avanços.", "Corrigida a tradução que faltava em um dos avanços na versão francesa.", "Título do avanço alterado de “a plant in the volcanic lands” para “a lava-resistant plant”."] }
        ]
      }
    },
    {
      "version": "1.1.0",
      "date": "2023-09-16",
      "loader": "Forge",
      "mcVersion": "1.20.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout de 2 nouveaux biome : la foret de redwood et la terre de volcan",
              "Ajout de 2 blocs de sable",
              "Ajout de blocs décoratif : le Gilbre",
              "Ajout de 6 nouveaux avancements",
              "Ajout de 2 nouvelle fleur : la fleur du ciel et la fleur des volans"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              "Réorganisation de l'inventaire créatif",
              "Modificatons de la texture du cave block et des block en redwood",
              "Changement du nom de Sayabiome a Saya forest",
              "Résolution de duplication avec les craft sur le nickel",
              "Modifications du nombre d'apparition d'abeille dans la foret de saya"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition :",
            "items": [
              "Added 2 new biomes: Redwood Forest and Volcano Land",
              "Added 2 new sand blocks",
              "Added decorative blocks: Gilbre",
              "Added 6 new advancements",
              "Added 2 new flowers: Sky Flower and Flying Flower"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              "Reorganization of the creative inventory",
              "Modifications of the texture of the cave block and the blocks in redwood",
              "Change of the name from Sayabiome to Saya forest",
              "Resolution of duplication with crafts on nickel",
              "Modifications of the number of bee appearances in the Saya forest"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunti 2 nuovi biomi: Redwood Forest e Volcano Land.", "Aggiunti 2 nuovi blocchi di sabbia.", "Aggiunti blocchi decorativi: Gilbre.", "Aggiunti 6 nuovi avanzamenti.", "Aggiunti 2 nuovi fiori: Sky Flower e Flying Flower."] },
          { "type": "fix", "heading": "Modifiche:", "items": ["Riorganizzato l’inventario creativo.", "Modificate le texture del Cave Block e dei blocchi Redwood.", "Modificato il nome da Sayabiome a Saya Forest.", "Risolta la duplicazione delle ricette del Nickel.", "Modificato il numero di api che compaiono nella foresta Saya."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadidos 2 biomas nuevos: Redwood Forest y Volcano Land.", "Añadidos 2 bloques de arena nuevos.", "Añadidos bloques decorativos: Gilbre.", "Añadidos 6 progresos nuevos.", "Añadidas 2 flores nuevas: Sky Flower y Flying Flower."] },
          { "type": "fix", "heading": "Modificaciones:", "items": ["Reorganizado el inventario creativo.", "Modificadas las texturas del Cave Block y de los bloques Redwood.", "Cambiado el nombre de Sayabiome a Saya Forest.", "Resuelta la duplicación de las recetas de Nickel.", "Modificada la cantidad de abejas que aparecen en el bosque Saya."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["2 neue Biome hinzugefügt: Redwood Forest und Volcano Land.", "2 neue Sandblöcke hinzugefügt.", "Dekorative Blöcke hinzugefügt: Gilbre.", "6 neue Fortschritte hinzugefügt.", "2 neue Blumen hinzugefügt: Sky Flower und Flying Flower."] },
          { "type": "fix", "heading": "Änderungen:", "items": ["Kreativinventar neu organisiert.", "Texturen des Cave Block und der Redwood-Blöcke geändert.", "Name von Sayabiome in Saya Forest geändert.", "Doppelte Nickel-Rezepte behoben.", "Anzahl der Bienen im Saya-Wald angepasst."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["新しいバイオーム Redwood Forest と Volcano Land を2種類追加しました。", "新しい砂ブロックを2種類追加しました。", "装飾ブロック Gilbre を追加しました。", "新しい進捗を6個追加しました。", "新しい花 Sky Flower と Flying Flower を2種類追加しました。"] },
          { "type": "fix", "heading": "変更:", "items": ["クリエイティブインベントリを再編成しました。", "Cave Block と Redwood ブロックのテクスチャを変更しました。", "名前を Sayabiome から Saya Forest に変更しました。", "Nickel のレシピが重複する問題を修正しました。", "Saya Forest に出現するミツバチの数を調整しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["신규 생물 군계 Redwood Forest와 Volcano Land 2종 추가", "신규 모래 블록 2종 추가", "장식 블록 Gilbre 추가", "신규 발전 과제 6개 추가", "신규 꽃 Sky Flower와 Flying Flower 2종 추가"] },
          { "type": "fix", "heading": "변경:", "items": ["크리에이티브 인벤토리 재구성", "Cave Block과 Redwood 블록 텍스처 변경", "이름을 Sayabiome에서 Saya Forest로 변경", "Nickel 제작법 중복 수정", "Saya 숲에 생성되는 벌 수 조정"] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionados 2 novos biomas: Redwood Forest e Volcano Land.", "Adicionados 2 novos blocos de areia.", "Adicionados blocos decorativos: Gilbre.", "Adicionados 6 novos avanços.", "Adicionadas 2 novas flores: Sky Flower e Flying Flower."] },
          { "type": "fix", "heading": "Alterações:", "items": ["Inventário criativo reorganizado.", "Texturas do Cave Block e dos blocos Redwood alteradas.", "Nome alterado de Sayabiome para Saya Forest.", "Corrigida a duplicação das receitas de Nickel.", "Quantidade de abelhas que aparecem na floresta Saya alterada."] }
        ]
      }
    },
    {
      "version": "1.0.0",
      "date": "2023-08-30",
      "loader": "Forge",
      "mcVersion": "1.20.1",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout d'un nouveau types d'arbres",
              "Ajout d'un nouveaux minerai le « Carmeltazite »",
              "Nouvelle item",
              "Nouveaux blocs craftable",
              "Nouvelle achievement",
              "Ajout d'un craft pour la selle",
              "Ajout du blocs de multicolore"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              "Correction sur certain minerai de la couche d'apparition par chunk et de sa forme d'apparition"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition :",
            "items": [
              "Added a new type of trees",
              "Added a new ore “Carmeltazite”",
              "New item",
              "New craftable blocks",
              "New achievement",
              "Added a craft for the saddle",
              "Added multicolored blocks"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              "Correction on certain ores of the layer of appearance by chunk and its shape of appearance"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunto un nuovo tipo di albero.", "Aggiunto un nuovo minerale: Carmeltazite.", "Aggiunto un nuovo oggetto.", "Aggiunti nuovi blocchi fabbricabili.", "Aggiunto un nuovo avanzamento.", "Aggiunta una ricetta per la sella.", "Aggiunti blocchi Multicolor."] },
          { "type": "fix", "heading": "Modifiche:", "items": ["Corretti, per alcuni minerali, il livello di generazione per chunk e la forma della loro generazione."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadido un nuevo tipo de árbol.", "Añadido un nuevo mineral: Carmeltazite.", "Añadido un nuevo objeto.", "Añadidos nuevos bloques fabricables.", "Añadido un nuevo progreso.", "Añadida una receta para la silla de montar.", "Añadidos bloques Multicolor."] },
          { "type": "fix", "heading": "Modificaciones:", "items": ["Corregidas, para algunos minerales, la altura de generación por chunk y la forma en que aparecen."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Neue Baumart hinzugefügt.", "Neues Erz Carmeltazite hinzugefügt.", "Neuen Gegenstand hinzugefügt.", "Neue herstellbare Blöcke hinzugefügt.", "Neuen Fortschritt hinzugefügt.", "Rezept für einen Sattel hinzugefügt.", "Multicolor-Blöcke hinzugefügt."] },
          { "type": "fix", "heading": "Änderungen:", "items": ["Generierungshöhe pro Chunk und Generierungsform einiger Erze korrigiert."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["新しい種類の木を追加しました。", "新しい鉱石 Carmeltazite を追加しました。", "新しいアイテムを追加しました。", "新しいクラフト可能なブロックを追加しました。", "新しい進捗を追加しました。", "サドルのレシピを追加しました。", "Multicolor ブロックを追加しました。"] },
          { "type": "fix", "heading": "変更:", "items": ["一部の鉱石について、チャンクごとの生成高度と生成形状を修正しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["새로운 나무 유형 추가", "신규 광석 Carmeltazite 추가", "새로운 아이템 추가", "제작 가능한 신규 블록 추가", "신규 발전 과제 추가", "안장 제작법 추가", "Multicolor 블록 추가"] },
          { "type": "fix", "heading": "변경:", "items": ["일부 광석의 청크별 생성 높이와 생성 형태 수정"] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionado um novo tipo de árvore.", "Adicionado um novo minério: Carmeltazite.", "Adicionado um novo item.", "Adicionados novos blocos fabricáveis.", "Adicionado um novo avanço.", "Adicionada uma receita para a sela.", "Adicionados blocos Multicolor."] },
          { "type": "fix", "heading": "Alterações:", "items": ["Corrigidas, para alguns minérios, a altura de geração por chunk e a forma de geração."] }
        ]
      }
    },
    {
      "version": "1.0.1",
      "date": "2023-07-21",
      "loader": "Forge",
      "mcVersion": "1.19.4",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "add",
            "heading": "Ajout :",
            "items": [
              "Ajout du blocs de multicolore"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              "Refonte des textures pour tout les élément en Multicolore"
            ]
          }
        ],
        "en": [
          {
            "type": "add",
            "heading": "Addition :",
            "items": [
              "Added multicolored blocks"
            ]
          },
          {
            "type": "fix",
            "heading": "Modification :",
            "items": [
              "Redesign of textures for all elements in Multicolor"
            ]
          }
        ],
        "it": [
          { "type": "add", "heading": "Aggiunto:", "items": ["Aggiunti blocchi Multicolor."] },
          { "type": "fix", "heading": "Modifiche:", "items": ["Rinnovate le texture di tutti gli elementi Multicolor."] }
        ],
        "es": [
          { "type": "add", "heading": "Añadido:", "items": ["Añadidos bloques Multicolor."] },
          { "type": "fix", "heading": "Modificaciones:", "items": ["Rediseñadas las texturas de todos los elementos Multicolor."] }
        ],
        "de": [
          { "type": "add", "heading": "Hinzugefügt:", "items": ["Multicolor-Blöcke hinzugefügt."] },
          { "type": "fix", "heading": "Änderungen:", "items": ["Texturen aller Multicolor-Elemente überarbeitet."] }
        ],
        "ja": [
          { "type": "add", "heading": "追加:", "items": ["Multicolor ブロックを追加しました。"] },
          { "type": "fix", "heading": "変更:", "items": ["すべての Multicolor 要素のテクスチャを刷新しました。"] }
        ],
        "ko": [
          { "type": "add", "heading": "추가:", "items": ["Multicolor 블록 추가"] },
          { "type": "fix", "heading": "변경:", "items": ["모든 Multicolor 요소의 텍스처 개편"] }
        ],
        "pt-br": [
          { "type": "add", "heading": "Adicionado:", "items": ["Adicionados blocos Multicolor."] },
          { "type": "fix", "heading": "Alterações:", "items": ["Texturas de todos os elementos Multicolor reformuladas."] }
        ]
      }
    },
    {
      "version": "1.2.0",
      "date": "2023-07-21",
      "loader": "Forge",
      "mcVersion": "1.19.2",
      "type": "release",
      "changes": {
        "fr": [
          {
            "type": "info",
            "heading": "Première version publique :",
            "items": [
              "Première version publique d’Acatar pour Minecraft 1.19.2."
            ]
          }
        ],
        "en": [
          {
            "type": "info",
            "heading": "First public release:",
            "items": [
              "First public release of Acatar for Minecraft 1.19.2."
            ]
          }
        ],
        "it": [
          {
            "type": "info",
            "heading": "Prima versione pubblica:",
            "items": [
              "Prima versione pubblica di Acatar per Minecraft 1.19.2."
            ]
          }
        ],
        "es": [
          {
            "type": "info",
            "heading": "Primera versión pública:",
            "items": [
              "Primera versión pública de Acatar para Minecraft 1.19.2."
            ]
          }
        ],
        "de": [
          {
            "type": "info",
            "heading": "Erste öffentliche Version:",
            "items": [
              "Erste öffentliche Version von Acatar für Minecraft 1.19.2."
            ]
          }
        ],
        "ja": [
          {
            "type": "info",
            "heading": "初回公開版:",
            "items": [
              "Minecraft 1.19.2 向け Acatar の初回公開版です。"
            ]
          }
        ],
        "ko": [
          {
            "type": "info",
            "heading": "첫 공개 버전:",
            "items": [
              "Minecraft 1.19.2용 Acatar의 첫 공개 버전입니다."
            ]
          }
        ],
        "pt-br": [
          {
            "type": "info",
            "heading": "Primeira versão pública:",
            "items": [
              "Primeira versão pública do Acatar para Minecraft 1.19.2."
            ]
          }
        ]
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
        fr: [{ type: 'add', heading: 'Ajout :', items: ['Ajout du support 1.21.4'] }],
        en: [{ type: 'add', heading: 'Addition :', items: ['Added support for 1.21.4'] }],
        it: [{ type: 'add', heading: 'Aggiunto:', items: ['Aggiunto il supporto per la versione 1.21.4.'] }],
        es: [{ type: 'add', heading: 'Añadido:', items: ['Añadido el soporte para la versión 1.21.4.'] }],
        de: [{ type: 'add', heading: 'Hinzugefügt:', items: ['Unterstützung für Version 1.21.4 hinzugefügt.'] }],
        ja: [{ type: 'add', heading: '追加:', items: ['バージョン 1.21.4 のサポートを追加しました。'] }],
        ko: [{ type: 'add', heading: '추가:', items: ['버전 1.21.4 지원을 추가했습니다.'] }],
        'pt-br': [{ type: 'add', heading: 'Adicionado:', items: ['Adicionado suporte para a versão 1.21.4.'] }]
      }
    },
    {
      version: '1.0.0',
      date: '2024-10-25',
      loader: 'Forge, NeoForge',
      mcVersion: '1.21.1',
      type: 'release',
      changes: {
        fr: [{ type: 'add', heading: 'Ajout :', items: ['Ajout du support 1.21.1'] }],
        en: [{ type: 'add', heading: 'Addition :', items: ['Added support for 1.21.1'] }],
        it: [{ type: 'add', heading: 'Aggiunto:', items: ['Aggiunto il supporto per la versione 1.21.1.'] }],
        es: [{ type: 'add', heading: 'Añadido:', items: ['Añadido el soporte para la versión 1.21.1.'] }],
        de: [{ type: 'add', heading: 'Hinzugefügt:', items: ['Unterstützung für Version 1.21.1 hinzugefügt.'] }],
        ja: [{ type: 'add', heading: '追加:', items: ['バージョン 1.21.1 のサポートを追加しました。'] }],
        ko: [{ type: 'add', heading: '추가:', items: ['버전 1.21.1 지원을 추가했습니다.'] }],
        'pt-br': [{ type: 'add', heading: 'Adicionado:', items: ['Adicionado suporte para a versão 1.21.1.'] }]
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
          {
            type: 'add',
            heading: 'Ajout :',
            items: [
              'Ajout des éléments en jaspe',
              'Ajout des éléments en warden',
              "Ajout de l'enderman stick",
              "Ajout de l'os chaos",
              'Ajout de la boule de slime chaos',
              'Ajout de la larme chaos',
              'Ajout de la poudre chaos',
              'Ajout du bloc de laine chaos',
              "Ajout de 9 créatures chaos : Axolotl, Poule, Vache, Araigné, Cochon, Slime, Ghast, Poisson d'argent, Mouton"
            ]
          },
          {
            type: 'fix',
            heading: 'Modification :',
            items: [
              'Reduction des dégâts du warden boss',
              "Ajout d'un son lorsque l'armure en dragon est équipée",
              'Ajout du support de la langue française'
            ]
          }
        ],
        en: [
          {
            type: 'add',
            heading: 'Added:',
            items: [
              'Added elements in jasper',
              'Added elements in warden',
              'Added the enderman stick',
              'Added the chaos bone',
              'Added the chaos slime ball',
              'Added the chaos tear',
              'Added the chaos powder',
              'Added the chaos wool block',
              'Added 9 chaos creatures : Axolotl, Chicken, Cow, Spider, Pig, Slime, Ghast, Silverfish, Sheep'
            ]
          },
          {
            type: 'fix',
            heading: 'Changes:',
            items: [
              'Reduced damage of the warden boss',
              'Added a sound when the dragon armor is equipped',
              'Added support for the French language'
            ]
          }
        ],
        it: [
          {
            type: 'add',
            heading: 'Aggiunto:',
            items: [
              'Aggiunti oggetti in diaspro',
              'Aggiunti oggetti del Warden',
              'Aggiunto il bastone dell’Enderman',
              'Aggiunto l’osso del caos',
              'Aggiunta la palla di slime del caos',
              'Aggiunta la lacrima del caos',
              'Aggiunta la polvere del caos',
              'Aggiunto il blocco di lana del caos',
              'Aggiunte 9 creature del caos: Axolotl, Gallina, Mucca, Ragno, Maiale, Slime, Ghast, Pesciolino d’argento, Pecora'
            ]
          },
          {
            type: 'fix',
            heading: 'Modifiche:',
            items: [
              'Ridotti i danni del boss Warden',
              'Aggiunto un suono quando si indossa l’armatura di drago',
              'Aggiunto il supporto per la lingua francese'
            ]
          }
        ],
        es: [
          {
            type: 'add',
            heading: 'Añadido:',
            items: [
              'Añadidos objetos de jaspe',
              'Añadidos objetos del Warden',
              'Añadido el bastón de Enderman',
              'Añadido el hueso del caos',
              'Añadida la bola de slime del caos',
              'Añadida la lágrima del caos',
              'Añadido el polvo del caos',
              'Añadido el bloque de lana del caos',
              'Añadidas 9 criaturas del caos: ajolote, gallina, vaca, araña, cerdo, slime, ghast, pez de plata y oveja'
            ]
          },
          {
            type: 'fix',
            heading: 'Cambios:',
            items: [
              'Se redujo el daño del jefe Warden',
              'Se añadió un sonido al equipar la armadura de dragón',
              'Se añadió compatibilidad con el idioma francés'
            ]
          }
        ],
        de: [
          {
            type: 'add',
            heading: 'Hinzugefügt:',
            items: [
              'Jaspis-Gegenstände hinzugefügt',
              'Warden-Gegenstände hinzugefügt',
              'Enderman-Stab hinzugefügt',
              'Chaos-Knochen hinzugefügt',
              'Chaos-Schleimkugel hinzugefügt',
              'Chaos-Träne hinzugefügt',
              'Chaos-Pulver hinzugefügt',
              'Chaos-Wollblock hinzugefügt',
              '9 Chaos-Kreaturen hinzugefügt: Axolotl, Huhn, Kuh, Spinne, Schwein, Schleim, Ghast, Silberfischchen und Schaf'
            ]
          },
          {
            type: 'fix',
            heading: 'Änderungen:',
            items: [
              'Schaden des Warden-Bosses verringert',
              'Einen Ton beim Anlegen der Drachenrüstung hinzugefügt',
              'Unterstützung für die französische Sprache hinzugefügt'
            ]
          }
        ],
        ja: [
          {
            type: 'add',
            heading: '追加:',
            items: [
              'ジャスパーのアイテムを追加',
              'ウォーデンのアイテムを追加',
              'エンダーマンの棒を追加',
              'カオスの骨を追加',
              'カオスのスライムボールを追加',
              'カオスの涙を追加',
              'カオスの粉を追加',
              'カオスの羊毛ブロックを追加',
              'カオスの生物を9種類追加: ウーパールーパー、ニワトリ、ウシ、クモ、ブタ、スライム、ガスト、シルバーフィッシュ、ヒツジ'
            ]
          },
          {
            type: 'fix',
            heading: '変更:',
            items: [
              'ウォーデンボスのダメージを軽減',
              'ドラゴンの防具を装備したときの効果音を追加',
              'フランス語に対応'
            ]
          }
        ],
        ko: [
          {
            type: 'add',
            heading: '추가:',
            items: [
              '벽옥 아이템 추가',
              '워든 아이템 추가',
              '엔더맨 막대 추가',
              '혼돈의 뼈 추가',
              '혼돈의 슬라임 볼 추가',
              '혼돈의 눈물 추가',
              '혼돈의 가루 추가',
              '혼돈의 양털 블록 추가',
              '혼돈 생물 9종 추가: 아홀로틀, 닭, 소, 거미, 돼지, 슬라임, 가스트, 좀벌레, 양'
            ]
          },
          {
            type: 'fix',
            heading: '변경 사항:',
            items: [
              '워든 보스의 피해량 감소',
              '드래곤 갑옷을 착용할 때 재생되는 소리 추가',
              '프랑스어 지원 추가'
            ]
          }
        ],
        'pt-br': [
          {
            type: 'add',
            heading: 'Adicionado:',
            items: [
              'Adicionados itens de jaspe',
              'Adicionados itens do Warden',
              'Adicionado o bastão de Enderman',
              'Adicionado o osso do caos',
              'Adicionada a bola de slime do caos',
              'Adicionada a lágrima do caos',
              'Adicionado o pó do caos',
              'Adicionado o bloco de lã do caos',
              'Adicionadas 9 criaturas do caos: axolote, galinha, vaca, aranha, porco, slime, ghast, traça e ovelha'
            ]
          },
          {
            type: 'fix',
            heading: 'Alterações:',
            items: [
              'Dano do chefe Warden reduzido',
              'Adicionado um som ao equipar a armadura de dragão',
              'Adicionado suporte ao idioma francês'
            ]
          }
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
          {
            type: 'add',
            heading: 'Ajout :',
            items: [
              'Ajout des éléments en jaspe',
              'Ajout des éléments en warden',
              "Ajout de l'enderman stick",
              "Ajout de l'os chaos",
              'Ajout de la boule de slime chaos',
              'Ajout de la larme chaos',
              'Ajout de la poudre chaos',
              'Ajout du bloc de laine chaos',
              "Ajout de 9 créatures chaos : Axolotl, Poule, Vache, Araigné, Cochon, Slime, Ghast, Poisson d'argent, Mouton"
            ]
          },
          {
            type: 'fix',
            heading: 'Modification :',
            items: [
              'Reduction des dégâts du warden boss',
              "Ajout d'un son lorsque l'armure en dragon est équipée",
              'Ajout du support de la langue française'
            ]
          }
        ],
        en: [
          {
            type: 'add',
            heading: 'Added:',
            items: [
              'Added elements in jasper',
              'Added elements in warden',
              'Added the enderman stick',
              'Added the chaos bone',
              'Added the chaos slime ball',
              'Added the chaos tear',
              'Added the chaos powder',
              'Added the chaos wool block',
              'Added 9 chaos creatures : Axolotl, Chicken, Cow, Spider, Pig, Slime, Ghast, Silverfish, Sheep'
            ]
          },
          {
            type: 'fix',
            heading: 'Changes:',
            items: [
              'Reduced damage of the warden boss',
              'Added a sound when the dragon armor is equipped',
              'Added support for the French language'
            ]
          }
        ],
        it: [
          {
            type: 'add',
            heading: 'Aggiunto:',
            items: [
              'Aggiunti oggetti in diaspro',
              'Aggiunti oggetti del Warden',
              'Aggiunto il bastone dell’Enderman',
              'Aggiunto l’osso del caos',
              'Aggiunta la palla di slime del caos',
              'Aggiunta la lacrima del caos',
              'Aggiunta la polvere del caos',
              'Aggiunto il blocco di lana del caos',
              'Aggiunte 9 creature del caos: Axolotl, Gallina, Mucca, Ragno, Maiale, Slime, Ghast, Pesciolino d’argento, Pecora'
            ]
          },
          {
            type: 'fix',
            heading: 'Modifiche:',
            items: [
              'Ridotti i danni del boss Warden',
              'Aggiunto un suono quando si indossa l’armatura di drago',
              'Aggiunto il supporto per la lingua francese'
            ]
          }
        ],
        es: [
          {
            type: 'add',
            heading: 'Añadido:',
            items: [
              'Añadidos objetos de jaspe',
              'Añadidos objetos del Warden',
              'Añadido el bastón de Enderman',
              'Añadido el hueso del caos',
              'Añadida la bola de slime del caos',
              'Añadida la lágrima del caos',
              'Añadido el polvo del caos',
              'Añadido el bloque de lana del caos',
              'Añadidas 9 criaturas del caos: ajolote, gallina, vaca, araña, cerdo, slime, ghast, pez de plata y oveja'
            ]
          },
          {
            type: 'fix',
            heading: 'Cambios:',
            items: [
              'Se redujo el daño del jefe Warden',
              'Se añadió un sonido al equipar la armadura de dragón',
              'Se añadió compatibilidad con el idioma francés'
            ]
          }
        ],
        de: [
          {
            type: 'add',
            heading: 'Hinzugefügt:',
            items: [
              'Jaspis-Gegenstände hinzugefügt',
              'Warden-Gegenstände hinzugefügt',
              'Enderman-Stab hinzugefügt',
              'Chaos-Knochen hinzugefügt',
              'Chaos-Schleimkugel hinzugefügt',
              'Chaos-Träne hinzugefügt',
              'Chaos-Pulver hinzugefügt',
              'Chaos-Wollblock hinzugefügt',
              '9 Chaos-Kreaturen hinzugefügt: Axolotl, Huhn, Kuh, Spinne, Schwein, Schleim, Ghast, Silberfischchen und Schaf'
            ]
          },
          {
            type: 'fix',
            heading: 'Änderungen:',
            items: [
              'Schaden des Warden-Bosses verringert',
              'Einen Ton beim Anlegen der Drachenrüstung hinzugefügt',
              'Unterstützung für die französische Sprache hinzugefügt'
            ]
          }
        ],
        ja: [
          {
            type: 'add',
            heading: '追加:',
            items: [
              'ジャスパーのアイテムを追加',
              'ウォーデンのアイテムを追加',
              'エンダーマンの棒を追加',
              'カオスの骨を追加',
              'カオスのスライムボールを追加',
              'カオスの涙を追加',
              'カオスの粉を追加',
              'カオスの羊毛ブロックを追加',
              'カオスの生物を9種類追加: ウーパールーパー、ニワトリ、ウシ、クモ、ブタ、スライム、ガスト、シルバーフィッシュ、ヒツジ'
            ]
          },
          {
            type: 'fix',
            heading: '変更:',
            items: [
              'ウォーデンボスのダメージを軽減',
              'ドラゴンの防具を装備したときの効果音を追加',
              'フランス語に対応'
            ]
          }
        ],
        ko: [
          {
            type: 'add',
            heading: '추가:',
            items: [
              '벽옥 아이템 추가',
              '워든 아이템 추가',
              '엔더맨 막대 추가',
              '혼돈의 뼈 추가',
              '혼돈의 슬라임 볼 추가',
              '혼돈의 눈물 추가',
              '혼돈의 가루 추가',
              '혼돈의 양털 블록 추가',
              '혼돈 생물 9종 추가: 아홀로틀, 닭, 소, 거미, 돼지, 슬라임, 가스트, 좀벌레, 양'
            ]
          },
          {
            type: 'fix',
            heading: '변경 사항:',
            items: [
              '워든 보스의 피해량 감소',
              '드래곤 갑옷을 착용할 때 재생되는 소리 추가',
              '프랑스어 지원 추가'
            ]
          }
        ],
        'pt-br': [
          {
            type: 'add',
            heading: 'Adicionado:',
            items: [
              'Adicionados itens de jaspe',
              'Adicionados itens do Warden',
              'Adicionado o bastão de Enderman',
              'Adicionado o osso do caos',
              'Adicionada a bola de slime do caos',
              'Adicionada a lágrima do caos',
              'Adicionado o pó do caos',
              'Adicionado o bloco de lã do caos',
              'Adicionadas 9 criaturas do caos: axolote, galinha, vaca, aranha, porco, slime, ghast, traça e ovelha'
            ]
          },
          {
            type: 'fix',
            heading: 'Alterações:',
            items: [
              'Dano do chefe Warden reduzido',
              'Adicionado um som ao equipar a armadura de dragão',
              'Adicionado suporte ao idioma francês'
            ]
          }
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
          { type: 'add', heading: 'Ajout :', items: ['Ajout du Withers skeleton', 'Ajout du début du craft du jaspe'] },
          {
            type: 'fix',
            heading: 'Modification :',
            items: [
              'Correction du bug concernant le spawn du lazurite',
              'Correction du bug sur la récolte du pyronis'
            ]
          }
        ],
        en: [
          { type: 'add', heading: 'Added:', items: ['Added the Wither skeleton', 'Added the start of jasper crafting'] },
          {
            type: 'fix',
            heading: 'Changes:',
            items: [
              'Fixed a bug with lazurite spawning',
              'Fixed a bug with pyronis harvesting'
            ]
          }
        ],
        it: [
          { type: 'add', heading: 'Aggiunto:', items: ['Aggiunto lo scheletro Wither.', 'Aggiunti i primi elementi per la creazione del diaspro.'] },
          { type: 'fix', heading: 'Modifiche:', items: ['Risolto un bug che riguardava la generazione della lazurite.', 'Risolto un bug nella raccolta del pyronis.'] }
        ],
        es: [
          { type: 'add', heading: 'Añadido:', items: ['Añadido el esqueleto de Wither.', 'Añadidos los primeros elementos para fabricar jaspe.'] },
          { type: 'fix', heading: 'Cambios:', items: ['Corregido un error relacionado con la aparición de lazurita.', 'Corregido un error al recolectar pyronis.'] }
        ],
        de: [
          { type: 'add', heading: 'Hinzugefügt:', items: ['Wither-Skelett hinzugefügt.', 'Erste Zutaten zur Herstellung von Jaspis hinzugefügt.'] },
          { type: 'fix', heading: 'Änderungen:', items: ['Fehler beim Erscheinen von Lazurit behoben.', 'Fehler beim Abbauen von Pyronis behoben.'] }
        ],
        ja: [
          { type: 'add', heading: '追加:', items: ['ウィザー スケルトンを追加', 'ジャスパーのクラフト要素を追加'] },
          { type: 'fix', heading: '変更:', items: ['ラズライトのスポーンに関するバグを修正', 'パイロニスの採掘に関するバグを修正'] }
        ],
        ko: [
          { type: 'add', heading: '추가:', items: ['위더 스켈레톤 추가', '벽옥 제작의 시작 단계 추가'] },
          { type: 'fix', heading: '변경 사항:', items: ['라주라이트 생성 관련 버그 수정', '파이로니스 채굴 관련 버그 수정'] }
        ],
        'pt-br': [
          { type: 'add', heading: 'Adicionado:', items: ['Adicionado o esqueleto Wither.', 'Adicionados os primeiros itens para fabricar jaspe.'] },
          { type: 'fix', heading: 'Alterações:', items: ['Corrigido um erro relacionado ao surgimento da lazurita.', 'Corrigido um erro na coleta de pyronis.'] }
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
        fr: [{
          type: 'add',
          heading: 'Ajout :',
          items: [
            "Ajout d'une nouvelle armure de dragon",
            'Ajout de nouvelles créatures: Squelette, Zombie, Warden, Enderman, Creeper'
          ]
        }],
        en: [{
          type: 'add',
          heading: 'Added:',
          items: [
            'Added a new dragon armor',
            'Added new creatures: Skeleton, Zombie, Warden, Enderman, Creeper'
          ]
        }],
        it: [{ type: 'add', heading: 'Aggiunto:', items: ['Aggiunta una nuova armatura di drago.', 'Aggiunte nuove creature: scheletro, zombi, Warden, Enderman e Creeper.'] }],
        es: [{ type: 'add', heading: 'Añadido:', items: ['Añadida una nueva armadura de dragón.', 'Añadidas nuevas criaturas: esqueleto, zombi, Warden, Enderman y Creeper.'] }],
        de: [{ type: 'add', heading: 'Hinzugefügt:', items: ['Neue Drachenrüstung hinzugefügt.', 'Neue Kreaturen hinzugefügt: Skelett, Zombie, Warden, Enderman und Creeper.'] }],
        ja: [{ type: 'add', heading: '追加:', items: ['新しいドラゴンの防具を追加', '新しい生物を追加: スケルトン、ゾンビ、ウォーデン、エンダーマン、クリーパー'] }],
        ko: [{ type: 'add', heading: '추가:', items: ['새로운 드래곤 갑옷 추가', '새로운 생물 추가: 스켈레톤, 좀비, 워든, 엔더맨, 크리퍼'] }],
        'pt-br': [{ type: 'add', heading: 'Adicionado:', items: ['Adicionada uma nova armadura de dragão.', 'Adicionadas novas criaturas: esqueleto, zumbi, Warden, Enderman e Creeper.'] }]
      }
    },
    {
      version: '1.0.0',
      date: '2024-08-14',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'alpha',
      changes: {
        fr: [{
          type: 'add',
          heading: 'Ajout :',
          items: [
            'Nouveau minerai : mélanterite, pyronis, lazurite',
            'Nouvelle dimension : Chaosium',
            '2 nouveaux blocs : sedium, un bloc de portail'
          ]
        }],
        en: [{
          type: 'add',
          heading: 'Added:',
          items: [
            'New ore: melanterite, pyronis, lazurite',
            'New dimension: Chaosium',
            '2 new blocks: sedium, a portal block'
          ]
        }],
        it: [{ type: 'add', heading: 'Aggiunto:', items: ['Nuovo minerale: melanterite, pyronis e lazurite.', 'Nuova dimensione: Chaosium.', '2 nuovi blocchi: sedium e un blocco portale.'] }],
        es: [{ type: 'add', heading: 'Añadido:', items: ['Nuevo mineral: melanterita, pyronis y lazurita.', 'Nueva dimensión: Chaosium.', '2 bloques nuevos: sedium y un bloque de portal.'] }],
        de: [{ type: 'add', heading: 'Hinzugefügt:', items: ['Neue Erze: Melanterit, Pyronis und Lazurit.', 'Neue Dimension: Chaosium.', '2 neue Blöcke: Sedium und ein Portalblock.'] }],
        ja: [{ type: 'add', heading: '追加:', items: ['新しい鉱石: メランテライト、パイロニス、ラズライト', '新しいディメンション: Chaosium', '新しいブロックを2種類追加: セディウム、ポータルブロック'] }],
        ko: [{ type: 'add', heading: '추가:', items: ['새로운 광물: 멜란테라이트, 파이로니스, 라주라이트', '새로운 차원: Chaosium', '새로운 블록 2종: 세디움, 포털 블록'] }],
        'pt-br': [{ type: 'add', heading: 'Adicionado:', items: ['Novos minérios: melanterita, pyronis e lazurita.', 'Nova dimensão: Chaosium.', '2 novos blocos: sedium e um bloco de portal.'] }]
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
        fr: [{ type: 'fix', heading: 'Modification :', items: ['Correction de la texture magenta de la sirène en position « off », qui ne s’affichait pas correctement.'] }],
        en: [{ type: 'fix', heading: 'Changes:', items: ['Fixed the magenta texture of the siren in the “off” position, which was not displaying correctly.'] }],
        it: [{ type: 'fix', heading: 'Modifiche:', items: ['Corretta la texture magenta della sirena in posizione «off», che non veniva visualizzata correttamente.'] }],
        es: [{ type: 'fix', heading: 'Cambios:', items: ['Corregida la textura magenta de la sirena en posición «apagada», que no se mostraba correctamente.'] }],
        de: [{ type: 'fix', heading: 'Änderungen:', items: ['Die magentafarbene Textur der Sirene im ausgeschalteten Zustand wurde korrigiert, da sie nicht richtig angezeigt wurde.'] }],
        ja: [{ type: 'fix', heading: '変更:', items: ['オフ状態のサイレンのマゼンタ色のテクスチャが正しく表示されない問題を修正しました。'] }],
        ko: [{ type: 'fix', heading: '변경 사항:', items: ['꺼짐 상태의 사이렌에서 자홍색 텍스처가 올바르게 표시되지 않던 문제를 수정했습니다.'] }],
        'pt-br': [{ type: 'fix', heading: 'Alterações:', items: ['Corrigida a textura magenta da sirene no estado desligado, que não era exibida corretamente.'] }]
      }
    },
    {
      version: '1.0.1',
      date: '2025-12-27',
      loader: 'Forge',
      mcVersion: '1.20.1',
      type: 'release',
      changes: {
        fr: [{
          type: 'fix',
          heading: 'Modification :',
          items: [
            'Correction d’un crash critique au démarrage (Minecraft 1.20.1).',
            'Amélioration de la compatibilité et de la stabilité du mod.'
          ]
        }],
        en: [{
          type: 'fix',
          heading: 'Changes:',
          items: [
            'Fixed a critical startup crash (Minecraft 1.20.1).',
            'Improved mod compatibility and stability.'
          ]
        }],
        it: [{
          type: 'fix',
          heading: 'Modifiche:',
          items: [
            'Risolto un crash critico all’avvio (Minecraft 1.20.1).',
            'Migliorate la compatibilità e la stabilità della mod.'
          ]
        }],
        es: [{
          type: 'fix',
          heading: 'Cambios:',
          items: [
            'Corregido un fallo crítico al iniciar (Minecraft 1.20.1).',
            'Mejoradas la compatibilidad y la estabilidad del mod.'
          ]
        }],
        de: [{
          type: 'fix',
          heading: 'Änderungen:',
          items: [
            'Ein kritischer Absturz beim Start wurde behoben (Minecraft 1.20.1).',
            'Kompatibilität und Stabilität der Mod wurden verbessert.'
          ]
        }],
        ja: [{
          type: 'fix',
          heading: '変更:',
          items: [
            '起動時に発生する重大なクラッシュを修正しました (Minecraft 1.20.1)。',
            'Mod の互換性と安定性を改善しました。'
          ]
        }],
        ko: [{
          type: 'fix',
          heading: '변경 사항:',
          items: [
            '시작 시 발생하던 치명적인 충돌을 수정했습니다 (Minecraft 1.20.1).',
            '모드 호환성과 안정성을 개선했습니다.'
          ]
        }],
        'pt-br': [{
          type: 'fix',
          heading: 'Alterações:',
          items: [
            'Corrigida uma falha crítica na inicialização (Minecraft 1.20.1).',
            'Compatibilidade e estabilidade do mod aprimoradas.'
          ]
        }]
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
          {
            type: 'info',
            heading: '🔧 Sirènes & Lampes configurables :',
            items: [
              '⚙️ Blocs de sirènes et lampes entièrement configurables',
              '🔊 Volume du son réglable',
              '📏 Rayon du son réglable',
              '🔁 Boucle sonore optionnelle',
              '💡 Modes de lumière : On / Clignotant',
              '⚡ Vitesse de clignotement réglable',
              '🌟 Intensité lumineuse réglable (0-15)'
            ]
          },
          {
            type: 'info',
            heading: '🎨 Variantes de couleurs multiples :',
            items: [
              '🖌️ Plusieurs sirènes et lampes colorées',
              '🧱 Chaque couleur a son propre bloc et texture',
              '🧪 Les recettes utilisent le verre coloré correspondant'
            ]
          },
          {
            type: 'info',
            heading: '🖥️ Configuration en jeu :',
            items: [
              '🖱️ Interface graphique facile à utiliser en jeu',
              '💾 Les paramètres sont sauvegardés par bloc',
              '⚡ Retour visuel et sonore instantané lors du changement des valeurs'
            ]
          }
        ],
        en: [
          {
            type: 'info',
            heading: '🔧 Configurable Sirens & Lamps:',
            items: [
              '⚙️ Fully configurable siren and lamp blocks',
              '🔊 Adjustable sound volume',
              '📏 Adjustable sound radius',
              '🔁 Optional sound loop',
              '💡 Light modes: On / Blinking',
              '⚡ Adjustable blink speed',
              '🌟 Adjustable light intensity (0-15)'
            ]
          },
          {
            type: 'info',
            heading: '🎨 Multiple Color Variants:',
            items: [
              '🖌️ Multiple colored sirens and lamps',
              '🧱 Each color has its own block & texture',
              '🧪 Recipes use matching colored glass'
            ]
          },
          {
            type: 'info',
            heading: '🖥️ In-Game Configuration:',
            items: [
              '🖱️ Easy-to-use in-game GUI',
              '💾 Settings are saved per block',
              '⚡ Instant visual and sound feedback when changing values'
            ]
          }
        ],
        it: [
          {
            type: 'info',
            heading: '🔧 Sirene e lampade configurabili:',
            items: [
              '⚙️ Blocchi di sirene e lampade completamente configurabili',
              '🔊 Volume del suono regolabile',
              '📏 Raggio del suono regolabile',
              '🔁 Ripetizione del suono opzionale',
              '💡 Modalità luminose: accesa / lampeggiante',
              '⚡ Velocità di lampeggiamento regolabile',
              '🌟 Intensità luminosa regolabile (0-15)'
            ]
          },
          {
            type: 'info',
            heading: '🎨 Diverse varianti di colore:',
            items: [
              '🖌️ Sirene e lampade disponibili in diversi colori',
              '🧱 Ogni colore ha il proprio blocco e la propria texture',
              '🧪 Le ricette usano il vetro colorato corrispondente'
            ]
          },
          {
            type: 'info',
            heading: '🖥️ Configurazione nel gioco:',
            items: [
              '🖱️ Interfaccia grafica di gioco facile da usare',
              '💾 Le impostazioni vengono salvate per ogni blocco',
              '⚡ Feedback visivo e sonoro immediato quando si modificano i valori'
            ]
          }
        ],
        es: [
          {
            type: 'info',
            heading: '🔧 Sirenas y lámparas configurables:',
            items: [
              '⚙️ Bloques de sirena y lámpara totalmente configurables',
              '🔊 Volumen del sonido ajustable',
              '📏 Alcance del sonido ajustable',
              '🔁 Repetición opcional del sonido',
              '💡 Modos de luz: encendida / parpadeante',
              '⚡ Velocidad de parpadeo ajustable',
              '🌟 Intensidad de luz ajustable (0-15)'
            ]
          },
          {
            type: 'info',
            heading: '🎨 Varias opciones de color:',
            items: [
              '🖌️ Sirenas y lámparas disponibles en varios colores',
              '🧱 Cada color tiene su propio bloque y textura',
              '🧪 Las recetas utilizan el cristal teñido correspondiente'
            ]
          },
          {
            type: 'info',
            heading: '🖥️ Configuración en el juego:',
            items: [
              '🖱️ Interfaz gráfica del juego fácil de usar',
              '💾 Los ajustes se guardan por bloque',
              '⚡ Respuesta visual y sonora inmediata al cambiar los valores'
            ]
          }
        ],
        de: [
          {
            type: 'info',
            heading: '🔧 Konfigurierbare Sirenen und Lampen:',
            items: [
              '⚙️ Sirenen- und Lampenblöcke vollständig konfigurierbar',
              '🔊 Lautstärke einstellbar',
              '📏 Reichweite des Tons einstellbar',
              '🔁 Optionale Tonschleife',
              '💡 Lichtmodi: Ein / Blinkend',
              '⚡ Blinkgeschwindigkeit einstellbar',
              '🌟 Lichtintensität einstellbar (0-15)'
            ]
          },
          {
            type: 'info',
            heading: '🎨 Verschiedene Farbvarianten:',
            items: [
              '🖌️ Sirenen und Lampen in verschiedenen Farben',
              '🧱 Jede Farbe hat einen eigenen Block und eine eigene Textur',
              '🧪 Rezepte verwenden das passende gefärbte Glas'
            ]
          },
          {
            type: 'info',
            heading: '🖥️ Konfiguration im Spiel:',
            items: [
              '🖱️ Einfach zu bedienende Benutzeroberfläche im Spiel',
              '💾 Einstellungen werden für jeden Block gespeichert',
              '⚡ Sofortige visuelle und akustische Rückmeldung bei Änderungen'
            ]
          }
        ],
        ja: [
          {
            type: 'info',
            heading: '🔧 カスタマイズ可能なサイレンとランプ:',
            items: [
              '⚙️ サイレンとランプのブロックを自由に設定可能',
              '🔊 音量を調整可能',
              '📏 音の範囲を調整可能',
              '🔁 サウンドのループ再生を設定可能',
              '💡 点灯モード: 点灯 / 点滅',
              '⚡ 点滅速度を調整可能',
              '🌟 光の強さを調整可能 (0-15)'
            ]
          },
          {
            type: 'info',
            heading: '🎨 多彩なカラーバリエーション:',
            items: [
              '🖌️ 複数の色のサイレンとランプを追加',
              '🧱 色ごとに専用のブロックとテクスチャを用意',
              '🧪 レシピには対応する色付きガラスを使用'
            ]
          },
          {
            type: 'info',
            heading: '🖥️ ゲーム内設定:',
            items: [
              '🖱️ 使いやすいゲーム内 GUI',
              '💾 設定はブロックごとに保存',
              '⚡ 設定変更時に視覚と音で即座にフィードバック'
            ]
          }
        ],
        ko: [
          {
            type: 'info',
            heading: '🔧 설정 가능한 사이렌 및 램프:',
            items: [
              '⚙️ 사이렌 및 램프 블록을 자유롭게 설정 가능',
              '🔊 소리 크기 조절 가능',
              '📏 소리 범위 조절 가능',
              '🔁 소리 반복 재생 선택 가능',
              '💡 조명 모드: 켜짐 / 깜박임',
              '⚡ 깜박임 속도 조절 가능',
              '🌟 밝기 조절 가능 (0-15)'
            ]
          },
          {
            type: 'info',
            heading: '🎨 다양한 색상 변형:',
            items: [
              '🖌️ 여러 색상의 사이렌과 램프',
              '🧱 색상마다 전용 블록과 텍스처 제공',
              '🧪 각 색상에 맞는 염색 유리를 사용한 제작법'
            ]
          },
          {
            type: 'info',
            heading: '🖥️ 게임 내 설정:',
            items: [
              '🖱️ 사용하기 쉬운 게임 내 GUI',
              '💾 설정은 블록별로 저장',
              '⚡ 값을 변경하면 시각 및 소리로 즉시 피드백'
            ]
          }
        ],
        'pt-br': [
          {
            type: 'info',
            heading: '🔧 Sirenes e lâmpadas configuráveis:',
            items: [
              '⚙️ Blocos de sirenes e lâmpadas totalmente configuráveis',
              '🔊 Volume do som ajustável',
              '📏 Alcance do som ajustável',
              '🔁 Repetição opcional do som',
              '💡 Modos de luz: ligado / piscando',
              '⚡ Velocidade de piscada ajustável',
              '🌟 Intensidade da luz ajustável (0-15)'
            ]
          },
          {
            type: 'info',
            heading: '🎨 Várias opções de cores:',
            items: [
              '🖌️ Sirenes e lâmpadas em várias cores',
              '🧱 Cada cor tem seu próprio bloco e textura',
              '🧪 As receitas usam o vidro tingido correspondente'
            ]
          },
          {
            type: 'info',
            heading: '🖥️ Configuração dentro do jogo:',
            items: [
              '🖱️ Interface gráfica fácil de usar dentro do jogo',
              '💾 As configurações são salvas por bloco',
              '⚡ Feedback visual e sonoro instantâneo ao alterar os valores'
            ]
          }
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
        fr: [
          {
            type: 'info',
            heading: 'Première version :',
            items: [
              'Ajoute toutes les potions avec une durée de 15 minutes, 30 minutes ou 1 heure. Certaines potions peuvent avoir une durée plus courte selon l’effet indiqué.',
              'Les potions ayant les effets Chance, Infestation, Suintement, Tissage, Charge de vent, Guérison ou Dégâts instantanés ne sont pas proposées avec une durée prolongée.',
              'Les potions renforcées, comme Lenteur IV, n’ont pas encore de durée augmentée, mais cela pourrait changer dans une future version.'
            ]
          }
        ],
        en: [
          {
            type: 'info',
            heading: 'First release:',
            items: [
              'Adds all potions with durations of 15 minutes, 30 minutes, or 1 hour. Some potions may have a shorter duration depending on the effect.',
              'Potions with the Luck, Infestation, Oozing, Weaving, Wind Charged, Healing, or Instant Damage effects are not available with extended durations.',
              'Upgraded potions such as Slowness IV do not have extended durations yet, but this may change in a future version.'
            ]
          }
        ],
        it: [
          {
            type: 'info',
            heading: 'Prima versione:',
            items: [
              'Aggiunge tutte le pozioni con una durata di 15 minuti, 30 minuti o 1 ora. Alcune pozioni possono avere una durata inferiore a seconda dell’effetto.',
              'Le pozioni con gli effetti Fortuna, Infestazione, Melma, Tessitura, Carica eolica, Guarigione o Danno istantaneo non sono disponibili con una durata estesa.',
              'Le pozioni potenziate, come Lentezza IV, non hanno ancora una durata estesa, ma potrebbe cambiare in una versione futura.'
            ]
          }
        ],
        es: [
          {
            type: 'info',
            heading: 'Primera versión:',
            items: [
              'Añade todas las pociones con una duración de 15 minutos, 30 minutos o 1 hora. Algunas pociones pueden durar menos según el efecto.',
              'Las pociones con los efectos Suerte, Infestado, Supuración, Tejido, Carga eólica, Curación o Daño instantáneo no están disponibles con duración ampliada.',
              'Las pociones mejoradas, como Lentitud IV, todavía no tienen una duración ampliada, pero esto podría cambiar en una versión futura.'
            ]
          }
        ],
        de: [
          {
            type: 'info',
            heading: 'Erste Version:',
            items: [
              'Fügt alle Tränke mit einer Dauer von 15 Minuten, 30 Minuten oder 1 Stunde hinzu. Einige Tränke können je nach Effekt eine kürzere Dauer haben.',
              'Tränke mit den Effekten Glück, Befall, Schleim, Gespinst, Windladung, Heilung oder Sofortschaden sind nicht mit verlängerter Dauer verfügbar.',
              'Verstärkte Tränke wie Verlangsamung IV haben derzeit noch keine verlängerte Dauer; das könnte sich in einer zukünftigen Version ändern.'
            ]
          }
        ],
        ja: [
          {
            type: 'info',
            heading: '初回リリース:',
            items: [
              'すべてのポーションに15分、30分、または1時間の持続時間を追加します。効果によっては、持続時間が短くなるポーションもあります。',
              '幸運、虫食い、滲出、巣張り、ウィンドチャージ、回復、または即時ダメージの効果を持つポーションは、延長された持続時間の対象外です。',
              '鈍化 IV などの強化ポーションは現時点では持続時間が延長されませんが、今後のバージョンで対応する可能性があります。'
            ]
          }
        ],
        ko: [
          {
            type: 'info',
            heading: '첫 번째 버전:',
            items: [
              '모든 물약에 15분, 30분 또는 1시간 지속 시간을 추가합니다. 효과에 따라 지속 시간이 더 짧은 물약도 있습니다.',
              '행운, 벌레 먹음, 점액화, 거미줄, 돌풍, 치유 또는 즉시 피해 효과가 있는 물약은 연장된 지속 시간을 사용할 수 없습니다.',
              '구속 IV와 같은 강화 물약은 아직 지속 시간이 늘어나지 않지만, 향후 버전에서 지원될 수 있습니다.'
            ]
          }
        ],
        'pt-br': [
          {
            type: 'info',
            heading: 'Primeira versão:',
            items: [
              'Adiciona durações de 15 minutos, 30 minutos ou 1 hora para todas as poções. Algumas poções podem ter uma duração menor dependendo do efeito.',
              'Poções com os efeitos Sorte, Infestação, Exsudação, Tecelagem, Carga de vento, Cura ou Dano instantâneo não estão disponíveis com duração prolongada.',
              'Poções aprimoradas, como Lentidão IV, ainda não têm duração prolongada, mas isso pode mudar em uma versão futura.'
            ]
          }
        ]
      }
    },
    {
      version: '1.0.0',
      date: '2026-10-12',
      loader: 'NeoForge',
      mcVersion: '1.21.1',
      type: 'release',
      changes: {
        fr: [{ type: 'add', heading: 'Ajout :', items: ['Ajout de la prise en charge de Minecraft 1.21.1 uniquement.'] }],
        en: [{ type: 'add', heading: 'Added:', items: ['Added support for Minecraft 1.21.1 only.'] }],
        it: [{ type: 'add', heading: 'Aggiunto:', items: ['Aggiunto il supporto esclusivamente per Minecraft 1.21.1.'] }],
        es: [{ type: 'add', heading: 'Añadido:', items: ['Añadido el soporte únicamente para Minecraft 1.21.1.'] }],
        de: [{ type: 'add', heading: 'Hinzugefügt:', items: ['Unterstützung ausschließlich für Minecraft 1.21.1 hinzugefügt.'] }],
        ja: [{ type: 'add', heading: '追加:', items: ['Minecraft 1.21.1 のみのサポートを追加しました。'] }],
        ko: [{ type: 'add', heading: '추가:', items: ['Minecraft 1.21.1만 지원하도록 추가했습니다.'] }],
        'pt-br': [{ type: 'add', heading: 'Adicionado:', items: ['Adicionado suporte exclusivamente para o Minecraft 1.21.1.'] }]
      }
    },
    {
      version: '1.0.0',
      date: '2026-10-12',
      loader: 'NeoForge',
      mcVersion: '1.21.8',
      type: 'release',
      changes: {
        fr: [{ type: 'add', heading: 'Ajout :', items: ['Ajout de la prise en charge de Minecraft 1.21.8 uniquement.'] }],
        en: [{ type: 'add', heading: 'Added:', items: ['Added support for Minecraft 1.21.8 only.'] }],
        it: [{ type: 'add', heading: 'Aggiunto:', items: ['Aggiunto il supporto esclusivamente per Minecraft 1.21.8.'] }],
        es: [{ type: 'add', heading: 'Añadido:', items: ['Añadido el soporte únicamente para Minecraft 1.21.8.'] }],
        de: [{ type: 'add', heading: 'Hinzugefügt:', items: ['Unterstützung ausschließlich für Minecraft 1.21.8 hinzugefügt.'] }],
        ja: [{ type: 'add', heading: '追加:', items: ['Minecraft 1.21.8 のみのサポートを追加しました。'] }],
        ko: [{ type: 'add', heading: '추가:', items: ['Minecraft 1.21.8만 지원하도록 추가했습니다.'] }],
        'pt-br': [{ type: 'add', heading: 'Adicionado:', items: ['Adicionado suporte exclusivamente para o Minecraft 1.21.8.'] }]
      }
    },
    {
      version: '1.0.0',
      date: '2026-10-12',
      loader: 'NeoForge',
      mcVersion: '26.1.2',
      type: 'release',
      changes: {
        fr: [{ type: 'add', heading: 'Ajout :', items: ['Ajout de la prise en charge de Minecraft 26.1.2 uniquement.'] }],
        en: [{ type: 'add', heading: 'Added:', items: ['Added support for Minecraft 26.1.2 only.'] }],
        it: [{ type: 'add', heading: 'Aggiunto:', items: ['Aggiunto il supporto esclusivamente per Minecraft 26.1.2.'] }],
        es: [{ type: 'add', heading: 'Añadido:', items: ['Añadido el soporte únicamente para Minecraft 26.1.2.'] }],
        de: [{ type: 'add', heading: 'Hinzugefügt:', items: ['Unterstützung ausschließlich für Minecraft 26.1.2 hinzugefügt.'] }],
        ja: [{ type: 'add', heading: '追加:', items: ['Minecraft 26.1.2 のみのサポートを追加しました。'] }],
        ko: [{ type: 'add', heading: '추가:', items: ['Minecraft 26.1.2만 지원하도록 추가했습니다.'] }],
        'pt-br': [{ type: 'add', heading: 'Adicionado:', items: ['Adicionado suporte exclusivamente para o Minecraft 26.1.2.'] }]
      }
    }
  ]
};
