const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();
const res = [];

const DIV = 1_000_000_009;
const odd = new Array(100_001).fill(0);
const even = new Array(100_001).fill(0);

odd[1] = 1;
odd[2] = 1;
odd[3] = 2;

even[1] = 0;
even[2] = 1;
even[3] = 2;

for (let i = 4; i <= 100_000; i++) {
  odd[i] = (even[i - 1] + even[i - 2] + even[i - 3]) % DIV;
  even[i] = (odd[i - 1] + odd[i - 2] + odd[i - 3]) % DIV;
}

input.forEach((line) => {
  const n = Number(line);
  res.push(`${odd[n]} ${even[n]}`);
});

console.log(res.join("\n"));
