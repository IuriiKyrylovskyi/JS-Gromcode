const formatter = new Intl.DateTimeFormat('en', {
  timeZone: 'UTC',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});
// export
const getGreenwitchTime = date => formatter.format(date);

const now = getGreenwitchTime(new Date());
console.log(now);
