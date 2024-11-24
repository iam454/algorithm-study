let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("예제2.txt").toString().split("\n");

const [N, Q, K] = input.shift().split(" ").map(Number);
const students = input.shift().split(" ").map(Number);
const questions = input[0].split(" ").map(Number);
const arr = Array(N + 1).fill(0);
const resultArr = Array(N + 1).fill(0);

for (let i = 0; i < N; i++) {
  if (students[i] !== Q) arr[i + 1] = arr[i] + 1;
}

for (let i = 0; i < N; i++) {
  resultArr[i + 1] += resultArr[i] + arr[i + 1];
}

for (let i = 0; i < K; i++) {
  console.log(resultArr[questions[i]]);
}
