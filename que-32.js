let islandPerimeter = (grid) => {
  let totalParameter = 0;
  let overlapPerimeter = 0;
  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) {
        continue;
      }
      if (grid[i][j] === 1) {
        totalParameter = totalParameter + 1;
      }
      if (j < grid[i].length - 1 && grid[i][j] === 1 && grid[i][j + 1] === 1) {
        overlapPerimeter++;
      }
      if (i < grid.length - 1 && grid[i][j] === 1 && grid[i + 1][j] === 1) {
        overlapPerimeter++;
      }
    }
  }
  totalParameter = 4 * totalParameter;
  overlapPerimeter = 2 * overlapPerimeter;

  return totalParameter - overlapPerimeter;
};
const grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];
const perimeter = islandPerimeter(grid);
console.log(perimeter);
