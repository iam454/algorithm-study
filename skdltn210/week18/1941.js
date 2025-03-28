const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

readline
  .on("line", (line) => {
    arr.push(line.split(""));
    if (arr.length === 5) {
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  let answer = 0;
  let selected = Array(7).fill(0);

  const isConnected = (positions) => {
    let visited = Array(7).fill(false);
    let queue = [0];
    let count = 1;
    visited[0] = true;

    while (queue.length) {
      let cur = queue.shift();
      let [x1, y1] = [Math.floor(positions[cur] / 5), positions[cur] % 5];

      for (let i = 0; i < 7; i++) {
        if (!visited[i]) {
          let [x2, y2] = [Math.floor(positions[i] / 5), positions[i] % 5];
          for (let d = 0; d < 4; d++) {
            if (x1 + dx[d] === x2 && y1 + dy[d] === y2) {
              visited[i] = true;
              queue.push(i);
              count++;
              break;
            }
          }
        }
      }
    }
    return count === 7;
  };

  const dfs = (L, S, Y, start) => {
    if (L === 7) {
      if (S >= 4 && isConnected(selected)) {
        answer++;
      }
      return;
    }

    for (let i = start; i < 25; i++) {
      let x = Math.floor(i / 5);
      let y = i % 5;

      if (arr[x][y] === "S" && S < 7) {
        selected[L] = i;
        dfs(L + 1, S + 1, Y, i + 1);
      } else if (arr[x][y] === "Y" && Y < 3) {
        selected[L] = i;
        dfs(L + 1, S, Y + 1, i + 1);
      }
    }
  };

  dfs(0, 0, 0, 0);
  console.log(answer);
};
