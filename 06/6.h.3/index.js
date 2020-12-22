let SUMM = 0;
const checkSum = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i += 1) {
    SUMM += arr[i];
    console.log(SUMM);
  }
  if (SUMM <= 100) {
    return false;
  }
  return true;
};

console.log('checkSum', checkSum([1, 2, 3, 100]));

const checkSumArrow = arr =>
  Array.isArray(arr) ? (arr.reduce((a, b) => a + b, 0) > 100 ? true : false) : null;
console.log('Arrow ', checkSumArrow([1, 2, 3, 100]));
