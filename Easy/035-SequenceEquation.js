function permutationEquation(p) {
  let n = p.length;
  let x = 1;
  let arr = new Array(n);
  while (x <= n) {
    let foundIndex = false;
    let foundValue = false;
    let index = 0;
    let y = 0;
    for (let i = 0; !foundIndex; i++) {
      if (p[i] === x) {
        index = i + 1;
        foundIndex = true;
      }
    }
    for (let i = 0; !foundValue; i++) {
      if (p[i] === index) {
        y = i + 1;
        foundValue = true;
      }
    }
    arr[x - 1] = y;
    x++;
  }
  return arr;
}