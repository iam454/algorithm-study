/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const ans = [];
  for (let i = 0; i <= n; i++) {
    ans[i] = [...i.toString(2)].filter((item) => item === "1").length;
  }
  return ans;
};
