function solution(storey) {
  var answer = 0;
  while (storey > 0) {
    const value = storey % 10;
    if (value >= 6) {
      answer += 10 - value;
      storey = Math.ceil(storey / 10);
    } else if (value <= 4) {
      answer += value;
      storey = Math.floor(storey / 10);
    } else {
      storey = Math.floor(storey / 10);
      if (storey % 10 >= 5) {
        storey++;
      }
      answer += 5;
    }
  }
  return answer;
}
