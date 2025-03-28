const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      [n, m] = line.split(" ").map(Number);
    } else {
      arr = line.split(" ").map(Number);
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let tot = 0;
  let zero = [];
  let nonZero = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === 0) {
      if (arr[i] === 10) tot++;
      else {
        zero.push(arr[i]);
      }
    } else {
      if (arr[i] < 10) continue;
      nonZero.push(arr[i]);
    }
  }

  zero.sort((a, b) => a - b);
  nonZero.sort((a, b) => a - b);

  for (let i = 0; i < zero.length; i++) {
    if (m === 0) break;
    if (zero[i] / 10 - 1 <= m) {
      tot += zero[i] / 10;
      m -= zero[i] / 10 - 1;
    } else {
      tot += m;
      m = 0;
    }
  }

  for (let i = 0; i < nonZero.length; i++) {
    if (m === 0) break;
    if (Math.floor(nonZero[i] / 10) <= m) {
      tot += Math.floor(nonZero[i] / 10);
      m -= Math.floor(nonZero[i] / 10);
    } else {
      tot += m;
      m = 0;
    }
  }
  console.log(tot);
};
