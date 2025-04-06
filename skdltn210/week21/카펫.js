function solution(brown, yellow) {
  let ans = [];
  for (let i = 1; i < brown; i++) {
    if (2 * i + (2 * yellow) / i + 4 === brown) {
      ans.push(i + 2, brown / 2 - i);
      break;
    }
  }
  if (ans[0] < ans[1]) return [ans[1], ans[0]];
  return ans;
}
