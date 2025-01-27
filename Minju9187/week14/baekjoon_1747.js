let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
// let input = fs.readFileSync("1.txt").toString().trim();

let num = Number(input);

while (true) {
  if (isPrime(num) && isPalindrome(num)) break;
  num++;
}

console.log(num);

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isPalindrome(num) {
  const str = num.toString();
  let half = Math.floor(str.length / 2);

  for (let i = 0; i < half; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}
