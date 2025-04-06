const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [N, ...nums] = input;

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  delete() {
    if (this.heap.length === 0) {
      return 0;
    }

    const min = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.bubbleDown();

    return min[1];
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    const el = this.heap[idx];

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parentEl = this.heap[parentIdx];

      if (
        el[0] > parentEl[0] ||
        (el[0] === parentEl[0] && el[1] > parentEl[1])
      ) {
        break;
      }

      this.heap[parentIdx] = el;
      this.heap[idx] = parentEl;
      idx = parentIdx;
    }
  }

  bubbleDown() {
    let idx = 0;
    const el = this.heap[idx];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swapIdx = null;

      if (leftChildIdx < this.heap.length) {
        leftChild = this.heap[leftChildIdx];
        if (
          leftChild[0] < el[0] ||
          (leftChild[0] === el[0] && leftChild[1] < el[1])
        ) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < this.heap.length) {
        rightChild = this.heap[rightChildIdx];
        if (swapIdx === null) {
          if (
            rightChild[0] < el[0] ||
            (rightChild[0] === el[0] && rightChild[1] < el[1])
          ) {
            swapIdx = rightChildIdx;
          }
        } else {
          if (
            rightChild[0] < leftChild[0] ||
            (rightChild[0] === leftChild[0] && rightChild[1] < leftChild[1])
          ) {
            swapIdx = rightChildIdx;
          }
        }
      }

      if (swapIdx === null) {
        break;
      }

      this.heap[idx] = this.heap[swapIdx];
      this.heap[swapIdx] = el;
      idx = swapIdx;
    }
  }
}

const pq = new MinHeap();
let answer = [];

for (const num of nums) {
  if (num === 0) {
    answer.push(pq.delete());
  } else {
    pq.insert([Math.abs(num), num]);
  }
}

console.log(answer.join("\n"));
