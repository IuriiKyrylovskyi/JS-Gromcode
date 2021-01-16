import { timer } from './refresh';

it('check timer', () => {
  timer.secondsPassed = 5;
  timer.minsPassed = 5;
  const result = timer.getTime();

  expect(result).toEqual('5:05');
});

it('reset timer', () => {
  timer.secondsPassed = 5;
  timer.minsPassed = 5;
  timer.resetTimer();
  const reset = timer.getTime();

  expect(reset).toEqual('0:00');
});
