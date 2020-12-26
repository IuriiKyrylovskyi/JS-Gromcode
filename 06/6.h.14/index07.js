const checker = arr => (!Array.isArray(arr) ? null : Math.min(...arr) + Math.max(...arr));

const array = [1, 200, 3, 4, 5];
console.log(checker(array));
console.log(array);
