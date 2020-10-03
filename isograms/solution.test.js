const { solution } = require('./index');

test('solution test', () => {
  expect(solution()).toBe(true);
  expect(solution('Dermatoglyphics')).toBe(true);
  expect(solution('aba')).toBe(false);
  expect(solution('moOse')).toBe(false);
});
