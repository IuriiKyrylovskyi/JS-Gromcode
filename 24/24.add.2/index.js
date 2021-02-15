// algorithm
// Handlers:
// 1. create handler to change array element 'done' status on checkbox click
// 2. create handler to add new undone (not empty) task in array on click 'create' button
// Render:
// 1. clear html list
// 2. clear input field
// 3. sort tasks by date
// 4. render new data array in filtered oder

const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');
const createBtnElem = document.querySelector('.create-task-btn');

const tasks = [
  { text: 'Buy milk', done: false, id: Date.now() - 1, data: Date.now() - 1 },
  { text: 'Pick up Tom from airport', done: true, id: Date.now() - 2, data: Date.now() - 1 },
  { text: 'Visit party', done: false, id: Date.now() - 3, data: Date.now() - 1 },
  { text: 'Visit doctor', done: false, id: Date.now() - 4, data: Date.now() - 1 },
  { text: 'Buy meat', done: true, id: Date.now() - 5, data: Date.now() - 1 },
];

// ============ start ==============
const renderTasks = tasksList => {
  listElem.innerHTML = ''; // * from add new task
  inputElem.value = ''; // * from add new task

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done || b.data - a.data)
    .map(({ text, done, id, data }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');

      checkbox.setAttribute('data-id', id);
      checkbox.setAttribute('data-data', data);

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

// ======= sort done/undone sublists ==============
const getSortedList = arr => {
  arr.sort((prevTask, nextTask) => nextTask.id - prevTask.id);
};

// ============= change checkbox status ================================================
const validateTaskLength = inputText => inputText.length < 1; // ? true: false;

const onChangeStatus = event => {
  const checkedId = event.target.getAttribute('data-id');

  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }
  // // unreal check --------
  // const TaskText = event.target.closest('.list__item').innerText;
  // console.log('length', TaskText.length);
  // if (validateTaskLength(TaskText)) {
  //   event.preventDefault();
  //   alert('invalid task');
  //   return;
  // }
  // // ---------------------------
  const changedTask = tasks.find(el => el.id === +checkedId);
  changedTask.done = event.target.checked;
  changedTask.data = Date.now();

  console.log('done tasks on change', tasks);
  // getSortedList(tasks);
  renderTasks(tasks);
};

listElem.addEventListener('click', onChangeStatus);

// =========== add new task ====================

// console.log('valid', validateTaskLength('123'));
// console.log('valid', validateTaskLength('123456'));

const addNewTask = () => {
  const newTaskText = inputElem.value;
  // console.log(newTaskText.length);

  if (validateTaskLength(newTaskText)) {
    alert('enter valid task');
    renderTasks(tasks);
    return;
  }
  const idNum = Date.now();
  const doneDataNum = Date.now();
  const newTaskObj = {
    text: newTaskText,
    done: false,
    id: idNum,
    data: doneDataNum,
  };
  tasks.push(newTaskObj);

  // getSortedList(tasks);
  renderTasks(tasks);

  // console.log(tasks);
};

createBtnElem.addEventListener('click', addNewTask);
