function includes(arr, n) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === n) {
      return true;
    }
  }
  return false;
}
console.log(includes([1, 4, 8, 3], 3));
console.log(includes([1, 4, 8, 3], 5));
