const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [n, m] = lines.shift().split(" ").map(Number);
  const arr = [];
  const attack = [];
  for (let i = 0; i < n; i++) {
    arr.push(lines[i].split(" ").map(Number));
  }
  for (let i = n; i < lines.length; i++) {
    attack.push(lines[i].split(" ").map(Number));
  }

  console.log(solution(n, m, arr, attack));

  process.exit(0);
});

function solution(n, m, arr, attack) {
  for (let i = 0; i < attack.length; i++) {
    const [start, end] = attack[i];
    for (let j = start - 1; j < end; j++) {
      for (let k = 0; k < m; k++) {
        if (arr[j][k] === 1) {
          arr[j][k] = 0;
          break;
        }
      }
    }
  }

  return arr.flat().filter((v) => v === 1).length;
}
