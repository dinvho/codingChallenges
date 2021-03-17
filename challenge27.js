// Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.
//
// You have to validate input:
//
// v can be anything (primitive or otherwise)
//
// if v is ommited, fill the array with undefined
//
// if n is 0, return an empty array
//
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
//
// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

// function prefill(n, v) {
//   // length of array is define by n. Parse in n as integer.
//   let numLength = parseInt(n);
//   // throwing a TypeError if n is NaN, n is a float number, or n is less than 0
//   if(Number.isNaN(numLength) || n %1 !== 0|| numLength < 0){
//     throw new TypeError(`${n} is invalid`)
//   // return empty array if n is 0
//   } else if ( numLength === 0){
//     return [];
//   }
//   // fill the array with v if all conditions passed
//   return new Array(numLength).fill(v)
// }

// n is the length of the array that will have the v as the value of each item
// Try to do it without using a loop
// for ex. function prefill(3, 1) // [1,1,1]
// immediately, create new array with lenght of 3 and fill the item with the value of 1.

// // create new array with n as length
// let arr = new Array(n)
// // fill it with v as value for each item
// arr.fill(v)

// // there are conditions we need to watch out for
// // first, v can be anything. So number or string or float or random thing.

// // secondly, n could be in Number or String format. Therefore, need to ParseInt(n) get integer value only.
//  let lengthNumber = parseInt(n)
// // V is ommitted, item filled array is undefined. if all conditions are passed and v is ommited, the items will be filled with empty value, undefiend.

// // if n is 0 return empty array.
// if( lengthNumber === 0){
//   return []
// }
// // throw TypeError if n is not a number or number in formatted string.
// if(Number.NaN(lengthNumber) || lengthNumber % 1 != 0 || lengthNumber < 0){
//   throw new TypeError(`${n} is invalid`)
// }
// //if everything all conditions are validated
// return new Array(n).fill(v)

function prefill(n, v){
  let lengthNumber = parseInt(n)
  if (n === 0){
    return []
  }
  if(Number.isNaN(lengthNumber) || lengthNumber %1 != 0 || lengthNumber < 0){
    throw new TypeError (`${n} is invalid`)
  } 
  return new Array(lengthNumber).fill(v)
}

prefill(5, 'hi')