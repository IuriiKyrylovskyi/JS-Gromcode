export function saveCalls(func) {
  const calls = [];
  
  function withMemory(...rest) {
    function(){
      // const args =
        func.apply(calls, [rest]);
      // return calls.push(args);
    };
  }
  return withMemory.calls;
}
