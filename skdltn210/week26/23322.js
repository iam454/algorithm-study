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
  let cnt = 0;
  let day = 0;

  while (true) {
    let ate = false;

    for (let i = k; i < n; i++) {
      if (arr[i] > arr[i - k]) {
        let eat = arr[i] - arr[i - k];
        arr[i] = arr[i - k];
        cnt += eat;
        ate = true;
        break;
      }
    }

    if (ate) {
      arr.sort((a, b) => a - b);
      day++;
    } else {
      break;
    }
  }

  console.log(cnt, day);
};
