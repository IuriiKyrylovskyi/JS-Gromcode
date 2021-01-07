let result = 0;

const add = num => {
  result += num;
};
const decrease = num => {
  result -= num;
};

const reset = () => {
  result = 0;
};

const getMemo = () => result;

add(5);
console.log(result); // 5
console.log(getMemo); // 5
add(5);
console.log(result); // 10
console.log(getMemo); // 10
decrease(7);
console.log(result); // 3
console.log(getMemo); // 3
reset();
console.log(result); // 0
decrease(7);
console.log(result); // 3
console.log(getMemo); // 3
