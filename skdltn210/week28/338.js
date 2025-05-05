/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let ans = [];
  for (let i = 0; i <= n; i++) {
    bi = i.toString(2).split("");
    let cnt = 0;
    for (let i = 0; i < bi.length; i++) {
      if (bi[i] === "1") cnt++;
    }
    ans.push(cnt);
  }
  return ans;
};
