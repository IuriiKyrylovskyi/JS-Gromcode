const getRandomNumbers = (length, from, to) => {
  const integer = num => Number.isInteger(num);
  if (!integer || to - from < 1) {
    return null;
  }
  const arr = [];
  for (let i = 0; i < length - 1; i += 1) {
    arr[i] = Math.floor(Math.random() * (Math.floor(to) - Math.ceil(from) + 1) + Math.ceil(from));
    arr.push(arr[i]);
  }
  return arr;
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 1.68)); // ==> null
