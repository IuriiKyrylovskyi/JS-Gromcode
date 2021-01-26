const eventsList = document.querySelector('.events-list');
eventsList.innerHTML = '';

const divEl = document.querySelector('.rect_div');
const pEl = document.querySelector('.rect_p');
const spanEl = document.querySelector('.rect_span');

const logTarget = (text, color) => {
  eventsList.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'div', 'green');
const logGreyDiv = logTarget.bind(null, 'div', 'grey');

const logGreenP = logTarget.bind(null, 'p', 'green');
const logGreyP = logTarget.bind(null, 'p', 'grey');

const logGreenSpan = logTarget.bind(null, 'span', 'green');
const logGreySpan = logTarget.bind(null, 'span', 'grey');

// divEl.addEventListener('click', logGreenDiv);
// pEl.addEventListener('click', logGreenP);
// spanEl.addEventListener('click', logGreenSpan);

// divEl.addEventListener('click', logGreyDiv, true);
// pEl.addEventListener('click', logGreyP, true);
// spanEl.addEventListener('click', logGreySpan, true);

// clear list
const clearBtn = document.querySelector('.clear-btn');

const clearList = () => {
  eventsList.innerHTML = '';
};
clearBtn.addEventListener('click', clearList);

// attach addEventListener
const attachHandlersBtn = document.querySelector('.attach-handlers-btn');

const attachHandlers = () => {
  divEl.addEventListener('click', logGreenDiv);
  pEl.addEventListener('click', logGreenP);
  spanEl.addEventListener('click', logGreenSpan);

  divEl.addEventListener('click', logGreyDiv, true);
  pEl.addEventListener('click', logGreyP, true);
  spanEl.addEventListener('click', logGreySpan, true);
};
attachHandlers();
attachHandlersBtn.addEventListener('click', attachHandlers);

// remove addEventListener
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');

const removeHandlers = () => {
  divEl.removeEventListener('click', logGreenDiv);
  pEl.removeEventListener('click', logGreenP);
  spanEl.removeEventListener('click', logGreenSpan);

  divEl.removeEventListener('click', logGreyDiv, true);
  pEl.removeEventListener('click', logGreyP, true);
  spanEl.removeEventListener('click', logGreySpan, true);
};

removeHandlersBtn.addEventListener('click', removeHandlers);
