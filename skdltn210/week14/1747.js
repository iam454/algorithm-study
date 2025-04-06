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

function isPalindrome(n) {
  return n.toString() === n.toString().split("").reverse().join("");
}

function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function solution() {
  for (let i = n; i <= Infinity; i++) {
    if (isPalindrome(i) && isPrime(i)) {
      console.log(i);
      break;
    }
  }
}
