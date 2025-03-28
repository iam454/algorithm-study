const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, k;
let cat = [];

readline
  .on("line", (line) => {
    if (!n) {
      [n, k] = line.split(" ").map((el) => parseInt(el));
    } else {
      cat = line.split(" ").map((el) => parseInt(el));
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let cnt = 0;
  let left = 0;
  let right = cat.length - 1;
  cat.sort((a, b) => a - b);
  while (true) {
    if (left >= right) break;

    if (cat[left] + cat[right] > k) {
      right--;
    } else {
      left++;
      right--;
      cnt++;
    }
  }
  console.log(cnt);
};
