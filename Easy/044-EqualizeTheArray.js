function equalizeArray(arr) {
  let countValues = new Map();
  arr.forEach(elem => {
    let k = elem;
    let value = countValues.get(k);
    if (value === undefined) {
      countValues.set(k, 1);
    } else {
      value++;
      countValues.set(k, value);
    }
  });
  let max = 0;
  countValues.forEach((value, key, map) => {
    if (max < value) max = value;
  });
  let deletions = arr.length - max;
  return deletions;
}