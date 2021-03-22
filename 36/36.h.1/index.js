const getUserData = async userId => {
  const response = await fetch(`https://api.github.com/users/${userId}`);
  try {
    return await response.json();
  } catch {
    throw new Error('Failed to load data');
  }
};

const usersNames = givenArr => {
  const usersBlogs = givenArr.reduce((acc, userDataId) => {
    console.log(userDataId);
    console.log(getUserData(userDataId).then(user => user.blog));
    acc + getUserData(userDataId).then(user => user.blog);
  }, []);
  console.log(usersBlogs);
  return usersBlogs;
};

export const getUserBlogs = (...getUserDatas) =>
  Promise.all(getUserDatas)
    .then(userArr => usersNames(userArr))
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

console.log(typeof getUserBlogs);
getUserBlogs(['google', 'facebook', 'git']);
// getUserBlogs(['google', 'facebook', 'git', 'home']);

getUserData('facebook').then(el => console.log(el.blog));
