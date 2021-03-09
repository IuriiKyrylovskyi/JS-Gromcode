const getValue = {
  years: 'getFullYear',
  months: 'getMonth',
  days: 'getDate',
  hours: 'getHours',
  minutes: 'getMinutes',
  milliseconds: 'getMilliseconds',
};

const setValue = {
  years: 'setFullYear',
  months: 'setMonth',
  days: 'setDate',
  hours: 'setHours',
  minutes: 'setMinutes',
  milliseconds: 'setMilliseconds',
};

export const shmoment = initDate => {
  let result = new Date(initDate);
  // console.log(result);

  const calculator = {
    add(value, number) {
      // console.log(getValue[value]);
      // console.log(number); // num

      const countedValue = result[getValue[value]]() + number;
      // console.log(countedValue);

      result = new Date(result[setValue[value]](countedValue));
      // console.log(result);
      return this;
    },
    subtract(value, number) {
      this.add(value, -number);
      return this;
    },

    result() {
      return result;
    },
  };

  return calculator;
};

const check = shmoment(new Date(2021, 2, 9)).add('years', 5).result();
const check2 = shmoment(new Date(2021, 2, 9)).add('months', 1).result();
const check3 = shmoment(new Date(2021, 2, 9)).add('days', 5).result();
const check4 = shmoment(new Date(2021, 2, 9)).add('hours', 5).result();
const check5 = shmoment(new Date(2021, 2, 9)).add('minutes', 5).result();
const check1 = shmoment(new Date(2021, 2, 9)).add('milliseconds', 5000).result();
console.log(check);
console.log(check2);
console.log(check3);
console.log(check4);
console.log(check5);
console.log(check1);

const check0 = shmoment(new Date(2021, 2, 9)).subtract('years', 5).result();
const check02 = shmoment(new Date(2021, 2, 9)).subtract('months', 1).result();
const check03 = shmoment(new Date(2021, 2, 9)).subtract('days', 5).result();
const check04 = shmoment(new Date(2021, 2, 9)).subtract('hours', 5).result();
const check05 = shmoment(new Date(2021, 2, 9)).subtract('minutes', 5).result();
const check01 = shmoment(new Date(2021, 2, 9)).subtract('milliseconds', 5000).result();
console.log(check0);
console.log(check02);
console.log(check03);
console.log(check04);
console.log(check05);
console.log(check01);
