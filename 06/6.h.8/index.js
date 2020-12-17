const arr = [11, 2, 3, 4, 5, 6, 100, 7, 8, 9];

function minMaxSum(arr) {
  if (Array.isArray(arr)) {
    const maxEl = arr.reduce((max, b) => Math.max(max, b));
    const minEl = arr.reduce((min, b) => Math.min(min, b));
    const sum = maxEl + minEl;
    if (sum > 1000) {
      return true;
    }
    return false;
  }
  return null;
}
console.log('minMaxSum ', minMaxSum(arr));

//========================================================

function minElement(arr) {
  let minEl = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (minEl > arr[i]) {
      minEl = arr[i];
    }
  }
  return minEl;
}
console.log('min element', minElement(arr));

function maxElement(arr) {
  let maxEl = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (maxEl < arr[i]) {
      maxEl = arr[i];
    }
  }
  return maxEl;
}
console.log('max element', maxElement(arr));

function checker(arr) {
  if (Array.isArray(arr)) {
    const sum = minElement(arr) + maxElement(arr);
    console.log(sum);
    if (sum > 1000) {
      return true;
    }
    return false;
  }
  return null;
}
console.log(checker(arr));
