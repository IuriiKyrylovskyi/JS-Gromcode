export function saveCalls(func) {
  const calls = [];
  function withMemory(args) {
    () => {
      const funcArgs = func.apply(this, [args]);
      this.calls.concat(funcArgs);
    };
  }
  return withMemory;
}
