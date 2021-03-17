/* eslint-disable arrow-body-style */
const formUrl = 'https://60520890fb49dc00175b761f.mockapi.io/form';

const formElem = document.querySelector('.login-form');
const emailInputElem = formElem.querySelector('[type="email"]');
const nameInputElem = formElem.querySelector('[type="text"]');
const passwordInputElem = formElem.querySelector('[type="password"]');
const submitBtntElem = formElem.querySelector('[type="submit"]');
const errorTextElem = formElem.querySelector('.error-text');
// console.log(emailInputElem);
// console.log(nameInputElem);
// console.log(passwordInputElem);
// console.log(submitBtntElem);
// console.log(submitBtntElem);
// console.log(errorTextElem);

// const formData = [...new FormData(formElem)].reduce(
//   (acc, [field, value]) => ({ ...acc, [field]: value }),
//   {},
// );console.log(formData);

const sendForm = formData => {
  return fetch(formUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  });
};

const getFormData = () => {
  return fetch(formUrl).then(response => response.json());
};

const clearFormsInputs = () => {
  emailInputElem.innerHTML = '';
  nameInputElem.innerHTML = '';
  passwordInputElem.innerHTML = '';
  errorTextElem.innerHTML = '';
};

submitBtntElem.disabled = false;

const onSubmitForm = e => {
  if (
    !formElem.reportValidity()
    // !emailInputElem.reportValidity() ||
    // !nameInputElem.reportValidity() ||
    // !passwordInputElem.reportValidity()
  ) {
    submitBtntElem.disabled = true;
    errorTextElem.innerHTML = 'Failed to create user';
    return;
  }

  e.preventDefault();

  const formData = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {},
  );

	sendForm(formData).then(clearFormsInputs()).then(getFormData);

  // emailInputElem.innerHTML = '';
  // nameInputElem.innerHTML = '';
  // passwordInputElem.innerHTML = '';
  // errorTextElem.innerHTML = '';
};

formElem.addEventListener('submit', onSubmitForm);
