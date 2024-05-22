function aVeryBigSum(ar) {
  let n = ar.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += ar[i];
  }
  return sum;
}
