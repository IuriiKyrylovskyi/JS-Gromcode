const url = 'https://api.github.com';

// const userInfo = {
//   days: 0,
//   userId: 'userId',
//   repoId: 'repoId',
// };

// export
const getMostActiveDevs = user =>
  fetch(`${url}/repos/${user.userId}/${user.repoId}/commits?per_page=100`).then(response =>
    response.json(),
  );

const userInfo = {
  // days: 0,
  id: '65412895',
  repoId: 'repoId',
};

getMostActiveDevs(userInfo).then(result => console.log(result));
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
