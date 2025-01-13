function solution(storey) {
  let answer = 0;

  while (storey) {
    const curDigit = storey % 10;
    storey = Math.floor(storey / 10);

    if (curDigit < 5) {
      answer += curDigit;
    } else if (curDigit === 5) {
      if (storey % 10 >= 5) {
        storey += 1;
      }
      answer += curDigit;
    } else {
      answer += 10 - curDigit;
      storey += 1;
    }
  }

  return answer;
}
