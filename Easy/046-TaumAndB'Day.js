function taumBday(b, w, bc, wc, z) {
  let minCostBlack = Math.min(bc, wc + z);
  let minCostWhite = Math.min(wc, bc + z);
  return (BigInt(b) * BigInt(minCostBlack)) + (BigInt(w) * BigInt(minCostWhite));
}