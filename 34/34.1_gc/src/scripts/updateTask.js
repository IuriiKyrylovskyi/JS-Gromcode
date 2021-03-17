import { renderTasks } from './renderTasks.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList, deleteTask } from './tasksGateway.js';

const onDeleteTask = taskId => {
  // const isDeleteBtn = e.target.classList.contains('list__item-delete-btn');
  // if (!isDeleteBtn) {
  //   return;
  // }

  // const taskId = e.target.dataset.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

// export
const onToggleTask = (tasksList, taskId, done) => {
  // const isCheckbox = e.target.classList.contains('list__item-checkbox');

  // if (!isCheckbox) {
  //   return;
  // }

  // const tasksList = getItem('tasksList');

  // const taskId = e.target.dataset.id;
  const { text, createDate } = tasksList.find(task => task.id === taskId);
  // const done = e.target.checked;

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

export const onListItemClick = e => {
  if (e.target.classList.contains('list__item-text')) return;

  const taskId = e.target.dataset.id;

  if (e.target.classList.contains('list__item-delete-btn')) onDeleteTask(taskId);

  const tasksList = getItem('tasksList');
  const done = e.target.checked;

  if (e.target.classList.contains('list__item-checkbox')) onToggleTask(tasksList, taskId, done);
};
// 1. Prepare data
// 2. Update data to db
// 3. Read new data from servre
// 4. Save new data to front - end storage
// 5. Update UI based on new data
