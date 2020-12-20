function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const revArray = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    console.log(arr.length - 1);
    revArray.push(arr[i]);
  }
  return revArray;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8]));

function reverseArray2(array) {
  if (!Array.isArray) {
    return null;
  }
  const revArr = [...array];
  for (let i = 0; i < array.length; i += 1) {
    revArr[i] = array[array.length - i - 1];
  }
  return revArr;
}

console.log(reverseArray2([1, 2, 3, 4, 5, 6, 7, 8]));
