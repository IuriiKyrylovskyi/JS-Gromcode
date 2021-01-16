export function saveCalls(func) {
  const calls = {
    calls: [],
    // calls() {
    //   this.calls;
    // },
  };
  function withMemory(...rest) {
    () => {
      func.apply(calls, this.calls.concat(rest));
      // return calls;
    };
    // return withMemory;
  }
}
