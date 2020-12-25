const squareArray = array => (!Array.isArray(array) ? null : array.map(a => a * a));

const arr = [1, 2, 3, 4, 5];
console.log(squareArray(arr));
console.log(arr);
