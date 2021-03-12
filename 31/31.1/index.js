// export
const requestUserData = userId => {
  const p = new Promise((resolved, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 5000);
    } else {
      setTimeout(() => {
        resolved({
          name: 'John',
          age: 17,
          userId,
          email: `${userId}@example.com`,
        });
      }, 1000);
    }
  });
  return p;
};

requestUserData('user111')
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() => console.log('finally'));

requestUserData('broken').catch(error => console.log(error));

requestUserData('user222').finally(() => console.log('finally'));
