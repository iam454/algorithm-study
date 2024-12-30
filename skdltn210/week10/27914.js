const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, k, q;
let students = [];
let questions = [];
let lineCount = 0;

readline.on("line", (line) => {
  if (lineCount === 0) {
    [n, k, q] = line.split(" ").map(Number);
  } else if (lineCount === 1) {
    students = line.split(" ").map(Number);
  } else if (lineCount === 2) {
    questions = line.split(" ").map(Number);
    readline.close();
  }
  lineCount++;
});

readline.on("close", () => {
  solution();
  process.exit(0);
});

const solution = () => {
  let nextK = new Array(n).fill(n);
  let lastK = n;

  for (let i = n - 1; i >= 0; i--) {
    if (students[i] === k) {
      lastK = i;
    }
    nextK[i] = lastK;
  }

  console.log(nextK);

  for (let i = 0; i < q; i++) {
    let currentQ = questions[i];
    let cnt = 0;

    for (let start = 0; start < currentQ; start++) {
      if (nextK[start] >= currentQ) {
        cnt += currentQ - start;
      } else {
        cnt += nextK[start] - start;
      }
    }
    console.log(cnt);
  }
};
