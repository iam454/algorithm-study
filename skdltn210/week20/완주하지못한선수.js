function solution(participant, completion) {
  let map = new Map();
  for (let c of completion) {
    if (map.has(c)) map.set(c, map.get(c) + 1);
    else map.set(c, 1);
  }
  for (let p of participant) {
    if (map.get(p) === 0 || !map.has(p)) return p;
    else map.set(p, map.get(p) - 1);
  }
}
