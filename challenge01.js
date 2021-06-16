// 1
// Create a function that takes 2 positive integers in form of a string as an input,
// and outputs the sum (also as a string):


function sumStr(a,b){
  let numbOne = parseInt(a) || 0
  let numbTwo = parseInt(b) || 0
  let result = numbOne + numbTwo
  return result.toString()
}