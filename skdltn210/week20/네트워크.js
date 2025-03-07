function solution(n, computers) {
  let graph = {};
  let cnt = 0;
  for (let i = 0; i < computers.length; i++) {
    graph[i] = [];
    for (let j = 0; j < computers[i].length; j++) {
      if (i === j) continue;
      if (computers[i][j] === 1) graph[i].push(j);
    }
  }
  let visited = Array(n).fill(false);
  const dfs = (idx) => {
    visited[idx] = true;
    let next = graph[idx];
    for (let i = 0; i < next.length; i++) {
      if (!visited[next[i]]) dfs(next[i]);
    }
  };
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      cnt++;
    }
  }
  return cnt;
}
