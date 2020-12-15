function compareSums(a, b, c, d) {
  if (sum(a, b) > sum(c, d)) {
    return true;
  } else {
    return false;
  }
}

const compareSumsArrow = (a, b, c, d) => sum(a, b) > sum(c, d) ? true : false;

function sum(from, to) {
  let sum = 0;
  for (let i = from; i <= to; i++){
    sum += i;
    // console.log(sum);
  }
  return sum;
}
console.log(compareSums(5,20,6,110));
console.log(compareSumsArrow(5,20,6,11));
console.log(typeof sum());