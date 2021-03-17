// const baseUrl = 'https://crudcrud.com/api/3f3c9c9d2918435cbe597a451e870d47/tasks';
// const baseUrl = 'https://6051234753460900176713fa.mockapi.io';
const baseUrl = 'https://6051365453460900176715c6.mockapi.io/tasks';

// const mapTasks = tasks => tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id }));

export const getTasksList = () => {
  return fetch(baseUrl).then(response => response.json());
};
// .then(tasks => mapTasks(tasks));

export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (taskId, updatedtaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedtaskData),
  });
};

export const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
};
