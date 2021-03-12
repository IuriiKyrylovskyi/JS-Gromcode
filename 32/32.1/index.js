const getValue = value => Promise.resolve(value);

const asyncNumber1 = getValue(1);
const asyncNumber2 = getValue(undefined);
const asyncNumber3 = getValue('100');

const getSum = numbers =>
  numbers.filter(value => !isNaN(value)).reduce((acc, num) => acc + Number(num), 0);

// export
const asyncSum = (...asyncNumbers) =>
  Promise.all(asyncNumbers)
    .then(numbers => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));

asyncSum(asyncNumber1, Promise.reject(new Error('err')), asyncNumber3).then(result =>
  console.log(result),
);

asyncSum(asyncNumber1, asyncNumber2, asyncNumber3).then(result => console.log(result));
