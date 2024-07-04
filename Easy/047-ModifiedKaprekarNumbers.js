function kaprekarNumbers(p, q) {
  let kaprekars = new Array();
  for (let i = p; i <= q; i++) {
    let n = String(i * i);
    let numberLength = n.length;
    let middle = Math.floor(numberLength / 2);
    let left = Number(n.slice(0, middle));
    let right = Number(n.slice(middle, numberLength + 1));
    let kaprekarNumber = left + right;
    if (kaprekarNumber === i) kaprekars.push(i);
  }
  
  if (kaprekars.length === 0) {
    console.log("INVALID RANGE");
  } else {
    console.log(...kaprekars);
  }
}