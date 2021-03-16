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

function prefill(n, v) {
  // length of array is define by n. Parse in n as integer.
  let numLength = parseInt(n);
  // throwing a TypeError if n is NaN, n is a float number, or n is less than 0
  if(Number.isNaN(numLength) || n %1 !== 0|| numLength < 0){
    throw new TypeError(`${n} is invalid`)
  // return empty array if n is 0
  } else if ( numLength === 0){
    return [];
  }
  // fill the array with v if all conditions passed
  return new Array(numLength).fill(v)
}
