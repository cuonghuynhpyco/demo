/**
 * Picture
 */
module.exports = class Picture {
  /**
   * init Picture
   * @param {Array} grid
   */
  constructor(grid) {
    this._grid = grid;
  }

  /**
   * rotates
   * @param {Number} time
   * @return {Array}
   */
  rotates(time = 1) {
    try {
      let matrix = this._grid;
      // TODO: Optimized by calculating the position instead of using the loop
      for (let index = 0; index < time; index++) {
        matrix = this.rotatebk(matrix);
      }

      return matrix;
    } catch (error) {
      return [];
    }
  }

  /**
   * rotate
   * @param {Array} matrix
   * @return {Array}
   */
  rotate(matrix) {
    try {
      if (!Array.isArray(matrix)) {
        throw new Error('matrix_is_invalid');
      }
      const n = matrix.length - 1;
      let col = matrix.length - 1;
      const resutls = [];
      let row = 0;
      let times = matrix.length * matrix.length;
      while (times > 0) {
        times--;
        if (col < 0) {
          row++;
          col = n;
        }
        const val = matrix[col][row];
        const nextCol = Math.abs(n - col);
        if (!resutls[row]) {
          resutls[row] = [];
        }
        resutls[row][nextCol] = val;
        col--;
      }
      return resutls;
    } catch (error) {
      throw error;
    }
  }

  /**
   * rotatebk
   * @param {Array} matrix
   * @return {Array}
   */
  rotatebk(matrix) {
    try {
      if (!Array.isArray(matrix)) {
        throw new Error('matrix_is_invalid');
      }
      const n = matrix.length;
      const resutls = [];
      matrix.map((item, i) => {
        for (let index = 0; index < n; index++) {
          const row = Math.abs(index);
          const col = Math.abs(n - i - 1);
          const val = item[index];
          let element = resutls[row];
          if (!element) {
            element = resutls[row] = [];
          }
          element[col] = val;
        }
      });

      return resutls;
    } catch (error) {
      throw error;
    }
  }
};
