const getRandomNumbers = (length, from, to) => {
  if (to - from < 1 || isNaN(from) || isNaN(to) || isNaN(length)) {
    return null;
  }
  const randomNumber = () =>
    Math.floor(Math.random() * (Math.floor(to) - Math.ceil(from) + 1) + Math.ceil(from));

  return new Array(length).fill().map(randomNumber);
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 1.68)); // ==> null
console.log(getRandomNumbers(5, 'five', 1.68)); // ==> null
console.log(getRandomNumbers('five', 0.2, 1.68)); // ==> null
console.log(getRandomNumbers(5, 1.68, 'five')); // ==> null
