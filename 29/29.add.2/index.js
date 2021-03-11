const MAX_RANDOM_NUMBER = 3;

// export
const requestUserData = (userId, callback) => {
  const timeout = Math.floor(Math.random() * Math.floor(MAX_RANDOM_NUMBER));

  setTimeout(() => {
    if (userId === 'broken') {
      callback(null, 'Failed to load user data');
      return;
    }

    const user = {};
    user.userId = userId;
    user.email = `${user.userId}@example.com`;

    callback(user);
  }, timeout * 1000);
};

const callback = (user, error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('user', user);
  user;
};

const id = 'user111';
// const id = 'broken';
// const newUser = requestUserData(id, callback);
// console.log(newUser);
requestUserData(id, callback);
// const timeout = Math.floor(Math.random() * Math.floor(MAX_RANDOM_NUMBER));
// const timeout1 = Math.floor(Math.random() * Math.floor(MAX_RANDOM_NUMBER));
// const timeout2 = Math.floor(Math.random() * Math.floor(MAX_RANDOM_NUMBER));
// console.log(timeout);
// console.log(timeout1);
// console.log(timeout2);
// console.log(Math.floor(MAX_RANDOM_NUMBER));
