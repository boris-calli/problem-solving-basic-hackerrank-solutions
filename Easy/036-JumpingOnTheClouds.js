function jumpingOnClouds(c) {
  let jumps = 0;
  let n = c.length;
  let pos = 0;
  while (pos !== n - 1) {
    if (c[pos + 2] === 0) {
      jumps++;
      pos += 2;
    } else{
      jumps++;
      pos += 1;
    }
  }
  return jumps;
}