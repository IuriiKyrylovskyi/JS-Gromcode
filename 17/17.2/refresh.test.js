import { callbackPrompt } from './refresh';

it('should return message', () => {
  const result = callbackPrompt.showPrompt();

  expect(result).toEqual('your phone here');
});
