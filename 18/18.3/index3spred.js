// export
function sumOfSquares() {
  return [...arguments].reduce((sum, arg) => sum + arg * arg, 0);
}

console.log(sumOfSquares(1, 2, 3, 4));
