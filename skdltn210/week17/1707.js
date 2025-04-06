const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let k;
let currentK = 0;
let v, e;
let arr = [];

readline
  .on("line", (line) => {
    if (!k) {
      k = parseInt(line);
    } else if (!v) {
      [v, e] = line.split(" ").map(Number);
    } else {
      arr.push(line.split(" ").map(Number));
      if (arr.length === e) {
        solution(v, e, arr);
        currentK++;

        v = null;
        e = null;
        arr = [];

        if (currentK === k) {
          readline.close();
        }
      }
    }
  })
  .on("close", () => {
    process.exit();
  });

const solution = (v, e, arr) => {
  let graph = Array.from(Array(v + 1), () => []);

  for (let [a, b] of arr) {
    graph[a].push(b);
    graph[b].push(a);
  }

  let colors = Array(v + 1).fill(-1);

  const isBipartite = (start) => {
    let queue = [start];
    colors[start] = 0;

    while (queue.length > 0) {
      let current = queue.shift();

      for (let next of graph[current]) {
        if (colors[next] === -1) {
          colors[next] = 1 - colors[current];
          queue.push(next);
        } else if (colors[next] === colors[current]) {
          return false;
        }
      }
    }
    return true;
  };

  let ans = true;
  for (let i = 1; i <= v; i++) {
    if (colors[i] === -1) {
      if (!isBipartite(i)) {
        ans = false;
        break;
      }
    }
  }

  console.log(ans ? "YES" : "NO");
};
