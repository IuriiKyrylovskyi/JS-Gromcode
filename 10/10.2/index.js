const array = [5, -11, 8.25, 24, '7', NaN, null, undefined, 3.98];

const getParsedIntegers = arr => arr.map(a => Number.parseInt(a));
console.log(getParsedIntegers(array));

const getParsedIntegersV2 = arr => arr.map(a => parseInt(a));
console.log(getParsedIntegersV2(array));

const getParsedFloats = arr => arr.map(a => Number.parseFloat(a));
console.log(getParsedFloats(array));

const getParsedFloatsV2 = arr => arr.map(a => parseFloat(a));
console.log(getParsedFloatsV2(array));