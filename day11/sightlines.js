const fs = require('fs');
let origInput = fs.readFileSync('puzzle.txt', 'utf8').split('\n');

const seating = (input) => {
  let newSeats = [];
  let totOcc = 0;

  const checkDir = (row, col, pos) => {
    pos = [pos[0] + row, pos[1] + col];
    while (input[pos[0]]) {
      let nextSeat = input[pos[0]][pos[1]];
      if (nextSeat === "#" || nextSeat === "L") {
        return nextSeat;
      } else if (nextSeat === undefined) {
        return ".";
      }
      pos = [pos[0] + row, pos[1] + col];
    }
  }
  
  for (let i = 0; i < input.length; i++) {
    let row = input[i];
    newSeats.push([]);
    for (let j = 0; j < row.length; j++) {
      let seat = row[j];

      const dirs = [];

      for (let i2 = -1; i2 <= 1; i2++) {
        for(let j2 = -1; j2 <= 1; j2++) {
          if (i2 === 0 && j2 === 0) j2 = 1;
          dirs.push(checkDir(i2, j2, [i,j]));
        }
      }

      let numOcc = 0;
      switch (seat) {
        case "#":
          totOcc++;
          // iterate over dirs
          for (let k = 0; k < dirs.length; k++) {
            if (dirs[k] === "#") numOcc++;
            if (numOcc > 4) {
              seat = "L";
              break;
            }
          }
          break;
        case "L":
          for (let k = 0; k < dirs.length; k++) {
            if (dirs[k] === "#") numOcc++;
            if (numOcc > 0) {
              break;
            }
            if (k === dirs.length - 1) {
              seat = "#";
            }
          }
          break;
        default:
          break;
      }
      newSeats[i].push(seat);
    }
  }
  // console.log(newSeats);
  // console.log(totOcc);
  return [newSeats, totOcc];
}


let nextSeats = seating(origInput);
let occupied = nextSeats[1];
let i = 0;
while (true) {
  i++;
  console.log("Round ", i + 1)
  nextSeats = seating(nextSeats[0]);
  if (occupied === nextSeats[1]) break;
  occupied = nextSeats[1];
}

console.log(occupied);