// 6kyu multiplication table
// Your task, is to create NxN multiplication table, of size provided in parameter.
//
// for example, when given size is 3:
//
// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

// Pseudo Code example above
const innerElement = Array(size).fill(1).map((ele, idx) => ele + idx) // [1,1,1] since the first row is increment by 1
// [1,2,3]

multiplicationTable = (size) => {
  const table = []
  for (let i = 1; i <= size; i++ ){
    const innerElements = Array(size).fill(1).map((ele, idx) => (ele + idx)* i) // Most important part here is the multiplication of i
    table.push(innerElements)
  }
  return table;
}

// Best practice from others

multiplicationTable = function(size) {
  var result = [];

  for (var i = 0; i < size; i++) {
    result[i] = [];
    for(var j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }

  return result
}
