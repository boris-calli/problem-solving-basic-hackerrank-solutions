function strangeCounter(t) {
  let pastValue = 0;
  let pastTime = 0;
  let newTime = 1;
  let newValue = 3;
  
  while (newTime <= t) {
    pastTime = newTime;
    pastValue = newValue;
    newTime = newTime + newValue;
    newValue *= 2;
  }
  let difference = t - pastTime;
  let value = pastValue - difference;
  return value;
}