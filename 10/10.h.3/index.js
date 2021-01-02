const superRound = (num, round) => [
  Math.floor(num * 10 ** round) / 10 ** round, // Math.pow(10, round),
  Math.round(num * 10 ** round) / 10 ** round, // Math.pow(10, round),
  Math.ceil(num * 10 ** round) / 10 ** round, // Math.pow(10, round),
  Math.trunc(num * 10 ** round) / 10 ** round, // Math.pow(10, round),
  Number(num.toFixed(round)),
];

console.log(superRound(2.58269, 3));
