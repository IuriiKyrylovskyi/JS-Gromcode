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

const clearFormsInputs = () => {
  // return [emailInputElem, nameInputElem, passwordInputElem, errorTextElem].map(input => {
  //   input.value = '';
  //   return input;
  // });
  emailInputElem.value = '';
  nameInputElem.value = '';
  passwordInputElem.value = '';
  errorTextElem.innerHTML = '';
};

const onSubmitForm = e => {
  e.preventDefault();

  const formData = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {},
  );

  sendForm(formData)
    .then((response,reject) => {
      // if (!response.ok) throw response;
      if (!response.ok) reject(response);
      return response.json();
    })
    .then(res => alert(JSON.stringify(res)))
    .then(clearFormsInputs)
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

emailInputElem.addEventListener('change', deleteErrorText);
nameInputElem.addEventListener('change', deleteErrorText);
passwordInputElem.addEventListener('change', deleteErrorText);

formElem.addEventListener('input', onValidateForm);
formElem.addEventListener('submit', onSubmitForm);
