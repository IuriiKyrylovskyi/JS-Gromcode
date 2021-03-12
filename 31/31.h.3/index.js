// export
const delay = timeout =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });

delay(3000).then(() => console.log('Done'));
