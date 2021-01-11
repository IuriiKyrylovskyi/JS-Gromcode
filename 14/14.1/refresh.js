let message = 'Just learn it';
const sendMessage = name => {
  const sender = 'Gromcode';

  return `${name}, ${message}! Your ${sender}`;
};
function setMessage(text) {
  message = text;
  return message;
}
console.log(sendMessage('Ann'));
setMessage('Good job');
console.log(sendMessage('Ann'));
console.log(sendMessage('Bob'));
