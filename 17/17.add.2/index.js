export const bind = (func, context, ...args) => (...rest) =>
  func.call(context, ...args.concat(rest));

export const bind2 = (func, context, ...args) => (...rest) =>
  func.apply(context, args.concat(rest));

export function bind3(func, context, ...args) {
  (...rest) => {
    func.apply(context, args.concat(rest));
  };
}

export const bind4 = (func, context, args) => rest => func.apply(context, [args, rest]);

export const bind5 = (func, context, ...args) => {
  return function (...rest) {
    return func.call(context, ...args, ...rest);
  };
};

export const bind6 = (func, context, arg1) => {
  return function (arg2) {
    return func.apply(context, [arg1, arg2]);
  };
};