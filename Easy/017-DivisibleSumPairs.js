function divisibleSumPairs(n, k, ar) {
  let countPairs = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let sumPair = ar[i] + ar[j];
      if (sumPair % k === 0) countPairs++;
    }
  }
  return countPairs;
}