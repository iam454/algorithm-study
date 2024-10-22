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

const solution = (word) => {
  const vowelArr = ["a", "e", "i", "o", "u"];
  let key1 = false; //모음 포함 여부
  let key2 = true; // 3개 연속 모음 또는 자음 체크
  let key3 = true; // 연속된 같은 글자 체크 ( But: ee, oo 허용 )
  let validCheck = ["initialValue", 0];

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const previousLetter = i === 0 ? undefined : word[i - 1];

    if (vowelArr.includes(letter)) {
      key1 = true;
    }

    if (vowelArr.includes(letter)) {
      if (validCheck[0] !== "vowel") {
        validCheck[0] = "vowel";
        validCheck[1] = 1;
      } else {
        validCheck[1] += 1;
      }
    } else {
      if (validCheck[0] !== "consonant") {
        validCheck[0] = "consonant";
        validCheck[1] = 1;
      } else {
        validCheck[1] += 1;
      }
    }

    if (validCheck[1] >= 3) {
      key2 = false;
    }

    if (letter === previousLetter) {
      if (letter === "e" || letter === "o") key3 = true;
      else {
        key3 = false;
      }
    }
  }
  if (key1 && key2 && key3) return `<${word}> is acceptable.`;
  else return `<${word}> is not acceptable.`;
};

console.log(solution("a"));
console.log(solution("tv"));
console.log(solution("ptoui"));
console.log(solution("bontres"));
console.log(solution("zoggax"));
console.log(solution("wiinq"));
console.log(solution("eep"));
console.log(solution("houctuh"));
