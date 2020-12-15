function getSum(arr) {
  let sum = 0;
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  } else {
    return null;
  }
}
console.log(getSum([5,5,8,9,10,11,15,8,7]));
