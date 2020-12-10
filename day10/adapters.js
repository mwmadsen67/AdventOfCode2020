const fs = require('fs');
let input = fs.readFileSync('puzzle.txt', 'utf8').split('\n').map(num => parseInt(num));

const joltages = input.sort(function (a, b) {
  return a - b;
});

joltages.unshift(0); // include ground
joltages.push(joltages[joltages.length - 1] + 3); // include device

let diffs = [];
let ones = 0;

// track series of differences by 1
for (let i = 0; i < joltages.length; i++) {
  let diff = joltages[i+1] - joltages[i];
  
  if (diff === 1) {
    ones++;
  } else if (diff === 3) {
    diffs.push(ones);
    ones = 0;
  } 
}

let numResults = 1;

// different series of ones affect the number of combinations following a
// tribonacci pattern
for (let j = 0; j < diffs.length; j++) {
  switch (diffs[j]) {
    case 2:
      numResults = numResults * 2;
      break;
    case 3:
      numResults = numResults * 4;
      break;
    case 4:
      numResults = numResults * 7;
      break;
    default:
      break;
  }
}

console.log(diffs, numResults);