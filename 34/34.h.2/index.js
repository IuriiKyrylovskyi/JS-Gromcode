/* eslint-disable arrow-body-style */
const formUrl = 'https://60520890fb49dc00175b761f.mockapi.io/form';

const formElem = document.querySelector('.login-form');

const submitBtntElem = formElem.querySelector('[type="submit"]');
const errorTextElem = formElem.querySelector('.error-text');

const onSubmitForm = e => {
  e.preventDefault();

  const formData = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {},
  );

  fetch(formUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  })
    .then((response, reject) => {
      if (!response.ok) reject(response);
      return response.json();
    })
    .then(res => alert(JSON.stringify(res)))
    .then(formElem.reset())
    .catch(() => new Error((errorTextElem.innerHTML = 'Failed to create user')));

  submitBtntElem.setAttribute('disabled', 'disabled');
};

const deleteErrorText = () => {
  errorTextElem.innerHTML = '';
  return errorTextElem;
};

const onValidateForm = () => {
  if (!formElem.reportValidity()) {
    return;
  }
  submitBtntElem.removeAttribute('disabled');
};

formElem
  .querySelectorAll('input')
  .forEach(input => input.addEventListener('change', deleteErrorText));

formElem.addEventListener('input', onValidateForm);
formElem.addEventListener('submit', onSubmitForm);
