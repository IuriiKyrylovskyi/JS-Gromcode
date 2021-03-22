export const fetchUser = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) {
      // console.log('404');
      return null;
    }
    const userData = await response.json();
    console.log(userData);
    return userData;
  } catch (err) {
    throw new Error('Failed to fetch user');
  }
};

fetchUser('facebook')
  .then(userData => userData)
  .catch(err => alert(err.message));

