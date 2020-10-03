const { solution } = require('./index');

test('solution test', () => {
  expect(solution('din')).toBe('(((');
  expect(solution('recede')).toBe('()()()');
  expect(solution('Success')).toBe(')())())');
});
