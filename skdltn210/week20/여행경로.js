function solution(tickets) {
  let visited = Array(tickets.length).fill(false);
  let arr = [];
  const dfs = (start, path) => {
    if (path.length === tickets.length + 1) {
      arr.push([...path]);
      return;
    }
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i][0] === start) {
        if (!visited[i]) {
          visited[i] = true;
          path.push(tickets[i][1]);
          dfs(tickets[i][1], path);
          visited[i] = false;
          path.pop();
        }
      }
    }
  };
  dfs("ICN", ["ICN"]);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].join(" ");
  }
  arr.sort();
  return arr[0].split(" ");
}
