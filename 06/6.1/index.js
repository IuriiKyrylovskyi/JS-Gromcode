function getArrayBounds(arr) {
  if (Array.isArray(arr)) {
    return [arr.length, arr[0], arr[arr.length -1]];
  } else {
    return null;
  }
}

let getArrayBoundsArrow = arr => Array.isArray(arr) ? [arr.length, arr[0], arr[arr.length - 1]] : null;

console.log(getArrayBounds([2,3,4,5,8,9,10,15,8]));
console.log(getArrayBoundsArrow(5));
