const fs = require('fs');
let codeInput = fs.readFileSync('puzzle_input.txt', 'utf8').split('\n');

for (let i = 0; i < codeInput.length; i++) {
  for (let j = i + 1; j < codeInput.length; j++) {
    for(let k = j + 1; k < codeInput.length; k++) {
      if (parseInt(codeInput[i]) + parseInt(codeInput[j]) + parseInt(codeInput[k]) === 2020) {
        console.log(parseInt(codeInput[i]) * parseInt(codeInput[j]) * parseInt(codeInput[k]));
      }
    }
  }
}