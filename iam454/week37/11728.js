const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

let ap = 0;
let bp = 0;

const res = [];

while (ap < N && bp < M) {
  if (A[ap] > B[bp]) {
    res.push(B[bp++]);
  } else {
    res.push(A[ap++]);
  }
}

while (ap < N) {
  res.push(A[ap++]);
}
while (bp < M) {
  res.push(B[bp++]);
}

console.log(res.join(" "));
