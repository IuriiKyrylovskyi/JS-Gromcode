const arrAverage = arr =>
  !Array.isArray ? null : arr.reduce((acc, item) => acc + item) / arr.length;

const array = [2, 5, 6, 3, 0, 3, -1, 6];
const array2 = [2, 5, 6, 3];
console.log(arrAverage(array));
console.log(arrAverage(array2));
