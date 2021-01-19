/**
 *
 * @param {number} row
 * @param {number} column
 * @param {number[]} arr
 */
function convert1DTo2D(row, column, arr1D) {
  const arr2D = new Array(row);
  for (let index = 0; index < row; index++) {
    arr2D[index] = new Array(column);
  }
  for (let rowIndex = 0; rowIndex < row; rowIndex++) {
    for (let columnIndex = 0; columnIndex < column; columnIndex++) {
      arr2D[rowIndex][columnIndex] = arr1D[rowIndex * row + columnIndex];
    }
  }
  return arr2D;
}
