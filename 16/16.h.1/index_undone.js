// ---------------undone ------------------------

/* eslint-disable */
// export
const createArrayOfFunctions = length => {
  if (typeof length !== Number.isInteger && typeof length !== 'undefined') {
    return null;
  }
  return new Array(length).fill().map(
    (a, i) =>
      (a = function () {
        return i;
      }),
  );
};

console.log(createArrayOfFunctions('hi'));
console.log(createArrayOfFunctions());
console.log(createArrayOfFunctions(10.25));
console.log(createArrayOfFunctions(10)[5]());
