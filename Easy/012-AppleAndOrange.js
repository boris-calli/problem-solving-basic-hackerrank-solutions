const addingDistance = (treeDistance, arrFruit, sizeFruit) => {
  for (let i = 0; i < sizeFruit; i++) {
    arrFruit[i] = treeDistance + arrFruit[i];
  }
  return arrFruit;
}

const countFruitInRange = (s, t, arrFruit, sizeFruit) => {
  let counter = 0;
  for (let i = 0; i < sizeFruit; i++) {
    if (arrFruit[i] >= s && arrFruit[i] <= t) counter++;
  }
  return counter;
}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let m = apples.length;
  let n = oranges.length;
  let countFruit = [0, 0];
  apples = addingDistance(a, apples, m);
  oranges = addingDistance(b, oranges, n);
  countFruit[0] = countFruitInRange(s, t, apples);
  countFruit[1] = countFruitInRange(s, t, oranges);
  console.log(countFruit[0]);
  console.log(countFruit[1]);
}