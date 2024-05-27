function plusMinus(arr) {
  let n = arr.length;
  let countPositives = 0;
  let countNegatives = 0;
  let countZeros = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) countPositives++;
    if (arr[i] < 0) countNegatives++;
    if (arr[i] === 0) countZeros++;
  }
  let ratioPositives = countPositives / n;
  let ratioNegatives = countNegatives / n;
  let ratioZeros = countZeros / n;
  
  console.log(ratioPositives.toFixed(6));
  console.log(ratioNegatives.toFixed(6));
  console.log(ratioZeros.toFixed(6));
}