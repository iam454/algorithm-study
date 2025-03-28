const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, K] = input.shift().split(" ").map(Number);
const beers = input.map((item) => item.split(" ").map(Number));

let ans = -1;

beers.sort((a, b) => b[0] - a[0]);
let l = 1;
let r = Math.max(...beers.map((beer) => beer[1]));

while (l <= r) {
  let mid = Math.floor((l + r) / 2);
  let beerCnt = 0;
  let prefSum = 0;

  for (const [pref, abv] of beers) {
    if (mid >= abv) {
      prefSum += pref;
      beerCnt += 1;
    }
    if (beerCnt === N) {
      break;
    }
  }

  if (beerCnt < N) {
    l = mid + 1;
    continue;
  }

  if (prefSum >= M) {
    ans = mid;
    r = mid - 1;
  } else {
    l = mid + 1;
  }
}

console.log(ans);
