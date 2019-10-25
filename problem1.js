function rotatePicture(grid = [], k = 1) {
  let matrix = grid;
  //TODO: Optimized by calculating the position instead of using the loop
  for (let index = 0; index < k; index++) {
    console.log(`rotate at: ${index + 1}`)
    matrix = rotate(matrix);
  }
  
  return matrix;
}

function rotate(matrix) {
  const n = matrix.length;
  const resutls = [];
  matrix.map((item, i) =>  {
    for (let index = 0; index < n; index++) {
      let row = Math.abs(index);
      const col = Math.abs(n - i - 1);
      const val = item[index];
      console.log(rotate, row, col, val);
      let element = resutls[row];
      if (!element) {
        element =  resutls[row] = [];
      }
      element[col] = val;
    }
  });

  return resutls;
}

const grid = [
  [0, 16, 255, 1],
  [8, 128, 32, 3],
  [0, 0, 0, 3],
  [8, 128, 32, 3],
]

const k = 4;
const matrix = rotatePicture(grid, k);

console.log(matrix);