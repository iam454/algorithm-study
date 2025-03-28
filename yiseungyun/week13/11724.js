const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const [N, M] = input[0].split(" ").map(Number);
  const result = solution(N, M, input.slice(1));
  console.log(result);
  process.exit();
});

const solution = (N, M, edges) => {
  let graph = Array.from({ length: N+1 }, () => []);
  let visited = new Array(N+1).fill(false);
  let count = 0;

  for (let i = 0; i < M; i++) {
    const [u, v] = edges[i].split(" ").map(Number);
    graph[u].push(v);
    graph[v].push(u);
  }
  
  for (let i = 1; i < N+1; i++) {
    if (!visited[i]) {
      dfs(i, graph, visited);
      count++;
    }
  }

  return count;
}

const dfs = (node, graph, visited) => {
  visited[node] = true;
  for (const adj of graph[node]) {
    if (!visited[adj]) {
      dfs(adj, graph, visited);
    }
  }
}