function beautifulDays(i, j, k) {
  let countBeautifulDays = 0;
  for (let a = i; a <= j; a++) {
    let numReversed = 0;
    let n = a;
    while (n !== 0) {
      numReversed *= 10;
      numReversed += (n % 10);
      n = Math.floor(n / 10);
    }
    let difference = Math.abs(numReversed - a);
    if (difference % k === 0) countBeautifulDays++;
  }
  return countBeautifulDays;
}