const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let l, c;
let arr = [];

readline
  .on("line", (line) => {
    if (!l) {
      [l, c] = line.split(" ").map(Number);
    } else {
      arr = line.split(" ").sort();
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let visited = Array(c).fill(false);
  let vowels = ["a", "e", "i", "o", "u"];
  let str = "";
  let vowelCnt = 0;
  let consonantCnt = 0;

  const dfs = (x) => {
    if (str.length === l && vowelCnt >= 1 && consonantCnt >= 2) {
      console.log(str);
      return;
    }
    for (let i = x; i < c; i++) {
      if (visited[i]) continue;
      if (vowels.includes(arr[i])) vowelCnt++;
      else consonantCnt++;
      str += arr[i];
      visited[i] = true;
      dfs(i + 1);
      if (vowels.includes(arr[i])) vowelCnt--;
      else consonantCnt--;
      str = str.slice(0, str.length - 1);
      visited[i] = false;
    }
  };

  dfs(0);
};
