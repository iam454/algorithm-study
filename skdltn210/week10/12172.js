const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t = 0;
let arr = [];

readline
  .on("line", (line) => {
    if (t === 0) {
      t = parseInt(line);
    } else {
      const [x, r, c] = line.split(" ").map(Number);
      arr.push([x, r, c]);
    }

    if (arr.length === t) {
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  for (let i = 0; i < t; i++) {
    let flag = false;
    const [x, r, c] = arr[i];
    if (x === 1) {
      flag = true;
    } else if (x === 2 && (r * c) % 2 === 0) {
      flag = true;
    } else if (x === 3 && (r * c) % 3 === 0 && r >= 2 && c >= 2) {
      flag = true;
    } else if (x === 4 && (r * c) % 4 === 0 && r >= 3 && c >= 3) {
      flag = true;
    }
    console.log(`Case #${i + 1}: ${flag ? "GABRIEL" : "RICHARD"}`);
  }
};
