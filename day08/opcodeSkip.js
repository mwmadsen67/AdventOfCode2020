const fs = require('fs');
let codes = fs.readFileSync('puzzle.txt', 'utf8').split('\n').map(op => op.split(' '));

const skipTries = {}; // keep track of skip attempts
let skipWorked = false;
let acc = 0;

// repeat opcode until skip works
while (!skipWorked) {
  const moveCounter = {};
  let skipTried = false;
  acc = 0;
  for (let i = 0; i < codes.length; i++) {
    if (i === (codes.length - 1)) skipWorked = true; // last operation means the skip worked
    if (moveCounter[i]) break; // break from opcode if repeated move
    moveCounter[i] = true; 

    let [op, amt] = [codes[i][0], codes[i][1]];

    if (!skipTried && !skipTries[i] && op === 'jmp') {
      op = 'nop';
      skipTries[i] = true;
      skipTried = true;
    } else if (!skipTried && !skipTries[i] && op === 'nop') {
      op = 'jmp';
      skipTries[i] = true;
      skipTried = true;
    }
  
    switch (op) {
      case 'acc':
        acc += amt[0] === '+' ? parseInt(amt.slice(1)) : parseInt(amt);
        break;
  
      case 'jmp':
        i += amt[0] === '+' ? (parseInt(amt.slice(1)) - 1) : (parseInt(amt) - 1);
        break;
        
      default:
        break;
    }
  }
}

console.log(skipTries, acc);