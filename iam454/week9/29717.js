const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

input.forEach((line) => {
  solution(BigInt(line));
});

function solution(monsters) {
  let totalExp = (monsters * (monsters + BigInt(1))) / BigInt(2);

  let l = BigInt(1);
  let r = totalExp;

  while (l <= r) {
    const mid = (l + r) / BigInt(2);
    const requiredExp = mid * (mid + BigInt(1));

    if (totalExp >= requiredExp) {
      l = mid + BigInt(1);
    } else {
      r = mid - BigInt(1);
    }
  }

  console.log(Number(l));
}
