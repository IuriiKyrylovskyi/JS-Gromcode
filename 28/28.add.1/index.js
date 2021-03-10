// export
const maxFibonacci = num => {
  let one = 0;
  let two = 1;
  let current = one + two;

  for (; current <= num; current = one + two) {
    one = two;
    two = current;
  }
  return two;
};

console.log(maxFibonacci(25));

// // export
// const maxFibonacci = num => {
//   let one = 0;
//   let two = 1;
//   for (let i = 1; i <= num; i++) {
//     let current = one + two;
//     one = two;
//     two = current;
//     // console.log(current);
//     if (current > num) {
//       return one;
//     }
//   }
// };

// console.log(maxFibonacci(15));
