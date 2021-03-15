// Please create a function that takes in an array of numbers and returns a new array that only contains odd numbers.

function mathFour (array){
  let newArray = [];
  array.forEach(num => {
    if(num%2 !== 0){
      newArray.push(num)
    }
  })
  return newArray;
}
