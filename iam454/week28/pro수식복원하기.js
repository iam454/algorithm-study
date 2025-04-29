function solution(expressions) {
  const possibleBases = new Set();
  let minBase = 2;

  for (const exp of expressions) {
    const [A, op, B, eq, C] = exp.split(" ");

    for (let i = 0; i < A.length; i++) {
      minBase = Math.max(minBase, Number(A[i]) + 1);
    }
    for (let i = 0; i < B.length; i++) {
      minBase = Math.max(minBase, Number(B[i]) + 1);
    }

    if (C === "X") {
      continue;
    }

    for (let i = 0; i < C.length; i++) {
      minBase = Math.max(minBase, Number(C[i]) + 1);
    }
  }

  for (let base = minBase; base <= 9; base++) {
    let isValid = true;
    for (const exp of expressions) {
      const [A, op, B, eq, C] = exp.split(" ");

      if (C === "X") {
        continue;
      }

      const a = parseInt(A, base);
      const b = parseInt(B, base);
      const c = parseInt(C, base);
      let res;

      if (op === "+") {
        res = a + b;
      } else {
        res = a - b;
      }

      if (res !== c) {
        isValid = false;
      }
    }
    if (isValid) {
      possibleBases.add(base);
    }
  }

  const answer = [];

  for (const exp of expressions) {
    const [A, op, B, eq, C] = exp.split(" ");

    if (C !== "X") {
      continue;
    }

    const result = new Set();

    for (const base of possibleBases) {
      const a = parseInt(A, base);
      const b = parseInt(B, base);
      let res;

      if (op === "+") {
        res = a + b;
      } else {
        res = a - b;
      }

      result.add(res.toString(base));
    }

    if (result.size === 1) {
      const ans = [...result][0];
      answer.push(`${A} ${op} ${B} = ${ans}`);
    } else {
      answer.push(`${A} ${op} ${B} = ?`);
    }
  }

  return answer;
}
