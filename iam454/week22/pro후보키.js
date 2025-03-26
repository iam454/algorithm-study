function solution(relation) {
  const rowLen = relation.length;
  const colLen = relation[0].length;
  const colIndexes = new Array(colLen).fill(0).map((item, index) => index);
  const answer = [];

  function getAllCombs(arr, n) {
    const result = [];

    function helper(temp, start) {
      if (temp.length === n) {
        result.push([...temp]);
        return;
      }

      for (let i = start; i < arr.length; i++) {
        temp.push(arr[i]);
        helper(temp, i + 1);
        temp.pop();
      }
    }

    helper([], 0);

    return result;
  }

  for (let i = 1; i <= colLen; i++) {
    const combs = getAllCombs(colIndexes, i);

    combs.forEach((comb) => {
      const set = new Set();
      relation.forEach((row) => {
        set.add(comb.map((c) => row[c]).join(","));
      });

      if (set.size === rowLen) {
        const isMinimal = answer.every(
          (key) => !key.every((item) => comb.includes(item))
        );
        if (isMinimal) {
          answer.push(comb);
        }
      }
    });
  }

  return answer.length;
}
