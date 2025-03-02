const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m, k;
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      [n, m, k] = line.split(" ").map(Number);
    } else {
      arr.push(line.split(" ").map(Number));
      if (arr.length === k) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const check = (liverLevel) => {
  let drinkable = [];

  for (const [preference, alcoholLevel] of arr) {
    if (alcoholLevel <= liverLevel) {
      drinkable.push(preference);
    }
  }

  if (drinkable.length < n) {
    return false;
  }

  drinkable.sort((a, b) => b - a);

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += drinkable[i];

    if (sum >= m) {
      return true;
    }
  }

  return false;
};

const solution = () => {
  if (k < n) {
    console.log(-1);
    return;
  }

  let left = 0;
  let right = 2147483647;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (check(mid)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  console.log(result);
};
