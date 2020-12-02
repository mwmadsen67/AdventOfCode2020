const fs = require('fs');
let codeInput = fs.readFileSync('puzzle_input.txt', 'utf8').split('\n').map(num => parseInt(num));

for(let i = 0; i < codeInput.length; i++) {
  for(let j = i + 1; j < codeInput.length; j++ ) {
    if (codeInput[i] + codeInput[j] === 2020) {
      console.log(codeInput[i] * codeInput[j]);
    }
  }
}