const splitText = (string, num = 10) => {
  if (typeof string !== 'string') {
    return null;
  }

  const strArr = [];
  let startPos = 0;

  while (string) {
    const chunk = string.substr(startPos, num);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPos += num;
  }
  return strArr.join('\n');
};

const text =
  'The forEach() method calls a function and iterates over the elements of an array. The forEach() method can also be used on Maps and Sets.';
console.log(splitText(text, 20));
