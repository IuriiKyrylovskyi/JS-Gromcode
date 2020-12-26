const array = [1, 200, 3, 40, 5, 7, 5, 100, 3];

const uniqueCount = arr =>
  !Array.isArray(arr) ? null : arr.filter((el, index) => arr.indexOf(el) === index).length;
console.log(uniqueCount(array));

const uniqueCountViaSet = arr => (!Array.isArray(arr) ? null : [...new Set(arr)].length);
console.log(uniqueCountViaSet(array));

console.log(array);
