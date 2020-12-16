function checkSum(arr) {
  if (Array.isArray(arr)) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
      sum += arr[i];
      console.log(sum);
    }
    if (sum <= 100) {
      return false;
    }
    return true;
  }
  return null;
}

console.log(checkSum([1, 2, 3, 100]));

const checkSumArrow = arr => Array.isArray(arr) ? (arr.reduce((a, b) => a + b, 0) > 100 ? true : false) : null;
console.log('Arrow ', checkSumArrow([1, 2, 3, 100]));
