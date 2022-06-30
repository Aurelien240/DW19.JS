// let tab = [12,13,14,10,12];
// console.log(tab[2])
// console.table(tab) 


// function moyenneindef(tab){
//   let result=0
//   for (let i=0; i<tab.length ; i++   ){
//       result=result+tab[i]
//   }
//   result=result/tab.length
//   return result
// }
// console.log(moyenneindef([]))

// function ramenetab(tab){

//     let TEMP=tab[0]
//     tab[0]=tab[1]
//     tab[1]=TEMP

//     return tab
// }
// console.table(ramenetab([234,55,91]))

function comptetab(tableau){
   let compteur=0;
   for (i=0; i<tableau.length;i++){
       compteur=compteur+1 // compteur++
   }
   return compteur
}

function sommetab(tableau){
    let result=0
    for(r=0;r<tab.length;r++){
        result=result+tab[r]
    }
    return result
}

function maxtab(Tableau){
    let REF_MAX=0
    for (let i=0; i < tab.length; i++){
        if ( Tableau[i] > REF_MAX    )  {  REF_MAX=Tableau[i]   }
    }
    return REF_MAX

  
}

function supcinq(Tableau , n ){
   for (let i=0;i<Tableau.length;i++){
      if (Tableau[i]>n) {return Tableau[i]}
   }
}

let tab=[234,45,34,45,99999999999999]
console.log(comptetab(tab))
console.log(sommetab(tab))
console.log(maxtab(tab))
console.log(supcinq(tab))

function positive(nombre , a)

   if (a>0){
       return true
   }
   if (a == 0){
       return true
   }
   if (a<0){
       return false
   }
let nombre=[234]
console.log(positive(n))