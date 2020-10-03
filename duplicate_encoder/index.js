// The goal of this exercise is to convert a string to a new string
// where each character in the new string is "("
// if that character appears only once in the original string, or ")"
// if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

exports.solution = (word) => {
  const characters = {};

  word.toLowerCase()
    .split('')
    .forEach((s) => { characters[s] = 1 + (characters[s] || 0); });

  return word.toLowerCase()
    .split('')
    .map((s) => (characters[s] > 1 ? ')' : '('))
    .join('');
};
