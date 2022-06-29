let tab = [12,13,14,10,12];
console.log(tab[2])
console.table(tab) 


function moyenneindef(tab){
  let result=0
  for (let i=0; i<tab.length ; i++   ){
      result=result+tab[i]
  }
  result=result/tab.length
  return result
}
console.log(moyenneindef([]))
