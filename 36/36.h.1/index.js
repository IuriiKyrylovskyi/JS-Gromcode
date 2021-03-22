const getUserData = async userId => {
  const response = await fetch(`https://api.github.com/users/${userId}`);
  try {
    if (response.ok) {
      const userData = await response.json();
      return userData;
    }
  } catch (err) {
    throw err;
  }
};

export const getUserBlogs = fetchedData => {
  const usersData = fetchedData.reduce((acc, user) => {
    // console.log(user);
    // console.log(getUserData(user).then(userData => userData.blog));
    acc.push(getUserData(user).then(userData => userData.blog));
    return acc;
  }, []);
  // console.log(usersData);
  // return usersBlogs;

  return Promise.all(usersData)
    .then(data => data)
    .catch(() => new Error('Failed to load data'))
    .finally(result => result);
};

getUserBlogs(['google', 'facebook', 'git']).then(linkList => console.log(linkList));
// .catch(err => console.log(err.message));
getUserBlogs(['google', 'facebook', 'git', 'home']).then(linkList => console.log(linkList));

// getUserData('facebook').then(el => console.log(el.blog));
