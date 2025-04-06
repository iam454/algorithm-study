const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      n = parseInt(line);
    } else {
      arr = line.split(" ").map(Number);
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let time = 0;
  arr.sort((a, b) => b - a);
  while (arr.length > 0) {
    arr[0]--;
    arr[1]--;
    time++;
    arr = arr.filter((el) => el > 0);
    arr.sort((a, b) => b - a);
  }
  if (time > 1440) console.log(-1);
  else console.log(time);
};
