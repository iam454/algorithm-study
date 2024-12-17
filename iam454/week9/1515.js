const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let curNum = 0;
let index = 0;

while (true) {
  curNum += 1;

  const curNumArr = curNum.toString().split("");
  for (let i = 0; i < curNumArr.length; i++) {
    if (curNumArr[i] === input[index]) {
      index += 1;
    }
    if (index === input.length) {
      break;
    }
  }

  if (index === input.length) {
    break;
  }
}

console.log(curNum);
