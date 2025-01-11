const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

const res = [];

for (let i = 1; i < input.length; i += 2) {
  solution(input[i]);
}

function solution(str) {
  while (str.includes("ABB")) {
    str = str.replace("ABB", "BA");
  }
  res.push(str);
}

console.log(res.join("\n"));
