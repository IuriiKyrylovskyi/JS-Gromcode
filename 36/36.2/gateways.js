//  `https://api.github.com/users/${inputElem['value']}`;
// IuriiKyrylovskyi

export const fetchUserData = async userName => {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to load data');
};
// .then(result => console.log(result));

export const fetchRepositories = async repoUrl => {
  const response = await fetch(repoUrl);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to load data');
};
