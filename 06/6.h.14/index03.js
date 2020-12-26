const checkSum = arr =>
  !Array.isArray(arr) ? null : arr.reduce((acc, n) => acc + n) > 100;

const array = [1, 200, 3, 4, 5];
console.log(checkSum(array));
