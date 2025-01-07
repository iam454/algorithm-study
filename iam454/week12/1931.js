const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();
const times = input.map((line) => line.split(" ").map(Number));

times.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

let ans = 0;
let endTime = 0;

times.forEach((time) => {
  if (time[0] >= endTime) {
    endTime = time[1];
    ans += 1;
  }
});

console.log(ans);
