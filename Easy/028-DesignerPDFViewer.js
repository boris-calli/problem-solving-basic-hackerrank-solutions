function designerPdfViewer(h, word) {
  let letterHeight = new Map();
  let asciiCode = 97;
  h.forEach(letter => {
    let asciiValue = String.fromCharCode(asciiCode);
    letterHeight.set(asciiValue, letter);
    asciiCode++;
  });
  let letterSizeMax = 0;
  for (letter of word) {
    let letterSize = letterHeight.get(letter);
    letterSizeMax = Math.max(letterSizeMax, letterSize);
  }
  let wordSize = word.length;
  let highlightedArea = wordSize * letterSizeMax;
  return highlightedArea;
}