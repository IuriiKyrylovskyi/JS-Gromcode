const increaseEvenEl = (arr, delta) => (!Array.isArray(arr) ? null : arr.map(a => a + delta));
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const array = 2;
console.log(increaseEvenEl(array, 20));
