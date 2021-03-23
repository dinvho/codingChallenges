// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
    let numString = x.split('')
    let result = []
    numString.forEach( num => {
      if( parseInt(num)< 5) {
        result.push(0)
      } else {
        result.push(1)
      }
    })
     return (result.join(''))
   }