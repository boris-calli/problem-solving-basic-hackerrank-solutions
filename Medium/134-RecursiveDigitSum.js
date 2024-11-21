function superDigit(n, k) {
  if (n.length === 1) return Number(n);
  let sum = 0;
  for (let num of n) {
    sum += Number(num);
  }
  n = sum * k;
  return superDigit(n.toString(), 1);
}