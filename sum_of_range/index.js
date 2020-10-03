// Given two integers a and b,
// which can be positive or negative,
// find the sum of all the numbers between
// including them too and return it.
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// eslint-disable-next-line no-mixed-operators
exports.solution = (a, b) => (Math.abs(a - b) + 1) * (a + b) / 2;
