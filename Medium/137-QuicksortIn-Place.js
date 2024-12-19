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

function partition(A, lo, hi) {
  let pivot = A[hi];
  let i = lo;
  for (let j = lo; j <= hi - 1; j++) {
    if (A[j] <= pivot) {
      let aux = A[i];
      A[i] = A[j];
      A[j] = aux;
      i++;
    }
  }
  let aux = A[i];
  A[i] = A[hi];
  A[hi] = aux;
  console.log(...A);
  return [A, i];
}

function quickSort(A, lo, hi) {
  if (lo >= hi || lo < 0) return A;
  let p = 0;
  [A, p] = partition(A, lo, hi);
  quickSort(A, lo, p - 1);
  quickSort(A, p + 1, hi);
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().trim().split(' ').map(Number);

    quickSort(arr, 0, n - 1);
}

