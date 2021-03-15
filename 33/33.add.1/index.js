const url = 'https://api.github.com';

// https://api.github.com/repos/{owner}/{repo}
// https://api.github.com/repos/IuriiKyrylovskyi/Calendar_project_js/commits?per_page=100

// console.log(new Date().getTime());
// console.log(new Date('2021-03-08T21:40:05Z').getTime());
// console.log(7 * 24 * 60 * 60 * 1000);

const getRepoData = (days = 11, userId = 'IuriiKyrylovskyi', repoId = 'Calendar_project_js') =>
  fetch(`${url}/repos/${userId}/${repoId}/commits?per_page=100`)
    .then(response => response.json())
    .then(commits =>
      commits
        .map(commit => commit.commit.author)
        .filter(
          authorData =>
            new Date().getTime() - new Date(authorData.date).getTime() <=
            days * 24 * 60 * 60 * 1000,
        )
        .reduce((counter, authorData) => {
          counter[authorData.name] = (counter[authorData.name] || 0) + 1;
          console.log(counter[authorData.name]);
          console.log(counter.value);
          console.log(typeof counter[authorData.name]);
          // return counter;
          return `{ count: ${counter}, name: ${authorData.name}, email: ${authorData.email} }`;
        }, {}),
    );
// .then(result => getValues(result));
// (value, { [value]: count = 0, ...rest }) => ({ [value]: count + 1, ...rest });
console.log(getRepoData());

// const getAuthorData = getRepoData().then(commits => commits.map(commit => commit.commit.author));

// console.log(getAuthorData);
// const getDays = Number(new Date()) - new Date(commit);

// const ttt = getRepoData().then(result => getValues(result));
// console.log(typeof ttt);

// console.log(getValues(ttt));
// // export
// const getMostActiveDevs = user => getRepoData(userId, repoId).then(result => console.log(result));

// const userInfo = {
//   // days: 0,
//   id: '65412895',
//   repoId: 'Calendar_project_js',
// };

// getMostActiveDevs(userInfo).then(result => console.log(result));
// ==============================================================================================
// // export
// const getTaskById = taskId =>
//   fetch(`${baseUrl}?id=${taskId}`)
//     .then(response => response.json())
// 		.then(arr => arr.pop());

// const getTaskByText = taskText =>
//   fetch(`${baseUrl}?text=${taskText}`)
//     .then(response => response.json())
//     .then(arr => arr.pop());

// // examples
// getTasksList().then(tasksList => {
//   console.log(tasksList); // array of the task objects - [ {'id':'1', 'done':false ... }, {'id':'2', 'done':true ... }, ...]
// });

// getTaskById('2').then(taskData => {
//   console.log(taskData); // {'id':'2', 'done':true ... }
// });
