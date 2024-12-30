let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("1.txt").toString().split("\n");

const N = input.shift();
let cnt = 0;

for (let i = 0; i < N; i++) {
  if (checkGoodWord(input[i].trim())) cnt++;
}

console.log(cnt);

function checkGoodWord(string) {
  const arr = [];
  for (let i = 0; i < string.length; i++) {
    if (
      (string[i] === "A" && arr[arr.length - 1] === "A") ||
      (string[i] === "B" && arr[arr.length - 1] === "B")
    ) {
      arr.pop();
    } else {
      arr.push(string[i]);
    }
  }
  return arr.length === 0;
}
