const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      n = Number(line);
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
  let left = 0;
  let right = arr.length - 1;
  let ans = arr[left] + arr[right];
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (Math.abs(sum) < Math.abs(ans)) {
      ans = sum;
    }
    if (sum === 0) break;
    if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
  console.log(ans);
};
