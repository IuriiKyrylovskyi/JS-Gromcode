const reverseArray = arr => (!Array.isArray(arr) ? null : arr.slice().reverse());

const array = [1, 200, 3, 4, 5];
console.log(reverseArray(array));
console.log(array);
