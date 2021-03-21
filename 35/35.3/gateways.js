//  `https://api.github.com/users/${inputElem['value']}`;
// IuriiKyrylovskyi

export const fetchUserData = userName =>
  fetch(`https://api.github.com/users/${userName}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
// .then(result => console.log(result));

export const fetchRepositories = repoUrl =>
  fetch(repoUrl).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
