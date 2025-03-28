function solution(n, lost, reserve) {
  let arr = Array(n).fill(1);
  for (let l of lost) arr[l - 1]--;
  for (let r of reserve) arr[r - 1]++;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      if (arr[i - 1] > 1) {
        arr[i - 1]--;
        arr[i]++;
      } else if (arr[i + 1] > 1) {
        arr[i + 1]--;
        arr[i]++;
      }
    }
  }
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) cnt++;
  }
  return arr.length - cnt;
}
