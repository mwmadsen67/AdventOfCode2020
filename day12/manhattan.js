const fs = require('fs');
let input = fs.readFileSync('puzzle.txt', 'utf8').split('\n');

// const dirs = {"E": 0, "S": 0, "W": 0, "N": 0};
const dirs = [0,0,0,0];
let angle = 0;

for (let i = 0; i < input.length; i++) {
  let dir = input[i][0];
  let num = parseInt(input[i].slice(1));

  switch (dir) {
    case "E":
      dirs[0] += num;
      break;
    case "S":
      dirs[1] += num;
      break;
    case "W":
      dirs[2] += num;
      break;
    case "N":
      dirs[3] += num;
      break;
    case "F":
      let rot = (angle % 360) / 90;
      if (rot >= 0) {
        dirs[rot] += num;
      } else {
        dirs[rot + 4] += num;
      }
      break;
    case "R":
      angle += num;
      break;
    case "L":
      angle -= num;
      break;
    default:
      break;
  }
}

console.log(dirs)

let manhattan = Math.abs(dirs[0] - dirs[2]) + Math.abs(dirs[1] - dirs[3]);

console.log(manhattan);

// 1791 too high