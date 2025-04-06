const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nA, nB;
let a = [];
let b = [];

readline
  .on("line", (line) => {
    if (!nA) {
      [nA, nB] = line.split(" ").map(Number);
    } else if (a.length === 0) {
      a = line.split(" ").map(Number);
    } else {
      b = line.split(" ").map(Number);
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);

  const search = (target, arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        return true;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return false;
  };

  let ans = [];

  for (let i = 0; i < a.length; i++) {
    if (!search(a[i], b)) {
      ans.push(a[i]);
    }
  }

  if (ans.length === 0) {
    console.log(0);
    return;
  }

  console.log(ans.length);
  console.log(ans.join(" "));
};
