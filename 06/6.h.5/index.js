const increaseEvenEl = (arr, delta) => {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] % 2 === 0) {
        console.log(arr[i]);
        arr[i] += delta;
      }
    }
    console.log(arr);
    return arr;
  }
  return null;
};

// example 1:

// input
const arr = [2, 5, 6, 8, 11, 9, 4];
const delta = 20;
increaseEvenEl(arr, delta);

// output
// [22, 5, 26, 28, 11, 9, 24]
