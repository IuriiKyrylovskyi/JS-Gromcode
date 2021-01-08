const getMemoPrivat = () => {
  let result = 0;

  function getMemo() {
    return result;
  }
  function add(num) {
    result += num;
    //  return result;
  }
  function decrease(numUp) {
    result -= numUp;
    //  return result;
  }
  function reset() {
    result = 0;
    //  return result;
  }
  return {
    getMemo,
    add,
    decrease,
    reset,
  };
};

// export default getMemo;
const memo = getMemoPrivat();

// export
const add = memo.add;
// export
const decrease = memo.decrease;
// export
const reset = memo.reset;

console.log(add(5)); // 5
console.log(reset()); // 5
console.log(decrease(5)); // 5
console.log(decrease(-15)); // 5
