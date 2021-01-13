//export
const timer = {
  secondsPassed: 58,
  minsPassed: 0,

  startTimer() {
    let seconds = this.secondsPassed;
    let minutes = this.minsPassed;
    setInterval(function () {
      if (seconds === 59) {
        minutes += 1;
        seconds -= 60;
      }
      seconds += 1;
      this.secondsPassed = seconds;
      this.minsPassed = minutes;
      console.log(`${this.minsPassed} : ${this.secondsPassed}`);
    }, 1000);
    this.secondsPassed = seconds;
    this.minsPassed = minutes;
    console.log(`${minutes} : ${seconds}`);
  },

  getTime() {
    return `${this.minsPassed}:${this.secondsPassed.toString().padStart(2, '0')}`;
  },

  stopTimer() {
    clearInterval(this.startTimer.setInterval);
    this.secondsPassed = timer.startTimer.seconds;
    this.minsPassed = this.startTimer.minutes;
    console.log(this.secondsPassed);
    console.log(this.minsPassed);
  },

  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

// console.log(timer.getTime());
timer.startTimer();
// console.log('time : ', timer.getTime());
timer.stopTimer();
// console.log('after stop ', timer.getTime());
console.log('after stop ', timer);

// timer.resetTimer();
// // timer.startTimer();
// console.log('after reset ', timer.getTime());
