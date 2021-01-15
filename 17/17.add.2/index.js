export function bind(func, context) {
  // return function () {
  return func.call(context);
  // };
}
