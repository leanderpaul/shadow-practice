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
 * @param {number[]} arr
 */
function solution(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length - 1; i++) {
    const xor = arr[i] ^ arr[i + 1];
    if (xor < min) min = xor;
  }
  return min;
}

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
  console.time('Time taken');
  let inputArr = parseInput(input);
  const numberOfTestCases = inputArr.shift();
  for (let index = 0; index < numberOfTestCases; index++) {
    const arrLen = parseInt(inputArr.shift());
    const arr = inputArr.slice(0, arrLen);
    const min = solution(arr.sort((a, b) => a > b));
    process.stdout.write(min + '\n');
    inputArr = inputArr.slice(arrLen);
  }
  console.timeEnd('Time taken');
}
