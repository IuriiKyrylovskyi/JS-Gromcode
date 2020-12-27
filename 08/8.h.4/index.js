// eslint-disable no-restricted-syntax

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */
// const includes = param => {
//   let item = 0;
//   for (let i = 0; i < param.length; i += 1) {
//     item = param[i];
//     console.log(item);
//   }
// };
// console.log(includes(['a', 'c', 'd', 'hex']));

const pickProps = (obj, props) => {
  const askedObj = {};
  for (let key in obj) {
    if (obj[key] == props.includes(key)) {
      askedObj[key] = obj[key];
    }
  }
  return askedObj;
};

// examples
console.log('pickProps', pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
console.log('pickProps', pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }
