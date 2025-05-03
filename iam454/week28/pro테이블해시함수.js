function solution(data, col, row_begin, row_end) {
  data.sort((a, b) => {
    const keyA = a[0];
    const colA = a[col - 1];
    const keyB = b[0];
    const colB = b[col - 1];

    if (colA === colB) {
      return keyB - keyA;
    }
    return colA - colB;
  });
  const S_is = new Array(row_end - row_begin + 1).fill(0);

  for (let i = row_begin - 1; i <= row_end - 1; i++) {
    let tmp = 0;
    for (let d of data[i]) {
      tmp += d % (i + 1);
    }
    S_is[i - 1] = tmp;
  }

  let answer = 0;
  for (const S_i of S_is) {
    answer ^= S_i;
  }

  return answer;
}
