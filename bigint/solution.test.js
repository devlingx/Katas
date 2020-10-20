const { solution } = require('./index');

test('solution test', () => {
  expect(solution(5)).toBe('120');
  expect(solution(25)).toBe('15511210043330985984000000');
});
