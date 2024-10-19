const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let ans = -1;
let [a, b] = input.split(" ").map(Number);
let q = [];
q.push([a, 1]);

while (q.length) {
  const [cur, cnt] = q.shift();

  if (cur === b) {
    ans = cnt;
    break;
  }

  const doubled = cur * 2;
  const addOne = cur * 10 + 1;

  if (b >= doubled) {
    q.push([doubled, cnt + 1]);
  }
  if (b >= addOne) {
    q.push([addOne, cnt + 1]);
  }
}

console.log(ans);
