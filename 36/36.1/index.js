// window.addEventListener('unhandledrejection', function (err) {
//   console.log('error', err);
// });

export const fetchUser = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) {
      console.log('404');
      return null;
    }
    const userData = await response.json();
    console.log(userData);

    return new Promise((resolve, reject) => {
      if (!userData) {
        console.log(resolve);
        return reject(resolve);
      }

      return resolve(userData);
    });
    // return userData;
  } catch (err) {
    throw new Error('err');
  }
};

fetchUser('facebook')
  .then(userData => userData)
  .catch(err => alert(err.message));

fetchUser('home')
  .then(userData => userData)
  .catch(err => alert(err.message));
// fetchUser('home')
//   .then(data => {
//     data;
//   })
//   .catch(err => alert(err.message));
