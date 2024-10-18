function insertionSort2(n, arr) {
  for (let i = 1; i < n; i++) {
    let value = arr[i];
    let j = i - 1;
    while (j >= 0 && value < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = value;
    console.log(...arr)
  }
}