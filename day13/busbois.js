const fs = require('fs');
let input = fs.readFileSync('puzzle.txt', 'utf8').split('\n');

const timestamp = input[0];
const busIds = input[1].split(",");

let times = [];

for (let i = 0; i < busIds.length; i++) {
  if (busIds[i] !== "x") times.push(parseInt(busIds[i]))
}

console.log(timestamp, times);

let modulos = times.map(el => -(timestamp % el) + el);

let early = Math.min(...modulos);
let ind = modulos.indexOf(early);
let bus = times[ind];
let ans = early * bus;

console.log(early, ind, bus, ans)

