const reverseString = str =>
  typeof str !== 'string' ? null : str.split('').reverse().join().replace(/,/g, '');

console.log(reverseString('reverseString'));
console.log(typeof reverseString('reverseString'));
