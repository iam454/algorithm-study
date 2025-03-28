const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, k, a, b;
let day = 1;

readline
  .on("line", (line) => {
    [n, k, a, b] = line.split(" ").map((el) => parseInt(el));
    readline.close();
  })
  .on("close", () => {
    solution();
    process.exit();
  });

function solution() {
  const flower = Array(n).fill(k);
  let i = 0;
  while (true) {
    for (let j = 0; j < a; j++) {
      flower[(i + j) % n] += b;
    }
    i = (i + a) % n;
    for (let j = 0; j < n; j++) {
      flower[j]--;
    }
    if (flower.includes(0)) break;
    day++;
  }
  console.log(day);
}
