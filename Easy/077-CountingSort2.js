function countingSort(arr) {
  let frequency = new Array(100);
  frequency.fill(0);
  for (let n of arr) {
    frequency[n]++;
  }
  let sorted = new Array();
  for (let i in frequency) {
    while(frequency[i] > 0) {
      sorted.push(i);
      frequency[i]--;
    }
  }
  return sorted;
}