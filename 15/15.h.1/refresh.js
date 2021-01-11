const createCalculator = () => {
  let result = 0;

  function add(inc) {
    result += inc;
  }

  function decrease(dec) {
    result -= dec;
  }

  function reset() {
    result = 0;
  }

  function getMemo() {
    return result;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const calculator = createCalculator();
const calculator2 = createCalculator();

calculator.add(8);
console.log(calculator.getMemo());
calculator.decrease(3);
console.log(calculator.getMemo());

calculator2.add(80);
console.log(calculator2.getMemo());
calculator2.decrease(30);
console.log(calculator2.getMemo());
