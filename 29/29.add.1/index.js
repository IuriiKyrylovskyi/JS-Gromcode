// export
const delay = (timeout, callback, context, ...args) => {
  const func = callback.bind(context, ...args);

  setTimeout(() => {
    func();
  }, timeout);
};
