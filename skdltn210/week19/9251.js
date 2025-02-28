const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let str1 = [];
let str2 = [];

readline
  .on("line", (line) => {
    if (str1.length === 0) {
      str1 = line.split("");
    } else {
      str2 = line.split("");
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let dp = Array.from(Array(str1.length + 1), () =>
    Array(str2.length + 1).fill(0)
  );

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  console.log(dp[str1.length][str2.length]);
};
