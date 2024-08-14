function workbook(n, k, arr) {
  let sp = 0;
  let page = 1;
  for (let i = 0; i < n; i++) {
    for (let p = 1; p <= arr[i]; p++) {
      if (page === p) sp++;
      if (p % k === 0 || p === arr[i]) page++;
    }
  }
  return sp;
}