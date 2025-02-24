/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "]") {
      let rep = "";
      while (stack.length && stack[stack.length - 1] !== "[") {
        rep = stack.pop() + rep;
      }
      stack.pop();

      let k = "";
      while (stack.length && !isNaN(stack[stack.length - 1])) {
        k = stack.pop() + k;
      }

      stack.push(rep.repeat(Number(k)));
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
};
