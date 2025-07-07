function solution(numbers) {
  const N = numbers.length;
  const answer = new Array(N).fill(-1);
  const st = [];

  for (let i = 0; i < N; i++) {
    while (st.length && numbers[st.at(-1)] < numbers[i]) {
      const index = st.pop();
      answer[index] = numbers[i];
    }
    st.push(i);
  }

  return answer;
}
