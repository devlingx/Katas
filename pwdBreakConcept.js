function pwdBreak(pwd) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const maxIndex = chars.length - 1;
  let tries = 0;
  const start = Date.now();
  let pwdLength = pwd.length;
  let idx = new Array(pwdLength).fill(0);

  while (true) {
    const pass = idx.map((e) => chars[e]).join('');
    tries++;
    if (pass === pwd) {
      return `${tries} - ${(Date.now() - start) / 1000}`;
    }
    while (idx.some((i) => i !== maxIndex)) {
      tries++;
      idx[idx.length - 1]++;
      const pass2 = idx.map((e) => chars[e]).join('');
      if (tries % 10000000 === 0) console.log(pass2);
      if (pass2 === pwd) {
        return `${tries} - ${(Date.now() - start) / 1000}`;
      }

      for (let i = idx.length - 1; i > 0; i--) {
        if (idx[i - 1] !== undefined && idx[i] > maxIndex) {
          idx[i] = 0;
          idx[i - 1] += 1;
        } else {
          break;
        }
      }
    }
    pwdLength++;
    idx = new Array(pwdLength).fill(0);
  }
}

console.log(pwdBreak('test'));
