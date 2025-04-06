const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let u = [];

readline
  .on("line", (line) => {
    if (!n) {
      n = Number(line);
    } else {
      u.push(Number(line));
      if (u.length === n) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let sum = [];

  const search = (target) => {
    let left = 0;
    let right = sum.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (sum[mid] === target) {
        return true;
      } else if (sum[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return false;
  };

  u.sort((a, b) => a - b);

  for (let i = 0; i < n - 1; i++) {
    for (let j = i; j < n; j++) {
      sum.push(u[i] + u[j]);
    }
  }

  sum.sort((a, b) => a - b);

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      let target = u[i] - u[j];
      if (search(target)) {
        console.log(u[i]);
        return;
      }
    }
  }
};
