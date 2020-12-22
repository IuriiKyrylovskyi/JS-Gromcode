function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const newArr = [...arr];
  for (let i = 0; i < arr.length; i += 1) {
    newArr[i] *= newArr[i];
  }
  return newArr;
}
console.log('squareArray ', squareArray([5, 2, 4, 1]));
