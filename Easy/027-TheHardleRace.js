function hurdleRace(k, height) {
  let n = height.length;
  let dosis = 0;
  let maxHurdle = Math.max(...height);
  if (k < maxHurdle) dosis = maxHurdle - k; 
  return dosis;
}