function swap(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  const [first, ...rest] = arr;
  return [...rest, first];
}
console.log(swap([5, 12, 25, 100]));



function swapMy(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  let newArr = arr;
  let first = newArr[0];
  newArr.shift();
  newArr.push(first);
  return newArr;
}
console.log(swapMy([5,12,25,100]));


