// Validate Subsequence
// Algo expert easy #2

function isValidSubsequence(array, sequence) {
    // Parameters are the array and sequence, where the sequence is the subsequence of the array.
      // The result will return true or false if the sequence is the subsequence of the array.
      // Example if let array = [1,2,3,4,5] and sequence = [1,3,4] the result would be true
      // However, result is false if sequence is [1,3,2]
      
      // Psuedocode
      // declare an empty array called subsequenceArr
      let subsequenceArr = []
      // loop through the main array
      for (let i = 0; i < array.length; i++){
      // loop through the sequence array
          for (let j = 0; j < sequence.length; j++){
              if ( subsequenceArr.join('') === sequence.join('') || (array[i] === sequence[j] && array[i] === sequence[j+1] )){
                  break
              } else if ( array[i] === sequence[j]) {
                  subsequenceArr.push(array[i])
              }
          }
      }
      // if element of main array matches element in sequence array, push element of main array to the subsequenceArr variable
      // Once the looping is done, compare the subsequenceArr to the sequence array
      // if they are equal, return true else false
      // other cases, if the sequence array length is longer than array then false
      // sequence has the same element across the array
      if (sequence.length > array.length) {
          return false
      } else if (array.slice(0, sequence.length).join('') === sequence.join('')){
          return true
      }else {
          return subsequenceArr.join('') === sequence.join('') ? true : false
      }
  }
  
  
