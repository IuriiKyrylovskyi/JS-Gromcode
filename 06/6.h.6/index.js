function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const cloneArray = [...arr];
  return cloneArray;
}
console.log(cloneArr([1, 2, 3, 4, 5, 6, 7, 8]));

function cloneArrSlice(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const cloneArray = array.slice();
  return cloneArray;
}
console.log(cloneArrSlice([1, 2, 3, 4, 5, 6, 7, 8]));

function cloneArrConcat(arrConc) {
  if (!Array.isArray(arrConc)) {
    return null;
  }
  const cloneArray = arrConc.concat();
  return cloneArray;
}
console.log(cloneArrConcat([1, 2, 3, 4, 5, 6, 7, 8]));
