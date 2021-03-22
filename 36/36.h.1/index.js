const getUserData = async userId => {
  const response = await fetch(`https://api.hgithub.com/users/${userId}`);
  try {
    return await response.json();
  } catch {
    throw new Error('Failed to load data');
  }
};

export const getUserBlogs = (...getUserDatas) => {
  Promise.all(getUserDatas)
    .then(userIds => {
      console.log(userIds.map(el => getUserData(el).then(data => data)));
      const usersBlogs = userIds.reduce(
        (acc, userDataId) => acc + getUserData(userDataId).blog,
        [],
      );
      return usersBlogs;
    })
    .catch(err => new Error(err.message));
};

console.log(typeof getUserBlogs);
// getUserBlogs(['google', 'facebook', 'git']);
getUserBlogs(['google', 'facebook', 'git', 'home']);
