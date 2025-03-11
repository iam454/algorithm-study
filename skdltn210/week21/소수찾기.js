function isPrime(number) {
  if (number === 0) return false;
  if (number === 1) return false;
  if (number === 2) return true;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
  let prime = [];
  let nums = numbers.split("");
  let arr = [];
  let visited = Array(nums.length).fill(false);
  const dfs = (idx, arr) => {
    let n = Number(arr.join(""));
    if (!prime.includes(n) && isPrime(n)) prime.push(n);
    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      arr.push(nums[i]);
      dfs(i, arr);
      visited[i] = false;
      arr.pop();
    }
  };
  for (let i = 0; i < nums.length; i++) {
    visited[i] = true;
    arr.push(nums[i]);
    dfs(i, arr);
    visited[i] = false;
    arr.pop(nums[i]);
  }
  return prime.length;
}
