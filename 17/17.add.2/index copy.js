// // //export
// // func.call(bind, context, [arg1], [arg2]);
// // // func.apply(func, context, [ [arg1], [arg2] ]);

export function bind(func, context, [arg1], [arg2], ...[argn]) {
  return function (args) {
    return func.call(context, [arg1], [arg2], ...[argn], ...args);
  };
}
// // export function bind1(func) {
// //   return () => {
// //     setTimeout(() => func.call(this));
// //   };
// // }

// export function bind2(func) {
//   return () => {
//     func.apply(this);
//   };
// }

// // // export
// // 	const bind3 = func.call(context, arg1, arg2, ...);

// // export
// const bind4 = func.apply(context, args);

// export function bind5() {
//   return func.apply(context, arguments);
// }
