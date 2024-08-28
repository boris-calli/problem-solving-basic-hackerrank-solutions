function marsExploration(s) {
  let n = s.length;
  let wordsQuantity = Math.floor(n / 3);
  let i = 0;
  let countDifferences = 0;
  while (wordsQuantity > 0) {
    if (s.at(i) !== 'S') countDifferences++;
    if (s.at(i + 1) !== 'O') countDifferences++;
    if (s.at(i + 2) !== 'S') countDifferences++;
    i += 3;
    wordsQuantity--;
  }
  return countDifferences;
}