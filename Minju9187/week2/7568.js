let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("예제.txt").toString().split("\n");

solution(input);

function solution(input) {
  const N = input[0];
  const arr = [];
  const result = [];

  for (let i = 1; i <= N; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    arr.push([x, y]);
  }

  for (let i = 0; i < N; i++) {
    let cnt = 0;
    let [x, y] = arr[i];
    for (let j = 0; j < N; j++) {
      let [p, q] = arr[j];
      if (x < p && y < q) cnt++;
    }
    result.push(cnt + 1);
  }
  console.log(result.join(" "));
}
