const fs = require('fs');
let input = fs.readFileSync('puzzle.txt', 'utf8').split('\n\n');

let letters;
let sum = 0;


for (let i = 0; i < input.length; i++) {
  letters = {};
  let ansArr = input[i].split('\n');
  let people = ansArr.length;
  for (let j = 0; j < ansArr.length; j++) {
    let ans = ansArr[j];
    for (let k = 0; k < ans.length; k++) {
      if (letters[ans[k]]) {
        letters[ans[k]]++;
      } else {
        letters[ans[k]] = 1;
      }
    }
  }
  let counts = Object.values(letters);
  for (let l = 0; l < counts.length; l++) {
    if (counts[l] % people === 0) {
      sum += (counts[l] / people);
    }
  }
  console.log(letters, Object.values(letters), sum)
}