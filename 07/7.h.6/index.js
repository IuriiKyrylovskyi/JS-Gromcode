const sum = arr => (!Array.isArray(arr) ? null : arr.reduce((acc, n) => acc + n));

const array = [2, 5, 6, 3, 0, 3, -1];
console.log(sum(array));
