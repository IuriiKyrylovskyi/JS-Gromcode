export const fetchUser = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) {
      return null;
    }
    const userData = await response.json();
    console.log(userData);
    return userData;
  } catch (err) {
    return err;
  }
};

fetchUser('facebook');
