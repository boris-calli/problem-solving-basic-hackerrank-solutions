function pageCount(n, p) {
  let pagesFromStart = 0;
  let pagesFromEnd = 0;
  pagesFromStart = Math.floor(p / 2);
  pagesFromEnd = Math.floor((n / 2) - pagesFromStart);
  return Math.min(pagesFromStart, pagesFromEnd);
}