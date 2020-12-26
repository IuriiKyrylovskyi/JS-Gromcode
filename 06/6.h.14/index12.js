const removeDuplicates = arr =>
  !Array.isArray(arr) ? null : arr.filter((el, index) => arr.indexOf(el) === index);

const array = [1, 200, 3, 40, 5, 7, 5, 100, 3];
console.log(removeDuplicates(array));

const removeDuplicatesViaSet = arr => (!Array.isArray(arr) ? null : [...new Set(arr)]);
console.log(removeDuplicatesViaSet(array));

const removeDuplicatesViaReduce = arr =>
  !Array.isArray(arr)
    ? null
    : arr.reduce((acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]));

console.log(removeDuplicatesViaReduce(array));

console.log(array);
