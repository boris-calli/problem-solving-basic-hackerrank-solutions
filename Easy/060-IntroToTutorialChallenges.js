'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'introTutorial' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER V
 *  2. INTEGER_ARRAY arr
 */

function introTutorial(V, arr, n) {
  for (let i = 0; i < n; i++) {
    if (arr[i] === V) return i;
  }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const V = parseInt(readLine().trim(), 10);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = introTutorial(V, arr, n);

    ws.write(result + '\n');

    ws.end();
}
