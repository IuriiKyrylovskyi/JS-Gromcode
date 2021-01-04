// const getTotalRevenue = transactions => {
//   let sum = 0;
//   transactions.forEach(item => {
//     sum += item.amount;
//   });
//   return sum;
// };

const getTotalRevenue = transactions => transactions.reduce((acc, item) => acc + item.amount, 0);

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

console.log(getTotalRevenue(dayTransactions)); // ==> 310
