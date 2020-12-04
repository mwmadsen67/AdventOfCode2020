const fs = require('fs');
let codeInput = fs.readFileSync('puzzle.txt', 'utf8').split('\n\n');

let count = 0;

for (let i = 0; i < codeInput.length; i++) {
  let code = codeInput[i].split("\n").map(el => el.split(" "));
  let newArr = [];
  for (let j = 0; j < code.length; j++) {
    if (code[j].length > 1) {
     for (let k = 0; k < code[j].length; k++) {
       newArr.push(code[j][k]);
     }
    } else {
      newArr.push(code[j][0]);
    }
  }
  let arr = newArr.map(el => el.slice(0,3))
  if ((newArr.length === 8) || (newArr.length === 7 && !arr.includes('cid'))) {
    count++;
  }
}

console.log(count);