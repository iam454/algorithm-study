function solution(n, results) {
  const winGraph = {};
  const loseGraph = {};
  for (let i = 1; i <= n; i++) {
    winGraph[i] = [];
    loseGraph[i] = [];
  }
  for (const [winner, loser] of results) {
    winGraph[winner].push(loser);
    loseGraph[loser].push(winner);
  }

  function dfs(graph, start, visited) {
    if (graph[start]) {
      let count = 0;
      for (const next of graph[start]) {
        if (!visited[next]) {
          visited[next] = true;
          count += 1 + dfs(graph, next, visited);
        }
      }
      return count;
    }
  }
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    const winVisited = Array(n + 1).fill(false);
    const winCount = dfs(winGraph, i, winVisited);
    const loseVisited = Array(n + 1).fill(false);
    const loseCount = dfs(loseGraph, i, loseVisited);
    if (winCount + loseCount === n - 1) {
      answer++;
    }
  }

  return answer;
}
