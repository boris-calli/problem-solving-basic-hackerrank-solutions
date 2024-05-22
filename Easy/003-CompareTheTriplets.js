function compareTriplets(a, b) {
  let sizeA = a.length;
  let sizeB = b.length;
  let score = [0, 0];
  if (sizeA === sizeB) {
    for (let i = 0; i < sizeA; i++) {
      if (a[i] > b[i]) score[0] = score[0] + 1;
      if (a[i] < b[i]) score[1] = score[1] + 1;
    }
  }
  return score;
}
