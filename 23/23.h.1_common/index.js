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

const eventHandler = e => {
  const dataId = e.target.getAttribute('data-id');
  const idNum = tasks.length;
  const newTaskText = inputTextElem.value;

  // if (e.target.className !== 'list__item-checkbox') {
  //   return;
  // }
  // if (e.target.className !== 'btn create-task-btn') {
  //   return;
  // }
  // if (e.target.className !== 'todo-list') {
  //   return;
  // }
  if (e.target.className === 'list__item-checkbox') {
    tasks.map(el => {
      if (el.id === +dataId) {
        el.done = e.target.checked;
      }
      // console.log('el', el);
    });
  }
  if (e.target.className === 'btn create-task-btn' && newTaskText !== '') {
    // console.log('2', e.target.className);
    const newTaskObj = {
      text: newTaskText,
      done: false,
      id: idNum + 1,
    };
    tasks.push(newTaskObj);
  }
  // console.log('tasks', tasks);

  // console.log('value', inputTextElem.value);
  renderTasks(tasks);
};

todoEl.addEventListener('click', eventHandler);
