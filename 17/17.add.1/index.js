//export
const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  interval: {},

  startTimer() {
    this.interval = setInterval(() => {
      if (this.secondsPassed === 59) {
        this.minsPassed += 1;
        this.secondsPassed -= 60;
      }
      this.secondsPassed += 1;

      console.log(`${this.minsPassed} : ${this.secondsPassed}`);
    }, 1000);
  },

  getTime() {
    return `${this.minsPassed}:${this.secondsPassed.toString().padStart(2, '0')}`;
  },

  stopTimer() {
    clearInterval(this.interval);
    console.log('stop ', this.secondsPassed);
    console.log('stop ', this.minsPassed);
  },

  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

console.log(timer.getTime());
timer.startTimer();

console.log('timer ', timer.secondsPassed);
console.log('timer ', timer.minsPassed);
timer.stopTimer();
console.log('after stop ', timer.getTime());
console.log('timer ', timer.secondsPassed);
console.log('timer ', timer.minsPassed);
// console.log('time : ', timer.getTime());
// console.log('timer ', timer.secondsPassed);

// console.log('after stop ', timer);

// timer.resetTimer();
// // timer.startTimer();
// console.log('after reset ', timer.getTime());
