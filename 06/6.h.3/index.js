function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map(x => x * x);
}
console.log(squareArray([1, 2, 3, 4, 5, 6, 7]));

const squareArrayArrow = arr => (!Array.isArray(arr) ? null : arr.map(n => n * n));

console.log(squareArrayArrow([1, 2, 3, 4, 5, 6, 7]));
