const fs = require('fs');
let rules = fs.readFileSync('puzzle.txt', 'utf8').split('\n');

class Node {
  constructor(color, innerColors) {
    this.color = color;
    this.innerColors = innerColors;
  }
};

const getColors = (arr) => {
  // [ 's contain 5 faded blue ', 's, 6 dotted black ' ]
  let colors = [];
  arr.forEach(str => {
    words = str.split(' ');
    words.pop();
    colors.push(words.slice(-3).join(' '));
  })
  return colors;
};

let luggage = {};
// parse rules and fill luggage with k v pairs
for (let i = 0; i < rules.length; i++) {
  let stuff = rules[i].split('bag'); // ex: [ 'bright white ', 's contain 1 shiny gold ', '.' ]
  stuff.pop(); // get rid of trailing punctuation
  let nodeColor = stuff[0].slice(0, -1); // ex: 'bright white'
  let contains = getColors(stuff.slice(1)); // ex: ['1 shiny gold']
  luggage[nodeColor] = contains;
};

// console.log(luggage);

const rootNode = new Node("shiny gold", luggage["shiny gold"]);

// bfs
const queue = [rootNode];
let num = 0;
while (queue.length !== 0) {
  curBag = queue.pop();
  curBag.innerColors.forEach(bag => {
    if (bag !== 'contain no other') {
      let words = bag.split(' ');
      let numBags = parseInt(words.shift());
      let color = words.join(' ');
      for (let n = 0; n < numBags; n++) {
        num++;
        childBag = new Node(color, luggage[color]);
        queue.unshift(childBag);
      }
    }
  })
}

console.log(num);
