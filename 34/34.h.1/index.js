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

// const newUserData = {
//   email: 'cool@email.com',
//   firstName: 'Iron',
//   lastName: 'Man',
//   age: 42,
// };
// const newUserData2 = {
//   email: 'cool@email.com',
//   firstName: 'Dod',
//   lastName: 'Coo',
//   age: 12,
// };
// const newUserData3 = {
//   email: 'cool@email.com',
//   firstName: 'Ron',
//   lastName: 'Van',
//   age: 25,
// };

// const newUserData1 = {
//   email: 'new@email.com',
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 17,
// };

// createUser(newUserData).then(() => {
//   console.log('User created');
// });
// createUser(newUserData1).then(() => {
//   console.log('User created');
// });
// createUser(newUserData2).then(() => {
//   console.log('User created');
// });
// createUser(newUserData3).then(() => {
//   console.log('User created');
// });

// const updatedUserData = {
//   email: 'new@email.com',
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 17,
// };

// updateUser('22', updatedUserData).then(() => {
//   console.log('User updated');
// });

// deleteUser('2').then(() => {
//   console.log('User updated');
// });

// getUsersList().then(users => {
//   console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
// });

// getUserById('2').then(userData => {
//   console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
// });
