function pickingNumbers(a) {
  let sortedNums = a.sort((x, y) => x - y);
  let longestSize = 0;
  let n = a.length;
  for (let i = 0; i < n - 1; i++) {
    let count = 1;
    let flagMajorDifference = false;
    for (let j = i + 1; j < n && !flagMajorDifference; j++) {
      let diff = Math.abs(sortedNums[i] - sortedNums[j]);
      if (diff <= 1) {
        count++;
      } else {
        flagMajorDifference = true;
      }
    }
    longestSize = Math.max(longestSize, count);
  }
  return longestSize;
}