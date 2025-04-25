function solution(n, q, ans) {
  function getAllCombs(nums, cnt) {
    const result = [];

    function helper(start, arr) {
      if (arr.length === cnt) {
        result.push([...arr]);
        return;
      }

      for (let i = start; i < nums.length; i++) {
        arr.push(nums[i]);
        helper(i + 1, arr);
        arr.pop();
      }
    }

    helper(0, []);

    return result;
  }

  const nums = new Array(n).fill(0).map((item, index) => index + 1);
  const combs = getAllCombs(nums, 5);

  let answer = 0;

  for (const comb of combs) {
    let isValid = true;

    for (let i = 0; i < q.length; i++) {
      const curQs = q[i];
      const curA = ans[i];

      let counter = 0;
      const set = new Set(comb);
      for (const curQ of curQs) {
        if (set.has(curQ)) {
          counter += 1;
        }
      }
      if (counter !== curA) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      answer += 1;
    }
  }

  return answer;
}
