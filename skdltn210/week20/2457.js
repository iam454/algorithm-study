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
      arr.push(line.split(" ").map(Number));
      if (arr.length === n) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let cumulativeDays = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  let flower = [];
  let s = 60;
  let e = 335;

  for (let i = 0; i < n; i++) {
    let start = cumulativeDays[arr[i][0] - 1] + arr[i][1];
    let end = cumulativeDays[arr[i][2] - 1] + arr[i][3];

    flower.push([start, end]);
  }

  flower.sort((a, b) => a[0] - b[0]);

  let ans = [];
  let current = s;

  while (current < e) {
    let maxEnd = 0;
    let selectedIdx = -1;

    for (let i = 0; i < flower.length; i++) {
      if (flower[i][0] <= current && flower[i][1] > current) {
        if (flower[i][1] > maxEnd) {
          maxEnd = flower[i][1];
          selectedIdx = i;
        }
      }
    }

    if (selectedIdx === -1) {
      console.log(0);
      return;
    }

    ans.push(flower[selectedIdx]);
    current = maxEnd;

    if (current >= e) {
      console.log(ans.length);
      return;
    }
  }
};
