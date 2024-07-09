function beautifulTriplets(d, arr) {
  let count = 0;
  let n = arr.length;
  let values = new Set(arr);
  for (let i = 0; i < n; i++) {
    if (values.has(arr[i] + d) && values.has(arr[i] + (2 * d))) count++;
  }
  return count;
}