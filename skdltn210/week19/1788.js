const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;

readline
  .on("line", (line) => {
    n = parseInt(line);
    readline.close();
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  if (n === 0) {
    console.log(0);
    console.log(0);
    return;
  }

  const absN = Math.abs(n);

  let a = 0n;
  let b = 1n;

  for (let i = 2; i <= absN; i++) {
    const next = (a + b) % 1000000000n;
    a = b;
    b = next;
  }

  let result = absN === 1 ? b : b;

  if (n < 0 && absN % 2 === 0) {
    result = -result;
  }

  if (result > 0n) {
    console.log(1);
    console.log(result.toString());
  } else if (result < 0n) {
    console.log(-1);
    console.log((-result).toString());
  } else {
    console.log(0);
    console.log(0);
  }
};
