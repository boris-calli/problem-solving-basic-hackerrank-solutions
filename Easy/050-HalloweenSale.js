function howManyGames(p, d, m, s) {
  let games = 0;
  while (s >= 0) {
    if (p > m) {
      s -= p;
      p -= d;
      games++;
    } else {
      s -= m;
      games++;
    }
  }
  return games - 1;
}