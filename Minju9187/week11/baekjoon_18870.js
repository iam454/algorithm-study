let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("1.txt").toString().split("\n");
const N = Number(input.shift());

const arr = input[0].split(" ").map(Number);

const setArr = Array.from(new Set([...arr])).sort((a, b) => a - b);

const obj = {};
const answer = [];

setArr.forEach((v, i) => (obj[v] = i));

for (let i = 0; i < N; i++) {
  answer.push(obj[arr[i]]);
}

console.log(answer.join(" "));
