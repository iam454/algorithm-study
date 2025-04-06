function solution(k, dungeons) {
  let max = 0;
  let visited = Array(dungeons.length).fill(false);
  let cnt = 0;
  const dfs = (x, cnt) => {
    max = Math.max(cnt, max);
    for (let i = 0; i < dungeons.length; i++) {
      if (visited[i]) continue;
      if (k >= dungeons[i][0]) {
        k -= dungeons[i][1];
        visited[i] = true;
        cnt++;
        dfs(i, cnt);
        k += dungeons[i][1];
        visited[i] = false;
        cnt--;
      }
    }
  };

  for (let i = 0; i < dungeons.length; i++) {
    if (k >= dungeons[i][0]) {
      k -= dungeons[i][1];
      visited[i] = true;
      cnt++;
      dfs(i, cnt);
      k += dungeons[i][1];
      visited[i] = false;
      cnt--;
    }
  }

  return max;
}
