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
      arr.push(Number(line));
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
  let plus = [];
  let minus = [];
  let zero = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      plus.push(arr[i]);
    } else if (arr[i] === 0) {
      zero.push(arr[i]);
    } else {
      minus.push(arr[i]);
    }
  }
  plus.sort((a, b) => b - a);
  minus.sort((a, b) => a - b);
  let sum = 0;
  if (plus.length % 2 === 1) {
    sum += plus[plus.length - 1];
  }
  for (let i = 0; i < plus.length; i += 2) {
    if (i + 1 < plus.length) {
      if (plus[i] > 1 && plus[i + 1] > 1) {
        sum += plus[i] * plus[i + 1];
      } else {
        sum += plus[i] + plus[i + 1];
      }
    }
  }
  let temp = 0;
  if (minus.length % 2 === 1) {
    temp = minus[minus.length - 1];
  }
  for (let i = 0; i < minus.length; i += 2) {
    if (i + 1 < minus.length) {
      sum += minus[i] * minus[i + 1];
    }
  }
  if (zero.length > 0) {
    console.log(sum);
  } else {
    console.log(sum + temp);
  }
};
