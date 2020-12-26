const findUniq = arr => {
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[i] === arr[j] && i !== j) {
        arr.splice(j, 1);
      }
    }
    count += 1;
  }
  return count;
};
console.log('findUniq ', findUniq([1, 3, 4, 2, 3, 4, 1, 5, 2]));

// // ==================================================================
// const includes = (uniqArr, el) => {
//   for (let i = 0; i < uniqArr.length; i += 1) {
//     if (uniqArr[i] === el) {
//       uniqArr.splice(el, 1);
//     }
//   }
//   return uniqArr;
// };

// const findUniqArr = arr => {
//   const uniq = [];
//   for (let i = 1; i < arr.length; i += 1) {
//     if (includes(arr, arr[i])) {
//       uniq.push(arr[i]);
//     }
//   }
// };
// console.log('findUniqArr = ', findUniqArr([5, 8, 7, 6, 9, 9, 7, 5]));
// ====================================
const uniqueCount = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const uniqArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[i] === arr[j] && i !== j) {
        arr.splice(j, 1);
      }
    }
    uniqArr.push(arr[i]);
  }
  return uniqArr;
};
console.log('uniqueCount ', uniqueCount([1, 3, 4, 2, 5, 3, 4, 1, 2]));
