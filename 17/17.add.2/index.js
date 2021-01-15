// export const bind = func => (...args) => func.call(this, ...args);

export const bind = (func, context, ...args) => () => func.call(context, ...args);
