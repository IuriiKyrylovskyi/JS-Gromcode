let result = 0;

const getMemo = () => {
  function add(num) {
    result += num;
    return result;
  }
  function decrease(num) {
    result -= num;
    return result;
  }
  function reset() {
    result = 0;
    return result;
  }
  return {
    add,
    decrease,
    reset,
  };
};

const plus = getMemo();

console.log(plus.add(5)); // 5
console.log(plus.reset()); // 5
console.log(plus.decrease(5)); // 5
console.log(plus.decrease(-15)); // 5

// // let result = 0;

// const add = num => {
//   getMemo() += num;
//   //   result += num;
// };
// const decrease = num => {
//   result -= num;
// };

// const reset = () => {
//   result = 0;
// };

// add(5);
// console.log(result); // 5
// console.log(getMemo); // 5
// add(5);
// console.log(result); // 10
// console.log(getMemo); // 10
// decrease(7);
// console.log(result); // 3
// console.log(getMemo); // 3
// reset();
// console.log(result); // 0
// decrease(7);
// console.log(result); // 3
// console.log(getMemo); // 3