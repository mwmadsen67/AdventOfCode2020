const fs = require('fs');
let input = fs.readFileSync('easytest.txt', 'utf8').split('\n').map(num => parseInt(num));

const joltages = input.sort(function (a, b) {
  return a - b;
});

let diffs = {1: 0, 2: 0, 3: 0};

diffs[joltages[0]] += 1; // initial difference between ground and adapter

for (let i = 0; i < joltages.length - 1; i++) {
  let diff = joltages[i+1] - joltages[i];
  diffs[diff] += 1;
}

diffs[3] += 1; // final difference between adapter and device

let num = diffs[1] * diffs[3];

console.log(diffs, num);