function breakingRecords(scores) {
  let counter = [0, 0];
  let n = scores.length;
  if (n === 1) return counter;
  let max = scores[0];
  let min = scores[0];
  for (let i = 0; i < n; i++) {
    if (scores[i] > max) {
      max = scores[i];
      counter[0]++;
    } else if (scores[i] < min) {
      min = scores[i];
      counter[1]++;
    }
  }
  return counter;
}