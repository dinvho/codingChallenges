// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s => {
    let newArr = s.split(' ')
    let result = []
    for (let i = 0; i < newArr.length; i++){
      if( newArr[i] !== newArr[i-1]){
        result.push(newArr[i])
      }
    }
    return result.join(' ')
  }