let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("예제.txt").toString().split("\n");

const [H, W] = input.shift().split(" ");

const arr = [];
const result = Array.from({ length: H }, () => Array(W).fill(0));

for (let i = 0; i < input.length; i++) {
  const arr = input[i].trim().split("");
  let start = false;
  let cnt = 0;
  for (let j = 0; j < arr.length; j++) {
    if (!start) result[i][j] = -1;
    if (arr[j] === "c") {
      start = true;
      cnt = 0;
      result[i][j] = cnt;
    } else if (start && arr[j] === ".") {
      result[i][j] = ++cnt;
    }
  }
}

for (let i = 0; i < result.length; i++) {
  console.log(result[i].join(" "));
}
