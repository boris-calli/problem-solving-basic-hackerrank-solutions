function funnyString(s) {
  let n = s.length;
  let asciiS = new Array(n);
  let asciiR = new Array(n);
  for (let i in s) {
    let asciiCode = s.charCodeAt(i);
    asciiS[i] = asciiCode;
    asciiR[n - 1 - i] = asciiCode;
  }
  for (let i = 0; i < n - 1; i++) {
    let diffS = Math.abs(asciiS[i] - asciiS[i + 1]);
    let diffR = Math.abs(asciiR[i] - asciiR[i + 1]);
    if (diffS !== diffR) return "Not Funny";
  }
  return "Funny";
}