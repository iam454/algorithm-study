/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
  let ans = "";
  const iter = spaces[Symbol.iterator]();
  let value = iter.next().value;

  for (let i = 0; i < s.length; i++) {
    if (i === value) {
      ans += " ";
      value = iter.next().value;
    }
    ans += s[i];
  }

  return ans;
};
