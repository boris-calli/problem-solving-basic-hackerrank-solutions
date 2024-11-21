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

function quickSort(arr, n) {
  if (n <= 1) return arr;
  let left = new Array();
  let right = new Array();
  let pivot = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  let result = [...quickSort(left, left.length), pivot, ...quickSort(right, right.length)];
  console.log(...result);
  return result;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().trim().split(' ').map(Number);

    quickSort(arr, n);
}

