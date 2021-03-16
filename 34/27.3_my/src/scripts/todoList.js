import { newTaskHandler } from './taskHandler.js';
import { onChangeStatus } from './onChangeTaskStatus.js';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', newTaskHandler);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onChangeStatus);
};
