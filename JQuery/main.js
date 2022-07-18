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


// Correction:
// -------------

// Modifier le background de tous les boutons à l'aide de Vanilla JS:
// const buttons = document.querySelectorAll("button"); // Nous retourne un array
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].style.background = "orange";
// }

// Et à l'aide de jQuery:
// $("button").css("background", "orange");

// ------------------------
// Comment appliquer une class
// ------------------------





// Correction:
// -------------

// A l'aide de Vanilla JS:
// const link = document.querySelector("a");
// link.innerText = "Lien vers Google";
// link.classList.add("d-block");
// link.setAttribute("href", "https://www.google.com");
// link.setAttribute("target", "_blank");

// A l'aide de jQuery:
// $("a")
//   .text("Lien vers Google")
//   .addClass("d-block")
//   .attr("href", "https://www.google.com")
//   .attr("target", "_blank");

// ----------------------------
// LES EVENTS LISTENER
// ----------------------------

// Changer le textde du <h1> en rouge, en cliquant sur le premier bouton:
// Avec Vanilla JS:
// document.querySelector("button").addEventListener("click", () => {
//   document.querySelector("h1").style.color = "red";
// });
// Avec jQuery:
// $("button:first").click(() => {
//   $("h1").css("color", "red");
// });

// Créer une alerte, avec les caractères renseignés dans notre input
// Avec Vanilla JS:
// document.querySelector("form").addEventListener("submit", (evt) => {
//   // On empêche la page de se rafraîchir
//   evt.preventDefault();
//   const value = document.querySelector("input").value;

//   alert(value);
// });

// Avec jQuery:
// $("form").submit((evt) => {
//     evt.preventDefault();
//     // On récupère la valeur grâce à .val()
//     const value = $("input").val();
//     alert(value);
//   });

// ----------------------------
// Exercice 1:
// Lorsque vous allez appuyer sur une touche de votre clavier, affichez cette touche dans notre <h1>
// TIPS:
// 1: Grâce aux events listener (https://api.jquery.com/category/events/)
// 2: Faites un console.log(evt.key)
// 3: Faites votre event listener sur $(document)

// Exercice 2:
// Les touches vont s'ajouter l'unes à l'autres
// ----------------------------

// Correction exercice 1:
// -----------------------
// $(document).keydown((evt) => {
//   $("h1").text(evt.key);
// });

// Correction exercice 2:
// -----------------------
// let value = "";
// $(document).keydown((evt) => {
//   // On fait la concaténation
//   value += evt.key;
//   $("h1").text(value);
// });

