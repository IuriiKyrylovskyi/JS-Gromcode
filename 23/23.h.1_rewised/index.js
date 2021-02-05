const todoEl = document.querySelector('.todo-list');
const listElem = document.querySelector('.list');
const inputTextElem = document.querySelector('.task-input');

const tasks = [
  { text: 'Buy milk', done: false, id: 1 },
  { text: 'Pick up Tom from airport', done: false, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: true, id: 4 },
  { text: 'Buy meat', done: true, id: 5 },
];

const renderTasks = tasksList => {
  listElem.innerHTML = '';
  inputTextElem.value = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('data-id', id);
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const onClickChange = e => {
  // const dataId = e.target.getAttribute('data-id');
  const idNum = tasks.length;
  const newTaskText = inputTextElem.value;
  const createBtnEl = document.querySelector('#id');

  const idNumCurrent = e.target.dataset.id;
  console.log('idNumCurrent', idNumCurrent);

  if (idNumCurrent === undefined && !createBtnEl) {
    return;
  }
  console.log(idNumCurrent);

  const item = tasks.find(el => el.id === +idNumCurrent);
  const changeStatus = obj => {
    if (obj.done === true) {
      obj.done = false;
      return obj;
    }
    obj.done = true;
    return obj;
  };
  changeStatus(item);

  console.log('item', item);
  console.log('item.done', item.done);
  console.log('newTaskText', newTaskText);
  console.log('******************');

  const newTaskCreate = (array, newTask) => {
    if (e.target === createBtnEl && newTask !== '') {
      // console.log(e.target.id);
      const newTaskObj = {
        text: newTask,
        done: false,
        id: idNum + 1,
      };
      array.push(newTaskObj);
    }
    console.log('tasks', array);
    console.log('value', newTask);
    return array;
  };
  newTaskCreate(tasks, newTaskText);
  console.log('newTasks', tasks);

  renderTasks(tasks);
};

todoEl.addEventListener('click', onClickChange);
