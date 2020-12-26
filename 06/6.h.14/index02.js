const squareArray = arr => (!Array.isArray(arr) ? null : arr.map(n => n * n));

const array = [1, 2, 3, 4, 5];
console.log(squareArray(array));
