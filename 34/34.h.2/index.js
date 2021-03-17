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

submitBtntElem.disabled = false;

const onSubmitForm = () => {
  if (
    !emailInputElem.reportValidity() ||
    !nameInputElem.reportValidity() ||
    !passwordInputElem.reportValidity()
  ) {
    errorTextElem.innerHTML = 'Failed to create user';
    submitBtntElem.disabled = true;
    return;
  }
};

submitBtntElem.addEventListener('click', onSubmitForm);
