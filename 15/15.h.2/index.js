// export
const createLogger = () => {
  // const Date = new Date().toUTCString();
  let message = [{ message: { typedMessage }, type: type, dateTime: new Date() }];
  // let message = [];
  // console.log(message[0]);

  function getRecords() {
    return message;
  }
  function warn(typedMessage) {
    // message = [{ message: typedMessage, type: 'warn', dateTime: new Date() }];
    message['type'] = 'warn';
    message.message = typedMessage;
  }
  function error(typedMessage) {
    message = [{ message: typedMessage, type: 'error', dateTime: new Date() }];

    // message['type'] = 'error';
    // message.message = typedMessage;
  }
  function log(typedMessage) {
    message = [{ message: typedMessage, type: 'log', dateTime: new Date() }];

    // message['type'] = 'log';
    // message.message = typedMessage;
  }

  return {
    getRecords,
    warn,
    error,
    log,
  };
};

const logger = createLogger();
logger.log('User logged in');
logger.warn('User try to restricted page');
logger.log('User logged out');
logger.error('Unexpected error on the site');
console.log(logger.getRecords()); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User try to restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger.getRecords('log')); // [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger.getRecords('error')); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger.getRecords('warn')); // [{ message: 'User try to restricted page', type: 'warn', dateTime: Date }]
