function miniMaxSum(arr) {
  let n = arr.length;
  let sumValues = [];
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        sum += arr[j];
      }
    }
    sumValues.push(sum);
  }
  let max = Math.max(...sumValues);
  let min = Math.min(...sumValues);
  console.log(min, max);
}