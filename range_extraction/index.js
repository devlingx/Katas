// Paste question here

exports.solution = function solution(list) {
  const ranges = [];

  for (const number of list) {
    const range = ranges.find((e) => e[e.length - 1] === number - 1);

    if (!range) {
      ranges.push([number]);
    } else {
      range.push(number);
    }
  }

  return ranges.map((range) => (range.length > 2 ? `${range[0]}-${range[range.length - 1]}` : range)).join(',');
};
