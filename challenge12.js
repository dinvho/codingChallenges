// 12) Beginner Series #3 Sum of Numbers
function getSum( a,b )
{
  let array = [];
  if (a < b){
    for (let i = a; i <= b; i++){
      array.push(i);
    }
  } else if (a > b) {
    for (let i = a; i >= b; i--){
      array.push(i)
    }
  } else {
    return a
  }
  return array.reduce((a,b)=> a+b)
}

// or

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}
