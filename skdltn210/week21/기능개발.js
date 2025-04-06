function solution(progresses, speeds) {
  let ans = [];
  while (progresses.length > 0) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
    let cnt = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      cnt++;
    }
    if (cnt > 0) ans.push(cnt);
  }
  return ans;
}
