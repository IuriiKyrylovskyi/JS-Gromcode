// export
const pinger = (num, interval) => {
  let i = num;
  console.log('Ping');

  const int = setInterval(() => {
    if (--i > 0) {
      console.log('Ping');
    } else {
      clearInterval(int);
    }
  }, interval);

  // setTimeout(() => {
  //   clearInterval(int);
  // }, num * interval);
};

pinger(5, 1000);
