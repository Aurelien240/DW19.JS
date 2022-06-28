/**
*
* 1. RÉCUPÉRER UN OBJET DE LA PAGE HTML
* document
* RECUPERER UN DES CHAMP DE CETTE OBJET
* getElementById("identifiantcorrespondant")
* Modifier le html
* .laproprietehtml = valeur // on affecte une valeur à cette propriété
*
*
* Modifier le html d'une div sur l'utilise innerHTML
*/
/*function mafonction(){
    alert("vous avez cliqué sur le boutton ! ");
    document.getElementById("montexte").value="LA VALEUR QUI M INTERESSE  !"
    document.getElementById("monboutton").value="BOUTTON CLIQUE   !"
    document.getElementById("madiv").innerHTML="ma div a ete changé ! "
 }
 
 console.error(document.getElementById("montexte"))
 console.error(document.getElementById("monboutton"))
 console.error(document.getElementById("madiv"))*/
 
 /*function alerte(){
    alert("Bienvenue sur le bouton")
    alert( document.getElementById("boutton").value )
    document.getElementById("madiv").innerHTML="test"
 }*/

 function ecrire(){
    document.getElementById("madiv").innerHTML=document.getElementById("texte").value
 }
 function bouton(){
    
    document.getElementById("madiv").innerHTML=document.getElementById("boutton")
 }