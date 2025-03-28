function solution(clothes) {
  let map = new Map();
  for (let c of clothes) {
    if (map.has(c[1])) map.set(c[1], map.get(c[1]) + 1);
    else map.set(c[1], 1);
  }
  let arr = [...map.values()];
  let ans = 1;
  for (let i = 0; i < arr.length; i++) {
    ans *= arr[i] + 1;
  }
  return ans - 1;
}
