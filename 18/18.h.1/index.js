export function saveCalls(func) {
  const calls = {
    calls: [],
    calls() {
      return this.calls;
    },
  };

  function withMemory() {
    function () {
        func.apply(calls, [rest]);
      };
  }
  return withMemory(calls);
}
