const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCount = 0;
let people = [];

readline
  .on("line", (line) => {
    if (lineCount === 0) {
      lineCount = parseInt(line);
    } else {
      const [x, y] = line.split(" ").map(Number);
      people.push([x, y]);
    }

    if (people.length === lineCount) {
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let rank = Array(people.length).fill(1);
  for (let i = 0; i < people.length; i++) {
    for (let j = 0; j < people.length; j++) {
      if (people[i][0] > people[j][0] && people[i][1] > people[j][1]) {
        rank[j]++;
      }
    }
  }
  console.log(rank.join(" "));
};
