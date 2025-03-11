function solution(word) {
  let arr = ["A", "E", "I", "O", "U"];
  let w = [];
  let cnt = 0;
  let ans;
  const dfs = (w) => {
    if (w.join("") === word) return (ans = cnt);
    cnt++;
    if (w.length === 5) return;
    for (let i = 0; i < 5; i++) {
      w.push(arr[i]);
      dfs(w);
      w.pop();
    }
  };
  dfs(w);
  return ans;
}
