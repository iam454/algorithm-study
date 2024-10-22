const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const ans = [];

input.forEach((line) => {
  if (line === "end") {
    return;
  }

  if (isValidPassword(line)) {
    ans.push(`<${line}> is acceptable.`);
  } else {
    ans.push(`<${line}> is not acceptable.`);
  }
});

console.log(ans.join("\n"));

function isValidPassword(password) {
  let vowels = "aeiou";
  let hasVowel = false;
  let vowelCounter = 0;
  let consonantCounter = 0;

  for (let i = 0; i < password.length; i++) {
    const char = password[i];

    if (vowels.includes(char)) {
      hasVowel = true;
      vowelCounter += 1;
      consonantCounter = 0;
    } else {
      vowelCounter = 0;
      consonantCounter += 1;
    }

    if (vowelCounter === 3 || consonantCounter === 3) {
      return false;
    }

    if (
      i > 0 &&
      password[i] === password[i - 1] &&
      !(char === "e" && password[i] === "e") &&
      !(char === "o" && password[i] === "o")
    ) {
      return false;
    }
  }

  return hasVowel;
}
