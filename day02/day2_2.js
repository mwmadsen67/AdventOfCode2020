const fs = require('fs');
let codeInput = fs.readFileSync('puzzleInput.txt', 'utf8').split('\n');


let pwCount = 0;
for (let i = 0; i < codeInput.length; i++) {
  // let pw = codeInput[i]; // ex: 14-16 v: vvvvvvvvvvvvvtvzv
  let [limits, letter, pw] = codeInput[i].split(" "); // ["14-16", "v:", "vvvvvvvvvvvvvtvzv"]
  let [first, second] = limits.split("-").map(el => parseInt(el));

  if (pw[first - 1] === letter[0] && pw[second - 1] !== letter[0]) {
    pwCount++;
  } else if (pw[first - 1] !== letter[0] && pw[second - 1] === letter[0]) {
    pwCount++;
  }

}

console.log(pwCount)