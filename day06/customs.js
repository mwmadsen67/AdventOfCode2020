const fs = require('fs');
let input = fs.readFileSync('puzzle.txt', 'utf8').split('\n\n');

let letters;
let sum = 0;


for (let i = 0; i < input.length; i++) {
  letters = {};
  let ans = input[i].replace(/\n/g, '');
  for (let j = 0; j < ans.length; j++) {
    let char = ans[j];
    letters[char] = true;
  }
  sum += Object.values(letters).length
  // console.log(letters, Object.values(letters))
}

console.log(sum)