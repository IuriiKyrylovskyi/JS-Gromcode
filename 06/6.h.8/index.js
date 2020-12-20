const arrExample = [11, 2, 3, 4, 5, 6, 100, 7, 8, 9];

function minMaxSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const maxEl = arr.reduce((max, b) => Math.max(max, b));
  const minEl = arr.reduce((min, b) => Math.min(min, b));
  const sum = maxEl + minEl;
  if (sum > 1000) {
    return true;
  }
  return false;
}
console.log('minMaxSum ', minMaxSum(arrExample));

// ========================================================

function minElement(arr1) {
  let minEl = arr1[0];
  for (let i = 1; i < arr1.length; i += 1) {
    if (minEl > arr1[i]) {
      minEl = arr1[i];
    }
  }
  return minEl;
}
console.log('min element', minElement(arrExample));

function maxElement(arr2) {
  let maxEl = arr2[0];
  for (let i = 1; i < arr2.length; i += 1) {
    if (maxEl < arr2[i]) {
      maxEl = arr2[i];
    }
  }
  return maxEl;
}
console.log('max element', maxElement(arrExample));

function checker(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const sum = minElement(array) + maxElement(array);
  console.log(sum);
  if (sum > 1000) {
    return true;
  }
  return false;
}
console.log(checker(arrExample));
