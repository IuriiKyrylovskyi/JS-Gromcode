// export
const createLogger = () => {
  let message = [];
  function getRecords() {
    return message;
  }
  function warn(typedMessage) {
    message = [{ message: typedMessage, type: 'warn', dateTime: new Date() }];
  }
  function error(typedMessage) {
    message = [{ message: typedMessage, type: 'error', dateTime: new Date() }];
  }
  function log(typedMessage) {
    message = [{ message: typedMessage, type: 'log', dateTime: new Date() }];
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
// logger.error('Unexpected error on the site');
// console.log(logger.getRecords()); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User try to restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger.getRecords('log')); // [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// console.log(logger.getRecords('error')); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger.getRecords('warn')); // [{ message: 'User try to restricted page', type: 'warn', dateTime: Date }]
