function migratoryBirds(arr) {
  let n = arr.length;
  let typeCount = [0, 0, 0, 0, 0];
  for (let i = 0; i < n; i++) {
    switch (arr[i]) {
      case 1:
        typeCount[0]++;
        break;
      case 2:
        typeCount[1]++;
        break;
      case 3:
        typeCount[2]++;
        break;
      case 4:
        typeCount[3]++;
        break;
      case 5:
        typeCount[4]++;
        break;
    }
  }
  let max = Math.max(...typeCount);
  let type = typeCount.indexOf(max);
  return type + 1;
}