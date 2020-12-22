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

const getSubArray1 = (array, number) => {
  const newArray = [...array];
  newArray.length = number;
  return newArray;
};

console.log('getSubArray1 ', getSubArray1([11, 4, 8, 3], 2));
console.log('getSubArray1 ', getSubArray1([1, 2, 3, 4, 5], 3));
