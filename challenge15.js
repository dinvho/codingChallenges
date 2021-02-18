// 15) Kyu 8 find the first none consecutive num in an array;
function firstNonConsecutive (arr) {
  let firstNum = arr[0];
  let lastNum = arr[arr.length-1]
  let newArr = [];
  for (let i = firstNum; i <= lastNum; i++){
    newArr.push(i)
  }
  if(arr.length <= 1){
    return null;
  } else if (newArr.toString()===arr.toString()){
    return null;
  } else{
      for (let i = 0; i < arr.length; i++){
      if(newArr[i] !== arr[i]){
        return arr[i];
      }
    }
  }
}
