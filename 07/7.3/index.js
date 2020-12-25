const flatArray = arr =>
  arr
    .slice()
    .flat()
    .sort((a, b) => a - b);

const arr = [2, 3, 4, [5, 6, 7, 8], 9, [1]];
console.log(flatArray(arr));
