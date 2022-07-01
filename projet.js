function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   //Utilisation
   //La variable contient un nombre aléatoire compris entre 1 et 10
   var entier = entierAleatoire(1, 100);
   console.log(entier)


   function maxtab(Tableau){
    let REF_MAX=0
    for (let i=0; i < tab.length; i++){
        if ( Tableau[i] > REF_MAX    )  {  REF_MAX=Tableau[i]   }
    }
    return REF_MAX
 
}

   function aleatoire(n){
      
    return entierAleatoire(1, n)
 }
 console.log(aleatoire(100))

 function  tablal(){
    tableaux=[]
for (i=0;i<11;i++){
     tableaux[i]=entierAleatoire(1, 100)
    
}
  return tableaux
}
console.table(tablal())

function  tableal2(){
    let tableaux2=[]
    let n=entierAleatoire(1, 100)

for (i=0;i<n;i++){
     tableaux2[i]=entierAleatoire(1, 100)
    
}
  return tableaux2
}
console.table(tableal2())


 
// function nbmajeurs(){
//     let toto=tableal2()   // GENERER UN TABLEAU ALEATOIRE AVEC DES NOMBRES 1 ET 100

//     console.table(toto)
//     let tableausup18=new Array();
    
//     // COMPTER LE NOMBRE AGE > 18

//     // parcourir le tableau
//     for(let i=0; i < toto.length; i ++ ) {

//     // SI SUPERIEUR > 18 
        
//          compteur=compteur*1.2
//          tableausup18[compteur]=toto[i]
       
//     }

//     console.log(compteur);
//     console.table(tableausup18)


// }
// nbmajeurs()


/*creer une fonction avec un tableau en parametre
creer le tableau 
creer la condition
creer le renvoi du tableau*/

//exo1
let tableau=['Axel',34,'Robert','etc','Yoel','Paul','Yoel','Paul'];
console.table(tableau);
function lipton(tableau){
    for(let i=0; i < tableau.length; i++){
    
      if(tableau[i] == "Aurelien"){
            return true;
        }
        }
            return false; 
    }
console.log(lipton(tableau))

//exo2
let table=['Axel',34,'Robert','etc','Yoel','Paul','ciseaux','Paul'];
console.table(table)
function tab_car(table){

 for(let i=0; i < table.length; i++){
    if(table[i] == 'ciseaux'){
        return true;    
    }
    }
         return false;
}
console.log(tab_car(table))

//exo3
let table2=['Axel',34,'Robert','etc','Yoel','Paul','ciseaux','Paul'];
console.table(table2)
function tab_car(table2){

 for(let i=0; i < table2.length; i++){
    if(table2[i] == 'ciseaux'){
        return true;    
    }
    }
         return false;
}
console.log(tab_car(table2))
