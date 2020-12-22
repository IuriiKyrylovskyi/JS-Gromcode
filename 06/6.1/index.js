function getArrayBounds(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [arr.length, arr[0], arr[arr.length - 1]];
}

function getArrayBounds2(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [arr.length, arr[0], arr[arr.length - 1]];
}

const getArrayBoundsArrow = arr =>
  Array.isArray(arr) ? [arr.length, arr[0], arr[arr.length - 1]] : null;

console.log(getArrayBounds([2, 3, 4, 5, 8, 9, 10, 15, 8]));
console.log(getArrayBounds2([2, 3, 4, 5, 8, 9, 10, 15, 8]));
console.log(getArrayBoundsArrow(5));
