function catAndMouse(x, y, z) {
  let catAPosition = x;
  let catBPosition = y;
  let mouseCPosition = z;
  let distanceCatAToMouseC = Math.abs(mouseCPosition - catAPosition);
  let distanceCatBToMouseC = Math.abs(mouseCPosition - catBPosition);
  if (distanceCatAToMouseC === distanceCatBToMouseC) return 'Mouse C';
  if (distanceCatAToMouseC < distanceCatBToMouseC) {
    return 'Cat A';
  } else {
    return 'Cat B';
  }
}