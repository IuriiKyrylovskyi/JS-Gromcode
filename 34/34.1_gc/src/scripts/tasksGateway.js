const baseUrl = 'https://crudcrud.com/api/3f3c9c9d2918435cbe597a451e870d47/tasks';

export const getTasksList = () => fetch(baseUrl).tnen(response => response.json());

export const createTask = taskData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
