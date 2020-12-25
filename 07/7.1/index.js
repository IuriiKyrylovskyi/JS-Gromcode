const getSpecialNumbers = arr => arr.filter(el => el % 3 === 0);

console.log(getSpecialNumbers([3, 5, 8, 6, 9, 1, 2]));

const getSpecials = array => {
  const newSpecials = [];

  function checkSpec(el) {
    if (el % 3 === 0) {
      newSpecials.push(el);
    }
  }
  
  array.forEach(checkSpec);

  return newSpecials;
};

console.log('getSpecials', getSpecials([3, 5, 8, 6, 9, 1, 2]));
