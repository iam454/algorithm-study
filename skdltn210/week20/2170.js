const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      n = Number(line);
    } else {
      arr.push(line.split(" ").map(Number));
      if (arr.length === n) readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  arr.sort((a, b) => a[0] - b[0]);
  let sum = 0;
  let l = arr[0][0];
  let r = arr[0][1];

  for (let i = 1; i < n; i++) {
    if (arr[i][0] <= r) {
      r = Math.max(r, arr[i][1]);
    } else {
      sum += r - l;
      l = arr[i][0];
      r = arr[i][1];
    }
  }
  sum += r - l;
  console.log(sum);
};
