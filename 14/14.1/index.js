// let message = 'Just learn it';
// const sendMessage = name => console.log(`${name}, ${message}! Your Gromcode`);

// sendMessage('Ann');

// const setMessage = text => (message = text);

// setMessage('Good job');
// sendMessage('Ann');

let message = 'Just learn it';
export function sendMessage(name) {
  let sender = 'Gromcode';
  console.log(`${name}, ${message}! Your ${sender}`);
}

sendMessage('Ann');

export function setMessage(text) {
  message = text;
  return message;
}

setMessage('Good job');
sendMessage('Ann');
