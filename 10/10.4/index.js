const getMaxAbsoluteNumber = arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const absArr = arr.map(a => Math.abs(a));
  return Math.max(...absArr);
};

console.log(getMaxAbsoluteNumber([-7, 3, 1, 45, -200]));
console.log(getMaxAbsoluteNumber([]));
