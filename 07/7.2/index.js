const sortDesc = array => array.slice().sort((a, b) => b - a);

console.log('sortDesc', sortDesc([5, 3, 1, 14, 2, 7, 6]));

const sortNumbers = arr => {
  const newArr = [...arr];

  function compare(a, b) {
    if (a < b) {
      return 1;
    }
    return -1;
  }
  const sortedArr = newArr.sort(compare);
  return sortedArr;
};

console.log('sortNumbers', sortNumbers([5, 3, 1, 14, 2, 7, 6]));
