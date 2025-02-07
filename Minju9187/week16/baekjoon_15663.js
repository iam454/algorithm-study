let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("1.txt").toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const result = [];
const visited = new Array(N).fill(false);

function DFS(selected) {
  if (selected.length === M) {
    result.push(selected.join(" "));
    return;
  }

  let preNumber = -1;

  for (let i = 0; i < N; i++) {
    if (visited[i] === false && preNumber !== arr[i]) {
      visited[i] = true;
      DFS([...selected, arr[i]]);
      visited[i] = false;
      preNumber = arr[i];
    }
  }
}

DFS([]);

console.log(result.join("\n"));
