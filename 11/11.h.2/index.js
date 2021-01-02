const countOccurrences = (text, str) => {
  if (str === '') {
    return null;
  }
  if (text === undefined) {
    return ''.split(str).length - 1;
  }
  return text.split(str).length - 1;
};

const string = 'I am learning JavaScript not Java Java JavaScript.';
// const string = undefined;
// const re = /Java/gi;
const re = 'Java';
// const re = '';

console.log(typeof re);
console.log(countOccurrences(string, re));
