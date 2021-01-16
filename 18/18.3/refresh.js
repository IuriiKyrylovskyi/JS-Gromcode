export const sumOfSquares = () => {
  return [].reduce.apply(arguments, [
    (sum, num) => {
      return sum + num * num;
    },
    0,
  ]);
};
export const sumOfSquaresCall = () => {
  [].reduce.call(
    arguments,
    ((sum, num) => {
      sum + num * num;
    },
    0),
  );
};

export const sumOfSquaresSpred = () => {
  [...arguments].reduce((sum, num) => sum + num * num, 0);
};
