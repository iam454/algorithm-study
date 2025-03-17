function solution(n, edge) {
  let graph = {};
  for (let e of edge) {
    if (!graph[e[0]]) graph[e[0]] = [];
    if (!graph[e[1]]) graph[e[1]] = [];
    graph[e[0]].push(e[1]);
    graph[e[1]].push(e[0]);
  }
  const bfs = () => {
    let queue = [1];
    let visited = Array(n + 1).fill(false);
    visited[0] = true;
    visited[1] = true;
    while (queue.length > 0) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let curr = queue.shift();
        for (let j = 0; j < graph[curr].length; j++) {
          if (visited[graph[curr][j]]) continue;
          visited[graph[curr][j]] = true;
          queue.push(graph[curr][j]);
        }
      }
      let flag = 0;
      for (let i = 0; i < n; i++) {
        if (visited[i] === false) flag = 1;
      }
      if (flag === 0) return queue.length;
    }
  };
  return bfs();
}
