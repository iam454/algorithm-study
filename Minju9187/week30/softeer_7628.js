const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  solution();
});

function solution() {
  const N = Number(lines.shift());
  const arr = lines[0].split(" ").map(Number);
  const max = Math.max(...arr);
  let maxCnt = 0;

  for (let i = 2; i <= max; i++) {
    let cnt = 0;
    for (let j = 0; j < N; j++) {
      if (arr[j] % i === 0) {
        cnt++;
      }
    }
    if (maxCnt < cnt) {
      maxCnt = cnt;
    }
  }

  console.log(maxCnt);
}
