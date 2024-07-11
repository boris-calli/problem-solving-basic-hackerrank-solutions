function minimumDistances(a) {
  let n = a.length;
  let min = -1;
  let foundFirst = false;
  for (let i = 0; i < n - 1; i++) {
    let j = i + 1;
    let found = false;
    while (j < n && !found) {
      if (a[i] === a[j]) {
        if (!foundFirst) {
          min = Math.abs(i - j);
          foundFirst = true;
          found = true;
        } else {
          min = Math.min(min, Math.abs(i - j));
          found = true;
        }
      }
      j++;
    }
  }
  return min;
}