export function saveCalls(func) {
  const calls = {
    calls: [],
    calls() {
      return this.calls;
    },
  };

  function withMemory(rest) {
    function() {
        func.apply(calls, [rest]);
      };
  }
  return withMemory;
}
