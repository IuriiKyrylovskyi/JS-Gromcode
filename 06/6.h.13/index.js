function removeDuplicates1(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const newAr = new Set(array);
  const uniqyeSet = [...newAr];

  return console.log('uniqyeSet ', uniqyeSet);
}
removeDuplicates1([2, 5, 4, 1, 3, 1, 5, 4]);

// // +++ explanation +++
// First, we are creating a new Setby passing an array. Because Setonly allows unique values, all duplicates will be removed.
// Now the duplicates are gone, we’re going to convert it back to an array by using the spread operator ...

// // unique
// function arangeArray(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const newArr = [];
//   for (let iter of arr) {
//     if (newArr.indexOf(iter) === -1) {
//       console.log(newArr.indexOf(iter));
//       newArr.push(iter);
//     }
//   }
//   return newArr;
// }
// console.log('arangeArray', arangeArray([3, 6, 2, 5, 4, 5, 1, 1, 2, 3, 4, 7, 6, 5]));

// unique in order
function removeDuplicatesMap(array) {
  const newArr = [...new Set(array)];
  return newArr;
}
console.log(removeDuplicatesMap([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7]));

function duplicates2(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const newArr = [];
  let isUnique = true;
  for (let i = 0; i < arr.length; i += 1) {
    isUnique = true;
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] === arr[j]) {
        isUnique = false;
      }
    }
    if (isUnique) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log('duplicates2 ', duplicates2([2, 1, 5, 3, 8, 2, 6, 4, 7, 2, 4, 8, 2]));

const removeDuplicates = array => {
  if (!Array.isArray(array)) {
    return null;
  }
  const newArr = [...array];
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[j] !== array[j + 1]) {
        // let shift = array[j];
        // array[j] = array[j + 1];
        // array[j + 1] = shift;
        newArr.splice(j, 1);
        console.log('newArr ', newArr);
      }
    }
  }
  return newArr;
};

console.log('removeDuplicates ', removeDuplicates([2, 1, 5, 3, 8, 2, 6, 4, 7, 2, 4, 8, 2]));
