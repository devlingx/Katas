// Paste question here

exports.solution = (factorial) => {
  let result = '1';

  for (let i = 1; i <= factorial; i += 1) {
    const split = result.split('');
     const res = split
      .map((e) => {
        const l = Number(e);
        return l * i;
      })
      .reverse()
      .reduce(({ rem, sum }, e) => {
        const n = rem + e;
        const reminder = Math.floor(n / 10);
        const k = String(n - reminder * 10);
        const added = k + sum;
        return {
          rem: reminder,
          sum: added,
        };
      }, { rem: 0, sum: '' });
     result = (res.rem || '') + res.sum;
  }

  return result;
};

// [2,4] => [1,2,0]
