// eslint-disable no-restricted-syntax

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

const pickProps = (obj, props) => {
  const askedObj = {};
  for (let key in obj) {
    if (props.includes(key)) {
      askedObj[key] = obj[key];
    }
  }
  return askedObj;
};

// examples
console.log('pickProps', pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
console.log('pickProps', pickProps({ a: 1, b: 2, c: 3, hex: 5 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }
