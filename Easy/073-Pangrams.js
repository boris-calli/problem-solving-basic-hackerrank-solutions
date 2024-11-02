function pangrams(s) {
  let asciiCode = 65;
  let alphabetCount = 0;
  for (let i = 0; i < 26; i++) {
    let lowerCaseLetter = String.fromCharCode(asciiCode + 32 + i);
    let upperCaseLetter = String.fromCharCode(asciiCode + i);
    if (s.includes(lowerCaseLetter) || s.includes(upperCaseLetter)) alphabetCount++;
  }
  if (alphabetCount === 26) {
    return 'pangram';
  } else {
    return 'not pangram';
  }
}