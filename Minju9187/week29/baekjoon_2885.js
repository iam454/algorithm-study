let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./1.txt")
  .toString()
  .trim();

let K = Number(input);

const arr = K.toString(2).split("").map(Number);

const result = [];
let n = 1;
let count = 0;

while (n < K) {
  n = n * 2;
}

result.push(n);

while (K > 0) {
  if (K >= n) {
    //빼기
    K -= n;
  } else {
    //쪼개기
    n /= 2;
    count++;
  }
}

result.push(count);

console.log(result.join(" "));
