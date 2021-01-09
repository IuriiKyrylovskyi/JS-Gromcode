// export
const createCalculator = () => {
  let result = 0;
  function getMemo() {
    return result;
  }
  function add(inc) {
    result += inc;
  }
  function decrease(dec) {
    result -= dec;
  }
  function reset() {
    result = 0;
  }
  return { getMemo, add, decrease, reset };
};

const calculator1 = createCalculator();
const calculator2 = createCalculator();

calculator1.add(10);
console.log(calculator1.getMemo());
calculator1.reset();
console.log(calculator1.getMemo());
calculator1.decrease(5);
calculator1.decrease(-7);
console.log(calculator1.getMemo());

console.log('==============');

calculator2.add(100);
console.log(calculator2.getMemo());
calculator2.reset();
console.log(calculator2.getMemo());
calculator2.decrease(50);
calculator2.decrease(-70);
console.log(calculator2.getMemo());
