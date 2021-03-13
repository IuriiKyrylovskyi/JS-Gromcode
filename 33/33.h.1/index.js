const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

// export
const getTasksList = () => fetch(baseUrl).then(response => response.json());
// .then(result => console.log(result));

// // console.log(getTasksList());

// const filterTaskList = (taskList, taskId) =>
//   taskList.filter(task => Number(task.id) === Number(taskId));

// const tasks = getTasksList();

// // export
// const getTaskById = taskId =>
//   tasks.then(taskList => filterTaskList(taskList, taskId)).then(result => result);

// export
const getTaskById = taskId =>
  fetch(`${baseUrl}?id=${taskId}`)
    .then(response => response.json())
		.then(arr => arr.pop());
		
const getTaskByText = taskText =>
  fetch(`${baseUrl}?text=${taskText}`)
    .then(response => response.json())
    .then(arr => arr.pop());

// examples
getTasksList().then(tasksList => {
  console.log(tasksList); // array of the task objects - [ {'id':'1', 'done':false ... }, {'id':'2', 'done':true ... }, ...]
});

getTaskById('2').then(taskData => {
  console.log(taskData); // {'id':'2', 'done':true ... }
});

getTaskByText('дфжлпздул').then(taskData => {
  console.log(taskData); // {'id':'2', 'done':true ... }
});
