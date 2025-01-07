function countingSort(arr) {
  let result = new Array(100);
  result.fill(0);
  for (let n of arr) {
    result[n]++;
  }
  return result;
}