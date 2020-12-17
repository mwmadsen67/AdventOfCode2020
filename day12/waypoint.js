const fs = require('fs');
let input = fs.readFileSync('puzzle.txt', 'utf8').split('\n');

let pos = [0,0];
const waypoint = [10, 1]; // [x,y] or [east, north]

for (let i = 0; i < input.length; i++) {
  let dir = input[i][0];
  let num = parseInt(input[i].slice(1));

  switch (dir) {
    case "E":
      waypoint[0] += num;
      break;
    case "S":
      waypoint[1] -= num;
      break;
    case "W":
      waypoint[0] -= num;
      break;
    case "N":
      waypoint[1] += num;
      break;
    case "F":
      for (let j = 0; j < num; j++) {
        pos = [pos[0] + waypoint[0], pos[1] + waypoint[1]]
      }
      break;
    case "R":
      let rotR = num / 90;
      for (let j = 0; j < rotR; j++) {
        let temp = waypoint.slice();
        waypoint[0] = temp[1];
        waypoint[1] = -temp[0];
      }
      break;
    case "L":
      let rotL = num / 90;
      for (let j = 0; j < rotL; j++) {
        let temp = waypoint.slice();
        waypoint[0] = -temp[1];
        waypoint[1] = temp[0];
      }
      break;
    default:
      break;
  }
}

console.log(pos)

let manhattan = Math.abs(pos[0]) + Math.abs(pos[1]);

console.log(manhattan);
