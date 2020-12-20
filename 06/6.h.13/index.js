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
  const newArr = [...new Set(array.map(x => x))];
  return newArr;
}
console.log(removeDuplicatesMap([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7]));
