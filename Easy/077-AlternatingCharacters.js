function alternatingCharacters(s) {
  let n = s.length;
  let i = 0;
  let j = 1;
  let borrados = 0;
  while (j < n) {
    let first = s.at(i);
    let second = s.at(j);
    if (first === second) {
      borrados++;
      j++;
    } else {
      i = j;
      j++;
    }
  }
  return borrados;
}