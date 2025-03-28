const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let lineCount = 0;

readline
  .on("line", (line) => {
    const numbers = line.split(" ").map(Number);
    input.push(numbers);
    lineCount++;
    if (lineCount === 2) {
      readline.close();
    }
  })
  .on("close", () => {
    solution(input);
    process.exit();
  });

const solution = (input) => {
  const [n, x] = input[0];
  let cnt = 1;
  let max = 0;
  let sum = 0;
  for (let i = 0; i < x; i++) {
    max += input[1][i];
    sum += input[1][i];
  }
  for (let i = 0; i < n - x; i++) {
    sum = sum - input[1][i] + input[1][i + x];
    if (sum > max) {
      max = sum;
      cnt = 1;
    } else if (sum === max) {
      cnt++;
    }
  }
  if (max == 0) {
    console.log("SAD");
    return;
  }
  console.log(max);
  console.log(cnt);
};
