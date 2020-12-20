function uniqueCount(arr) {
  if (!Array.isArray) {
    return null;
  }
  let uniqueCounter = 0;
  let uniqueFlag = true;
  for (let i = 0; i < arr.length; i += 1) {
    uniqueFlag = true;
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] === arr[j]) {
        uniqueFlag = false;
      }
    }
    if (uniqueFlag) {
      uniqueCounter += 1;
    }
  }
  return uniqueCounter;
}
console.log(
  'uniqueCount([1, 4, 1, 2, 5, 6, 7, 8, 3, 4, 8, 8])  ',
  uniqueCount([1, 4, 1, 2, 5, 6, 7, 8, 3, 4, 8, 8]),
);



function uniqueCountAll(array) {
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
console.log('uniqueCountAll([1, 4, 1, 8, 3, 4, 8, 8])  ', uniqueCountAll([1, 4, 1, 8, 3, 4, 8, 8]));
