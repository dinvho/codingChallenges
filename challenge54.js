// function howmuch(m, n) {
//     // m is the total money
//     // b is the cost of boat the person can buy and when they buy 7 they will have 2 money left
//     // c is the cost of car the person can buy and have when they buy 9 they have 1 money left
//     // for boat: m - 7 * b = 2 -> m = 2 + 7 * b -> (m - 2)/7 = b -> m = 2 + 7 * (m-2)/7
//     // for car: m - 9 * c = 1 -> m = 1 + 9 * c
//     let result = []
//     if ( m < n) {
//           for (let i = m; i <= n; i++){
//       let posibility = []
//       for (let j = 0; j <= n; j++){
//         for (let k = 0; k <= n; k++){
//           if ( i === (2 + (7*j)) & i === (1 +(9*k))){
//             posibility.push(`M: ${i}`, `B: ${j}`, `C: ${k}`)
//             result.push(posibility)
//           }
//         }
//       }
//       }
//     } else if ( m > n ){
//       for (let i = m; i >= n; i--){
//         let posibility = []
//       for (let j = 0; j <= m; j++){
//         for (let k = 0; k <= m; k++){
//           if ( i === (2 + (7*j)) & i === (1 +(9*k))){
//             posibility.push(`M: ${i}`, `B: ${j}`, `C: ${k}`)
//             result.push(posibility)
//           }
//         }
//       }
//     }
//     }

//     return result
// }

//more effecient way

function howmuch(m, n) {
    let result = []
    for ( let i = m < n? m : n; i <= (m<n ? n : m); i++){
      let arr = []
      if ((i-2)%7 === 0 && (i-1)%9 === 0){
        let b = (i-2)/7
        let c = (i-1)/9
        arr.push(`M: ${i}`, `B: ${b}`, `C: ${c}`)
        result.push(arr)
      }
    }
  return result
}