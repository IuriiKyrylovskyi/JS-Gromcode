const increaseEventEl = (arr, delta) =>
  !Array.isArray(arr) ? null : arr.map(a => (a % 2 === 0 ? a + delta : a));

const array = [1, 200, 3, 4, 5];
console.log(increaseEventEl(array, 100));
console.log(array);
