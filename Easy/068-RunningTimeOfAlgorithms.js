function runningTime(arr) {
  let n = arr.length;
  let count = 0;
  for (let i = 1; i < n; i++) {
    let value = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > value) {
      arr[j + 1] = arr[j];
      j--;
      count++;
    }
    arr[j + 1] = value;
  }
  return count;
}