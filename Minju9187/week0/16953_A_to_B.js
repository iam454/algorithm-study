const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
readline
  .on("line", (line) => {
    input = line;
    readline.close();
  })
  .on("close", () => {
    const result = solution(input);
    console.log(result);
    process.exit();
  });
const solution = (input) => {
  let [A, B] = input.split(" ").map(Number);

  let cnt = 1;
  while (true) {
    if (A >= B) break;

    if (B % 2 === 0) {
      B = B / 2;
      cnt++;
    } else {
      if (B % 10 === 1) {
        B = Math.floor(B / 10);
        cnt++;
      } else return -1;
    }
  }
  if (A === B) return cnt;
  else return -1;
};
