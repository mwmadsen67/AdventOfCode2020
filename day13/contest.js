const fs = require('fs');
let input = fs.readFileSync('test4.txt', 'utf8').split('\n');

const ids = input[1].split(",");
let numxs = 0;
let busIds = [];

for (let i = 0; i < ids.length; i++) {
  if (ids[i] !== "x") {
    if (numxs > 0) {
      busIds.push("x" + numxs + "," + ids[i]);
    } else {
      busIds.push(parseInt(ids[i]));
    }
    numxs = 0;
  } else {
    numxs++;
  }
}

console.log(busIds)

let good = false;
let multiple = busIds[0];
let first = 0;
let count = 0;

while (!good) {
  good = true
  first += multiple;
  let numx = 0;
  for (let i = 0; i < busIds.length; i++) {
    let num = busIds[i];
    if (busIds[i][0] === "x") {
      let temp = busIds[i].split(",");
      numx += parseInt(temp[0].slice(1));
      num = parseInt(temp[1]);
    }
    let timestamp = first + numx + i;
    if (timestamp % num !== 0) {
      good = false;
      break;
    } else {
      if (i !== 0 && i > count) {
        console.log(first, multiple, num, (multiple * num));
        multiple = (multiple * num);
        count++;
      }
    }
    
  }
}

console.log(first);