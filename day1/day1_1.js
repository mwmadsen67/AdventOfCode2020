const fs = require('fs');
let codeInput = fs.readFileSync('puzzle_input.txt').split('\n');

for(let i = 0; i < codeInput.length; i++) {
  for(let j = i + 1; j < codeInput.length; j++ ) {
    if (parseInt(codeInput[i]) + parseInt(codeInput[j]) === 2020) {
      console.log(parseInt(codeInput[i]) * parseInt(codeInput[j]));
    }
  }
}