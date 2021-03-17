/* eslint-disable arrow-body-style */
const usersUrl = 'https://6051fccffb49dc00175b73c8.mockapi.io/api/v1/users';

export const getUsersList = () => {
  return fetch(usersUrl).then(response => response.json());
};

export const getUserById = userId => {
  return fetch(`${usersUrl}/${userId}`);
};

export const createUser = userData => {
  return fetch(usersUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
};

export const deleteUser = userId => {
  return fetch(`${usersUrl}/${userId}`, {
    method: 'DELETE',
  });
};

export const updateUser = (userId, userData) => {
  return fetch(`${usersUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
};

// // examples
// getUsersList().then(users => {
//   console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
// });

// getUserById('2').then(userData => {
//   console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
// });

// const newUserData = {
//   email: 'cool@email.com',
//   firstName: 'Iron',
//   lastName: 'Man',
//   age: 42,
// };

// createUser(newUserData).then(() => {
//   console.log('User created');
// });

// const updatedUserData = {
//   email: 'new@email.com',
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 17,
// };

// updateUser('1', updatedUserData).then(() => {
//   console.log('User updated');
// });

// deleteUser('2').then(() => {
//   console.log('User updated');
// });
