function birthday(s, d, m) {
  let n = s.length;
  if (n === 1 && m === n) {
    if (s[0] === d) return 1;
    return 0;
  }
  let countWays = 0;
  let i = 0;
  let k = n - (i + m);
  while (k >= 0) {
    let j = i + m;
    let segment = s.slice(i, j);
    let sum = 0;
    segment.forEach(num => {
      if (num > 0 && num <= 5) sum += num;
    });
    if (sum === d) countWays++;
    i++;
  }
  return countWays;
}