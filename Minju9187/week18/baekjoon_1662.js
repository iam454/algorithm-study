let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
// let input = fs.readFileSync("1.txt").toString().trim();

const stack = [];
let str = "";
let cnt = "";
let result = 0;
let curCnt = 0;

input.split("").forEach((el) => {
  if (el === ")") {
    while (stack.length) {
      const curStr = stack.pop();

      if (curStr === "(") {
        break;
      }

      if (curStr >= "0" && curStr <= "9") {
        curCnt++;
      } else {
        curCnt += Number(curStr.substring(1));
      }
    }
    cnt = stack.pop();
    str = "*" + curCnt * Number(cnt);
    stack.push(str);
    str = "";
    curCnt = 0;
  } else {
    stack.push(el);
  }
});

while (stack.length) {
  const cur = stack.pop();
  if (cur >= "0" && cur <= "9") {
    result++;
  } else {
    result += Number(cur.substring(1));
  }
}

console.log(result);
