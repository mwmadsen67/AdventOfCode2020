const fs = require('fs');
let codeInput = fs.readFileSync('puzzleInput.txt', 'utf8').split('\n');

const letterCounter = (let, str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === let) {
      count++;
    }
  }
  return count;
}

let pwCount = 0;
for (let i=0; i < codeInput.length; i++) {
  // let pw = codeInput[i]; // ex: 14-16 v: vvvvvvvvvvvvvtvzv
  let [limits, letter, pw] = codeInput[i].split(" "); // ["14-16", "v:", "vvvvvvvvvvvvvtvzv"]
  let [least, most] = limits.split("-").map(el => parseInt(el));

  letCount = letterCounter(letter[0], pw);
  if ( letCount >= least && letCount <= most) {
    pwCount++;
  }

}

console.log(pwCount)