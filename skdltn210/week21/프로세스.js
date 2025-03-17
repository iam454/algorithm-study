function solution(priorities, location) {
  let arr = [];
  let ans = 1;
  for (let i = 0; i < priorities.length; i++) {
    arr.push([i, priorities[i]]);
  }
  priorities.sort((a, b) => b - a);
  while (arr.length > 0) {
    if (priorities[0] === arr[0][1] && arr[0][0] === location) return ans;
    else if (priorities[0] === arr[0][1]) {
      arr.shift();
      priorities.shift();
      ans++;
    } else {
      arr.push(arr.shift());
    }
  }
}
