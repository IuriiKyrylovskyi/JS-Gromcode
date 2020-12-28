const copyObj = obj => Object.assign({}, obj);

const obj = { 'John Doe': 19, Tom: 17, Bob: 18 };
const copyObjSpred = { ...obj };

console.log(copyObj({ 'John Doe': 19, Tom: 17, Bob: 18 }));
console.log(copyObjSpred);
console.log(obj == copyObjSpred);
console.log(obj == copyObj);
