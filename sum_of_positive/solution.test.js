const { solution } = require('./index');

// You get an array of numbers, return the sum of all of the positives ones.
//
//   Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.

test('solution test', () => {
  expect(solution()).toBe(0);
  expect(solution([1, -4, 7, 12])).toBe(20);
  expect(solution([1, 2, 3, 4, 5])).toBe(15);
  expect(solution([-1, -2, -3, -4, -5])).toBe(0);
});
