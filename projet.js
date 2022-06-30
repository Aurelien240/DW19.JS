function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   //Utilisation
   //La variable contient un nombre aléatoire compris entre 1 et 10
   var entier = entierAleatoire(1, 100);
   console.log(entier)

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
    tableaux2=[]
    n=entierAleatoire(1, 100)

for (i=0;i<n;i++){
     tableaux2[i]=entierAleatoire(1, 100)
    
}
  return tableaux2
}
console.table(tableal2())


