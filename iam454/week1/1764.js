const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const neverHeard = new Map();
const neverSeen = new Map();

input.forEach((line, index) => {
  if (index < N) {
    neverHeard.set(line, 1);
  } else {
    neverSeen.set(line, 1);
  }
});

const answer = [];

neverHeard.forEach((v, k) => {
  if (neverSeen.has(k)) {
    answer.push(k);
  }
});

console.log(`${answer.length}\n${answer.sort().join("\n")}`);
