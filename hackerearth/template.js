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
 * @param {string} input
 */
function main(input) {
  const inputArr = parseInput(input);
  const numberOfTestCases = inputArr.shift();
  for (let index = 0; index < numberOfTestCases; index++) {
    // Code goes here
  }
}
