const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t, n;
let arr = [];
let cnt = 0;

readline
  .on("line", (line) => {
    if (!t) {
      t = Number(line);
    } else if (!n) {
      n = Number(line);
    } else {
      arr = line.split(" ").map(Number);
      solution();
      n = undefined;
      arr = [];
      cnt++;
      if (cnt === t) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    process.exit();
  });

const solution = () => {
  let sum = 0;
  let max = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] >= max) {
      max = arr[i];
    } else {
      sum += max - arr[i];
    }
  }
  console.log(sum);
};
