const getSubArray = (arr, numberOfElements) => {
  const newArr = [];
  for (let i = 0; i < numberOfElements; i += 1) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
  return newArr;
};
getSubArray([11, 4, 8, 3], 2);
getSubArray([1, 2, 3, 4, 5], 3);
