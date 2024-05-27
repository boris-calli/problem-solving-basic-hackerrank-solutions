function birthdayCakeCandles(candles) {
  let n = candles.length;
  let countCandles = 0;
  let heightOfTallestCandle = Math.max(...candles);
  for (let i = 0; i < n; i++) {
    if (candles[i] === heightOfTallestCandle) countCandles++;
  }
  return countCandles;
}