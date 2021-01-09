const getMemoPrivat = () => {
  let result = 0;

  function getMemo() {
    return result;
  }
  function add(num) {
    result += num;
  }
  function decrease(number) {
    result -= number;
  }
  function reset() {
    result = 0;
  }
  return {
    getMemo,
    add,
    decrease,
    reset,
  };
};

// export default getMemoPrivat;
const memo = getMemoPrivat();

console.log(memo.add(5));

// export
const add = memo.add;
// export
const decrease = memo.decrease;
// export
const reset = memo.reset;

console.log(add(10)); // 5
// console.log(add(5)); // 5
// console.log(reset()); // 5
// console.log(decrease(5)); // 5
// console.log(decrease(-15)); // 5
