// 14) multiply and array
function multiply(arr){
  let total = 1;
  for (let i = 0; i < arr.length; i++){
    total = total * arr[i]
  }
  return total;
}

// or use the ES6 reduce functionality
function multiply2(arr){
  return arr.reduce((a,b)=> a*b,0);
}
