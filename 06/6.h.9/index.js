function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const newArrayUp = [...array];
  for (let arrEl = 0; arrEl < newArrayUp.length; arrEl += 1) {
    for (let newArrEl = 0; newArrEl < newArrayUp.length; newArrEl += 1) {
      if (newArrayUp[newArrEl] > newArrayUp[newArrEl + 1]) {
        const shiftElement = newArrayUp[newArrEl];
        newArrayUp[newArrEl] = newArrayUp[newArrEl + 1];
        newArrayUp[newArrEl + 1] = shiftElement;

        // console.log(newArrayUp[i]);
        // console.log(newArrayUp[i + 1]);
      }
    }
    // console.log('next loop ', newArrEl);
  }
  return newArrayUp;
}
console.log('newArrayUp', sortAsc([2, 5, 3, 1, 4, 7, 6]));

function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const newArrayDown = [...array];
  for (let arrEl = 0; arrEl < array.length; arrEl += 1) {
    for (let newArrEl = 0; newArrEl < array.length; newArrEl += 1) {
      if (newArrayDown[newArrEl] < newArrayDown[newArrEl + 1]) {
        const shiftElement = newArrayDown[newArrEl + 1];
        newArrayDown[newArrEl + 1] = newArrayDown[newArrEl];
        newArrayDown[newArrEl] = shiftElement;
      }
    }
  }
  return newArrayDown;
}
console.log('newArrayDown', sortDesc([2, 5, 3, 1, 4, 7, 6]));
