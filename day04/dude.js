const fs = require('fs');
let codeInput = fs.readFileSync('puzzle.txt', 'utf8').split('\n\n');

let count = 0;

const isHex = str => {
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    if (i > 6 || char < 48 || (char > 57 && char < 97) || char > 102) {
      return false;
    }
  }
  return true;
};

const isNum = str => {
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    if (i > 9 || char < 48 || char > 57) {
      return false;
    }
  }
  return true;
}

const eyeColor = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
let results = [];

for (let i = 0; i < codeInput.length; i++) {
  let code = codeInput[i].split("\n").map(el => el.split(" "));
  let newArr = [];
  for (let j = 0; j < code.length; j++) {
    if (code[j].length > 1) {
      for (let k = 0; k < code[j].length; k++) {
        newArr.push(code[j][k]);
      }
    } else {
      newArr.push(code[j][0]);
    }
  }
  let cidno = newArr.map(el => el.slice(0,3));
  // console.log(cidno);
  let arr = newArr.map(el => el.split(":"));
  let obj = {};
  arr.map(el => obj[el[0]] = el[1]); // turn array of [[k1:v1],[k2,v2]] into {k1:v1, k2:v2}
  // console.log(obj);
  if ((newArr.length === 8) || (newArr.length === 7 && !cidno.includes('cid'))) {
    if (parseInt(obj.byr) >= 1920 && parseInt(obj.byr) <= 2002) {
      if (parseInt(obj.iyr) >= 2010 && parseInt(obj.iyr) <= 2020) {
        if (parseInt(obj.eyr) >= 2020 && parseInt(obj.eyr) <= 2030) {
          let meas = obj.hgt.slice(-2);
          let num = parseInt(obj.hgt.slice(0, -2));
          if ((meas === "cm" && num >= 150 && num <= 193) || (meas === "in" && num >= 59 && num <= 76)) {
            if (obj.hcl.slice(0,1) === "#" && isHex(obj.hcl.slice(1))) {
              if (eyeColor.includes(obj.ecl)) {
                if (obj.pid.length === 9 && isNum(obj.pid)) {
                  console.log(obj);
                  results.push(Object.values(obj));
                  count++;
                }
              }
            }
          }
        }
      }
    }
    
  }
}
console.log(count);