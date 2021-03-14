const url = 'https://api.github.com';

// https://api.github.com/repos/{owner}/{repo}
// https://api.github.com/repos/IuriiKyrylovskyi/Calendar_project_js/commits?per_page=100
// const userInfo = {
//   days: 0,
//   userId: 'userId',
//   repoId: 'repoId',
// };

const getRepoData = (userId = 'IuriiKyrylovskyi', repoId = 'Calendar_project_js') =>
  fetch(`${url}/repos/${userId}/${repoId}/commits?per_page=100`).then(response => response.json());
// .then(result => console.log(result));

getRepoData().then(result => console.log(result));

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
