const { solution } = require('./index');

// In this kata you will create a
// function that takes a list of non-negative
// integers and strings and returns a new
// list with the strings filtered out.

test('solution test', () => {
  expect(solution([1, 2, 'a', 'b'])).toEqual([1, 2]);
  expect(solution([1, 'a', 'b', 0, 15])).toEqual([1, 0, 15]);
});
