function staircase(n) {
  let k = 1;
  for (let i = 0; i < n; i++) {
    let stairLine = "";
    for (let j = 0; j < (n - k); j++) {
       stairLine += " ";
    }
    for (let j = 0; j < k; j++) {
       stairLine += "#";
    }
    console.log(stairLine);
    k++;
  }
}