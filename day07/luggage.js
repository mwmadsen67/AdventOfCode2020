const fs = require('fs');
let rules = fs.readFileSync('puzzle.txt', 'utf8').split('\n');

class Node {
  constructor(color, innerColors) {
    this.color = color;
    this.innerColors = innerColors;
    this.children = [];
    this.parents = [];
  }

  addChild (child) {
    this.children.push(child);
    child.parents.push(this);
  }

  numParents () {
    // bfs
    let parentObj = {};
    let queue = this.parents;
    let parent;
    while (queue.length !== 0) {
      parent = queue.pop();
      parentObj[parent.color] = true;
      parent.parents.forEach(par => queue.unshift(par));
    }
    let num = Object.keys(parentObj).length;
    console.log(num)
    return num;
  }
};

const getColors = (arr) => {
  // [ 's contain 5 faded blue ', 's, 6 dotted black ' ]
  let colors = [];
  arr.forEach(str => {
    words = str.split(' ');
    words.pop();
    colors.push(words.slice(-2).join(' '))
  })
  return colors;
};

let luggage = {};
// parse rules and fill luggage with nodes
for (let i = 0; i < rules.length; i++) {
  let stuff = rules[i].split('bag'); // ex: [ 'bright white ', 's contain 1 shiny gold ', '.' ]
  stuff.pop(); // get rid of trailing punctuation
  let nodeColor = stuff[0].slice(0, -1); // ex: 'bright white'
  let contains = getColors(stuff.slice(1));
  luggage[nodeColor] = new Node(nodeColor, contains);
};

Object.values(luggage).forEach(bag => {
  bag.innerColors.forEach(color => {
    if (color !== 'no other') {
      bag.addChild(luggage[color])
    }
  });
});

luggage['shiny gold'].numParents();