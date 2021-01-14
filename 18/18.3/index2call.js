// export
function sumOfSquares() {
  return [].reduce.call(
    arguments,
    (sum, arg) => {
      return sum + arg * arg;
    },
    0,
  );
}

console.log(sumOfSquares(1, 2, 3, 4));
