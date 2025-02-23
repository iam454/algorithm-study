let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("1.txt").toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);

let start = Math.min(...arr);
let end = arr.reduce((acc, cur) => acc + cur, 0);
let min = end;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  let count = 0;
  let sum = 0;
  let maxSum = 0;

  arr.forEach((v) => {
    if (sum + v > mid) {
      maxSum = Math.max(maxSum, sum);
      count += 1;
      sum = v;
    } else sum += v;
  });

  if (sum > 0) {
    maxSum = Math.max(maxSum, sum);
    count += 1;
  }

  if (count > M) start = mid + 1;
  else {
    minSize = Math.min(min, maxSum);
    end = mid - 1;
  }
}

console.log(minSize);
