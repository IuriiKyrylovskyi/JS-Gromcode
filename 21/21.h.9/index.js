export const finishForm = () => {
  const form = document.querySelector('form');
  const formEl = document.querySelector('input');
  const newFormEl = document.createElement('input');
  formEl.name = 'login';
  newFormEl.type = 'password';
  newFormEl.name = 'password';

  // formEl.setAttribute('name', 'login');
  // newFormEl.setAttribute('type', 'password');
  // newFormEl.setAttribute('name', 'password');

  form.append(newFormEl);
  return form;
};

// finishForm();
