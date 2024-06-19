function cutTheSticks(arr) {
  let result = [];
  while (arr.length > 0) {
    result.push(arr.length);
    let auxArray = [];
    let min = Math.min(...arr);
    arr.forEach(num => auxArray.push(num - min));
    arr = auxArray.filter(num => num > 0);
  }
  return result;
}