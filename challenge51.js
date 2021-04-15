// Sorted Square Array
// Algo Expert #3

function sortedSquaredArray(array) {
	// square the num in the array
	// then sort it
  return array.map(num => num*num).sort((a,b)=> a - b);
}