const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const numbers = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const ans = [];
const visited = new Array(N).fill(false);

const dfs = (selected) => {
  if (selected.length === M) {
    ans.push(selected.join(" "));
    return;
  }

  let prev = -1;
  for (let i = 0; i < N; i++) {
    if (visited[i] === false && prev !== numbers[i]) {
      visited[i] = true;
      prev = numbers[i];
      dfs([...selected, numbers[i]]);
      visited[i] = false;
    }
  }
};

dfs([]);

console.log(ans.join("\n"));
