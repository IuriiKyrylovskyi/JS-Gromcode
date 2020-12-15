function getArrayBounds(arr) {
  if (Array.isArray) {
    return [arr.length, arr[0], arr[arr.length -1]];
  } else {
    return null;
  }
}

let getArrayBoundsArrow = arr => Array.isArray ? [arr.length, arr[0], arr[arr.length - 1]] : null;

console.log(getArrayBounds([1,5,10,5,9,48,45,6]));
console.log(getArrayBoundsArrow([1,5,10,5,9,48,45,6]));
