const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
const n = Number(input[1]);
const A = input[2].split(" ").map(Number);
const m = Number(input[3]);
const B = input[4].split(" ").map(Number);

function getSubarraySums(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      result.push(sum);
    }
  }
  return result;
}

const sumA = getSubarraySums(A);
const sumB = getSubarraySums(B);

const mapB = new Map();
for (const sum of sumB) {
  mapB.set(sum, (mapB.get(sum) || 0) + 1);
}

let ans = 0;
for (const sum of sumA) {
  const target = T - sum;
  if (mapB.has(target)) {
    ans += mapB.get(target);
  }
}

console.log(ans);
