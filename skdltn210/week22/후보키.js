function solution(relation) {
  let ans = [];

  const isUnique = (indices) => {
    const set = new Set();
    for (let i = 0; i < relation.length; i++) {
      let tuple = indices.map((idx) => relation[i][idx]).join(",");
      if (set.has(tuple)) return false;
      set.add(tuple);
    }
    return true;
  };

  const isMinimal = (arr) => {
    for (let a of ans) {
      if (a.every((idx) => arr.includes(idx))) {
        return false;
      }
    }
    return true;
  };

  const combinations = [];

  for (let size = 1; size <= relation[0].length; size++) {
    const findCombinations = (idx, current) => {
      if (current.length === size) {
        combinations.push([...current]);
        return;
      }

      for (let i = idx; i < relation[0].length; i++) {
        current.push(i);
        findCombinations(i + 1, current);
        current.pop();
      }
    };

    findCombinations(0, []);
  }

  for (const combo of combinations) {
    if (isUnique(combo) && isMinimal(combo)) {
      ans.push(combo);
    }
  }

  return ans.length;
}
