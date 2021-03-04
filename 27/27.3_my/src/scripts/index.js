import { renderTasks } from './renderTasks.js';
import { onChangeStatus } from './onChangeTaskStatus.js';
import { addNewTask } from './addTask.js';

const createBtnElem = document.querySelector('.create-task-btn');
const listElem = document.querySelector('.list');

renderTasks();

listElem.addEventListener('click', onChangeStatus);

createBtnElem.addEventListener('click', addNewTask);
