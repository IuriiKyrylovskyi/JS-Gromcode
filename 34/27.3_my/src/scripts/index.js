import { renderTasks } from './renderTasks.js';
import { initTodoListHandlers } from './todoList.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    console.log(e.key);
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);
