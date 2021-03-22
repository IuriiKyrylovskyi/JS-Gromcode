const getUserData = async userId => {
  const response = await fetch(`https://api.1github.com/users/${userId}`);
  try {
    return await response.json();
  } catch (err) {
    // err => err.message
    throw new Error('Failed to load data');
  }
};

const usersNames = givenArr => {
  console.log(givenArr);
  const usersBlogs = givenArr.reduce((acc, user) => {
    console.log(getUserData(user).then(userData => userData.blog));
    return (
      acc +
      getUserData(user)
        .then(userData => userData.blog)
        .catch(err => err.message)
    );
  }, []);
  console.log(usersBlogs);
  return usersBlogs;
};

export const getUserBlogs = usersData =>
  Promise.all(usersData)
    .then(userArr => usersNames(userArr))
    .then(data => data)
    .catch(err => err.message);

// const usersBlogs = getUserDatas.reduce((acc, userDataId) => {
//   console.log(userDataId);
//   console.log(getUserData(userDataId).then(user => user.blog));
//   acc + getUserData(userDataId).then(user => user.blog);
// }, []);
// console.log(usersBlogs);
// // return usersBlogs;

// return Promise.all(usersBlogs)
//   .then(data => data)
//   .catch(err => err.message);

getUserBlogs(['google', 'facebook', 'git']).then(linkList => console.log(linkList));
// getUserBlogs(['google', 'facebook', 'git', 'home']).then(linkList => console.log(linkList));

// getUserData('facebook').then(el => console.log(el.blog));
