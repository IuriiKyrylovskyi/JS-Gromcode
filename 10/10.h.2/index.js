const getRandomNumbers = (length, from, to) => {
  const integer = num => Number.isInteger(num);
  if (!integer) {
    return null;
  }
  const arr = [];
  arr.length = length;
  arr.forEach(el =>
    el = Math.floor(Math.random() * (Math.floor(to) - Math.ceil(from)) + Math.ceil(from));
    arr.push(el));

  return arr
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
