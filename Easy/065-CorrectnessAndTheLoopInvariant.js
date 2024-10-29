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

function insertionSort (s, arr) {
  for(let i = 1; i < s; i++){
    var value = arr[i];
    var j = i - 1;
    while(j >= 0 && arr[j] > value){
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = value;
  }
  return arr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = insertionSort(s, arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}