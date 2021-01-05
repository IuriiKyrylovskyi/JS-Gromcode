/* eslint-disable no-restricted-syntax */
export const getAdults = obj => {
  const ADULTAGE = 18;
  const newObj = {};
  for (let key in obj) {
    if (obj[key] >= ADULTAGE) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

// examples
// console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
// console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
