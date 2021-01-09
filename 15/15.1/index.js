/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
// export
const makeCounter = () => {
  let count = 0;
  return function countFunc() {
    return count++; // count+=1 -- wrong behavour!
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1()); // 0
console.log(counter1()); // 1
console.log(counter2()); // 0
console.log(counter1()); // 2
console.log(counter2()); // 1
