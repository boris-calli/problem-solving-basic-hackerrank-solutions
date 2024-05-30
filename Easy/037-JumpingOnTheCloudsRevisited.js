function jumpingOnClouds(c, k) {
  let n = c.length;
  let flagGame = false;
  let i = 0;
  let e = 100;
  while (!flagGame) {
    let j = (i + k) % n;
    if (c[j] === 1) {
      e = e - 3;
    } else {
      e = e - 1;
    }
    i = j;
    if (i === 0) {
      flagGame = true;
    }
  }
  return e;
}