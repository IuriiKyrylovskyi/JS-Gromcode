const multiRound = num => [
  Math.floor(num).toFixed(2),
  Math.round(num).toFixed(2),
  Math.ceil(num).toFixed(2),
  Math.trunc(num).toFixed(2),
  num.toFixed(2),
];

console.log(multiRound(5.284697));
