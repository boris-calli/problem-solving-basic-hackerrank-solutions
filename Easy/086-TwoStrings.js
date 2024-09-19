function twoStrings(s1, s2) {
  let setS1 = new Set(s1.split(''));
  let setS2 = new Set(s2.split(''));
  if (setS1.size < setS2.size) {
    for (let char of setS1) {
      if (setS2.has(char)) return "YES";
    }  
  } else {
    for (let char of setS2) {
      if (setS1.has(char)) return "YES";
    }
  }
  return "NO";
}