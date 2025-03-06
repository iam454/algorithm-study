const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let m, n;
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      [m, n] = line.split(" ").map(Number);
    } else {
      arr.push(line.split(" ").map(Number));
      if (arr.length === m) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });
const solution = () => {
  let map = {};
  let ans = 0;
  for (let i = 0; i < m; i++) {
    let temp = [];
    let copy = [...arr[i]];

    for (let j = 0; j < n; j++) {
      copy[j] = [copy[j], j];
    }

    copy.sort((a, b) => a[0] - b[0]);

    let rank = 0;
    temp[copy[0][1]] = rank;

    for (let j = 1; j < n; j++) {
      if (copy[j][0] !== copy[j - 1][0]) {
        rank++;
      }
      temp[copy[j][1]] = rank;
    }
    let pattern = temp.join(",");
    if (map[pattern]) {
      map[pattern]++;
    } else {
      map[pattern] = 1;
    }
  }
  for (let pattern in map) {
    cnt = map[pattern];
    if (cnt >= 2) {
      ans += (cnt * (cnt - 1)) / 2;
    }
  }
  console.log(ans);
};
