// export
const createLogger = () => {
  const memory = [];
  const message = {};

  function getRecords(messageType) {
    if (!messageType) {
      return memory.push(message).sort((a, b) => b.dateTime - a.dateTime);
    }
    return memory.filter(a => a.type === messageType);
    // .sort((a, b) => b.dateTime - a.dateTime);
  }

  function warn(messageText) {
    message.message = messageText;
    message.type = 'warn';
    message.dateTime = new Date();
    memory.unshift(message);
  }

  function error(messageText) {}
  function log(messageText) {}

  return {
    getRecords,
    warn,
    error,
    log,
  };
};

const logger = createLogger();
console.log('_records null', logger.getRecords());
// logger.log('User logged in');
logger.warn('User try to restricted page');
// logger.log('User logged out');
// // logger.error('Unexpected error on the site');
// console.log('_records ', logger.getRecords()); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User try to restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// console.log('_log ', logger.getRecords('log')); // [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// console.log('_error ', logger.getRecords('error')); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log('_warn ', logger.getRecords('warn')); // [{ message: 'User try to restricted page', type: 'warn', dateTime: Date }]
