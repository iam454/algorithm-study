const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

let cnt = 0;
let ans = null;

function heapify(A, i, n) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let smallest = i;
  if (left < n && A[left] < A[smallest]) {
    smallest = left;
  }
  if (right < n && A[right] < A[smallest]) {
    smallest = right;
  }
  if (smallest !== i) {
    swap(A, i, smallest);
    heapify(A, smallest, n);
  }
}

function buildMinHeap(A, n) {
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(A, i, n);
  }
}

function heapSort(A, n) {
  buildMinHeap(A, n);
  for (let i = n - 1; i > 0; i--) {
    swap(A, 0, i);
    heapify(A, 0, i);
  }
}

function swap(A, i, j) {
  cnt += 1;
  if (cnt === K) {
    ans = [A[i], A[j]].sort((a, b) => a - b);
  }
  [A[i], A[j]] = [A[j], A[i]];
}

heapSort(A, N);

if (ans) {
  console.log(ans.join(" "));
} else {
  console.log(-1);
}
