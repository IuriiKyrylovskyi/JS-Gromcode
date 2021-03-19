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

  // const userData = userInf => {
  //   return new Promise((resolve, reject) => {
  //     if (!userInf) {
  //       return reject(new Error('Failed to create user'));
  //     }
  //     resolve(userInf);
  //   });
  // };

  // userData(formData)
  //   .then(response => response.json())
  //   .then(res => {
  //     alert(JSON.stringify(res));
  //     clearFormsInputs();
  //   })
  //   .catch(err => (errorTextElem.innerHTML = err));

  // sendForm(res => res).userData(form => form);

  sendForm(formData)
    .then(response => {
      if (!response.ok) throw response;
      return response.json();
    })
    .then(res => alert(JSON.stringify(res)))
    .then(clearFormsInputs)
    .catch(() => new Error((errorTextElem.innerHTML = 'Failed to create user')));
  //   alert(JSON.stringify(res));
  //   clearFormsInputs();)
  // // })

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
