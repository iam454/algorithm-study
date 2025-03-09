function solution(nums) {
  let pick = Math.floor(nums.length / 2);
  let map = new Map();
  for (let num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  if (pick < map.size) return pick;
  else return map.size;
}
