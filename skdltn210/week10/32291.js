const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let x;
let ans = [];

readline
  .on("line", (line) => {
    x = BigInt(line);
    readline.close();
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  for (let i = 1n; i * i <= x + 1n; i++) {
    if ((x + 1n) % i === 0n) {
      ans.push(i);
      if (i * i !== x + 1n) {
        ans.push((x + 1n) / i);
      }
    }
  }

  ans.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  console.log(ans.slice(0, -1).map(String).join(" "));
};
