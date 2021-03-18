// Write Number in Expanded Form - Part 2

// This is version 2 of my 'Write Number in Exanded Form' Kata.

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(1.24); // should return '1 + 2/10 + 4/100'
// expandedForm(7.304); // should return '7 + 3/10 + 4/1000'
// expandedForm(0.04); // should return '4/100'

function expandedForm (num){
    let numArr = num.toString().split('')
    for(let i = 0; i < numArr.length; i++){
        for( let j = 0; j < num.length; j++){
            numArr[i] += '0'
        }
    }
    console.log(numArr)
}

expandedForm(1.234)