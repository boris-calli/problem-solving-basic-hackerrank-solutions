function theLoveLetterMystery(s) {
  let n = s.length;
  let middle = Math.floor(n / 2);
  let countOperations = 0;
  if (n % 2 !== 0) {
    let i = middle - 1;
    let j = middle + 1;
    while (i >= 0) {
      let charLeft = s.charCodeAt(i);
      let charRight = s.charCodeAt(j);
      if (charLeft > charRight) {
        countOperations += charLeft - charRight;
      } else {
        countOperations += charRight - charLeft;
      }
      i--;
      j++;
    }
  } else {
    let i = middle - 1;
    let j = middle;
    while (i >= 0) {
      let charLeft = s.charCodeAt(i);
      let charRight = s.charCodeAt(j);
      if (charLeft > charRight) {
        countOperations += charLeft - charRight;
      } else {
        countOperations += charRight - charLeft;
      }
      i--;
      j++;
    }
  }
  return countOperations;
}