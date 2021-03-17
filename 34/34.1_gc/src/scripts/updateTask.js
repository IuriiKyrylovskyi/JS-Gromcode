import { renderTasks } from './renderTasks.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList, deleteTask } from './tasksGateway.js';

const afterChangeTask = () => {
  return Promise.resolve()
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
const onDeleteTask = taskId => {
  deleteTask(taskId).then(() => afterChangeTask());
  // .then(() => getTasksList())
  // .then(newTasksList => {
  //   setItem('tasksList', newTasksList);
  //   renderTasks();
  // });
};

const onToggleTask = (tasksList, taskId, done) => {
  const { text, createDate } = tasksList.find(task => task.id === taskId);

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
  const taskId = e.target.dataset.id;

  if (e.target.classList.contains('list__item-delete-btn')) {
    onDeleteTask(taskId);
  }

  if (e.target.classList.contains('list__item-checkbox')) {
    // const taskId = e.target.dataset.id;
    const tasksList = getItem('tasksList');
    const done = e.target.checked;
    onToggleTask(tasksList, taskId, done);
  }
};

// 1. Prepare data
// 2. Update data to db
// 3. Read new data from servre
// 4. Save new data to front - end storage
// 5. Update UI based on new data
