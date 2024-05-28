function circularArrayRotation(a, k, queries) {
  let n a.length;
  let arrayRotated = [];
  for (let i = 0; i < n; i++) {
    arrayRotated[(i + k) % n] = a[i];
  }
  let result = [];
  let m = queries.length;
  for (let i = 0; i < m; i++) {
    if (queries[i] < n) result.push(arrayRotated[queries[i]]);
  }
  return result;
}
