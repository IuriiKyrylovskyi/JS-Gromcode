export const bindApplay = (func, context, arg1) => arg2 => func.apply(context, [arg1, arg2]);

export const bindCall = (func, context, arg1) => arg2 => func.call(context, arg1, arg2);
