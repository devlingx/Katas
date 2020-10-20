const { solution } = require('./index');

test('solution test', () => {
  expect(solution([25, 25, 50, 50])).toBe('YES');
  expect(solution([25, 100])).toBe('NO');
});
