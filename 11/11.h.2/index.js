const countOccurrences = (text, str) => {
  if (str === '') {
    return null;
  }
  let matched = text.match(str);
  return matched.length;
};

const string = 'I am learning JavaScript not Java.';
const re = /Java/gi;
// const re = '';

console.log(typeof re);
console.log(countOccurrences(string, re));
