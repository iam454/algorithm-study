function solution(citations) {
  citations.sort((a, b) => b - a);
  console.log(citations);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] === citations[i + 1]) continue;
    if (citations[i] <= i + 1) return citations[i];
  }
}
