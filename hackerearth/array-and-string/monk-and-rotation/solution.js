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
  const inputArr = words.map((word) => (isNaN(parseInt(word)) ? word : parseInt(word)));
  return inputArr;
}

/**
 *
 * @param {string} input
 */
function main(input) {
  let inputArr = parseInput(input);
  const numberOfTestCases = inputArr.shift();
  for (let index = 0; index < numberOfTestCases; index++) {
    const arrLen = parseInt(inputArr.shift());
    const steps = parseInt(inputArr.shift()) % arrLen;
    const rotation = arrLen - steps;
    const arr = inputArr.slice(0, arrLen);
    inputArr = inputArr.slice(arrLen);
    const rotatedArr = [...arr.slice(rotation), ...arr.slice(0, rotation)];
    console.log(rotatedArr.join(' '));
  }
}
