function repeatedString(s, n) {
  let aCount = 0;
  for (let letter of s) {
    if (letter === 'a') aCount++;
  }
  let sizeString = s.length;
  let coeficient = Math.floor(n / sizeString);
  let modulus = Math.floor(n % sizeString);
  aCount *= coeficient;
  let splitString = s.split('');
  for (let i = 0; i < modulus; i++) {
    if (splitString[i] === 'a') aCount++;
  }
  return aCount; 
}