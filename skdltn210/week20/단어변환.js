function solution(begin, target, words) {
  const canChange = (word1, word2) => {
    const w1 = word1.split("");
    const w2 = word2.split("");
    let cnt = 0;
    for (let i = 0; i < w1.length; i++) {
      if (w1[i] !== w2[i]) cnt++;
      if (cnt >= 2) return false;
    }
    return true;
  };
  let ans = 0;
  let visited = Array(words.length).fill(false);
  const bfs = () => {
    let queue = [begin];
    while (queue.length > 0) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let curr = queue.shift();
        if (curr === target) return ans;
        for (let j = 0; j < words.length; j++) {
          if (visited[j]) continue;
          if (canChange(curr, words[j])) {
            if (words[j] === target) return ans + 1;
            visited[j] = true;
            queue.push(words[j]);
          }
        }
      }
      ans++;
    }
    return 0;
  };
  return bfs();
}
