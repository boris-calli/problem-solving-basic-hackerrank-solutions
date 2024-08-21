function camelcase(s) {
  let words = 1;
  for (let i in s) {
    let charASCII = s.charCodeAt(i);
    if (charASCII >= 65 && charASCII <= 90) words++;
  }
  return words;
}