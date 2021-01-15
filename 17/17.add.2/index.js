export const bind = (func, context, ...args) => (...rest) =>
  func.call(context, ...args.concat(rest));

export const bind2 = (func, context, ...args) => (...rest) =>
  func.apply(context, args.concat(rest));
