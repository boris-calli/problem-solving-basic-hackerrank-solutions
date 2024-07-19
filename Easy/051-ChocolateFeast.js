function chocolateFeast(n, c, m) {
  let bars = Math.floor(n / c);
  let wrappers = bars;
  while (wrappers >= m) {
    let extra = Math.floor(wrappers / m);
    bars += extra;
    wrappers = extra + Math.floor(wrappers % m);
  }
  return bars;
}