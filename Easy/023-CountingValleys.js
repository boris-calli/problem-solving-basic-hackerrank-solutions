function countingValleys(steps, path) {
  let countSteps = 0;
  let backStep = 0;
  let flagValley = false;
  let countValleys = 0;
  for (let step of path) {
    backStep = countSteps;
    if (step === 'U') {
      countSteps++;
    } else if (step === 'D') {
      countSteps--;
    }
    if (countSteps < 0 && backStep === 0) flagValley = true;
    if (flagValley && countSteps === 0 && backStep < 0) {
      countValleys++;
      flagValley = false;
    }
  }
  return countValleys;
}
