function removeDuplicates(array) {
  const newAr = new Set(array);
  const uniqyeSet = [...newAr];

  return console.log('uniqyeSet ', uniqyeSet);
}
removeDuplicates([2, 5, 4, 1, 3, 1, 5, 4]);

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

function duplicates(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const newArr = [];
  let uniqueFlag = true;
  for (let i = 0; i < arr.length; i += 1) {
    uniqueFlag = true;
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] === arr[j]) {
        uniqueFlag = false;
      }
    }
    if (uniqueFlag) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log('duplicates ', duplicates([2, 1, 5, 3, 8, 2, 6, 4, 7, 2, 4, 8, 2]));


function uniqueCount(array) {
  let seen = {};
  const out = [];
  let j = 0;
  for (let i = 0; i < array.length; i += 1) {
    const item = array[i];
    if (seen[item] !== 1) {
      seen[item] = 1;
      out[(j += 1)] = item;
    }
  }
  return out;
}
console.log('uniqueCount([1, 4, 1, 8, 3, 4, 8, 8])  ', uniqueCount([1, 4, 1, 8, 3, 4, 8, 8]));
