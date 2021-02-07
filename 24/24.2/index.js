// export
const getGreenwichTime = date => {
  const formatter = new Intl.DateTimeFormat('en', {
    timeZone: 'UTC',
    // month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  return formatter.format(date);
};

const now = new Date();
const nowTime = getGreenwichTime(now);
console.log(now);
console.log(nowTime);
