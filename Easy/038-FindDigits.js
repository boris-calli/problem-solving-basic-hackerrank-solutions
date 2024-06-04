function findDigits(n) {
  let number = n;
  let count = 0;
  while (number !== 0) {
    let divisor = Math.floor(number % 0);
    if (n % divisor) count++;
    number = Math.floor(number / 10);
  }
  return count;
}