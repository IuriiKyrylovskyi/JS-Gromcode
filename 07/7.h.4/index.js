const cloneArr = arr => (!Array.isArray(arr) ? null : [...arr]);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const array = 2;
console.log(cloneArr(array));
console.log(array);
