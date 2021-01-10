// export
// const createLogger = () => {
//   // let message = [];
//   // console.log(message[0]);

//   function getRecords() {
//     let typedMessage = 'hello';
//     let message = [{ message: { typedMessage }, type: type, dateTime: new Date() }];
//     console.log(message.flat());
//     return message;
//   }
//   // function warn(str) {
//   //   message['type'] = 'warn';
//   //   message['message'] = str;
//   // }
//   // function error(str) {
//   //   message['type'] = 'error';
//   //   message['message'] = str;
//   // }
//   // function log(str) {
//   //   message['type'] = 'log';
//   //   message['message'] = str;
//   // }

//   return {
//     getRecords,
//     // warn,
//     // error,
//     // log,
//   };
// };

// const logger = createLogger();
// logger.log('User logged in');
// logger.warn('User try to restricted page');
// logger.log('User logged out');
// logger.error('Unexpected error on the site');
// console.log(logger.getRecords()); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User try to restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// console.log(logger.getRecords('log')); // [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// console.log(logger.getRecords('error')); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
// console.log(logger.getRecords('warn')); // [{ message: 'User try to restricted page', type: 'warn', dateTime: Date }]

let typedMessage = 'hello';
let typeClass = 'warn';
let message = [{ message: typedMessage, type: typeClass, dateTime: new Date() }];
let messages = message;
console.log(message[0]['message']);
console.log(message[0]['dateTime']);
console.log(messages);
typedMessage = 'hi';
typeClass = 'log';
console.log(message[0]['message']);
console.log(message[0]['dateTime']);
console.log(messages);