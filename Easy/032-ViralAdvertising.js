function viralAdvertising(n) {
  let shared = 5;
  let cumulativeLikes = 0;
  for (let i = 1; i <= n; i++) {
    let liked = Math.floor(shared / 2);
    cumulativeLikes += liked;
    shared = liked * 3;
  }
  return cumulativeLikes;
}