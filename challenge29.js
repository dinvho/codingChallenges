// Write Number in Expanded Form - Part 2

// This is version 2 of my 'Write Number in Exanded Form' Kata.

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(1.24); // should return '1 + 2/10 + 4/100'
// expandedForm(7.304); // should return '7 + 3/10 + 4/1000'
// expandedForm(0.04); // should return '4/100'

function expandedForm(num){
    let numArr = num.toString().split('.')
    let bigNum = numArr[0].toString().split('')
    for(let i = 0; i < bigNum.length; i++){
      for (let j = bigNum.length - i; j > 1; j--){
        bigNum[i] += '0'
      }
    }
    bigNum = bigNum.filter(x=> !x.startsWith(0))
    
    let floatNum = numArr[1].toString().split('').reverse()
    
    for(let i = 0; i < floatNum.length; i++){
            floatNum[i] += '/10'
        for( let j = floatNum.length - i; j > 1; j--){
            floatNum[i] += '0'
        }
    }
    floatNum = floatNum.filter(x => !x.startsWith(0)).reverse()
    let result = [...bigNum,...floatNum]
    return result.join(' + ')
  }
