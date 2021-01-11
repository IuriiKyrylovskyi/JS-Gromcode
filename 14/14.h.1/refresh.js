let result = 0;

function getMemo() {
  return result;
}
function add(inc) {
  result += inc;
}

function decrease(dec) {
  result -= dec;
}

function reset() {
  result = 0;
}

add(10);
decrease(7);
console.log(getMemo());
reset();
console.log(getMemo());

