const fs = require('fs');
const decrypt = require('./xmas.js').decrypt;
let data = fs.readFileSync('puzzle.txt', 'utf8').split('\n').map(num => parseInt(num));
let preamble = 25;

const badNum = decrypt(data, preamble);
let [low, high, sum, nums] = [data[0], data[1], data[0] + data[1], [data[0], data[1]]];
for (let i = 2; i < badNum; i++) {
  if (sum === badNum) {
    break;
  } else if (sum < badNum) {
    sum += data[i];
    nums.push(data[i]);
    high = data[i];
  } else if (sum > badNum) {
    sum -= low;
    nums.shift();
    low = nums[0];
    i -= 1;
  }
}

num = Math.max(...nums) + Math.min(...nums);
console.log(num);