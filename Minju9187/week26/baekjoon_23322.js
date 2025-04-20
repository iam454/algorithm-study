let fs = require("fs");
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./1.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const arr = [0];
input[0].split(" ").map((v) => arr.push(+v));

let answer = 0;
let day = 0;

let key = true;

while (key) {
  key = false;
  for (let i = K + 1; i < N + 1; i++) {
    if (arr[i] > arr[i - K]) {
      key = true;
      answer += arr[i] - arr[i - K];
      arr[i] = arr[i - K];
      day++;
      break;
    }
  }
  arr.sort((a, b) => a - b);
}

console.log(answer, day);
