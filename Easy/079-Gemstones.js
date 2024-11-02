function gemstones(arr) {
  let n = arr.length;
  let s = '';
  let gemstones = 0;
  arr.forEach(rock => {
    if (rock.length > s.length) s = rock;
  });
  let minerals = new Set(s.split(''));
  minerals.forEach(mineral => {
    let counter = 0;
    for (let rock of arr) {
      if (rock.includes(mineral)) counter++;
    }
    if (counter === n) gemstones++;
  });
  return gemstones;
}