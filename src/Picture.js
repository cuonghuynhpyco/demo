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
      const rotateTime = time % 4;
      if (rotateTime == 0) {
        return matrix;
      }
      for (let index = 0; index < rotateTime; index++) {
        matrix = this.rotate(matrix);
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

      const resutls = [];
      const n = matrix.length - 1;
      let col = matrix.length - 1;
      let row = 0;
      let nextCol;
      let val;
      let times = matrix.length * matrix.length;
      while (times > 0) {
        times--;
        if (col < 0) {
          row++;
          col = n;
        }
        val = matrix[col][row];
        nextCol = Math.abs(n - col);
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
