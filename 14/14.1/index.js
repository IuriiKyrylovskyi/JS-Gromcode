// let message = 'Just learn it';
// const sendMessage = name => console.log(`${name}, ${message}! Your Gromcode`);

// sendMessage('Ann');

// const setMessage = text => (message = text);

// setMessage('Good job');
// sendMessage('Ann');

let message = 'Just learn it';
function sendMessage(name) {
  console.log(`${name}, ${message}! Your Gromcode`);
}

sendMessage('Ann');

function setMessage(text) {
  message = text;
  return message;
}

setMessage('Good job');
sendMessage('Ann');
