//export
const timer = {
  secondsPassed: 0,
  minsPassed: 0,

  startTimer() {
    // let seconds = this.secondsPassed;
    // let minutes = this.minsPassed;
    setInterval(() => {
      if (this.secondsPassed === 59) {
        this.minsPassed += 1;
        this.secondsPassed -= 60;
      }
      this.secondsPassed += 1;

      console.log(`${this.minsPassed} : ${this.secondsPassed}`);
    }, 1000);
    // this.secondsPassed; // = seconds;
    // this.minsPassed; // = minutes;
    // // return {
    // console.log(`${minutes} : ${seconds}`);
    // }
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
// console.log('timer ', timer.secondsPassed);
// console.log('timer ', timer.secondsPassed);
// // console.log('time : ', timer.getTime());
// timer.stopTimer();
// console.log('timer ', timer.secondsPassed);

// console.log('after stop ', timer.getTime());
// console.log('after stop ', timer);

// timer.resetTimer();
// // timer.startTimer();
// console.log('after reset ', timer.getTime());
