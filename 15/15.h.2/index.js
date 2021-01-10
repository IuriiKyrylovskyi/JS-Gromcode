// export
const createLogger = () => {
  const memory = [];
  const message = {};

  function getRecords(messageType) {
    if (typeof messageType === 'undefined') {
      return memory.sort((a, b) => b.dateTime - a.dateTime);
    }
    return memory.filter(a => a.type === messageType).sort((a, b) => b.dateTime - a.dateTime);
  }

  function log(messageText) {
    message.message = messageText;
    message.type = 'log';
    message.dateTime = new Date();
    const logMesage = { ...message };
    memory.push(logMesage);
  }

  function error(messageText) {
    message.message = messageText;
    message.type = 'error';
    message.dateTime = new Date();
    const logMesage = { ...message };
    memory.push(logMesage);
  }
  function warn(messageText) {
    message.message = messageText;
    message.type = 'warn';
    message.dateTime = new Date();
    const logMesage = { ...message };
    memory.push(logMesage);
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
