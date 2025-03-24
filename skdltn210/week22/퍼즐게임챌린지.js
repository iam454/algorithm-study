function solution(diffs, times, limit) {
  let ans = 0;
  const totTime = (level) => {
    let time = 0;
    for (let i = 0; i < diffs.length; i++) {
      if (diffs[i] <= level) time += times[i];
      else {
        time += (diffs[i] - level) * (times[i] + times[i - 1]) + times[i];
      }
    }
    return time;
  };
  let left = 1;
  let right = 9999999999;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let t = totTime(mid);
    if (t <= limit) {
      right = mid - 1;
      ans = mid;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}
