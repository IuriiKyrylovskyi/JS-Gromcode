function getSum(arr) {
  let sum = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i+=1) {
    sum += arr[i];
  }
  return sum;
}
console.log(getSum([5, 5, 8, 9, 10, 11, 15, 8, 7]));
