const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let server = [];
let cnt = 0;
let tot = 0;
let min = 0;
let max = 0;

let solution = () => {
  let half = Math.ceil(tot / 2);
  min = 0;

  while (min < max) {
    let mid = Math.floor((min + max) / 2);
    let sum = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        sum += Math.min(mid, server[i][j]);
      }
    }

    if (sum >= half) {
      max = mid;
    } else {
      min = mid + 1;
    }
  }

  console.log(min);
};

readline
  .on("line", (line) => {
    if (!n) {
      n = parseInt(line);
    } else {
      server.push(line.split(" ").map(Number));
      if (Math.max(...line.split(" ").map(Number)) > max) {
        max = Math.max(...line.split(" ").map(Number));
      }
      cnt++;
      tot += line
        .split(" ")
        .map(Number)
        .reduce((a, b) => a + b);
      if (cnt === n) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });
