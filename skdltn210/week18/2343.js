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
  let left = Math.max(...arr);
  let right = arr.reduce((acc, cur) => acc + cur);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sum = 0;
    let count = 1;

    for (let i = 0; i < n; i++) {
      if (sum + arr[i] > mid) {
        count++;
        sum = arr[i];
      } else {
        sum += arr[i];
      }
    }

    if (count <= m) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  console.log(left);
};
