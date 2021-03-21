//  `https://api.github.com/users/${inputElem['value']}`;
// IuriiKyrylovskyi


export const fetchUserData = userName =>
  fetch(`https://api.github.com/users/${userName}`).then(response => response.json());
// .then(result => console.log(result));

export const fetchRepositories = repoUrl =>
	fetch(repoUrl)
		.then(response => response.json());
