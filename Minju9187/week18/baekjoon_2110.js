let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("1.txt").toString().split("\n");

const [N, C] = input.shift().split(" ").map(Number);

// const arr = input.map(Number).sort((a, b) => a - b);
const arr = [];
for (let i = 0; i < N; i++) {
  arr.push(Number(input[i]));
}
arr.sort((a, b) => a - b);

let left = 1;
let right = arr[arr.length - 1] - arr[0];

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  let cnt = 1;
  let prev = arr[0];

  for (let i = 1; i < N; i++) {
    const cur = arr[i];
    if (cur - prev >= mid) {
      cnt++;
      prev = cur;
    }
  }

  if (cnt >= C) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(right);
