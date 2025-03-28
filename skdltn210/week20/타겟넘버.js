function solution(numbers, target) {
  let cnt = 0;
  const dfs = (depth, sum) => {
    if (sum === target && depth === numbers.length - 1) {
      cnt++;
      return;
    } else if (depth === numbers.length - 1) return;
    dfs(depth + 1, sum + numbers[depth + 1]);
    dfs(depth + 1, sum - numbers[depth + 1]);
  };
  dfs(0, numbers[0]);
  dfs(0, -numbers[0]);
  return cnt;
}
