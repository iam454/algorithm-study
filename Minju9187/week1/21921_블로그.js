let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, X] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let maxSum = 0;
let maxCnt = 0;

let value = 0;
for (let i = 0; i < X; i++) {
  value += arr[i];
}
maxSum = value;
maxCnt = 1;

for (let i = X; i < N; i++) {
  value = value - arr[i - X] + arr[i];

  if (maxSum < value) {
    maxCnt = 1;
    maxSum = value;
  } else if (maxSum === value) {
    maxCnt++;
  }
}

if (maxSum === 0) console.log("SAD");
else console.log(maxSum + "\n" + maxCnt);
