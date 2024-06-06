function squares(a, b) {
  let count = 0;
  let sqrtStart = Math.ceil(Math.sqrt(a));
  let sqrtEnd = Math.floor(Math.sqrt(b));
  count = sqrtEnd - sqrtStart + 1;
  return count;
}