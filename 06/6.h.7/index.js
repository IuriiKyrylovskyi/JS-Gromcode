function cloneArr(arr) {
  if (Array.isArray(arr)) {
    const cloneArray = [...arr];
    return cloneArray;
  }
  return null
}
console.log(cloneArr([1, 2, 3, 4, 5, 6, 7, 8]));


function cloneArrSlice(arr) {
  if (Array.isArray(arr)) {
    const cloneArray = arr.slice();
    return cloneArray;
  }
  return null;
}
console.log(cloneArrSlice([1, 2, 3, 4, 5, 6, 7, 8]));


function cloneArrConcat(arr) {
  if (Array.isArray(arr)) {
    const cloneArray = arr.concat();
    return cloneArray;
  }
  return null;
}
console.log(cloneArrConcat([1, 2, 3, 4, 5, 6, 7, 8]));
