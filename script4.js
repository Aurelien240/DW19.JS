/*Fonctions


*/
//Création de la fonction
/*function mafonction(){
    alert("Hello World")
}
//Appel
mafonction()*/

/*function mafonction1(){

if (a == 25){
    a=prompt("Choisissez un nombre")
console.log(a)
b=parseInt(a) + 2
console.log(b);
    console.log("L'utilisateur aura 27 ans dans 2 ans")
}
}
mafonction1()*/

//fonction avec paramètres
/*function afficher(prenom){
//description
console.log("Bonjour "+ prenom)
}
//appel
afficher("aurelien")
afficher("nicolas")
afficher("axel")*/
function ecrire(nombre){
    a=prompt("Choisissez un nombre")
    b=parseInt(a) + 2
    console.log(b)
}
ecrire()

function num(nombre){
    if (nombre>0){
        console.log("Le nombre est positif")
    }
    else{
        console.log("Le nombre est négatif")
    }
}

function pair(nombre){
    if{
        ((nombre % 2 ) ==0 )
        console.log("Le nombre est pair")
    }
    else{
        console.log("Le nombre est impair")
    }
}