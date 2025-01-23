let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
// let input = fs.readFileSync("1.txt").toString().trim();

const [N, K, A, B] = input.split(" ").map(Number);

const arr = new Array(N).fill(K);

let left = 0;
let right = A - 1;
let day = 0;

while (true) {
  for (let i = 0; i < N; i++) {
    if (i >= left && i <= right) {
      arr[i] += B;
    }
    arr[i] -= 1;
  }
  left = (left + A) % N;
  right = (right + A) % N;
  day++;
  if (arr.includes(0)) {
    break;
  }
}

console.log(day);
