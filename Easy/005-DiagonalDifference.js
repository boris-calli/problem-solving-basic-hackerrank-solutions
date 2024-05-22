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