// Codewar kyu 7 Find High to low of a list of number given in a string form

function highAndLow(numbers){
    let arrayNum = numbers.split(' ').map(ele => Number(ele)).sort((a,b)=> b-a)
    let result = [arrayNum[0], arrayNum[arrayNum.length-1]]
    return result.join(' ')
  }