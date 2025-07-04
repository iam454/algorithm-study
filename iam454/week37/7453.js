const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const A = [];
const B = [];
const C = [];
const D = [];

for (let i = 1; i <= N; i++) {
  const [a, b, c, d] = input[i].split(" ").map(Number);
  A.push(a);
  B.push(b);
  C.push(c);
  D.push(d);
}

const sumAB = new Map();
for (const a of A) {
  for (const b of B) {
    const sum = a + b;
    sumAB.set(sum, (sumAB.get(sum) || 0) + 1);
  }
}

let ans = 0;

for (const c of C) {
  for (const d of D) {
    const target = -(c + d);
    if (sumAB.has(target)) {
      ans += sumAB.get(target);
    }
  }
}

console.log(ans);
