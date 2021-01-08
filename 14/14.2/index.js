const createMessager = () => {
  let message = ' Just learn it';
  let sender = ' Gromcode';

  function setSender(text) {
    sender = text;
    return sender;
  }

  function setMessage(text) {
    message = text;
    //   return message;
  }

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${setSender(sender)}`);
  }

  return {
    sendMessage,
    setMessage,
  };
};

// export default createMessager;

const messanger = createMessager();
messanger.sendMessage('Bob');
