const includes = (uniquesArray, el) => {
  for (let i = 0; i < uniquesArray.length; i += 1) {
    if (uniquesArray[i] === el) {
      return true;
    }
  }
  return false;
};

const uniqueCount = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const uniqArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (!includes(uniqArr, arr[i])) {
      uniqArr.push(arr[i]);
    }
  }
  return uniqArr;
};

console.log(uniqueCount([1, 2, 3, 4, 5, 2, 1, 5, 4, 3, 2, 1]));

// const uniq = arr => {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = 0; j < arr.length; j += 1) {
//       if (arr[i] === arr[j] && i !== j) {
//         console.log('arr[j]', arr[j]);
//         console.log('for arr[i]', arr[i]);
//         arr.splice(j, 1);
//       }
//       console.log('arr[i]', arr[i]);
//       console.log('arr', arr);
//     }

//     newArr.push(arr[i]);
//   }
//   console.log('uniq newArr', newArr);
//   return newArr;
// };

// // uniq([2, 1, 2, 3, 4, 2, 5, 1, 6, 5, 4, 3, 2, 1, 7]);
// uniq([7, 5, 3, 1, 5, 9, 4, 6, 8, 2, 1, 5, 8, 2, 3, 6, 4, 7]);
