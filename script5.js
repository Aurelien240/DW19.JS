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

//  function ecrire(){
//     document.getElementById("madiv").innerHTML=document.getElementById("texte").value
//  }
 
//   // document.getElementById("compteur").addEventListener( "click" , boutton  )

//  function boutton(){
//    compteur=parseInt(document.getElementById("madiv2").innerHTML) + 1
//    document.getElementById("madiv2").innerHTML=compteur
//  }

//  function majeur(){
//    age=parseInt(document.getElementById("age").value)

// if (age>18){
//     console.log("Vous êtes majeur")
// }

// else{
//    console.log("Vous êtes mineur")
// }
// }

// document.getElementById("multiplication_boutton").addEventListener("click", multiplication_fonction)

// function multuplication_fonction(){
//     // 1. RECUPERER CE QUI A DANS L INPUT TEXTE  
//     numero=parseInt(document.getElementById("multiplication_texte").value)
//     console.error(numero)



//     // 2. MODIFIER LA DIV
//     document.getElementById("multiplication_div").innerHTML="Table de " + numero
 
//     // 3. MULTIPLICATION AVEC LA BOUCLE FOR
//     for (i=1;i<10;i++){
//         document.getElementById("multiplication_div").innerHTML+="<br />" + numero+" * "+ i + " = " + (numero * i ) 
//         console.error(i)
//     }
    

// }
/**
 * EXO 1 : LES IF ?
 * EXO 2 : CREEZ UN CHAMP TEXTE, UN BOUTON, UNE DIV 
 * SI J ECRIS DANS LE CHAMPS TEXTE LE NOMBRE 5
 * JE VAIS AVOIR LE RESULTAT 1 + 2 + 3 + 4 + 5 = 
 */
 document.getElementById("SOMME_boutton").addEventListener("click", sommef)
 function sommef(){
     // 1 DE QUOI ON A BESOIN  CHAMP TEXTE
     nb=parseInt(document.getElementById("SOMME_texte").value)
     
 
     if (isNaN(nb)){
       return;
     }
 
     // On affiche dans la div LE NOMBRE DE 5 + 4 + 3 +2 +1 
 
     SOMME=1
 
     for (i=1; i<=nb ; i++    ){
         SOMME=SOMME*i
 
         document.getElementById("SOMME_div").innerHTML+=i+" * "
       
     }
        
     document.getElementById("SOMME_div").innerHTML+= " = " +  SOMME
 
    
 
 }