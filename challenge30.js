// function expandedForm (num){
//     let numArr = num.toString().split('').filter(x=> !x.startsWith('.')).reverse()
//     for(let i = 0; i < numArr.length - 1; i++){
//             numArr[i] += '/1'
//         for( let j = numArr.length - i; j > 1; j--){
//             numArr[i] += '0'
//         }
//     }
//     let result = numArr.filter(x => !x.startsWith(0)).reverse()
//     return result.join(' + ')
// }

// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

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