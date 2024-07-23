function serviceLane(n, cases, width) {
  let t = cases.length;
  let result = new Array();
  for (let i = 0; i < t; i++) {
    let start = cases[i][0];
    let end = cases[i][1];
    let segment = width.slice(start, end + 1);
    let wider = Math.min(...segment);
    result.push(wider);
  }
  return result;
}

// If the serviceLane function doesn't have the parameter width you have to add it and also replace the main function (remember this is javascript evaluate your situation)

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const t = parseInt(firstMultipleInput[1], 10);

    const width = readLine().replace(/\s+$/g, '').split(' ').map(widthTemp => parseInt(widthTemp, 10));

    let cases = Array(t);

    for (let i = 0; i < t; i++) {
        cases[i] = readLine().replace(/\s+$/g, '').split(' ').map(casesTemp => parseInt(casesTemp, 10));
    }

    const result = serviceLane(n, cases, width);

    ws.write(result.join('\n') + '\n');

    ws.end();
}