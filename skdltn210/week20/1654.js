const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let k, n;
let arr = [];
let cnt = 0;

readline
  .on("line", (line) => {
    if (!k) {
      [k, n] = line.split(" ").map(Number);
    } else {
      arr.push(Number(line));
      cnt++;
      if (cnt === k) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  arr.sort((a, b) => b - a);
  let lo = 1;
  let hi = arr[0];
  while (lo <= hi) {
    let cnt = 0;
    let mid = Math.floor((lo + hi) / 2);
    for (let i = 0; i < k; i++) {
      cnt += Math.floor(arr[i] / mid);
    }
    if (cnt >= n) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  console.log(hi);
};
