const cloneArr = arr => (!Array.isArray(arr) ? null : arr.slice());

const array = [1, 200, 3, 4, 5];
console.log(cloneArr(array));
console.log(array);
