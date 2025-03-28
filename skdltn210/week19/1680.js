const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t;
let w, n;
let arr = [];
let cnt = 0;

readline
  .on("line", (line) => {
    if (!t) {
      t = parseInt(line);
    } else if (!w) {
      [w, n] = line.split(" ").map(Number);
    } else {
      arr.push(line.split(" ").map(Number));
      if (arr.length === n) {
        solution();
        cnt++;
        w = undefined;
        n = undefined;
        arr = [];
        if (cnt === t) readline.close();
      }
    }
  })
  .on("close", () => {
    process.exit();
  });

const solution = () => {
  let weight = 0;
  let distance = 0;
  for (let i = 0; i < arr.length; i++) {
    if (weight + arr[i][1] <= w) {
      weight += arr[i][1];
      if (weight === w || i === arr.length - 1) {
        distance += arr[i][0] * 2;
        weight = 0;
      }
    } else {
      weight = 0;
      distance += arr[i][0] * 2;
      i--;
    }
  }
  console.log(distance);
};
