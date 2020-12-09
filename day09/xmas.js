const fs = require('fs');
let data = fs.readFileSync('puzzle.txt', 'utf8').split('\n').map(num => parseInt(num));

let preamble = 25;
const decrypt = (data, pre) => {
  let numTracker = {};
  let ans;

  for (let i = 0; i < data.length; i++) {
    // data[i] = 35, i = 0
    if (i < pre) {
      data.slice(i + 1, pre).map(n => {
        if (!numTracker[data[i]]) {
          numTracker[data[i]] = [data[i] + n];
        } else {
          numTracker[data[i]].push(data[i] + n);
        }
      });
    } else {
      // numTracker has all sums from preamble
      // data[i] = 40, i = 5
      let numArr = [];
      Object.values(numTracker).map(arr => numArr = numArr.concat(arr)); // flatten arrs
      if (!numArr.includes(data[i])) {
        ans = data[i];
        return ans;
      } else {
        delete numTracker[data[i - pre]];
        data.slice(i - pre + 1, i).map(n => {
          if (!numTracker[n]) {
            numTracker[n] = [data[i] + n];
          } else {
            numTracker[n].push(data[i] + n);
          }
        });
      }
      
    }
  }
}

module.exports.decrypt = decrypt;

// let number = decrypt(data, preamble);

// console.log(number);