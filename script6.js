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

function maxtab(Tableau){
   let ref_max=0
   for (let i=0; i < tab.length; i++){
      if ( Tableau[i] > ref_max) {ref_max=Tableau[i]}
   }
   return ref_max
}

function tab4(tab){

   min=maxtab;
   for(u=0;u<tab.length;u++){
      if((tab[u])<min){
         min= tab[u]
      }
   }
   return "la valeur min est :"+ min

}
console.info(tab4([12,54,91,67,20]))