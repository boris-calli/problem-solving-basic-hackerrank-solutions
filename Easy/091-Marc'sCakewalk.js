function marcsCakewalk(calorie) {
  let n = calorie.length;
  let sortedCalorie = calorie.sort((a, b) => b - a);
  let min = 0;
  for (let i = 0; i < n; i++) {
    min += sortedCalorie[i] * Math.pow(2, i);
  }
  return min;
}