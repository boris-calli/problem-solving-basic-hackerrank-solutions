function utopianTree(n) {
  let height = 0;
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      height = 1;
    } else if (i % 2 === 0) {
      height++;
    } else {
      height *= 2;
    }
  }
  return height;
}