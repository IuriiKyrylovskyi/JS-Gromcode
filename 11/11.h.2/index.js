const countOccurrences = (text, str) => {
  if (str === '') {
    return null;
  }
  let counter = 0;
  let startPos = 0;
  for (let i = 0; i < text.length; i += 1) {
    if (text.includes(str, startPos)) {
      counter += 1;
      startPos += str.length;
      i = startPos;
    }
  }
  return counter;
  // if (text === undefined) {
  //   return ''.match(Object.assign(str)).length;
  // }
  // return text.match(str).length;
  // str = `/{str}/`
  // return text.match(str).length;
  // return text.search(str);
};

const string = 'I am learning JavaScript not Java Java.';
// const re = /Java/gi;
const re = 'Java';
// const re = '';

console.log(typeof re);
console.log(countOccurrences(string, re));
// console.log(countOccurrences(undefined, re));
