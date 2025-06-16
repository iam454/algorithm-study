const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let index = 0;
const [N, M] = input[index++].split(" ").map(Number);
const [knownCnt, ...knownMembers] = input[index++].split(" ").map(Number);

const parties = Array.from({ length: M }, () => []);

for (let i = 0; i < M; i++) {
  const members = input[index++].split(" ").map(Number);
  parties[i].push(...members.slice(1));
}

if (knownCnt === 0) {
  console.log(M);
  return;
}

const graph = Array.from({ length: N + 1 }, () => []);

for (const party of parties) {
  for (let i = 0; i < party.length; i++) {
    for (let j = i + 1; j < party.length; j++) {
      const a = party[i];
      const b = party[j];
      graph[a].push(b);
      graph[b].push(a);
    }
  }
}

const visited = new Array(N + 1).fill(0);

function dfs(node) {
  visited[node] = 1;
  for (const neighbor of graph[node]) {
    if (!visited[neighbor]) {
      dfs(neighbor);
    }
  }
}

for (const member of knownMembers) {
  if (!visited[member]) {
    dfs(member);
  }
}

let cnt = 0;

for (const party of parties) {
  const hasKnownMember = party.some((member) => visited[member]);
  if (!hasKnownMember) {
    cnt += 1;
  }
}

console.log(cnt);
