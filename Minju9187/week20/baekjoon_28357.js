let fs = require("fs");
const input = fs
  .readFileSync(fs.existsSync("/dev/stdin") ? "/dev/stdin" : "1.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);

arr.sort((a, b) => a - b);

let left = 0;
let right = arr[arr.length - 1];

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  if (calcGiftNum(mid) > K) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(left);

function calcGiftNum(num) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num < arr[i]) {
      sum += arr[i] - num;
    }
  }
  return sum;
}
