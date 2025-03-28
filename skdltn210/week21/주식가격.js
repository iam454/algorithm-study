function solution(prices) {
  let arr = Array(prices.length - 1).fill(1);
  arr.push(0);
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length - 1; j++) {
      if (prices[i] <= prices[j]) arr[i]++;
      else break;
    }
  }
  return arr;
}
