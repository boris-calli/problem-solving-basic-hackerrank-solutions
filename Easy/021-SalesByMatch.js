function sockMerchant(n, ar) {
  let countPair = 0;
  for (let i = 0; i < n; i++) {
    let k = i;
    for (let j = k + 1; j < n; j++) {
      if (ar[k] === ar[j]) {
        countPair++;
        ar[k] = 0;
        ar[j] = 0;
        k = j + 1;
        j = 1;
      }
    }
  }
  return countPair;
}