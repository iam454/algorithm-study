const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
readline
  .on("line", (line) => {
    input.push(line.trim());
    if (input.length === 2) {
      readline.close();
    }
  })
  .on("close", () => {
    const result = solution(input);
    console.log(result);
    process.exit();
  });

const solution = (input) => {
  const [count, time] = input[0].split(" ").map(Number);
  const SqueakArr = input[1].split(" ").map(Number);
  let cnt = 0;
  let clapTime = -1;

  for (let i = 0; i < count; i++) {
    if (SqueakArr[i] > clapTime) {
      cnt++;
      clapTime = SqueakArr[i] + time;
    }
  }
  return cnt;
};
