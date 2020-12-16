const fs = require('fs');
let origInput = fs.readFileSync('puzzle.txt', 'utf8').split('\n');

const seating = (input) => {
  let newSeats = [];
  let totOcc = 0;
  for (let i = 0; i < input.length; i++) {
    let row = input[i];
    newSeats.push([]);
    for (let j = 0; j < row.length; j++) {
      let seat = row[j];
   
      let [left, right] = [row[j - 1], row[j + 1]];
      let [lup, up, rup] = (i !== 0) ? [input[i - 1][j - 1], input[i - 1][j], input[i - 1][j + 1]] : [".", ".", "."];
      let [rdown, down, ldown] = (i !== input.length - 1) ? [input[i + 1][j + 1], input[i + 1][j], input[i + 1][j - 1]] : [".", ".", "."];
  
      const dirs = [left, lup, up, rup, right, rdown, down, ldown];
      let numOcc = 0;
      switch (seat) {
        case "#":
          totOcc++;
          // iterate over dirs
          for (let k = 0; k < dirs.length; k++) {
            if (dirs[k] === "#") numOcc++;
            if (numOcc > 3) {
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
              // console.log("num Occ", numOcc);
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