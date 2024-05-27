function bonAppetit(bill, k, b) {
  let n = bill.length;
  let bActual = 0;
  for (let i = 0; i < n; i++) {
    if (k !== i) {
      if (bill[i] >= 0 && bill[i] <= 10 ** 4)
        bActual += bill[i];
    }
  }
  bActual = Math.floor(bActual / 2);
  if (bActual == b ) {
    console.log("Bon Appetit");
  } else {
    console.log(Math.abs(b - bActual));
  }
}