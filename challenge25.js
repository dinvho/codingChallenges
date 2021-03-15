// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.
//
// A subarray is a contiguous subsequence of the array.
//
// Return the sum of all odd-length subarrays of arr.


var sumOddLengthSubarrays = function(arr) {
    let subarray = []
  for(let i = 0; i<arr.length; i++){
    for(let j = i;j<arr.length; j++){
      subarray.push(arr.slice(i,j+1))
    }
  }
  let sum = 0;
  for(let i =0; i<subarray.length;i++){
    let ar = subarray[i]
    if(ar.length%2==1){
      for(let j =0;j<ar.length;j++){
        sum+=ar[j]
      }
    }
  }
  return sum
};
