// ===== Configuration du wiki =====
// Exemples faciles à copier/coller.
// Chaque entrée a :
//   - id        : identifiant unique
//   - title_fr  : titre en français
//   - title_en  : titre en anglais
//   - content_fr: contenu HTML en français
//   - content_en: contenu HTML en anglais
//   - images    : facultatif, tableau d'images avec description
//
// Pour faire une puce :
//   <ul>
//     <li>Première puce</li>
//     <li>Deuxième puce</li>
//   </ul>
//
// Pour faire une sous-liste numérotée :
//   <ul>
//     <li>Item principal
//       <ol>
//         <li>Sous-item 1</li>
//         <li>Sous-item 2</li>
//       </ol>
//     </li>
//   </ul>
//
// Pour faire un tableau :
//   <table class="mod-info-table">
//     <caption>Nom du tableau</caption>
//     <thead><tr><th>Col1</th><th>Col2</th></tr></thead>
//     <tbody><tr><td>Valeur</td><td>Valeur</td></tr></tbody>
//   </table>
//
// Pour ajouter une image avec description :
//   images: [
//     { src: "nom.jpg", caption_fr: "Légende FR", caption_en: "Caption EN" }
//   ]
//
// Le renderer wiki utilise imgBase + src pour charger l'image dans la modal.

const wikiExamples = {
  simpleList: {
    id: "example-simple-list",
    title_fr: "Exemple de liste",
    title_en: "Example list",
    content_fr: `<ul><li>Premier item</li><li>Deuxième item</li><li>Troisième item</li></ul>`,
    content_en: `<ul><li>First item</li><li>Second item</li><li>Third item</li></ul>`
  },

  noBulletList: {
    id: "example-no-bullet-list",
    title_fr: "Liste sans puce",
    title_en: "No-bullet list",
    content_fr: `<ul class="no-bullet"><li>Note A</li><li>Note B</li></ul>`,
    content_en: `<ul class="no-bullet"><li>Note A</li><li>Note B</li></ul>`
  },

  tableExample: {
    id: "example-table",
    title_fr: "Exemple de tableau",
    title_en: "Table example",
    content_fr: `<table class="mod-info-table"><caption>Statistiques</caption><thead><tr><th>Outil</th><th>Durabilité</th><th>Dégâts</th></tr></thead><tbody><tr><td>Épée</td><td>1561</td><td>7</td></tr><tr><td>Pioche</td><td>1561</td><td>5</td></tr></tbody></table>`,
    content_en: `<table class="mod-info-table"><caption>Stats</caption><thead><tr><th>Tool</th><th>Durability</th><th>Damage</th></tr></thead><tbody><tr><td>Sword</td><td>1561</td><td>7</td></tr><tr><td>Pickaxe</td><td>1561</td><td>5</td></tr></tbody></table>`
  },

  imageWithCaption: {
    id: "example-image-with-caption",
    title_fr: "Image avec légende",
    title_en: "Image with caption",
    content_fr: `<p>Voici une image avec une description :</p>`,
    content_en: `<p>Here is an image with a description:</p>`,
    images: [
      {
        src: "palaapple_recipe.jpg",
        caption_fr: "Recette de la Pomme de Paladium",
        caption_en: "Paladium Apple recipe"
      }
    ]
  },

  imageOnly: {
    id: "example-image-only",
    title_fr: "Image seule",
    title_en: "Image only",
    content_fr: `<p>Une image sans texte supplémentaire :</p>`,
    content_en: `<p>An image without extra text:</p>`,
    images: [
      {
        src: "palaapple_recipe.jpg",
        caption_fr: "Exemple d'image avec description",
        caption_en: "Example image with description"
      }
    ]
  },

  animatedImageExample: {
    id: "example-animated-image",
    title_fr: "Image qui change automatiquement",
    title_en: "Image that changes automatically",
    content_fr: `<p>Exemple d'image animée avec changement toutes les 2 secondes.</p>`,
    content_en: `<p>Example of an image that changes every 2 seconds.</p>`,
    images: [
      {
        src: "texture_example.png",
        frames: [
          { src: "texture_example_1.png" },
          { src: "texture_example_2.png" },
          { src: "texture_example_3.png" }
        ],
        interval: 2000,
        autoplay: true,
        caption_fr: "Changement automatique toutes les 2 secondes (interval en millisecondes)",
        caption_en: "Automatic change every 2 seconds (interval in milliseconds)"
      }
    ]
  },

  animatedAndStaticImagesExample: {
    id: "example-animated-and-static-images",
    title_fr: "Image animée + image fixe",
    title_en: "Animated image + static image",
    content_fr: `<p>Exemple avec une image qui change et une autre image fixe à côté.</p>`,
    content_en: `<p>Example with an image that changes and another fixed image next to it.</p>`,
    images: [
      {
        src: "paladium_ore.png",
        frames: [
          { src: "paladium_ore_v1.png" },
          { src: "paladium_ore_v2.png" }
        ],
        interval: 1500,
        autoplay: true,
        caption_fr: "Minerai qui change toutes les 1,5 seconde",
        caption_en: "Ore that changes every 1.5 seconds"
      },
      {
        src: "paladium_ingot.png",
        caption_fr: "Lingot fixe à côté",
        caption_en: "Fixed ingot next to it"
      }
    ]
  }
};

// La fonction de rendu a été supprimée parce qu'elle n'était pas utilisée.
// Ces exemples sont maintenant uniquement destinés à être copiés et collés.

// Exemple d'utilisation :
// const example = wikiExamples.tableExample;
// const html = example.content_fr; // ou example.content_en
// document.getElementById('target').innerHTML = html;
//
// Exemple d'image avec description :
// const example = wikiExamples.imageWithCaption;
// example.images.forEach(img => {
//   const src = img.src; // le chemin vers l'image
//   const caption = img.caption_fr; // la description FR
// });
