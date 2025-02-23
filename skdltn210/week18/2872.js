const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let cnt = 0;
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      n = parseInt(line);
    } else {
      arr.push(parseInt(line));
      cnt++;
      if (cnt === n) readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let idx;
  let target = n;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === n) {
      idx = i;
      break;
    }
  }
  for (let i = idx; i >= 0; i--) {
    if (arr[i] === target) {
      cnt++;
      target--;
    }
  }
  console.log(n - cnt);
};
