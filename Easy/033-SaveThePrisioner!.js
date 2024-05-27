function saveThePrisoner(n, m, s) {
  if (m === 0) return s;
  let candys = m;
  let startPoint = s;
  let prisioners = n;
  let leftCandys = candys % prisioners;
  let lastChair = (leftCandys + startPoint - 1) % prisioners;
  if (lastChair === 0) {
    return prisioners;
  } else {
    return lastChair;
  }
}