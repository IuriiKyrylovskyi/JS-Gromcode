const makeCounter = () => {
  let counter = 0;
  function count() {
    return counter++;
  }
  return count;
};

const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1()); // 0
console.log(counter1()); // 1
console.log(counter2()); // 0
console.log(counter1()); // 2
console.log(counter2()); // 1
