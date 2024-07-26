function fairRations(B) {
  let n = B.length;
  let breads = 0;
  for (let i = 0; i < n; i++) {
    if (B[i] % 2 !== 0) {
      B[i] += 1;
      if (B[i + 1] !== undefined) {
        B[i + 1] += 1;
      } else {
        B[i - 1] += 1;
      }
      breads += 2;
    }
  }
  for (let i = 0; i < n; i++) {
    if (B[i] % 2 !== 0) return "NO";
  }
  return breads;
}