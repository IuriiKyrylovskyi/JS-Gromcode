const createMessenger = () => {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function setSender(text) {
    sender = text;
  }

  function setMessage(text) {
    message = text;
  }

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
};


// export default createMessenger;

const messanger = createMessenger();
messanger.sendMessage('Bob');

const messanger2 = createMessenger();
messanger2.setMessage('Hello');
messanger2.setSender('Gromcodik');
messanger2.sendMessage('Tom');

messanger.sendMessage('Ann');


