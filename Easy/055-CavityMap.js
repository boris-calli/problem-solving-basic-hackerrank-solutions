function cavityMap(grid) {
  let n = grid.length;
  grid = grid.map(row => row.split(''));
  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      let center = grid[i][j];
      let bottom = grid[i + 1][j];
      let above = grid[i - 1][j];
      let right = grid[i][j + 1];
      let left = grid[i][j - 1];
      if (center > above && center > bottom && center > left && center > right) {
        grid[i][j] = 'X';
      }
    }
  }
  grid = grid.map(row => row.join(''));
  return grid;
}