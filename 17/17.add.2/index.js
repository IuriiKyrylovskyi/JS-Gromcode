//export
func.call(bind, context, [arg1], [arg2]);
// func.apply(func, context, [ [arg1], [arg2] ]);

function bind(func, context, [arg1], [arg2], ...[argn]) {
  return function (...args) {
    return func.call(context, [arg1], [arg2], ...[argn], ...args);
  };
}

export function bind(func) {
  return function () {
    setTimeout(() => func.call(this, ...arguments));
  };
}


export function bind(func) {
  return function () {
    setTimeout(() => func.apply(this, args));
  };
}

export const bind = func.call(context, arg1, arg2, ...);
export const bind = func.apply(context, args);