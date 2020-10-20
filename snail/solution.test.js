const { solution } = require('./index');

test('solution test', () => {
  expect(solution([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).deepEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
});
