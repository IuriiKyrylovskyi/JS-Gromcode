const splitString = (line, num = 10) => {
  if (typeof line !== 'string') {
    return null;
  }
  const dividedLine = [];
  let startPoint = 0;
  while (line) {
    const subline = line.substr(startPoint, num);
    if (subline.length === 0) {
      break;
    }
    dividedLine.push(subline);
    startPoint += num;
  }
  dividedLine[dividedLine.length - 1] = dividedLine[dividedLine.length - 1].padEnd(num, '.');

  return dividedLine;
};

const info =
  'Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.';

const info2 = 5;

console.log(splitString(info, 15));
console.log(splitString(info, 25));
console.log(splitString(info2, 4));
