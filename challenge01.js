// 1
// Create a function that takes 2 positive integers in form of a string as an input,
// and outputs the sum (also as a string):
function sumStr(a,b) {
  let a2 = parseInt(a) || 0;
  let b2 = parseInt(b) || 0;
  let total = parseInt(a2)+parseInt(b2);
  return total.toString();
}
