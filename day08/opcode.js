const fs = require('fs');
let codes = fs.readFileSync('test.txt', 'utf8').split('\n').map(op => op.split(' '));

const moveCounter = {};
let acc = 0;

for (let i = 0; i < codes.length; i++) {
  if (moveCounter[i]) break;
  moveCounter[i] = true; // check for repeated move
  let [op, amt] = [codes[i][0], codes[i][1]];

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

console.log(acc);