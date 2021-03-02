// localStorage.setItem('hobbie', JSON.stringify({ name: 'football' }));
// localStorage.setItem('name', 'Tom');
// localStorage.setItem('age', JSON.stringify(17));

export const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};

// console.log(getLocalStorageData());
