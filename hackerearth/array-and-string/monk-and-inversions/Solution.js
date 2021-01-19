process.stdin.resume();
process.stdin.setEncoding('utf-8');
let stdInput = '';

process.stdin.on('data', function (input) {
  stdInput += input;
});

process.stdin.on('end', function () {
  main(stdInput);
});

/**
 *
 * @param {string} input
 */
function parseInput(input) {
  const words = input.split(/\s+/);
  const inputArr = words.map(word => (isNaN(parseInt(word)) ? word : parseInt(word)));
  return inputArr;
}

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

/**
 *
 * @param {number} n
 * @param  {number[]} arr
 */
function solution(n, arr) {
  const matrix = convert1DTo2D(n, n, arr);
  let result = 0;
  for (let rowIndex = 0; rowIndex < n; rowIndex++) {
    for (let columnIndex = 0; columnIndex < n; columnIndex++) {
      result += inversionResult(rowIndex, columnIndex, matrix);
    }
  }
  console.log(result);
}

/**
 *
 * @param {number} row
 * @param {number} column
 * @param  {number[][]} arr
 */
function inversionResult(row, column, arr) {
  let cellPairs = 0;
  const val = arr[row][column];
  for (let rowIndex = 0; rowIndex < row; rowIndex++) {
    for (let columnIndex = 0; columnIndex < column; columnIndex++) {
      const currVal = arr[rowIndex][columnIndex];
      if (currVal > val) cellPairs++;
    }
  }
  return cellPairs;
}

/**
 *
 * @param {string} input
 */
function main(input) {
  const inputArr = parseInput(input);
  const numberOfTestCases = inputArr.shift();
  for (let index = 0; index < numberOfTestCases; index++) {
    const n = inputArr.shift();
    const arr = inputArr.slice(0, n * n);
    inputArr.shift(n * n);
    solution(n, arr);
  }
}
