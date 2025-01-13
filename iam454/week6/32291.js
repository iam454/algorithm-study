const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const X = Number(input);
const set = new Set();

for (let i = 1; i * i <= X + 1; i++) {
  if ((X + 1) % i === 0) {
    set.add(i);
    set.add((X + 1) / i);
  }
}

const ans = Array.from(set).sort((a, b) => a - b);
ans.pop(); // why??
console.log(ans.join(" "));
