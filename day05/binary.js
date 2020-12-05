const fs = require('fs');
let input = fs.readFileSync('puzzle.txt', 'utf8').split('\n');

let seatIds = [];
for (let i = 0; i < input.length; i++) {
  let pass = input[i];
  let [rowF, rowB, colL, colR] = [0, 127, 0, 7];
  let row, col;
  for (let j = 0; j < pass.length; j++) {
    switch (pass[j]) {
      case "F":
        rowB = rowF + ((rowB - rowF - 1) / 2);
        row = rowB;
        break;
      case "B":
        rowF = rowF + ((rowB - rowF + 1) / 2);
        row = rowF;
        break;
      case "L":
        colR = colL + ((colR - colL - 1) / 2);
        col = colR;
        break;
      case "R":
        colL = colL + ((colR - colL + 1) / 2);
        col = colL;
        break;
    }
  }
  let seatId = (row * 8) + col;
  seatIds.push(seatId);
}
console.log(seatIds)

console.log(Math.max(...seatIds)); // 32 - 913