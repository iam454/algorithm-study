const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let x, y;

readline
  .on("line", (line) => {
    [x, y] = line.split(" ").map(Number);
    readline.close();
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let num = y - x;
  if (num === 0) {
    console.log(0);
    return;
  }

  let n = Math.floor(Math.sqrt(num));

  if (n * n === num) {
    console.log(2 * n - 1);
  } else if (n * n < num && num <= n * n + n) {
    console.log(2 * n);
  } else {
    console.log(2 * n + 1);
  }
};
