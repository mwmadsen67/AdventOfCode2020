const fs = require('fs');
let codeInput = fs.readFileSync('puzzle.txt', 'utf8').split('\n');


const treeFinder = (right, down) => {
  let pos = 0;
  let trees = 0;

  for (let i = 0; i < codeInput.length; i = i + down) {
    let input = codeInput[i].repeat(300);
    if (input[pos] === '#') {
      trees++;
    }
    pos = pos + right;
  }

  return trees;

}

// console.log(treeFinder(1,2));

const numTrees = treeFinder(1, 1) * treeFinder(3, 1) * treeFinder(5, 1) * treeFinder(7, 1) * treeFinder(1, 2);

console.log(numTrees);