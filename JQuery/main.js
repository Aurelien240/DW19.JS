// JQuery est une librairie Javascript
// Utilisée pour faciliter la manip du DOM

// Sélectioner des éléments
// ------------------------

// Sélectioner en JS
// const title = document.querySelector ('h1')

// Sélectioner un élément en JQuery
// const title = $('h1')

// Sélectioner des éléments en JQuery
// ATTENTION par défaut JS sélectionne le premier élément qu'il trouve
// $("button") => nous trouve tout les boutons sur notre page HTML

// ------------------------
// Modifier du texte
// ------------------------

// $('h1').text("Bonjour les DW 19 !!");

// ------------------------
// Modifier le HTML
// ------------------------

// $("div").html("Je suis le nouveau contenu HTML");

// ------------------------
// Les template strings
// ------------------------

// 1. Elle vous permet d'écrire du code sur plusieurs lignes (sans faire de concaténation)
// 2. Elle permet d'inclure du JS à l'intérieur d'une string

// const firstname = "Aurélien";

// $("div").html(`
// <h2>Bonjour ${firstname}</h2>
// <h4>les DW 19</h4>
// <p>blablablabla....</p>
// `);

