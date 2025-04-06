function solution(n, wires) {
  let min = Infinity;
  const bfs = (x, graph) => {
    let visited = Array(n).fill(false);
    visited[x - 1] = true;
    let queue = [x];
    while (queue.length > 0) {
      let curr = queue.shift();
      for (let next of graph[curr]) {
        if (visited[next - 1]) continue;
        queue.push(next);
        visited[next - 1] = true;
      }
    }
    let t = 0;
    let f = 0;
    for (let i = 0; i < visited.length; i++) {
      if (visited[i]) t++;
      else f++;
    }
    return Math.abs(t - f);
  };

  for (let i = 0; i < n - 1; i++) {
    let graph = {};
    let visited = Array(n).fill(false);
    for (let j = 0; j < n - 1; j++) {
      if (i === j) continue;
      if (!graph[wires[j][0]]) graph[wires[j][0]] = [];
      if (!graph[wires[j][1]]) graph[wires[j][1]] = [];
      graph[wires[j][0]].push(wires[j][1]);
      graph[wires[j][1]].push(wires[j][0]);
    }
    let num;
    if (graph[1]) num = bfs(1, graph);
    else num = bfs(2, graph);
    min = Math.min(num, min);
  }
  return min;
}
