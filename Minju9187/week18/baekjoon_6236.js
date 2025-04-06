let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("1.txt").toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = [...input].filter((v) => v.trim() !== "").map(Number);

let left = Math.max(...arr);
let right = arr.reduce((acc, cur) => acc + cur, 0);
let money;
let answer = 0;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let cnt = 0;
  money = 0;

  for (let i = 0; i < N; i++) {
    let v = arr[i];
    if (v <= money) {
      money -= v;
    } else {
      cnt++;
      money = mid - v;
    }

    if (cnt > M) break;
  }

  if (cnt <= M) {
    answer = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer);
//6236번
