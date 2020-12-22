const unique = array => {
  const newArr = new Set(array);
  const compArr = [...newArr];
  console.log('newArr ', newArr);
  console.log('compArr ', compArr);

  return compArr.length;
};
console.log(
  'unique([1, 4, 1, 2, 5, 6, 7, 8, 3, 4, 8, 8])  ',
  unique([1, 4, 1, 2, 5, 6, 7, 8, 3, 4, 8, 8]),
);
// ===============================
const findUniq = mass => {
  let count = 1;
  for (let i = 0; i < mass.length; i += 1) {
    for (let j = 0; j < mass.length; j += 1) {
      if (mass[i] === mass[j]) {
        mass.splice(j, 1);
      }
    }
    count += 1;
  }
  return count;
};
console.log('findUniq ', findUniq([1, 3, 4, 2, 5, 3, 4, 1, 2]));
// ===================================================
const findUn = mass => {
  // let count = 1;
  const arr = [];
  let unique = true;
  for (let i = 0; i < mass.length; i += 1) {
    for (let j = 0; j < mass.length; j += 1) {
      if (mass[i] === mass[j]) {
        unique = false;
      }
    }
    arr.push(mass[i]);
    // count += 1;
  }
  return arr;
};

console.log('arr ', findUn([1, 3, 4, 2, 5, 3, 4, 1, 2]));

// ===============================================
function uniqueCount(arr) {
  if (!Array.isArray) {
    return null;
  }
  return unique(arr);
}

console.log(
  'uniqueCount([1, 4, 1, 2, 5, 6, 7, 8, 3, 4, 8, 8])  ',
  uniqueCount([1, 4, 1, 2, 5, 6, 7, 8, 3, 4, 8, 8]),
);

function uniqueCount1(arr) {
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
  'uniqueCount1([1, 4, 1, 2, 5, 6, 7, 8, 3, 4, 8, 8])  ',
  uniqueCount1([1, 4, 1, 2, 5, 6, 7, 8, 3, 4, 8, 8]),
);
