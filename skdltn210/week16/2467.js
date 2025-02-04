const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      n = parseInt(line);
      return;
    }
    arr = line.split(" ").map((el) => parseInt(el));
    readline.close();
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let min = Infinity;
  let left = 0;
  let minLeft = 0;
  let right = n - 1;
  let minRight = n - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (Math.abs(sum) < min) {
      min = Math.abs(sum);
      minLeft = left;
      minRight = right;
    }
    if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
  console.log(arr[minLeft], arr[minRight]);
};
