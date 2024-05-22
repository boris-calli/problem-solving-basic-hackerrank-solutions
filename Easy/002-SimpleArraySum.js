function simpleArraySum(ar) {
  let n = ar.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + ar[i];
  }
  return sum;
}

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

function aVeryBigSum(ar) {
  let n = ar.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += ar[i];
  }
  return sum;
}

function diagonalDifference(arr) {
  let n = arr.length;
  let m = arr[0].length;
  let absValue = 0;
  let j = m - 1;
  let leftToRightDiag = 0;
  let rightToLeftDiag = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i][j] <= 100 && arr[i][j] >= -100) rightToLeftDiag += arr[i][j];
    if (arr[i][i] <= 100 && arr[i][i] >= -100) leftToRightDiag += arr[i][i];
    j--;
  }
  absValue = Math.abs(leftToRightDiag - rightToLeftDiag);
  return absValue;
}