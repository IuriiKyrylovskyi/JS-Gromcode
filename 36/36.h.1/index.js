const getUserData = async userId => {
  const response = await fetch(`https://api.github.com/users/${userId}`);
  try {
    return await response.json();
  } catch {
    throw new Error('Failed to load data');
  }
};

export const getUserBlogs = getUserDatas => {
  // console.log(...getUserDatas);
  const usersBlogs = getUserDatas.reduce((acc, userDataId) => {
    console.log(userDataId);
    console.log(getUserData(userDataId).blog);
    acc.push(getUserData(userDataId).blog);
  }, []);
  console.log(usersBlogs);
  // return usersBlogs;

  return Promise.all(usersBlogs)
    .then(data => data)
    .catch(err => err.message);
};

console.log(typeof getUserBlogs);
getUserBlogs(['google', 'facebook', 'git']);
// getUserBlogs(['google', 'facebook', 'git', 'home']);

getUserData('facebook').then(el => console.log(el.blog));
