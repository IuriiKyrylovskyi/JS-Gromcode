function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const revArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    revArray.unshift(arr[i]);
  }
  return revArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
