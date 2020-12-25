const reverseArray = arr => (!Array.isArray ? null : arr.slice().reverse());

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(reverseArray(array));
