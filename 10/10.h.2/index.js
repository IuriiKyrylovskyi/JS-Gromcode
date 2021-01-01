const getRandomNumbers = (length, from, to) => {
  const integer = num => Number.isInteger(num);
  if (!integer) {
    return null;
  }
  const arr
};

// examples
getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
