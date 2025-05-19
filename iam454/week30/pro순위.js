function solution(n, results) {
  let answer = 0;
  const players = new Array(n).fill(0).map((item, index) => index + 1);
  const winners = players.reduce((acc, cur) => {
    acc[cur] = [];
    return acc;
  }, {});
  const losers = players.reduce((acc, cur) => {
    acc[cur] = [];
    return acc;
  }, {});

  results.forEach((result) => {
    const [w, l] = result;
    winners[w].push(l);
    losers[l].push(w);
  });

  function bfs(graph, node) {
    const visited = new Array(n + 1).fill(0);
    const q = [];
    q.push(node);
    visited[node] = 1;
    let cnt = 0;

    while (q.length) {
      const cur = q.shift();

      for (const next of graph[cur]) {
        if (visited[next] === 0) {
          q.push(next);
          visited[next] = 1;
          cnt += 1;
        }
      }
    }

    return cnt;
  }

  for (let i = 1; i <= n; i++) {
    if (bfs(winners, i) + bfs(losers, i) === n - 1) {
      answer += 1;
    }
  }

  return answer;
}
