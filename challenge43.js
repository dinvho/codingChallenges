// Are they the same? Codewar 6 kyu

function comp(a1, a2){
    // check if elements in array 2 is the product of the squared of the elements in array 1
    
    // loop through the arrays
    
    // have a conditionals to check. Return false if a1 does not equal to a2.

    // if a1 is null or undefined then return false;
    
  //   let array1Product = array1.sort((a,b)=> a - b).map( num => num**2)
  //   let array2Product = array2.sort((a,b)=> a -b)
  //   for (let i = 0; i< array1.length; i++){
  //     if( array1Product[i] !== array2Product[i]){
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
    if (!a1 || !a2 || a1.length !== a2.length) return false;
    console.log(a1.map(x => x * x).sort().toString())
    return a1.map(x => x * x).sort().toString() === a2.sort().toString();
  }