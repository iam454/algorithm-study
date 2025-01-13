/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === "") return [];
  const num = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let ans = [];
  function recur(letter, next) {
    if (next.length === 0) {
      ans.push(letter);
      return;
    }
    let current = next[0];
    let letters = num[current];

    for (let i = 0; i < letters.length; i++) {
      recur(letter + letters[i], next.slice(1));
    }
  }
  recur("", digits.split(""));
  return ans;
};
