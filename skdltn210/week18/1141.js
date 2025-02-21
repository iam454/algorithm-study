const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];
let cnt = 0;

readline
  .on("line", (line) => {
    if (!n) {
      n = parseInt(line);
    } else {
      arr.push(line);
      cnt++;
      if (cnt === n) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  arr = arr.sort((a, b) => {
    if (a.length === b.length) {
      return a.localeCompare(b);
    }
    return a.length - b.length;
  });

  const compareString = (a, b) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  for (let i = 0; i < n; i++) {
    let flag = true;
    for (let j = i + 1; j < n; j++) {
      if (compareString(arr[i], arr[j])) {
        flag = false;
        break;
      }
    }
    if (!flag) cnt--;
  }
  console.log(cnt);
};
