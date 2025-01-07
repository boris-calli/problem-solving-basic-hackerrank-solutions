'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function countingSort(arr) {
  let n = arr.length;
  let frequency = new Array(n);
  let result = new Array(100);
  frequency.fill(0);
  result.fill(0);
  for (let KV of arr) {
    frequency[KV[0]]++;
  }
  let sum = 0;
  for (let i in result) {
    if (frequency[i] != undefined) {
      sum += frequency[i];
      result[i] = sum; 
    } else {
      result[i] = sum;
    }
  }
  console.log(...result);
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    let arr = [];

    for (let i = 0; i < n; i++) {
        const line = readLine().trim().split(' ');
        const index = parseInt(line[0], 10);
        const word = line[1];
        arr.push([ index, word ]);
    }

    countingSort(arr);
}