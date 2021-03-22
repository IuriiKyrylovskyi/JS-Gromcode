const getUserData = async userId => {
  const response = await fetch(`https://api.github.com/users/${userId}`);
  try {
    if (!response.ok) {
      return null;
    }
    const userData = await response.json();
    return userData;
  } catch (err) {
    alert(err.message);
    // throw new Error('Failed to fetch user');
  }
};

export const getUsersBlogs = fetchedData => {
  const usersData = fetchedData.reduce((acc, user) => {
    // console.log(user);
    // console.log(getUserData(user).then(userData => userData.blog));
    acc.push(getUserData(user).then(userData => userData.blog));
    return acc;
  }, []);
  // console.log(usersData);
  // return usersBlogs;

  return (
    Promise.all(usersData)
      .then(data => data)
      // .catch(() => alert(new Error('Failed to fetch user')))
      .catch(err => alert(err.message))
      .finally(result => result)
  );
};

getUsersBlogs(['google', 'facebook', 'git']).then(linkList => console.log(linkList));
getUsersBlogs(['google', 'facebook', 'git', 'home']).then(linkList => console.log(linkList));

// getUserData('facebook').then(el => console.log(el.blog));
