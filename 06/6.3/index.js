function getSpecialNumbers(m, n) {
  const arr = [];
  for (let i = m; i <= n; i+=1) {
    if (i % 3 === 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(getSpecialNumbers(5, 100));


