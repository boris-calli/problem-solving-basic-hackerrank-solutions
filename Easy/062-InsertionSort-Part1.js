function insertionSort1(n, arr) {
  let value = arr[n - 1];
  let j = n - 1;
  let i = j - 1;
  while (arr[i] > value) {
    arr[j] = arr[i];
    j = i;
    i--;
    console.log(...arr);
  }
  arr[j] = value;
  console.log(...arr);
}