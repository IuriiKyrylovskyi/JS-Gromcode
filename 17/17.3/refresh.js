export function defer(func, ms) {
  return function () {
    setTimeout(() => {
      func.apply(this, arg), ms;
    });
  };
}
