function solution(n, times) {
  const isAvailable = (num) => {
    let sum = 0;
    for (let time of times) {
      sum += Math.floor(num / time);
    }
    if (sum >= n) return true;
    return false;
  };
  let max = 0;
  for (let time of times) {
    max = Math.max(max, time);
  }
  max = max * n;
  left = 0;
  right = max;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (isAvailable(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right;
}
