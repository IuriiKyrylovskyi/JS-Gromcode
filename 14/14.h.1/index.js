let result = 0;
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

// export	default getMemo;
add(10);
console.log(getMemo());
decrease(3);
reset();
console.log(getMemo());
