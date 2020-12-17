function reverseArray(arr) {
  if (Array.isArray(arr)) {
    const revArray = [];
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      console.log(arr.length - 1);
      revArray.push(arr[i]);
    }
    return revArray;
  }
  return null;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8]));
