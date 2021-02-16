//10) BigToSmall kyu8
function bigToSmall(arr){
  let newArray = [];
  for (let i = 0; i <= arr.length-1; i++){
    newArray= newArray.concat(arr[i])
  }
  newArray.sort((a,b)=> b - a)
  newArray = newArray.join('>')
  return newArray
}
