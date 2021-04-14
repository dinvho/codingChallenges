// Two Number Sum
// Algoexpert easy #1

// solultion

function twoNumberSum(array, targetSum) {
    // Write your code here.
      let result = []
      if (array.length === 1){
          return []
      } else {
          for (let i = 0; i < array.length; i++){
              for (let j = i+1; j < array.length; j++) {
              if (array[j]===(targetSum-array[i])) {
                  result.push(array[i], array[j])
              }
          }
      }
      }
      return result
      }