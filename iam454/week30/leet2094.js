/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
  function getAllPermutations(arr) {
    const set = new Set();
    const visited = new Array(arr.length).fill(0);

    function helper(path) {
      if (path.length === 3) {
        if (path[0] === 0) {
          return;
        }
        if (path[2] % 2 === 1) {
          return;
        }
        set.add(Number([...path].join("")));
        return;
      }
      for (let i = 0; i < arr.length; i++) {
        if (visited[i] === 1) {
          continue;
        }
        visited[i] = 1;
        path.push(arr[i]);
        helper(path);
        path.pop();
        visited[i] = 0;
      }
    }

    helper([], 0);

    return set;
  }

  const permutations = getAllPermutations(digits);

  return [...permutations].sort((a, b) => a - b);
};
