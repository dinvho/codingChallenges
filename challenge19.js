// function queueTime(customers, n) {
//   //TODO
//   if(customers.length < 1){
//     return 0;
//   } else {
//       let customersWaitTime = customers.reduce((a,b)=> a+b)
//       if( customersWaitTime/n < 1){
//         return customers.length/1
//       } else {
//         return customersWaitTime/n
//       }
//   }
// }

// The supermarket que kyu 6
function queueTime(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;

  }
  return Math.max(...w);
}
