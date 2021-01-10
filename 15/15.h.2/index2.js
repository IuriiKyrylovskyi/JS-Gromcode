// export
const createLogger = () => {
  const memory = [];
  const message = {};

  function getRecords(messageType) {
    if (typeof messageType === 'undefined') {
      return memory.sort((a, b) => b.dateTime - a.dateTime);
    }
    return memory.filter(a => a.type === messageType);
  }

  function messageTemplate(text, type) {
    message.message = text;
    message.type = type;
    message.dateTime = new Date();
    const inputMesage = { ...message };
    memory.unshift(inputMesage);
  }

  function warn(messageText) {
    messageTemplate(messageText, 'warn');
  }

  function error(messageText) {
    messageTemplate(messageText, 'error');
  }

  function log(messageText) {
    messageTemplate(messageText, 'log');
  }

  return {
    getRecords,
    warn,
    error,
    log,
  };
};

const logger = createLogger();
console.log('_records null', logger.getRecords());

logger.log('User logged in');
logger.warn('User try to restricted page');
logger.error('Unexpected error on the site');
logger.log('User logged out');

console.log('_warn ', logger.getRecords('warn')); // [{ message: 'User try to restricted page', type: 'warn', dateTime: Date }]
console.log('_log ', logger.getRecords('log')); // [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log('_records ', logger.getRecords()); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User try to restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log('_error ', logger.getRecords('error')); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
