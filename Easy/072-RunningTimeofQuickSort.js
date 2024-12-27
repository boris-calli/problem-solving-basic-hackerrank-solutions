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

let swaps = 0;
let shifts = 0;

function partition(A, lo, hi) {
  let pivot = A[hi];
  let i = lo;
  for (let j = lo; j <= hi - 1; j++) {
    if (A[j] <= pivot) {
      let aux = A[i];
      A[i] = A[j];
      A[j] = aux;
      i++;
      swaps++;
    }
  }
  let aux = A[i];
  A[i] = A[hi];
  A[hi] = aux;
  swaps++;
  return [A, i];
}

function quickSort(A, lo, hi) {
  if (lo >= hi || lo < 0) return A;
  let p = 0;
  [A, p] = partition(A, lo, hi);
  quickSort(A, lo, p - 1);
  quickSort(A, p + 1, hi);
}

function insertionSort (s, arr) {
  for(let i = 1; i < s; i++){
    var value = arr[i];
    var j = i - 1;
    while(j >= 0 && arr[j] > value){
      arr[j + 1] = arr[j];
      j = j - 1;
      shifts++;
    }
    arr[j + 1] = value;
  }
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr1 = readLine().trim().split(' ').map(Number);
    const arr2 = [...arr1]
    quickSort(arr1, 0, n - 1);
    insertionSort(n, arr2);
    console.log(shifts - swaps);
}

