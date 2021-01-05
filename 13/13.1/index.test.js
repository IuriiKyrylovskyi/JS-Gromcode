it('17 is 17', () => {
  expect(17).toEqual(17);
});

it('17 is not 18', () => {
  expect(17).not.toEqual(18);
});

const getEvenNumbers = arr => arr.filter(a => a % 2 === 0);

it('filter array by even numbers', () => {
  expect(getEvenNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
});
