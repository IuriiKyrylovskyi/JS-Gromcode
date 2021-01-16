export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  interval: 0,
  startTimer() {
    this.interval = setInterval(() => {
      if (this.secondsPassed === 59) {
        this.minsPassed += 1;
        this.secondsPassed -= 60;
      }
      this.secondsPassed += 1;
    });
  },
  getTime() {
    return `${this.minsPassed}:${this.secondsPassed.toString().padStart(2, '0')}`;
  },
  stopTimer() {
    clearInterval(this.interval);
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};
