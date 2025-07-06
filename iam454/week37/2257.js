const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const st = [];

const map = {
  H: 1,
  C: 12,
  O: 16,
};

for (let i = 0; i < input.length; i++) {
  const char = input[i];

  if (char === "(") {
    st.push(char);
  } else if (char === ")") {
    let tmp = 0;
    while (st.length) {
      const top = st.pop();
      if (top === "(") {
        break;
      }
      tmp += top;
    }
    st.push(tmp);
  } else if (char >= "2" && char <= "9") {
    const top = st.pop();
    st.push(top * Number(char));
  } else {
    st.push(map[char]);
  }
}

const ans = st.reduce((acc, cur) => acc + cur, 0);
console.log(ans);
