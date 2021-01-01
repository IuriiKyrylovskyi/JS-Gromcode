const array = [5, 8.25, 24, '7', NaN, null, undefined, 3.98];

const getFiniteNumbers = arr => arr.filter(a => Number.isFinite(a));
console.log(getFiniteNumbers(array));

const getFiniteNumbersV2 = arr => arr.filter(a => isFinite(a));
console.log(getFiniteNumbersV2(array));

const getNaN = arr => arr.filter(a => Number.isNaN(a));
console.log(getNaN(array));

const getNaNV2 = arr => arr.filter(a => isNaN(a));
console.log(getNaNV2(array));

const getIntegers = arr => arr.filter(a => Number.isInteger(a));
console.log(getIntegers(array));
