let fs = require("fs");
const input = fs
  .readFileSync(fs.existsSync("/dev/stdin") ? "/dev/stdin" : "1.txt")
  .toString()
  .trim()
  .split("\n");

const [K, N] = input.shift().split(" ").map(Number);

const arr = input.map(Number).sort((a, b) => a - b);

let left = 0;
let right = arr[arr.length - 1];

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  if (countNum(mid) >= N) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(right);

function countNum(num) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.floor(arr[i] / num);
  }
  return sum;
}
