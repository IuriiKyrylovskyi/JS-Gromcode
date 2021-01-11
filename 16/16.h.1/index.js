// ---------------undone ------------------------

/* eslint-disable */
// export
const createArrayOfFunctions = length => {
  const array = [];
  array.length = length;
  if (typeof length !== Number.isInteger && typeof length !== 'undefined') {
    return null;
  }
  return array.fill().map(
    (a, i) =>
      function () {
        return i;
      },
  );
};

console.log(createArrayOfFunctions('hi'));
console.log(createArrayOfFunctions());
console.log(createArrayOfFunctions(10.25));
console.log(createArrayOfFunctions(10)[5]());
