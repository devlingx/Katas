const { solution } = require('./index');

test('solution test', () => {
  expect(solution(1, 1)).toBe(1);
  expect(solution(1, 0)).toBe(1);
  expect(solution(-1, 0)).toBe(-1);
  expect(solution(0, 2)).toBe(3);
  expect(solution(-5, 5)).toBe(0);
});
