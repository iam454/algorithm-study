let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("1.txt").toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const result = [];

const obj = {};

function DFS(selected) {
  if (selected.length === M) {
    const key = selected.join(" ");
    if (!obj[key]) {
      obj[key] = true;
      result.push(key);
    }
    return;
  }

  for (let i = 0; i < N; i++) {
    if (selected[selected.length - 1] <= arr[i] || selected.length === 0) {
      DFS([...selected, arr[i]]);
    }
  }
}

DFS([]);

console.log(result.join("\n"));
