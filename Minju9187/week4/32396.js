let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("예제.txt").toString().split("\n");

const [N, M] = input.shift().split(" ");

let arr = input[0].split(" ");
let cnt = 0;

for (let i = 0; i < N; i++) {
  if (Math.abs(arr[i] - arr[i + 1]) < M) {
    if (arr[i] < arr[i + 2]) {
      arr[i + 1] = arr[i + 2] + M;
    } else {
      arr[i + 1] = arr[i] + M;
    }
    i++;
    cnt++;
  }
}

console.log(cnt);
