const createLogger = () => {
  const memory = [];

  function getRecords(messageType) {
    if (typeof messageType === 'undefined') {
      return memory.sort((a, b) => b.dateTime - a.dateTime);
    }
    return memory.filter(a => a.type === messageType);
  }
  function messageTemplate(messageText, type) {
    const message = {};
    message.message = messageText;
    message.dateTime = new Date();
    message.type = type;
    memory.unshift(message);
  }
  function warn(text) {
    messageTemplate(text, 'warn');
  }
  function error(text) {
    messageTemplate(text, 'error');
  }
  function log(text) {
    messageTemplate(text, 'log');
  }
  return {
    warn,
    error,
    log,
    getRecords,
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
