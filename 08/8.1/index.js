const transformToObject = arr => {
	const obj = {};
	arr.forEach(element => {
		obj[element] = element;
	});
  return obj;
};

// examples
const array = ['a', 17.1, 'John Doe']
console.log(transformToObject(array));
// ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
