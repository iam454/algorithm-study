function solution(arr) {
  if (arr.length === 0) return [];
  let ans = [arr[0]];
  let num = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== num) {
      ans.push(arr[i]);
      num = arr[i];
    }
  }
  return ans;
}
