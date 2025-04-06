const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let str = "";

readline
  .on("line", (line) => {
    str = line;
    readline.close();
  })
  .on("close", () => {
    solution();
    process.exit();
  });

function solution() {
  let a = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      a++;
    }
  }

  const str2 = str + str;
  let min = 999999999;

  for (let i = 0; i < str.length; i++) {
    let cnt = 0;
    for (let j = i; j < i + a; j++) {
      if (str2[j] === "b") {
        cnt++;
      }
    }
    min = Math.min(min, cnt);
  }
  console.log(min);
}
