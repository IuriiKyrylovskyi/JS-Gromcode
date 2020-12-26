const sortAsc = arr => (!Array.isArray(arr) ? null : arr.slice().sort((a, b) => a - b));

const sortDesc = arr => (!Array.isArray(arr) ? null : arr.slice().sort((a, b) => b - a));

const array = [1, 200, 3, 4, 5];
console.log(sortAsc(array));
console.log(sortDesc(array));
console.log(array);
