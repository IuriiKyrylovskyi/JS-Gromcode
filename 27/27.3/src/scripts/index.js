import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderTasks.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);

// ===============================================
// import { getItem, setItem } from './storage.js';
// import { renderTasks } from './renderTasks.js';
// import { onChangeStatus } from './onChangeTaskStatus.js';
// import { addNewTask } from './createTask.js';

// const createBtnElem = document.querySelector('.create-task-btn');
// const listElem = document.querySelector('.list');

// renderTasks(getItem);

// listElem.addEventListener('click', onChangeStatus);

// createBtnElem.addEventListener('click', addNewTask);
