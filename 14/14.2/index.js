const createMessager = () => {
  let message = ' Just learn it';
  let sender = ' Gromcode';

  const setSender = text => {
    sender = text;
    return sender;
  };

  const setMessage = text => {
    message = text;
    return message;
  };

  const sendMessage = name => console.log(`${name}, ${message}! Your ${setSender()}`);

  return {
    setMessage,
    sendMessage,
  };
};

export default createMessager;
