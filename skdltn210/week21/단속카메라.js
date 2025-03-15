function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);
  let cnt = 0;
  let cam = -30000;
  for (let route of routes) {
    if (cam >= route[0] && cam <= route[1]) continue;
    else {
      cam = route[1];
      cnt++;
    }
  }
  return cnt;
}
