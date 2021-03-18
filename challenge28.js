// Write Number in Expanded Form
// ex. expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
    let numArr = num.toString().split('')
    for (let i = 0; i<numArr.length; i++){
      for (let j = numArr.length - i; j > 1; j--){
        numArr[i] += '0'
      }
    }
   let result = numArr.filter( x => !x.startsWith(0))
   return result.join(' + ')
  }