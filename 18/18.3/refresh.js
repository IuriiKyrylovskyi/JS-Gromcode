export function sumOfSquares() {
  return [].reduce.apply(arguments, [
    function (sum, num) {
      return sum + num * num;
    },
    0,
  ]);
}

// export const sumOfSquares = () => {
//   return [].reduce.apply(arguments, [
//     (sum, num) => {
//       return sum + num * num;
//     },
//     0,
//   ]);
// };

export function sumOfSquaresCall() {
  return [].reduce.call(
    arguments,
    (function (sum, num) {
      return sum + num * num;
    },
    0),
  );
}

export function sumOfSquaresSpred() {
  return [...arguments].reduce((sum, num) => sum + num * num, 0);
}
