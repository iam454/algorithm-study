const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, k;
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      [n, k] = line.split(" ").map(Number);
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
  arr.sort((a, b) => b - a);
  let lo = 0;
  let hi = arr[0] + k;
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] > mid) {
        count += arr[i] - mid;
      }
    }
    if (count <= k) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  console.log(lo);
};
