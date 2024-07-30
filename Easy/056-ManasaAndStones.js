function stones(n, a, b) {
  let stones = new Array();
  let sum = 0;
  if (a === b) {
    for (let i = 0; i < n - 1; i++) {
      sum += a;
    }
    stones.push(sum);
    return stones;
  } else if (a < b) {
    for (let i = 0; i < n - 1; i++) {
      sum += a;
    }  
  } else {
    for (let i = 0; i < n - 1; i++) {
      sum += b;
    }
  }
  
  stones.push(sum);
  let difference = Math.abs(a - b);
  for (let i = 1; i < n; i++) {
    sum += difference;
    stones.push(sum);
  }
  return stones;
}