function getMoneySpent(keyboards, drives, b) {
  let n = keyboards.length;
  let m = drives.length;
  let max = -1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let price = keyboards[i] + drives[j];
      if (price === b) return b;
      if (price < b && price > max) max = price;
    }
  }
  return max;
}