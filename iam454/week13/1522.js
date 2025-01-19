const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const N = input.length;

const cntA = [...input].filter((i) => i === "a").length;

const str = input + input.slice(0, cntA - 1);

let ans = Infinity;

for (let i = 0; i < N; i++) {
  const subStr = str.slice(i, i + cntA);
  const cntB = [...subStr].filter((i) => i === "b").length;
  ans = Math.min(ans, cntB);
}

console.log(ans);
