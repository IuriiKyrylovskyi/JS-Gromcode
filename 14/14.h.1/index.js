let result = 0;
// export
const getMemo = () => result;

// export
const add = num => {
  result += num;
};
// export
const decrease = number => {
  result -= number;
};
// export
const reset = () => {
  result = 0;
};

add(10);
console.log(getMemo());
decrease(3);
reset();
console.log(getMemo());
