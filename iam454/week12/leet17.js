/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const ans = [];
  const N = digits.length;

  if (N === 0) {
    return ans;
  }

  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  function dfs(word, index) {
    if (index === N) {
      ans.push(word);
      return;
    }

    let nextDigit = map[digits[index]];

    for (let i = 0; i < nextDigit.length; i++) {
      dfs(word + nextDigit[i], index + 1);
    }
  }

  dfs("", 0);

  return ans;
};
