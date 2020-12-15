function getSpecialNumbers(m, n) {
  let arr = [];
  for (let i = m; i <= n; i++) {
    if (i % 3 === 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(getSpecialNumbers(5, 100));


