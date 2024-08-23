
function caesarCipher(s, k) {
  let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let cipherText = '';
  for (let i in s) {
    let charASCII = s.charCodeAt(i);
    let char = s.at(i);
    if (charASCII >= 65 && charASCII <= 90) { // mayusculas
      let position = alphabet.indexOf(char);
      let cipherLetterIndex = (position + k) % 26;
      cipherText += alphabet[cipherLetterIndex];
    } else if (charASCII >= 97 && charASCII <= 122) { // minusculas
      let position = alphabet.indexOf(char.toUpperCase());
      let cipherLetterIndex = (position + k) % 26;
      cipherText += alphabet[cipherLetterIndex].toLowerCase();
    } else {
      cipherText += s.at(i);
    }
  }
  return cipherText;
}