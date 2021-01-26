export const finishForm = () => {
  const form = document.querySelector('form');
  const formEl = document.querySelector('input');
  const newFormEl = document.createElement('input');
  formEl.name = 'login';
  newFormEl.type = 'password';
  newFormEl.name = 'password';

  form.append(newFormEl);
  return form;
};

// finishForm();
