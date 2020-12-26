const removeDuplicates = arr =>
  !Array.isArray(arr) ? null : arr.filter((el, index) => arr.indexOf(el) === index);

const array = [1, 200, 3, 40, 5, 7, 5, 100, 3];
console.log('removeDuplicates ', removeDuplicates(array));

const removeDuplicatesViaSet = arr => (!Array.isArray(arr) ? null : [...new Set(arr)]);
console.log('removeDuplicatesViaSet ', removeDuplicatesViaSet(array));

console.log(array);
