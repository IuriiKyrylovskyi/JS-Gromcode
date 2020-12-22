const shift = (arr, index) => {
  const a = arr;
  const b = index;
  const shifted = a[b];
  a[b] = a[b + 1];
  a[b + 1] = shifted;
};

const sortAsc = array => {
  if (!Array.isArray(array)) {
    return null;
  }
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[j] > array[j + 1]) {
        // const shift = array[j];
        // array[j] = array[j + 1];
        // array[j + 1] = shift;
        shift(array, j);
      }
    }
  }
  return array;
};

console.log('sortAsc ', sortAsc([5, 4, 3, 2, 1]));

const sortDesc = array => {
  if (!Array.isArray(array)) {
    return null;
  }
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[j] < array[j + 1]) {
        // const shift = array[j];
        // array[j] = array[j + 1];
        // array[j + 1] = shift;
        shift(array, j);
      }
    }
  }
  return array;
};
console.log('sortDesc ', sortDesc([1, 2, 3, 4, 5]));
